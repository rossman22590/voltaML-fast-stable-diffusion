<template>
  <NCard title="Timings">
    <NForm>
      <NFormItem
        label="Continuous generation timeout (0 for disabled) [ms]"
        label-placement="left"
      >
        <NInputNumber
          v-model:value="settings.defaultSettings.frontend.on_change_timer"
          :min="0"
          :step="50"
        />
      </NFormItem>
      <NFormItem label="Enable sending logs to UI" label-placement="left">
        <NSwitch
          v-model:value="settings.defaultSettings.api.enable_websocket_logging"
        />
      </NFormItem>
    </NForm>
  </NCard>
</template>

<script setup lang="ts">
import { NCard, NForm, NFormItem, NInputNumber, NSwitch } from "naive-ui";
import { watch } from "vue";
import { useSettings } from "../../store/settings";

const settings = useSettings();

watch(settings.defaultSettings.frontend, () => {
  settings.data.settings.frontend.on_change_timer =
    settings.defaultSettings.frontend.on_change_timer;
});
</script>
