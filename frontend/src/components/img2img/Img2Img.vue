<template>
  <div style="margin: 0 12px">
    <!-- Main -->
    <NGrid cols="1 m:2" x-gap="12" responsive="screen">
      <NGi>
        <ImageUpload
          :callback="imageSelectCallback"
          :preview="settings.data.settings.img2img.image"
          style="margin-bottom: 12px"
          @file-dropped="settings.data.settings.img2img.image = $event"
        />

        <NCard title="Settings" style="margin-bottom: 12px">
          <NSpace vertical class="left-container">
            <!-- Prompt -->
            <NInput
              v-model:value="settings.data.settings.img2img.prompt"
              type="textarea"
              placeholder="Prompt"
              show-count
              @keyup="
                promptHandleKeyUp(
                  $event,
                  settings.data.settings.img2img,
                  'prompt',
                  global
                )
              "
              @keydown="promptHandleKeyDown"
            >
              <template #count>{{ promptCount }}</template>
            </NInput>
            <NInput
              v-model:value="settings.data.settings.img2img.negative_prompt"
              type="textarea"
              placeholder="Negative prompt"
              show-count
              @keyup="
                promptHandleKeyUp(
                  $event,
                  settings.data.settings.img2img,
                  'negative_prompt',
                  global
                )
              "
              @keydown="promptHandleKeyDown"
            >
              <template #count>{{ negativePromptCount }}</template>
            </NInput>

            <!-- Sampler -->
            <SamplerPicker type="img2img" />

            <DimensionsInput
              :dimensions-object="settings.data.settings.img2img"
            />

            <!-- Steps -->
            <div class="flex-container">
              <NTooltip style="max-width: 600px">
                <template #trigger>
                  <p class="slider-label">Steps</p>
                </template>
                Number of steps to take in the diffusion process. Higher values
                will result in more detailed images but will take longer to
                generate. There is also a point of diminishing returns around
                100 steps.
                <b class="highlight"
                  >We recommend using 20-50 steps for most images.</b
                >
              </NTooltip>
              <NSlider
                v-model:value="settings.data.settings.img2img.steps"
                :min="5"
                :max="300"
                style="margin-right: 12px"
              />
              <NInputNumber
                v-model:value="settings.data.settings.img2img.steps"
                size="small"
                style="min-width: 96px; width: 96px"
                :min="5"
                :max="300"
              />
            </div>

            <!-- CFG Scale -->
            <div class="flex-container">
              <NTooltip style="max-width: 600px">
                <template #trigger>
                  <p class="slider-label">CFG Scale</p>
                </template>
                Guidance scale indicates how much should model stay close to the
                prompt. Higher values might be exactly what you want, but
                generated images might have some artefacts. Lower values
                indicates that model can "dream" about this prompt more.
                <b class="highlight"
                  >We recommend using 3-15 for most images.</b
                >
              </NTooltip>
              <NSlider
                v-model:value="settings.data.settings.img2img.cfg_scale"
                :min="1"
                :max="30"
                :step="0.5"
                style="margin-right: 12px"
              />
              <NInputNumber
                v-model:value="settings.data.settings.img2img.cfg_scale"
                size="small"
                style="min-width: 96px; width: 96px"
                :min="1"
                :max="30"
                :step="0.5"
              />
            </div>

            <!-- Self Attention Scale -->
            <div
              class="flex-container"
              v-if="
                Number.isInteger(settings.data.settings.img2img.sampler) &&
                settings.data.settings.model?.backend === 'PyTorch'
              "
            >
              <NTooltip style="max-width: 600px">
                <template #trigger>
                  <p class="slider-label">Self Attention Scale</p>
                </template>
                <b class="highlight">PyTorch ONLY.</b> If self attention is >0,
                SAG will guide the model and improve the quality of the image at
                the cost of speed. Higher values will follow the guidance more
                closely, which can lead to better, more sharp and detailed
                outputs.
              </NTooltip>

              <NSlider
                v-model:value="
                  settings.data.settings.img2img.self_attention_scale
                "
                :min="0"
                :max="1"
                :step="0.05"
                style="margin-right: 12px"
              />
              <NInputNumber
                v-model:value="
                  settings.data.settings.img2img.self_attention_scale
                "
                size="small"
                style="min-width: 96px; width: 96px"
                :min="0"
                :max="1"
                :step="0.05"
              />
            </div>

            <!-- Number of images -->
            <div class="flex-container">
              <NTooltip style="max-width: 600px">
                <template #trigger>
                  <p class="slider-label">Batch Count</p>
                </template>
                Number of images to generate after each other.
              </NTooltip>
              <NSlider
                v-model:value="settings.data.settings.img2img.batch_count"
                :min="1"
                :max="9"
                style="margin-right: 12px"
              />
              <NInputNumber
                v-model:value="settings.data.settings.img2img.batch_count"
                size="small"
                style="min-width: 96px; width: 96px"
                :min="1"
                :max="9"
              />
            </div>

            <BatchSizeInput
              :batch-size-object="settings.data.settings.img2img"
            />

            <!-- Denoising Strength -->
            <div class="flex-container">
              <NTooltip style="max-width: 600px">
                <template #trigger>
                  <p class="slider-label">Denoising Strength</p>
                </template>
                Lower values will stick more to the original image, 0.5-0.75 is
                ideal
              </NTooltip>
              <NSlider
                v-model:value="
                  settings.data.settings.img2img.denoising_strength
                "
                :min="0.1"
                :max="1"
                style="margin-right: 12px"
                :step="0.025"
              />
              <NInputNumber
                v-model:value="
                  settings.data.settings.img2img.denoising_strength
                "
                size="small"
                style="min-width: 96px; width: 96px"
                :min="0.1"
                :max="1"
                :step="0.025"
              />
            </div>

            <!-- Seed -->
            <div class="flex-container">
              <NTooltip style="max-width: 600px">
                <template #trigger>
                  <p class="slider-label">Seed</p>
                </template>
                Seed is a number that represents the starting canvas of your
                image. If you want to create the same image as your friend, you
                can use the same settings and seed to do so.
                <b class="highlight">For random seed use -1.</b>
              </NTooltip>
              <NInputNumber
                v-model:value="settings.data.settings.img2img.seed"
                size="small"
                :min="-1"
                :max="999_999_999_999"
                style="flex-grow: 1"
              />
            </div>
          </NSpace>
        </NCard>
      </NGi>

      <!-- Split -->

      <!-- Images -->
      <NGi>
        <GenerateSection :generate="generate" />

        <ImageOutput
          :current-image="global.state.img2img.currentImage"
          :images="global.state.img2img.images"
          :data="settings.data.settings.img2img"
          @image-clicked="global.state.img2img.currentImage = $event"
        />

        <OutputStats
          style="margin-top: 12px"
          :gen-data="global.state.img2img.genData"
        />
      </NGi>
    </NGrid>
  </div>
</template>

<script setup lang="ts">
import "@/assets/2img.css";
import { BurnerClock } from "@/clock";
import GenerateSection from "@/components/GenerateSection.vue";
import ImageOutput from "@/components/ImageOutput.vue";
import ImageUpload from "@/components/ImageUpload.vue";
import OutputStats from "@/components/OutputStats.vue";
import BatchSizeInput from "@/components/generate/BatchSizeInput.vue";
import DimensionsInput from "@/components/generate/DimensionsInput.vue";
import SamplerPicker from "@/components/generate/SamplerPicker.vue";
import { serverUrl } from "@/env";
import {
  promptHandleKeyDown,
  promptHandleKeyUp,
  spaceRegex,
} from "@/functions";
import {
  NCard,
  NGi,
  NGrid,
  NInput,
  NInputNumber,
  NSlider,
  NSpace,
  NTooltip,
  useMessage,
} from "naive-ui";
import { v4 as uuidv4 } from "uuid";
import { computed, onUnmounted } from "vue";
import { useSettings } from "../../store/settings";
import { useState } from "../../store/state";

const global = useState();
const settings = useSettings();
const messageHandler = useMessage();

const promptCount = computed(() => {
  return settings.data.settings.img2img.prompt.split(spaceRegex).length - 1;
});
const negativePromptCount = computed(() => {
  return (
    settings.data.settings.img2img.negative_prompt.split(spaceRegex).length - 1
  );
});

const checkSeed = (seed: number) => {
  // If -1 create random seed
  if (seed === -1) {
    seed = Math.floor(Math.random() * 999_999_999_999);
  }

  return seed;
};

const imageSelectCallback = (base64Image: string) => {
  settings.data.settings.img2img.image = base64Image;
};

const generate = () => {
  if (settings.data.settings.img2img.seed === null) {
    messageHandler.error("Please set a seed");
    return;
  }
  global.state.generating = true;

  const seed = checkSeed(settings.data.settings.img2img.seed);

  fetch(`${serverUrl}/api/generate/img2img`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        prompt: settings.data.settings.img2img.prompt,
        image: settings.data.settings.img2img.image,
        id: uuidv4(),
        negative_prompt: settings.data.settings.img2img.negative_prompt,
        width: settings.data.settings.img2img.width,
        height: settings.data.settings.img2img.height,
        steps: settings.data.settings.img2img.steps,
        guidance_scale: settings.data.settings.img2img.cfg_scale,
        seed: seed,
        batch_size: settings.data.settings.img2img.batch_size,
        batch_count: settings.data.settings.img2img.batch_count,
        strength: settings.data.settings.img2img.denoising_strength,
        scheduler: settings.data.settings.img2img.sampler,
        self_attention_scale:
          settings.data.settings.img2img.self_attention_scale,
        sigmas: settings.data.settings.img2img.sigmas,
        sampler_settings:
          settings.data.settings.sampler_config[
            settings.data.settings.img2img.sampler
          ],
      },
      model: settings.data.settings.model?.name,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      global.state.generating = false;
      res.json().then((data) => {
        global.state.img2img.images = data.images;
        global.state.img2img.currentImage = data.images[0];
        global.state.progress = 0;
        global.state.total_steps = 0;
        global.state.current_step = 0;

        global.state.img2img.genData = {
          time_taken: parseFloat(parseFloat(data.time as string).toFixed(4)),
          seed: seed,
        };
      });
    })
    .catch((err) => {
      global.state.generating = false;
      messageHandler.error(err);
    });
};

// Burner clock
const burner = new BurnerClock(
  settings.data.settings.img2img,
  settings,
  generate
);
onUnmounted(() => {
  burner.cleanup();
});
</script>
<style scoped>
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
}

.image-container {
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
