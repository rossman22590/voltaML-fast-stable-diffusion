<template>
  <div class="navbar">
    <n-layout
      style="height: 100%; overflow: visible"
      has-sider
      content-style="overflow: visible"
    >
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
        style="overflow: visible; overflow-x: visible"
      >
        <NSpace
          vertical
          justify="space-between"
          style="height: 100%; overflow: visible; overflow-x: visible"
          item-style="height: 100%"
        >
          <n-menu
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptionsMain"
            style="height: 100%; display: flex; flex-direction: column"
          />
        </NSpace>
      </n-layout-sider>
    </n-layout>
  </div>
</template>

<script lang="ts" setup>
import {
  Albums,
  Create,
  Cube,
  Duplicate,
  Image,
  Images,
  SettingsSharp,
  Speedometer,
  Warning,
} from "@vicons/ionicons5";
import type { MenuOption } from "naive-ui";
import { NIcon, NLayout, NLayoutSider, NMenu, NSpace } from "naive-ui";
import type { Component } from "vue";
import { h, ref } from "vue";
import { RouterLink } from "vue-router";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptionsMain: MenuOption[] = [
  {
    label: () => h(RouterLink, { to: "/" }, { default: () => "Text to Image" }),
    key: "txt2img",
    icon: renderIcon(Image),
  },
  {
    label: () =>
      h(RouterLink, { to: "/img2img" }, { default: () => "Image to Image" }),
    key: "img2img",
    icon: renderIcon(Images),
  },
  {
    label: () =>
      h(
        RouterLink,
        { to: "/imageProcessing" },
        { default: () => "Image Processing" }
      ),
    key: "imageProcessing",
    icon: renderIcon(Duplicate),
  },
  {
    label: () => h(RouterLink, { to: "/tagger" }, { default: () => "Tagger" }),
    key: "tagger",
    icon: renderIcon(Create),
  },
  {
    label: () =>
      h(
        RouterLink,
        { to: "/imageBrowser" },
        { default: () => "Image Browser" }
      ),
    key: "imageBrowser",
    icon: renderIcon(Albums),
  },
  {
    label: () => h(RouterLink, { to: "/models" }, { default: () => "Models" }),
    key: "models",
    icon: renderIcon(Cube),
  },
  {
    label: () =>
      h(RouterLink, { to: "/accelerate" }, { default: () => "Accelerate" }),
    key: "plugins",
    icon: renderIcon(Speedometer),
  },
  // {
  //   label: () => h(RouterLink, { to: "/extra" }, { default: () => "Extra" }),
  //   key: "extra",
  //   icon: renderIcon(Archive),
  // },
  {
    label: () =>
      h(RouterLink, { to: "/settings" }, { default: () => "Settings" }),
    key: "settings",
    icon: renderIcon(SettingsSharp),
  },
];

if (import.meta.env.DEV) {
  menuOptionsMain.splice(-1, 0, {
    label: () => h(RouterLink, { to: "/test" }, { default: () => "Test" }),
    key: "test",
    icon: renderIcon(Warning),
  });
}

let collapsed = ref(true);
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 2;
}
</style>
