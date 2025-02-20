<template>
  <div class="main-container">
    <!-- Main -->
    <NGrid cols="1 m:2" x-gap="12" responsive="screen">
      <NGi>
        <NCard title="Settings">
          <NSpace vertical class="left-container">
            <!-- Prompt -->
            <NInput
              v-model:value="settings.data.settings.txt2img.prompt"
              type="textarea"
              placeholder="Prompt"
              show-count
              @keyup="
                promptHandleKeyUp(
                  $event,
                  settings.data.settings.txt2img,
                  'prompt',
                  global
                )
              "
              @keydown="promptHandleKeyDown"
            >
              <template #count>{{ promptCount }}</template>
            </NInput>
            <NInput
              v-model:value="settings.data.settings.txt2img.negative_prompt"
              type="textarea"
              placeholder="Negative prompt"
              show-count
              @keyup="
                promptHandleKeyUp(
                  $event,
                  settings.data.settings.txt2img,
                  'negative_prompt',
                  global
                )
              "
              @keydown="promptHandleKeyDown"
            >
              <template #count>{{ negativePromptCount }}</template>
            </NInput>

            <!-- Sampler -->
            <SamplerPicker :type="'txt2img'" />

            <!-- Dimensions -->
            <DimensionsInput
              :dimensions-object="settings.data.settings.txt2img"
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
                v-model:value="settings.data.settings.txt2img.steps"
                :min="5"
                :max="300"
                style="margin-right: 12px"
              />
              <NInputNumber
                v-model:value="settings.data.settings.txt2img.steps"
                size="small"
                style="min-width: 96px; width: 96px"
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
                v-model:value="settings.data.settings.txt2img.cfg_scale"
                :min="1"
                :max="30"
                :step="0.5"
                style="margin-right: 12px"
              />
              <NInputNumber
                v-model:value="settings.data.settings.txt2img.cfg_scale"
                size="small"
                style="min-width: 96px; width: 96px"
                :step="0.5"
              />
            </div>

            <!-- Self Attention Scale -->
            <div
              class="flex-container"
              v-if="
                Number.isInteger(settings.data.settings.txt2img.sampler) &&
                settings.data.settings.model?.backend === 'PyTorch'
              "
            >
              <NTooltip style="max-width: 600px">
                <template #trigger>
                  <p class="slider-label">Self Attention Scale</p>
                </template>
                If self attention is >0, SAG will guide the model and improve
                the quality of the image at the cost of speed. Higher values
                will follow the guidance more closely, which can lead to better,
                more sharp and detailed outputs.
              </NTooltip>

              <NSlider
                v-model:value="
                  settings.data.settings.txt2img.self_attention_scale
                "
                :min="0"
                :max="1"
                :step="0.05"
                style="margin-right: 12px"
              />
              <NInputNumber
                v-model:value="
                  settings.data.settings.txt2img.self_attention_scale
                "
                size="small"
                style="min-width: 96px; width: 96px"
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
                v-model:value="settings.data.settings.txt2img.batch_count"
                :min="1"
                :max="9"
                style="margin-right: 12px"
              />
              <NInputNumber
                v-model:value="settings.data.settings.txt2img.batch_count"
                size="small"
                style="min-width: 96px; width: 96px"
              />
            </div>

            <BatchSizeInput
              :batch-size-object="settings.data.settings.txt2img"
            />

            <!-- Seed -->
            <div class="flex-container">
              <NTooltip style="max-width: 600px">
                <template #trigger>
                  <p style="margin-right: 12px; width: 75px">Seed</p>
                </template>
                Seed is a number that represents the starting canvas of your
                image. If you want to create the same image as your friend, you
                can use the same settings and seed to do so.
                <b class="highlight">For random seed use -1.</b>
              </NTooltip>
              <NInputNumber
                v-model:value="settings.data.settings.txt2img.seed"
                size="small"
                style="flex-grow: 1"
              />
            </div>
          </NSpace>
        </NCard>

        <NCard
          title="Highres fix"
          style="margin-top: 12px; margin-bottom: 12px"
        >
          <div class="flex-container">
            <div class="slider-label">
              <p>Enabled</p>
            </div>
            <NSwitch v-model:value="global.state.txt2img.highres" />
          </div>

          <NSpace
            vertical
            class="left-container"
            v-if="global.state.txt2img.highres"
          >
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
                v-model:value="settings.data.settings.extra.highres.steps"
                :min="5"
                :max="300"
                style="margin-right: 12px"
              />
              <NInputNumber
                v-model:value="settings.data.settings.extra.highres.steps"
                size="small"
                style="min-width: 96px; width: 96px"
              />
            </div>

            <!-- Scale -->
            <div class="flex-container">
              <p class="slider-label">Scale</p>
              <NSlider
                v-model:value="settings.data.settings.extra.highres.scale"
                :min="1"
                :max="8"
                :step="0.1"
                style="margin-right: 12px"
              />
              <NInputNumber
                v-model:value="settings.data.settings.extra.highres.scale"
                size="small"
                style="min-width: 96px; width: 96px"
                :step="0.1"
              />
            </div>

            <!-- Denoising strength -->
            <div class="flex-container">
              <p class="slider-label">Strength</p>
              <NSlider
                v-model:value="settings.data.settings.extra.highres.strength"
                :min="0.1"
                :max="0.9"
                :step="0.05"
                style="margin-right: 12px"
              />
              <NInputNumber
                v-model:value="settings.data.settings.extra.highres.strength"
                size="small"
                style="min-width: 96px; width: 96px"
                :min="0.1"
                :max="0.9"
                :step="0.05"
              />
            </div>

            <div class="flex-container">
              <p class="slider-label">Antialiased</p>
              <NSwitch
                v-model:value="settings.data.settings.extra.highres.antialiased"
              />
            </div>

            <div class="flex-container">
              <p class="slider-label">Latent Mode</p>
              <NSelect
                v-model:value="
                  settings.data.settings.extra.highres.latent_scale_mode
                "
                size="small"
                style="flex-grow: 1"
                :options="[
                  { label: 'Nearest', value: 'nearest' },
                  { label: 'Nearest exact', value: 'nearest-exact' },
                  { label: 'Area', value: 'area' },
                  { label: 'Bilinear', value: 'bilinear' },
                  { label: 'Bicubic', value: 'bicubic' },
                  {
                    label: 'Bislerp (Original, slow)',
                    value: 'bislerp-original',
                  },
                  {
                    label: 'Bislerp (Tortured, fast)',
                    value: 'bislerp-tortured',
                  },
                ]"
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
          :current-image="global.state.txt2img.currentImage"
          :images="global.state.txt2img.images"
          :data="settings.data.settings.txt2img"
          @image-clicked="global.state.txt2img.currentImage = $event"
        />

        <OutputStats
          style="margin-top: 12px"
          :gen-data="global.state.txt2img.genData"
        />
      </NGi>
    </NGrid>
  </div>
</template>

<script setup lang="ts">
import "@/assets/2img.css";
import GenerateSection from "@/components/GenerateSection.vue";
import ImageOutput from "@/components/ImageOutput.vue";
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
  NSelect,
  NSlider,
  NSpace,
  NSwitch,
  NTooltip,
  useMessage,
} from "naive-ui";
import { v4 as uuidv4 } from "uuid";
import { computed, onUnmounted } from "vue";
import { BurnerClock } from "../clock";
import { useSettings } from "../store/settings";
import { useState } from "../store/state";

const global = useState();
const settings = useSettings();
const messageHandler = useMessage();

const promptCount = computed(() => {
  return settings.data.settings.txt2img.prompt.split(spaceRegex).length - 1;
});
const negativePromptCount = computed(() => {
  return (
    settings.data.settings.txt2img.negative_prompt.split(spaceRegex).length - 1
  );
});

const checkSeed = (seed: number) => {
  // If -1 create random seed
  if (seed === -1) {
    seed = Math.floor(Math.random() * 999_999_999_999);
  }

  return seed;
};

const generate = () => {
  if (settings.data.settings.txt2img.seed === null) {
    messageHandler.error("Please set a seed");
    return;
  }
  global.state.generating = true;

  const seed = checkSeed(settings.data.settings.txt2img.seed);

  fetch(`${serverUrl}/api/generate/txt2img`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        id: uuidv4(),
        prompt: settings.data.settings.txt2img.prompt,
        negative_prompt: settings.data.settings.txt2img.negative_prompt,
        width: settings.data.settings.txt2img.width,
        height: settings.data.settings.txt2img.height,
        steps: settings.data.settings.txt2img.steps,
        guidance_scale: settings.data.settings.txt2img.cfg_scale,
        seed: seed,
        batch_size: settings.data.settings.txt2img.batch_size,
        batch_count: settings.data.settings.txt2img.batch_count,
        scheduler: settings.data.settings.txt2img.sampler,
        self_attention_scale:
          settings.data.settings.txt2img.self_attention_scale,
        sigmas: settings.data.settings.txt2img.sigmas,
        sampler_settings:
          settings.data.settings.sampler_config[
            settings.data.settings.txt2img.sampler
          ],
      },
      model: settings.data.settings.model?.name,
      backend: "PyTorch",
      autoload: false,
      flags: global.state.txt2img.highres
        ? {
            highres_fix: {
              scale: settings.data.settings.extra.highres.scale,
              latent_scale_mode:
                settings.data.settings.extra.highres.latent_scale_mode,
              strength: settings.data.settings.extra.highres.strength,
              steps: settings.data.settings.extra.highres.steps,
              antialiased: settings.data.settings.extra.highres.antialiased,
            },
          }
        : {},
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      global.state.generating = false;
      res.json().then((data) => {
        global.state.txt2img.images = data.images;
        global.state.txt2img.currentImage = data.images[0];
        global.state.progress = 0;
        global.state.total_steps = 0;
        global.state.current_step = 0;

        global.state.txt2img.genData = {
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
  settings.data.settings.txt2img,
  settings,
  generate
);
onUnmounted(() => {
  burner.cleanup();
});
</script>
