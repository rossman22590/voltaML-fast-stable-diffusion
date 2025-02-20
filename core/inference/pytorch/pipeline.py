# HuggingFace example pipeline taken from https://github.com/huggingface/diffusers/blob/main/examples/community/lpw_stable_diffusion.py

from contextlib import ExitStack
from typing import Any, Callable, List, Literal, Optional, Union

import PIL
import torch
from diffusers import LMSDiscreteScheduler, SchedulerMixin, StableDiffusionPipeline
from diffusers.models import AutoencoderKL, ControlNetModel, UNet2DConditionModel
from diffusers.pipelines.stable_diffusion import StableDiffusionPipelineOutput
from diffusers.utils import logging
from tqdm import tqdm
from transformers.models.clip import CLIPTextModel, CLIPTokenizer

from core.inference.utilities import (
    full_vae,
    get_timesteps,
    get_weighted_text_embeddings,
    numpy_to_pil,
    pad_tensor,
    prepare_extra_step_kwargs,
    prepare_image,
    prepare_latents,
    prepare_mask_and_masked_image,
    prepare_mask_latents,
    preprocess_image,
)
from core.inference.utilities.philox import PhiloxGenerator
from core.optimizations import inference_context
from core.scheduling import KdiffusionSchedulerAdapter

from .sag import CrossAttnStoreProcessor, pred_epsilon, pred_x0, sag_masking

# ------------------------------------------------------------------------------

logger = logging.get_logger(__name__)


class StableDiffusionLongPromptWeightingPipeline(StableDiffusionPipeline):
    r"""
    Pipeline for text-to-image generation using Stable Diffusion without tokens length limit, and support parsing
    weighting in prompt.

    This model inherits from [`DiffusionPipeline`]. Check the superclass documentation for the generic methods the
    library implements for all the pipelines (such as downloading or saving, running on a particular device, etc.)

    Args:
        vae ([`AutoencoderKL`]):
            Variational Auto-Encoder (VAE) Model to encode and decode images to and from latent representations.
        text_encoder ([`CLIPTextModel`]):
            Frozen text-encoder. Stable Diffusion uses the text portion of
            [CLIP](https://huggingface.co/docs/transformers/model_doc/clip#transformers.CLIPTextModel), specifically
            the [clip-vit-large-patch14](https://huggingface.co/openai/clip-vit-large-patch14) variant.
        tokenizer (`CLIPTokenizer`):
            Tokenizer of class
            [CLIPTokenizer](https://huggingface.co/docs/transformers/v4.21.0/en/model_doc/clip#transformers.CLIPTokenizer).
        unet ([`UNet2DConditionModel`]): Conditional U-Net architecture to denoise the encoded image latents.
        scheduler ([`SchedulerMixin`]):
            A scheduler to be used in combination with `unet` to denoise the encoded image latents. Can be one of
            [`DDIMScheduler`], [`LMSDiscreteScheduler`], or [`PNDMScheduler`].
        safety_checker ([`StableDiffusionSafetyChecker`]):
            Classification module that estimates whether generated images could be considered offensive or harmful.
            Please, refer to the [model card](https://huggingface.co/CompVis/stable-diffusion-v1-4) for details.
        feature_extractor ([`CLIPFeatureExtractor`]):
            Model that extracts features from generated images to be used as inputs for the `safety_checker`.
    """

    def __init__(
        self,
        vae: AutoencoderKL,
        text_encoder: CLIPTextModel,
        tokenizer: CLIPTokenizer,
        unet: UNet2DConditionModel,
        scheduler: SchedulerMixin,
        safety_checker: Any = None,
        feature_extractor: Any = None,
        requires_safety_checker: bool = False,
        controlnet: Optional[ControlNetModel] = None,
    ):
        super().__init__(
            vae=vae,
            text_encoder=text_encoder,
            tokenizer=tokenizer,
            unet=unet,
            scheduler=scheduler,  # type: ignore
            safety_checker=None,  # type: ignore
            feature_extractor=None,  # type: ignore
            requires_safety_checker=False,
        )
        self.__init__additional__()

        self.parent: Any
        self.vae: AutoencoderKL
        self.text_encoder: CLIPTextModel
        self.tokenizer: CLIPTokenizer
        self.unet: UNet2DConditionModel
        self.scheduler: LMSDiscreteScheduler
        self.controlnet: Optional[ControlNetModel] = controlnet

    def __init__additional__(self):
        if not hasattr(self, "vae_scale_factor"):
            setattr(
                self,
                "vae_scale_factor",
                2 ** (len(self.vae.config.block_out_channels) - 1),  # type: ignore
            )

    @property
    def _execution_device(self):
        r"""
        Returns the device on which the pipeline's models will be executed. After calling
        `pipeline.enable_sequential_cpu_offload()` the execution device can only be inferred from Accelerate's module
        hooks.
        """
        if self.device != torch.device("meta") or not hasattr(self.unet, "_hf_hook"):  # type: ignore
            return self.device
        for module in self.unet.modules():  # type: ignore
            if (
                hasattr(module, "_hf_hook")
                and hasattr(
                    module._hf_hook,
                    "execution_device",
                )
                and module._hf_hook.execution_device is not None  # type: ignore
            ):
                return torch.device(module._hf_hook.execution_device)  # type: ignore
        return self.device

    def _encode_prompt(
        self,
        prompt,
        dtype,
        num_images_per_prompt,
        do_classifier_free_guidance,
        negative_prompt,
        max_embeddings_multiples,
    ):
        r"""
        Encodes the prompt into text encoder hidden states.

        Args:
            prompt (`str` or `list(int)`):
                prompt to be encoded
            device: (`torch.device`):
                torch device
            num_images_per_prompt (`int`):
                number of images that should be generated per prompt
            do_classifier_free_guidance (`bool`):
                whether to use classifier free guidance or not
            negative_prompt (`str` or `List[str]`):
                The prompt or prompts not to guide the image generation. Ignored when not using guidance (i.e., ignored
                if `guidance_scale` is less than `1`).
            max_embeddings_multiples (`int`, *optional*, defaults to `3`):
                The max multiple length of prompt embeddings compared to the max output length of text encoder.
        """
        batch_size = len(prompt) if isinstance(prompt, list) else 1

        prompt = self.maybe_convert_prompt(prompt, self.tokenizer)
        logger.debug(f"Post textual prompt: {prompt}")

        negative_prompt = self.maybe_convert_prompt(negative_prompt, self.tokenizer)
        logger.debug(f"Post textual negative_prompt: {negative_prompt}")

        if negative_prompt is None:
            negative_prompt = [""] * batch_size
        elif isinstance(negative_prompt, str):
            negative_prompt = [negative_prompt] * batch_size
        if batch_size != len(negative_prompt):
            raise ValueError(
                f"`negative_prompt`: {negative_prompt} has batch size {len(negative_prompt)}, but `prompt`:"
                f" {prompt} has batch size {batch_size}. Please make sure that passed `negative_prompt` matches"
                " the batch size of `prompt`."
            )

        text_embeddings, uncond_embeddings = get_weighted_text_embeddings(
            pipe=self.parent,
            prompt=prompt,
            uncond_prompt=negative_prompt if do_classifier_free_guidance else None,
            max_embeddings_multiples=max_embeddings_multiples,
        )
        bs_embed, seq_len, _ = text_embeddings.shape
        text_embeddings = text_embeddings.repeat(1, num_images_per_prompt, 1)
        text_embeddings = text_embeddings.view(
            bs_embed * num_images_per_prompt, seq_len, -1
        )

        if do_classifier_free_guidance:
            bs_embed, seq_len, _ = uncond_embeddings.shape  # type: ignore
            uncond_embeddings = uncond_embeddings.repeat(1, num_images_per_prompt, 1)  # type: ignore
            uncond_embeddings = uncond_embeddings.view(
                bs_embed * num_images_per_prompt, seq_len, -1
            )
            text_embeddings = torch.cat([uncond_embeddings, text_embeddings])

        return text_embeddings.to(dtype=dtype)

    def _check_inputs(self, prompt, strength, callback_steps):
        if not isinstance(prompt, str) and not isinstance(prompt, list):
            raise ValueError(
                f"`prompt` has to be of type `str` or `list` but is {type(prompt)}"
            )

        if strength < 0 or strength > 1:
            raise ValueError(
                f"The value of strength should in [0.0, 1.0] but is {strength}"
            )

        if (callback_steps is None) or (
            callback_steps is not None
            and (not isinstance(callback_steps, int) or callback_steps <= 0)
        ):
            raise ValueError(
                f"`callback_steps` has to be a positive integer but is {callback_steps} of type"
                f" {type(callback_steps)}."
            )

    def _decode_latents(self, latents, height, width):
        latents = 1 / 0.18215 * latents
        image = self.vae.decode(latents).sample  # type: ignore
        image = (image / 2 + 0.5).clamp(0, 1)
        # we always cast to float32 as this does not cause significant overhead and is compatible with bfloat16
        image = image.cpu().permute(0, 2, 3, 1).float().numpy()
        img = image[:, :height, :width, :]
        return img

    @torch.no_grad()
    def __call__(
        self,
        prompt: Union[str, List[str]],
        generator: Union[PhiloxGenerator, torch.Generator],
        negative_prompt: Optional[Union[str, List[str]]] = None,
        image: Union[torch.FloatTensor, PIL.Image.Image] = None,  # type: ignore
        mask_image: Union[torch.FloatTensor, PIL.Image.Image] = None,  # type: ignore
        height: int = 512,
        width: int = 512,
        controlnet_conditioning_scale: Optional[float] = 1.0,
        guess_mode: Optional[bool] = False,
        num_inference_steps: int = 50,
        guidance_scale: float = 7.5,
        self_attention_scale: float = 0.0,
        strength: float = 0.8,
        num_images_per_prompt: Optional[int] = 1,
        eta: float = 0.0,
        latents: Optional[torch.FloatTensor] = None,
        max_embeddings_multiples: Optional[int] = 100,
        output_type: Literal["pil", "latent"] = "pil",
        return_dict: bool = True,
        callback: Optional[Callable[[int, int, torch.FloatTensor], None]] = None,
        is_cancelled_callback: Optional[Callable[[], bool]] = None,
        callback_steps: int = 1,
    ):
        r"""
        Function invoked when calling the pipeline for generation.

        Args:
            prompt (`str` or `List[str]`):
                The prompt or prompts to guide the image generation.
            negative_prompt (`str` or `List[str]`, *optional*):
                The prompt or prompts not to guide the image generation. Ignored when not using guidance (i.e., ignored
                if `guidance_scale` is less than `1`).
            image (`torch.FloatTensor` or `PIL.Image.Image`):
                `Image`, or tensor representing an image batch, that will be used as the starting point for the
                process.
            mask_image (`torch.FloatTensor` or `PIL.Image.Image`):
                `Image`, or tensor representing an image batch, to mask `image`. White pixels in the mask will be
                replaced by noise and therefore repainted, while black pixels will be preserved. If `mask_image` is a
                PIL image, it will be converted to a single channel (luminance) before use. If it's a tensor, it should
                contain one color channel (L) instead of 3, so the expected shape would be `(B, H, W, 1)`.
            height (`int`, *optional*, defaults to 512):
                The height in pixels of the generated image.
            width (`int`, *optional*, defaults to 512):
                The width in pixels of the generated image.
            num_inference_steps (`int`, *optional*, defaults to 50):
                The number of denoising steps. More denoising steps usually lead to a higher quality image at the
                expense of slower inference.
            guidance_scale (`float`, *optional*, defaults to 7.5):
                Guidance scale as defined in [Classifier-Free Diffusion Guidance](https://arxiv.org/abs/2207.12598).
                `guidance_scale` is defined as `w` of equation 2. of [Imagen
                Paper](https://arxiv.org/pdf/2205.11487.pdf). Guidance scale is enabled by setting `guidance_scale >
                1`. Higher guidance scale encourages to generate images that are closely linked to the text `prompt`,
                usually at the expense of lower image quality.
            strength (`float`, *optional*, defaults to 0.8):
                Conceptually, indicates how much to transform the reference `image`. Must be between 0 and 1.
                `image` will be used as a starting point, adding more noise to it the larger the `strength`. The
                number of denoising steps depends on the amount of noise initially added. When `strength` is 1, added
                noise will be maximum and the denoising process will run for the full number of iterations specified in
                `num_inference_steps`. A value of 1, therefore, essentially ignores `image`.
            num_images_per_prompt (`int`, *optional*, defaults to 1):
                The number of images to generate per prompt.
            eta (`float`, *optional*, defaults to 0.0):
                Corresponds to parameter eta (η) in the DDIM paper: https://arxiv.org/abs/2010.02502. Only applies to
                [`schedulers.DDIMScheduler`], will be ignored for others.
            generator (`torch.Generator`, *optional*):
                A [torch generator](https://pytorch.org/docs/stable/generated/torch.Generator.html) to make generation
                deterministic.
            latents (`torch.FloatTensor`, *optional*):
                Pre-generated noisy latents, sampled from a Gaussian distribution, to be used as inputs for image
                generation. Can be used to tweak the same generation with different prompts. If not provided, a latents
                tensor will ge generated by sampling using the supplied random `generator`.
            max_embeddings_multiples (`int`, *optional*, defaults to `100`):
                The max multiple length of prompt embeddings compared to the max output length of text encoder.
            output_type (`str`, *optional*, defaults to `"pil"`):
                The output format of the generate image. Choose between
                [PIL](https://pillow.readthedocs.io/en/stable/): `PIL.Image.Image` or `np.array`.
            return_dict (`bool`, *optional*, defaults to `True`):
                Whether or not to return a [`~pipelines.stable_diffusion.StableDiffusionPipelineOutput`] instead of a
                plain tuple.
            callback (`Callable`, *optional*):
                A function that will be called every `callback_steps` steps during inference. The function will be
                called with the following arguments: `callback(step: int, timestep: int, latents: torch.FloatTensor)`.
            is_cancelled_callback (`Callable`, *optional*):
                A function that will be called every `callback_steps` steps during inference. If the function returns
                `True`, the inference will be cancelled.
            callback_steps (`int`, *optional*, defaults to 1):
                The frequency at which the `callback` function will be called. If not specified, the callback will be
                called at every step.

        Returns:
            `None` if cancelled by `is_cancelled_callback`,
            [`~pipelines.stable_diffusion.StableDiffusionPipelineOutput`] or `tuple`:
            [`~pipelines.stable_diffusion.StableDiffusionPipelineOutput`] if `return_dict` is True, otherwise a `tuple.
            When returning a tuple, the first element is a list with the generated images, and the second element is a
            list of `bool`s denoting whether the corresponding generated image likely represents "not-safe-for-work"
            (nsfw) content, according to the `safety_checker`.
        """

        with inference_context(self.unet, self.vae, height, width) as inf:
            # 0. Modify unet and vae to the (optionally) modified versions from inf
            self.unet = inf.unet  # type: ignore
            self.vae = inf.vae  # type: ignore

            # 1. Check inputs. Raise error if not correct
            self._check_inputs(prompt, strength, callback_steps)
            if self.controlnet is not None:
                global_pool_conditions = self.controlnet.config.global_pool_conditions  # type: ignore
                guess_mode = guess_mode or global_pool_conditions

            num_channels_unet = self.unet.config.in_channels  # type: ignore

            # 2. Define call parameters
            batch_size = 1 if isinstance(prompt, str) else len(prompt)
            device = self._execution_device
            # here `guidance_scale` is defined analog to the guidance weight `w` of equation (2)
            # of the Imagen paper: https://arxiv.org/pdf/2205.11487.pdf . `guidance_scale = 1`
            # corresponds to doing no classifier free guidance.
            do_classifier_free_guidance = guidance_scale > 1.0

            do_self_attention_guidance = self_attention_scale > 0.0

            # 3. Encode input prompt
            text_embeddings = self._encode_prompt(
                prompt,
                self.unet.dtype,
                num_images_per_prompt,
                do_classifier_free_guidance,
                negative_prompt,
                max_embeddings_multiples,
            ).to(device)
            dtype = text_embeddings.dtype

            # 4. Preprocess image and mask
            if isinstance(image, PIL.Image.Image):  # type: ignore
                width, height = image.size  # type: ignore
                if self.controlnet is None:
                    image = preprocess_image(image)
                else:
                    image = prepare_image(
                        image,
                        width,
                        height,
                        batch_size,
                        num_images_per_prompt,
                        device,
                        dtype,
                    )
            if image is not None:
                image = image.to(device=self.device, dtype=dtype)
            if mask_image is not None:
                mask, masked_image, _ = prepare_mask_and_masked_image(
                    image, mask_image, height, width
                )
                mask, masked_image_latents = prepare_mask_latents(
                    mask,
                    masked_image,
                    batch_size * num_images_per_prompt,  # type: ignore
                    height,
                    width,
                    dtype,
                    device,
                    do_classifier_free_guidance,
                    self.vae,
                    self.vae_scale_factor,
                    self.vae.config.scaling_factor,  # type: ignore
                    generator=generator,
                )
            else:
                mask = None

            # 5. set timesteps
            self.scheduler.set_timesteps(num_inference_steps, device=device)  # type: ignore
            timesteps, num_inference_steps = get_timesteps(
                self.scheduler,
                num_inference_steps,
                strength,
                device,
                image is None or self.controlnet is not None,
            )
            if isinstance(self.scheduler, KdiffusionSchedulerAdapter):
                self.scheduler.timesteps = timesteps
                self.scheduler.steps = num_inference_steps
            latent_timestep = timesteps[:1].repeat(batch_size * num_images_per_prompt)  # type: ignore

            # 6. Prepare latent variables
            latents, image_latents, noise = prepare_latents(
                self,
                image if self.controlnet is None else None,
                latent_timestep,
                batch_size * num_images_per_prompt,  # type: ignore
                height,
                width,
                dtype,
                device,
                generator,
                latents,
                latent_channels=None if mask is None else self.vae.config.latent_channels,  # type: ignore
            )

            # 7. Prepare extra step kwargs. TODO: Logic should ideally just be moved out of the pipeline
            extra_step_kwargs = prepare_extra_step_kwargs(self.scheduler, eta, generator)  # type: ignore

            controlnet_keep = []
            if self.controlnet is not None:
                for i in range(len(timesteps)):
                    controlnet_keep.append(
                        1.0
                        - float(
                            i / len(timesteps) < 0.0 or (i + 1) / len(timesteps) > 1.0
                        )
                    )

            if do_self_attention_guidance:
                store_processor = CrossAttnStoreProcessor()
                self.unet.mid_block.attentions[0].transformer_blocks[0].attn1.processor = store_processor  # type: ignore

            map_size = None

            def get_map_size(_, __, output):
                nonlocal map_size
                map_size = output[0].shape[
                    -2:
                ]  # output.sample.shape[-2:] in older diffusers

            def do_denoise(
                x: torch.Tensor,
                t: torch.IntTensor,
                call: Callable,
            ):
                # expand the latents if we are doing classifier free guidance
                latent_model_input = (
                    torch.cat([x] * 2) if do_classifier_free_guidance else x  # type: ignore
                )
                latent_model_input = self.scheduler.scale_model_input(latent_model_input, t)  # type: ignore

                if num_channels_unet == 9:
                    latent_model_input = torch.cat([latent_model_input, mask, masked_image_latents], dim=1)  # type: ignore

                # predict the noise residual
                if self.controlnet is None:
                    noise_pred = call(  # type: ignore
                        latent_model_input,
                        t,
                        cond=text_embeddings,
                    )
                else:
                    if guess_mode and do_classifier_free_guidance:
                        # Infer ControlNet only for the conditional batch.
                        control_model_input = x
                        control_model_input = self.scheduler.scale_model_input(control_model_input, t).half()  # type: ignore
                        controlnet_prompt_embeds = text_embeddings.chunk(2)[1]
                    else:
                        control_model_input = latent_model_input
                        controlnet_prompt_embeds = text_embeddings

                    cond_scale = controlnet_conditioning_scale * controlnet_keep[i]

                    (
                        down_block_res_samples,
                        mid_block_res_sample,
                    ) = self.controlnet(
                        control_model_input,
                        t,
                        encoder_hidden_states=controlnet_prompt_embeds,
                        controlnet_cond=image,
                        conditioning_scale=cond_scale,
                        guess_mode=guess_mode,
                        return_dict=False,
                    )

                    if guess_mode and do_classifier_free_guidance:
                        # Infered ControlNet only for the conditional batch.
                        # To apply the output of ControlNet to both the unconditional and conditional batches,
                        # add 0 to the unconditional batch to keep it unchanged.
                        down_block_res_samples = [
                            torch.cat([torch.zeros_like(d), d])
                            for d in down_block_res_samples
                        ]
                        mid_block_res_sample = torch.cat(
                            [
                                torch.zeros_like(mid_block_res_sample),
                                mid_block_res_sample,
                            ]
                        )
                    noise_pred = call(  # type: ignore
                        latent_model_input,
                        t,
                        cond=text_embeddings,
                        down_block_additional_residuals=down_block_res_samples,
                        mid_block_additional_residual=mid_block_res_sample,
                    )

                # perform guidance
                if do_classifier_free_guidance:
                    noise_pred_uncond, noise_pred_text = noise_pred.chunk(2)
                    noise_pred = noise_pred_uncond + guidance_scale * (
                        noise_pred_text - noise_pred_uncond
                    )

                if do_self_attention_guidance:
                    if do_classifier_free_guidance:
                        pred = pred_x0(self, x, noise_pred_uncond, t)  # type: ignore
                        uncond_attn, cond_attn = store_processor.attention_probs.chunk(2)  # type: ignore
                        degraded_latents = sag_masking(
                            self, pred, uncond_attn, map_size, t, pred_epsilon(self, x, noise_pred_uncond, t)  # type: ignore
                        )
                        uncond_emb, _ = text_embeddings.chunk(2)
                        # predict the noise residual
                        # this probably could have been done better but honestly fuck this
                        degraded_prep = call(  # type: ignore
                            degraded_latents.to(dtype=self.unet.dtype),
                            t,
                            cond=uncond_emb,
                        )
                        noise_pred += self_attention_scale * (noise_pred_uncond - degraded_prep)  # type: ignore
                    else:
                        pred = pred_x0(self, x, noise_pred, t)
                        cond_attn = store_processor.attention_probs  # type: ignore
                        degraded_latents = sag_masking(
                            self,
                            pred,
                            cond_attn,
                            map_size,
                            t,
                            pred_epsilon(self, x, noise_pred, t),
                        )
                        # predict the noise residual
                        degraded_prep = call(  # type: ignore
                            degraded_latents.to(dtype=self.unet.dtype),
                            t,
                            cond=text_embeddings,
                        )
                        noise_pred += self_attention_scale * (noise_pred - degraded_prep)  # type: ignore

                if not isinstance(self.scheduler, KdiffusionSchedulerAdapter):
                    # compute the previous noisy sample x_t -> x_t-1
                    x = self.scheduler.step(  # type: ignore
                        noise_pred, t.to(noise_pred.device), x.to(noise_pred.device), **extra_step_kwargs  # type: ignore
                    ).prev_sample  # type: ignore
                else:
                    x = noise_pred

                if mask is not None and num_channels_unet == 4:
                    # masking
                    init_latents_proper = image_latents[:1]  # type: ignore
                    init_mask = mask[:1]
                    init_mask = pad_tensor(init_mask, 8, (x.shape[2], x.shape[3]))

                    if i < len(timesteps) - 1:
                        noise_timestep = timesteps[i + 1]
                        init_latents_proper = self.scheduler.add_noise(
                            init_latents_proper, noise, torch.tensor([noise_timestep])  # type: ignore
                        )

                    x = (1 - init_mask) * init_latents_proper + init_mask * x  # type: ignore
                return x

            # 8. Denoising loop
            with ExitStack() as gs:
                if do_self_attention_guidance:
                    gs.enter_context(self.unet.mid_block.attentions[0].register_forward_hook(get_map_size))  # type: ignore

                if isinstance(self.scheduler, KdiffusionSchedulerAdapter):
                    latents = self.scheduler.do_inference(
                        latents,  # type: ignore
                        generator=generator,
                        call=self.unet,  # type: ignore
                        apply_model=do_denoise,
                        callback=callback,
                        callback_steps=callback_steps,
                    )
                else:

                    def _call(*args, **kwargs):
                        if len(args) == 3:
                            encoder_hidden_states = args[-1]
                            args = args[:2]
                        if kwargs.get("cond", None) is not None:
                            encoder_hidden_states = kwargs.pop("cond")
                        return self.unet(
                            *args,
                            encoder_hidden_states=encoder_hidden_states,  # type: ignore
                            return_dict=True,
                            **kwargs,
                        )[0]

                    for i, t in enumerate(tqdm(timesteps, desc="PyTorch")):
                        latents = do_denoise(latents, t, _call)  # type: ignore

                        # call the callback, if provided
                        if i % callback_steps == 0:
                            if callback is not None:
                                callback(i, t, latents)  # type: ignore
                            if (
                                is_cancelled_callback is not None
                                and is_cancelled_callback()
                            ):
                                return None

            # 9. Post-processing
            if output_type == "latent":
                return latents, False

            image = full_vae(latents, overwrite=lambda sample: self.vae.decode(sample).sample, height=height, width=width)  # type: ignore

            # 11. Convert to PIL
            if output_type == "pil":
                image = numpy_to_pil(image)

            if hasattr(self, "final_offload_hook"):
                self.final_offload_hook.offload()  # type: ignore

            if not return_dict:
                return image, False

            return StableDiffusionPipelineOutput(
                images=image, nsfw_content_detected=False  # type: ignore
            )

    def text2img(
        self,
        prompt: Union[str, List[str]],
        generator: Union[PhiloxGenerator, torch.Generator],
        negative_prompt: Optional[Union[str, List[str]]] = None,
        height: int = 512,
        width: int = 512,
        num_inference_steps: int = 50,
        guidance_scale: float = 7.5,
        self_attention_scale: float = 0.0,
        num_images_per_prompt: Optional[int] = 1,
        eta: float = 0.0,
        latents: Optional[torch.FloatTensor] = None,
        max_embeddings_multiples: Optional[int] = 100,
        output_type: Literal["pil", "latent"] = "pil",
        return_dict: bool = True,
        callback: Optional[Callable[[int, int, torch.FloatTensor], None]] = None,
        is_cancelled_callback: Optional[Callable[[], bool]] = None,
        callback_steps: int = 1,
    ):
        r"""
        Function for text-to-image generation.
        Args:
            prompt (`str` or `List[str]`):
                The prompt or prompts to guide the image generation.
            negative_prompt (`str` or `List[str]`, *optional*):
                The prompt or prompts not to guide the image generation. Ignored when not using guidance (i.e., ignored
                if `guidance_scale` is less than `1`).
            height (`int`, *optional*, defaults to 512):
                The height in pixels of the generated image.
            width (`int`, *optional*, defaults to 512):
                The width in pixels of the generated image.
            num_inference_steps (`int`, *optional*, defaults to 50):
                The number of denoising steps. More denoising steps usually lead to a higher quality image at the
                expense of slower inference.
            guidance_scale (`float`, *optional*, defaults to 7.5):
                Guidance scale as defined in [Classifier-Free Diffusion Guidance](https://arxiv.org/abs/2207.12598).
                `guidance_scale` is defined as `w` of equation 2. of [Imagen
                Paper](https://arxiv.org/pdf/2205.11487.pdf). Guidance scale is enabled by setting `guidance_scale >
                1`. Higher guidance scale encourages to generate images that are closely linked to the text `prompt`,
                usually at the expense of lower image quality.
            num_images_per_prompt (`int`, *optional*, defaults to 1):
                The number of images to generate per prompt.
            eta (`float`, *optional*, defaults to 0.0):
                Corresponds to parameter eta (η) in the DDIM paper: https://arxiv.org/abs/2010.02502. Only applies to
                [`schedulers.DDIMScheduler`], will be ignored for others.
            generator (`torch.Generator`, *optional*):
                A [torch generator](https://pytorch.org/docs/stable/generated/torch.Generator.html) to make generation
                deterministic.
            latents (`torch.FloatTensor`, *optional*):
                Pre-generated noisy latents, sampled from a Gaussian distribution, to be used as inputs for image
                generation. Can be used to tweak the same generation with different prompts. If not provided, a latents
                tensor will ge generated by sampling using the supplied random `generator`.
            max_embeddings_multiples (`int`, *optional*, defaults to `100`):
                The max multiple length of prompt embeddings compared to the max output length of text encoder.
            output_type (`str`, *optional*, defaults to `"pil"`):
                The output format of the generate image. Choose between
                [PIL](https://pillow.readthedocs.io/en/stable/): `PIL.Image.Image` or `np.array`.
            return_dict (`bool`, *optional*, defaults to `True`):
                Whether or not to return a [`~pipelines.stable_diffusion.StableDiffusionPipelineOutput`] instead of a
                plain tuple.
            callback (`Callable`, *optional*):
                A function that will be called every `callback_steps` steps during inference. The function will be
                called with the following arguments: `callback(step: int, timestep: int, latents: torch.FloatTensor)`.
            is_cancelled_callback (`Callable`, *optional*):
                A function that will be called every `callback_steps` steps during inference. If the function returns
                `True`, the inference will be cancelled.
            callback_steps (`int`, *optional*, defaults to 1):
                The frequency at which the `callback` function will be called. If not specified, the callback will be
                called at every step.
        Returns:
            [`~pipelines.stable_diffusion.StableDiffusionPipelineOutput`] or `tuple`:
            [`~pipelines.stable_diffusion.StableDiffusionPipelineOutput`] if `return_dict` is True, otherwise a `tuple.
            When returning a tuple, the first element is a list with the generated images, and the second element is a
            list of `bool`s denoting whether the corresponding generated image likely represents "not-safe-for-work"
            (nsfw) content, according to the `safety_checker`.
        """
        return self(
            prompt=prompt,
            generator=generator,
            negative_prompt=negative_prompt,
            height=height,
            width=width,
            num_inference_steps=num_inference_steps,
            guidance_scale=guidance_scale,
            self_attention_scale=self_attention_scale,
            num_images_per_prompt=num_images_per_prompt,
            eta=eta,
            latents=latents,
            max_embeddings_multiples=max_embeddings_multiples,
            output_type=output_type,
            return_dict=return_dict,
            callback=callback,
            is_cancelled_callback=is_cancelled_callback,
            callback_steps=callback_steps,
        )

    def img2img(
        self,
        image: Union[torch.FloatTensor, PIL.Image.Image],  # type: ignore
        prompt: Union[str, List[str]],
        generator: Union[PhiloxGenerator, torch.Generator],
        height: int = 512,
        width: int = 512,
        negative_prompt: Optional[Union[str, List[str]]] = None,
        strength: float = 0.8,
        num_inference_steps: Optional[int] = 50,
        guidance_scale: Optional[float] = 7.5,
        self_attention_scale: float = 0.0,
        num_images_per_prompt: Optional[int] = 1,
        eta: Optional[float] = 0.0,
        max_embeddings_multiples: Optional[int] = 100,
        output_type: Literal["pil", "latent"] = "pil",
        return_dict: bool = True,
        callback: Optional[Callable[[int, int, torch.FloatTensor], None]] = None,
        is_cancelled_callback: Optional[Callable[[], bool]] = None,
        callback_steps: int = 1,
    ):
        r"""
        Function for image-to-image generation.
        Args:
            image (`torch.FloatTensor` or `PIL.Image.Image`):
                `Image`, or tensor representing an image batch, that will be used as the starting point for the
                process.
            prompt (`str` or `List[str]`):
                The prompt or prompts to guide the image generation.
            negative_prompt (`str` or `List[str]`, *optional*):
                The prompt or prompts not to guide the image generation. Ignored when not using guidance (i.e., ignored
                if `guidance_scale` is less than `1`).
            strength (`float`, *optional*, defaults to 0.8):
                Conceptually, indicates how much to transform the reference `image`. Must be between 0 and 1.
                `image` will be used as a starting point, adding more noise to it the larger the `strength`. The
                number of denoising steps depends on the amount of noise initially added. When `strength` is 1, added
                noise will be maximum and the denoising process will run for the full number of iterations specified in
                `num_inference_steps`. A value of 1, therefore, essentially ignores `image`.
            num_inference_steps (`int`, *optional*, defaults to 50):
                The number of denoising steps. More denoising steps usually lead to a higher quality image at the
                expense of slower inference. This parameter will be modulated by `strength`.
            guidance_scale (`float`, *optional*, defaults to 7.5):
                Guidance scale as defined in [Classifier-Free Diffusion Guidance](https://arxiv.org/abs/2207.12598).
                `guidance_scale` is defined as `w` of equation 2. of [Imagen
                Paper](https://arxiv.org/pdf/2205.11487.pdf). Guidance scale is enabled by setting `guidance_scale >
                1`. Higher guidance scale encourages to generate images that are closely linked to the text `prompt`,
                usually at the expense of lower image quality.
            num_images_per_prompt (`int`, *optional*, defaults to 1):
                The number of images to generate per prompt.
            eta (`float`, *optional*, defaults to 0.0):
                Corresponds to parameter eta (η) in the DDIM paper: https://arxiv.org/abs/2010.02502. Only applies to
                [`schedulers.DDIMScheduler`], will be ignored for others.
            generator (`torch.Generator`, *optional*):
                A [torch generator](https://pytorch.org/docs/stable/generated/torch.Generator.html) to make generation
                deterministic.
            max_embeddings_multiples (`int`, *optional*, defaults to `100`):
                The max multiple length of prompt embeddings compared to the max output length of text encoder.
            output_type (`str`, *optional*, defaults to `"pil"`):
                The output format of the generate image. Choose between
                [PIL](https://pillow.readthedocs.io/en/stable/): `PIL.Image.Image` or `np.array`.
            return_dict (`bool`, *optional*, defaults to `True`):
                Whether or not to return a [`~pipelines.stable_diffusion.StableDiffusionPipelineOutput`] instead of a
                plain tuple.
            callback (`Callable`, *optional*):
                A function that will be called every `callback_steps` steps during inference. The function will be
                called with the following arguments: `callback(step: int, timestep: int, latents: torch.FloatTensor)`.
            is_cancelled_callback (`Callable`, *optional*):
                A function that will be called every `callback_steps` steps during inference. If the function returns
                `True`, the inference will be cancelled.
            callback_steps (`int`, *optional*, defaults to 1):
                The frequency at which the `callback` function will be called. If not specified, the callback will be
                called at every step.
        Returns:
            [`~pipelines.stable_diffusion.StableDiffusionPipelineOutput`] or `tuple`:
            [`~pipelines.stable_diffusion.StableDiffusionPipelineOutput`] if `return_dict` is True, otherwise a `tuple.
            When returning a tuple, the first element is a list with the generated images, and the second element is a
            list of `bool`s denoting whether the corresponding generated image likely represents "not-safe-for-work"
            (nsfw) content, according to the `safety_checker`.
        """
        return self.__call__(
            prompt=prompt,
            generator=generator,
            negative_prompt=negative_prompt,
            image=image,
            height=height,
            width=width,
            num_inference_steps=num_inference_steps,  # type: ignore
            guidance_scale=guidance_scale,  # type: ignore
            self_attention_scale=self_attention_scale,
            strength=strength,
            num_images_per_prompt=num_images_per_prompt,
            eta=eta,  # type: ignore
            max_embeddings_multiples=max_embeddings_multiples,
            output_type=output_type,
            return_dict=return_dict,
            callback=callback,
            is_cancelled_callback=is_cancelled_callback,
            callback_steps=callback_steps,
        )

    def inpaint(
        self,
        image: Union[torch.FloatTensor, PIL.Image.Image],  # type: ignore
        mask_image: Union[torch.FloatTensor, PIL.Image.Image],  # type: ignore
        prompt: Union[str, List[str]],
        generator: Union[PhiloxGenerator, torch.Generator],
        negative_prompt: Optional[Union[str, List[str]]] = None,
        strength: float = 0.8,
        num_inference_steps: Optional[int] = 50,
        guidance_scale: Optional[float] = 7.5,
        self_attention_scale: float = 0.0,
        num_images_per_prompt: Optional[int] = 1,
        eta: Optional[float] = 0.0,
        max_embeddings_multiples: Optional[int] = 100,
        output_type: Literal["pil", "latent"] = "pil",
        return_dict: bool = True,
        callback: Optional[Callable[[int, int, torch.FloatTensor], None]] = None,
        is_cancelled_callback: Optional[Callable[[], bool]] = None,
        callback_steps: int = 1,
        width: int = 512,
        height: int = 512,
    ):
        r"""
        Function for inpaint.
        Args:
            image (`torch.FloatTensor` or `PIL.Image.Image`):
                `Image`, or tensor representing an image batch, that will be used as the starting point for the
                process. This is the image whose masked region will be inpainted.
            mask_image (`torch.FloatTensor` or `PIL.Image.Image`):
                `Image`, or tensor representing an image batch, to mask `image`. White pixels in the mask will be
                replaced by noise and therefore repainted, while black pixels will be preserved. If `mask_image` is a
                PIL image, it will be converted to a single channel (luminance) before use. If it's a tensor, it should
                contain one color channel (L) instead of 3, so the expected shape would be `(B, H, W, 1)`.
            prompt (`str` or `List[str]`):
                The prompt or prompts to guide the image generation.
            negative_prompt (`str` or `List[str]`, *optional*):
                The prompt or prompts not to guide the image generation. Ignored when not using guidance (i.e., ignored
                if `guidance_scale` is less than `1`).
            strength (`float`, *optional*, defaults to 0.8):
                Conceptually, indicates how much to inpaint the masked area. Must be between 0 and 1. When `strength`
                is 1, the denoising process will be run on the masked area for the full number of iterations specified
                in `num_inference_steps`. `image` will be used as a reference for the masked area, adding more
                noise to that region the larger the `strength`. If `strength` is 0, no inpainting will occur.
            num_inference_steps (`int`, *optional*, defaults to 50):
                The reference number of denoising steps. More denoising steps usually lead to a higher quality image at
                the expense of slower inference. This parameter will be modulated by `strength`, as explained above.
            guidance_scale (`float`, *optional*, defaults to 7.5):
                Guidance scale as defined in [Classifier-Free Diffusion Guidance](https://arxiv.org/abs/2207.12598).
                `guidance_scale` is defined as `w` of equation 2. of [Imagen
                Paper](https://arxiv.org/pdf/2205.11487.pdf). Guidance scale is enabled by setting `guidance_scale >
                1`. Higher guidance scale encourages to generate images that are closely linked to the text `prompt`,
                usually at the expense of lower image quality.
            num_images_per_prompt (`int`, *optional*, defaults to 1):
                The number of images to generate per prompt.
            eta (`float`, *optional*, defaults to 0.0):
                Corresponds to parameter eta (η) in the DDIM paper: https://arxiv.org/abs/2010.02502. Only applies to
                [`schedulers.DDIMScheduler`], will be ignored for others.
            generator (`torch.Generator`, *optional*):
                A [torch generator](https://pytorch.org/docs/stable/generated/torch.Generator.html) to make generation
                deterministic.
            max_embeddings_multiples (`int`, *optional*, defaults to `100`):
                The max multiple length of prompt embeddings compared to the max output length of text encoder.
            output_type (`str`, *optional*, defaults to `"pil"`):
                The output format of the generate image. Choose between
                [PIL](https://pillow.readthedocs.io/en/stable/): `PIL.Image.Image` or `np.array`.
            return_dict (`bool`, *optional*, defaults to `True`):
                Whether or not to return a [`~pipelines.stable_diffusion.StableDiffusionPipelineOutput`] instead of a
                plain tuple.
            callback (`Callable`, *optional*):
                A function that will be called every `callback_steps` steps during inference. The function will be
                called with the following arguments: `callback(step: int, timestep: int, latents: torch.FloatTensor)`.
            is_cancelled_callback (`Callable`, *optional*):
                A function that will be called every `callback_steps` steps during inference. If the function returns
                `True`, the inference will be cancelled.
            callback_steps (`int`, *optional*, defaults to 1):
                The frequency at which the `callback` function will be called. If not specified, the callback will be
                called at every step.
            width (`int`, *optional*, defaults to 512):
                The width of the generated image.
            height (`int`, *optional*, defaults to 512):
                The height of the generated image.
        Returns:
            [`~pipelines.stable_diffusion.StableDiffusionPipelineOutput`] or `tuple`:
            [`~pipelines.stable_diffusion.StableDiffusionPipelineOutput`] if `return_dict` is True, otherwise a `tuple.
            When returning a tuple, the first element is a list with the generated images, and the second element is a
            list of `bool`s denoting whether the corresponding generated image likely represents "not-safe-for-work"
            (nsfw) content, according to the `safety_checker`.
        """
        return self.__call__(
            prompt=prompt,
            generator=generator,
            negative_prompt=negative_prompt,
            image=image,
            mask_image=mask_image,
            num_inference_steps=num_inference_steps,  # type: ignore
            guidance_scale=guidance_scale,  # type: ignore
            self_attention_scale=self_attention_scale,
            strength=strength,
            num_images_per_prompt=num_images_per_prompt,
            eta=eta,  # type: ignore
            max_embeddings_multiples=max_embeddings_multiples,
            output_type=output_type,
            return_dict=return_dict,
            callback=callback,
            is_cancelled_callback=is_cancelled_callback,
            callback_steps=callback_steps,
            width=width,
            height=height,
        )
