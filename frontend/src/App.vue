<template>
  <NConfigProvider :theme="theme" :theme-overrides="overrides" class="main">
    <NThemeEditor v-if="settings.data.settings.frontend.enable_theme_editor">
      <Content />
    </NThemeEditor>

    <Content v-else />
  </NConfigProvider>
</template>

<script setup lang="ts">
import { themeKey, themeOverridesKey } from "@/injectionKeys";
import { NConfigProvider, NThemeEditor, darkTheme, lightTheme } from "naive-ui";
import { computed, provide, ref, watch } from "vue";
import Content from "./Content.vue";
import { serverUrl } from "./env";
import { useSettings } from "./store/settings";
import type { ExtendedThemeOverrides } from "./types";

const settings = useSettings();

const overrides = ref<ExtendedThemeOverrides | null>(null);
const theme = computed(() => {
  if (overrides.value?.volta?.base === "light") {
    return lightTheme;
  } else {
    return darkTheme;
  }
});

provide(themeOverridesKey, overrides);
provide(themeKey, theme);

function updateTheme() {
  fetch(`${serverUrl}/themes/${settings.data.settings.frontend.theme}.json`)
    .then((res) => res.json())
    .then((data) => {
      overrides.value = data;
    });
}

updateTheme();
watch(() => settings.data.settings.frontend.theme, updateTheme);

const backgroundImage = computed(() => {
  if (settings.data.settings.frontend.background_image_override) {
    return `url(${settings.data.settings.frontend.background_image_override})`;
  } else if (overrides.value?.volta?.backgroundImage) {
    return `url(${overrides.value?.volta?.backgroundImage})`;
  }

  return undefined;
});

const blur = computed(() => `blur(${overrides.value?.volta?.blur ?? "6px"})`);

watch(
  () => overrides.value,
  () => {
    document.body.style.backgroundColor =
      overrides.value?.common?.baseColor ?? theme.value.common.baseColor;
  }
);
</script>

<style lang="scss">
.autocomplete {
  position: relative;
  display: inline-block;
}
.autocomplete-items {
  position: absolute;
  z-index: 99;
  background-color: v-bind("theme.common.popoverColor");
  border-radius: v-bind("theme.common.borderRadius");
  padding: 2px;
}
.autocomplete-items div {
  padding: 8px;
  cursor: pointer;
  border-radius: v-bind("theme.common.borderRadius");
}
.autocomplete-active {
  background-color: v-bind("theme.common.pressedColor");
  color: v-bind("theme.common.primaryColorHover");
}
#autocomplete-list {
  max-height: min(600px, 70vh);
  overflow-y: auto;
}

.n-card {
  backdrop-filter: v-bind(blur);
}

.navbar {
  .n-layout {
    backdrop-filter: v-bind(blur);
  }

  .n-layout-toggle-button {
    backdrop-filter: v-bind(blur);
  }
}

.top-bar {
  backdrop-filter: v-bind(blur);
  background-color: v-bind(
    "overrides?.Card?.color ?? theme.Card.common?.cardColor"
  );
}

.navbar {
  backdrop-filter: v-bind(blur);
}

#background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-image: v-bind(backgroundImage);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  top: 0;
  left: 0;
  z-index: -99;
}
</style>
