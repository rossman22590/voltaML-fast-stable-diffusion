import { _ as _sfc_main$7 } from "./GenerateSection.vue_vue_type_script_setup_true_lang.js";
import { B as BurnerClock, _ as _sfc_main$5, a as _sfc_main$6, b as _sfc_main$9 } from "./clock.js";
import { _ as _sfc_main$8 } from "./ImageOutput.vue_vue_type_script_setup_true_lang.js";
import { I as ImageUpload } from "./ImageUpload.js";
import { _ as _sfc_main$4 } from "./SamplerPicker.vue_vue_type_script_setup_true_lang.js";
import { d as defineComponent, e as openBlock, f as createElementBlock, n as createBaseVNode, u as useState, a as useSettings, b as useMessage, c as computed, o as onUnmounted, g as createVNode, w as withCtx, h as unref, N as NGi, i as NCard, j as NSpace, k as NInput, p as promptHandleKeyUp, l as promptHandleKeyDown, m as createTextVNode, t as toDisplayString, q as NTooltip, x as NSelect, y as NGrid, z as spaceRegex, s as serverUrl, A as pushScopeId, B as popScopeId, _ as _export_sfc, r as createCommentVNode, C as h, D as ref, E as NButton, F as NIcon, v as createBlock, G as NTabPane, H as NTabs } from "./index.js";
import { v as v4 } from "./v4.js";
import { N as NSlider, a as NSwitch } from "./Switch.js";
import { N as NInputNumber } from "./InputNumber.js";
import "./DescriptionsItem.js";
import "./SendOutputTo.vue_vue_type_script_setup_true_lang.js";
import "./TrashBin.js";
import "./CloudUpload.js";
import "./Settings.js";
const _hoisted_1$6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M48 399.26C48 335.19 62.44 284 90.91 247c34.38-44.67 88.68-68.77 161.56-71.75V72L464 252L252.47 432V329.35c-44.25 1.19-77.66 7.58-104.27 19.84c-28.75 13.25-49.6 33.05-72.08 58.7L48 440z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$6 = [_hoisted_2$6];
const ArrowRedoSharp = defineComponent({
  name: "ArrowRedoSharp",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$6);
  }
});
const _hoisted_1$5 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M464 440l-28.12-32.11c-22.48-25.65-43.33-45.45-72.08-58.7c-26.61-12.26-60-18.65-104.27-19.84V432L48 252L259.53 72v103.21c72.88 3 127.18 27.08 161.56 71.75C449.56 284 464 335.19 464 399.26z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$5 = [_hoisted_2$5];
const ArrowUndoSharp = defineComponent({
  name: "ArrowUndoSharp",
  render: function render2(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$5);
  }
});
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M480 96l-64-64l-244 260l64 64z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M142 320c-36.52 0-66 30.63-66 68.57c0 25.43-31 45.72-44 45.72C52.24 462.17 86.78 480 120 480c48.62 0 88-40.91 88-91.43c0-37.94-29.48-68.57-66-68.57z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$4 = [_hoisted_2$4, _hoisted_3$4];
const BrushSharp = defineComponent({
  name: "BrushSharp",
  render: function render3(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_4$4);
  }
});
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    d: "M337.46 240L312 214.54l-56 56l-56-56L174.54 240l56 56l-56 56L200 377.46l56-56l56 56L337.46 352l-56-56l56-56z"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    fill: "none",
    d: "M337.46 240L312 214.54l-56 56l-56-56L174.54 240l56 56l-56 56L200 377.46l56-56l56 56L337.46 352l-56-56l56-56z"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M64 160l29.74 282.51A24 24 0 0 0 117.61 464h276.78a24 24 0 0 0 23.87-21.49L448 160zm248 217.46l-56-56l-56 56L174.54 352l56-56l-56-56L200 214.54l56 56l56-56L337.46 240l-56 56l56 56z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_5$3 = /* @__PURE__ */ createBaseVNode(
  "rect",
  {
    x: "32",
    y: "48",
    width: "448",
    height: "80",
    rx: "12",
    ry: "12",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_6$3 = [_hoisted_2$3, _hoisted_3$3, _hoisted_4$3, _hoisted_5$3];
const TrashBinSharp = defineComponent({
  name: "TrashBinSharp",
  render: function render4(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_6$3);
  }
});
const _withScopeId$2 = (n) => (pushScopeId("data-v-572c2180"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { style: { "margin": "0 12px" } };
const _hoisted_2$2 = { class: "flex-container" };
const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("p", { style: { "margin-right": "12px", "width": "150px" } }, "ControlNet", -1));
const _hoisted_4$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("a", { href: "https://github.com/lllyasviel/ControlNet-v1-1-nightly?tab=readme-ov-file#controlnet-11" }, "Learn more", -1));
const _hoisted_5$2 = { class: "flex-container" };
const _hoisted_6$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Steps", -1));
const _hoisted_7$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("b", { class: "highlight" }, "We recommend using 20-50 steps for most images.", -1));
const _hoisted_8$2 = { class: "flex-container" };
const _hoisted_9$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "CFG Scale", -1));
const _hoisted_10$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("b", { class: "highlight" }, "We recommend using 3-15 for most images.", -1));
const _hoisted_11$2 = { class: "flex-container" };
const _hoisted_12$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Batch Count", -1));
const _hoisted_13$2 = { class: "flex-container" };
const _hoisted_14$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "ControlNet Conditioning Scale", -1));
const _hoisted_15$2 = { class: "flex-container" };
const _hoisted_16$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Detection resolution", -1));
const _hoisted_17$2 = { class: "flex-container" };
const _hoisted_18$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Seed", -1));
const _hoisted_19$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("b", { class: "highlight" }, "For random seed use -1.", -1));
const _hoisted_20$1 = { class: "flex-container" };
const _hoisted_21$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Is Preprocessed", -1));
const _hoisted_22$1 = { class: "flex-container" };
const _hoisted_23$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Save Preprocessed", -1));
const _hoisted_24$1 = { class: "flex-container" };
const _hoisted_25 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Return Preprocessed", -1));
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ControlNet",
  setup(__props) {
    const global = useState();
    const settings = useSettings();
    const messageHandler = useMessage();
    const promptCount = computed(() => {
      return settings.data.settings.controlnet.prompt.split(spaceRegex).length - 1;
    });
    const negativePromptCount = computed(() => {
      return settings.data.settings.controlnet.negative_prompt.split(spaceRegex).length - 1;
    });
    const checkSeed = (seed) => {
      if (seed === -1) {
        seed = Math.floor(Math.random() * 999999999999);
      }
      return seed;
    };
    const imageSelectCallback = (base64Image) => {
      settings.data.settings.controlnet.image = base64Image;
    };
    const generate = () => {
      var _a;
      if (settings.data.settings.controlnet.seed === null) {
        messageHandler.error("Please set a seed");
        return;
      }
      global.state.generating = true;
      const seed = checkSeed(settings.data.settings.controlnet.seed);
      fetch(`${serverUrl}/api/generate/controlnet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: {
            prompt: settings.data.settings.controlnet.prompt,
            image: settings.data.settings.controlnet.image,
            id: v4(),
            negative_prompt: settings.data.settings.controlnet.negative_prompt,
            width: settings.data.settings.controlnet.width,
            height: settings.data.settings.controlnet.height,
            steps: settings.data.settings.controlnet.steps,
            guidance_scale: settings.data.settings.controlnet.cfg_scale,
            seed,
            batch_size: settings.data.settings.controlnet.batch_size,
            batch_count: settings.data.settings.controlnet.batch_count,
            controlnet: settings.data.settings.controlnet.controlnet,
            controlnet_conditioning_scale: settings.data.settings.controlnet.controlnet_conditioning_scale,
            detection_resolution: settings.data.settings.controlnet.detection_resolution,
            scheduler: settings.data.settings.controlnet.sampler,
            sigmas: settings.data.settings.controlnet.sigmas,
            sampler_settings: settings.data.settings.sampler_config[settings.data.settings.controlnet.sampler],
            canny_low_threshold: 100,
            canny_high_threshold: 200,
            mlsd_thr_v: 0.1,
            mlsd_thr_d: 0.1,
            is_preprocessed: settings.data.settings.controlnet.is_preprocessed,
            save_preprocessed: settings.data.settings.controlnet.save_preprocessed,
            return_preprocessed: settings.data.settings.controlnet.return_preprocessed
          },
          model: (_a = settings.data.settings.model) == null ? void 0 : _a.name
        })
      }).then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        global.state.generating = false;
        res.json().then((data) => {
          global.state.controlnet.images = data.images;
          global.state.controlnet.currentImage = data.images[0];
          global.state.progress = 0;
          global.state.total_steps = 0;
          global.state.current_step = 0;
          global.state.controlnet.genData = {
            time_taken: parseFloat(parseFloat(data.time).toFixed(4)),
            seed
          };
        });
      }).catch((err) => {
        global.state.generating = false;
        messageHandler.error(err);
      });
    };
    const burner = new BurnerClock(
      settings.data.settings.controlnet,
      settings,
      generate
    );
    onUnmounted(() => {
      burner.cleanup();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(unref(NGrid), {
          cols: "1 m:2",
          "x-gap": "12",
          responsive: "screen"
        }, {
          default: withCtx(() => [
            createVNode(unref(NGi), null, {
              default: withCtx(() => [
                createVNode(ImageUpload, {
                  callback: imageSelectCallback,
                  preview: unref(settings).data.settings.controlnet.image,
                  style: { "margin-bottom": "12px" },
                  onFileDropped: _cache[0] || (_cache[0] = ($event) => unref(settings).data.settings.controlnet.image = $event)
                }, null, 8, ["preview"]),
                createVNode(unref(NCard), {
                  title: "Settings",
                  style: { "margin-bottom": "12px" }
                }, {
                  default: withCtx(() => [
                    createVNode(unref(NSpace), {
                      vertical: "",
                      class: "left-container"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(NInput), {
                          value: unref(settings).data.settings.controlnet.prompt,
                          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(settings).data.settings.controlnet.prompt = $event),
                          type: "textarea",
                          placeholder: "Prompt",
                          "show-count": "",
                          onKeyup: _cache[2] || (_cache[2] = ($event) => unref(promptHandleKeyUp)(
                            $event,
                            unref(settings).data.settings.controlnet,
                            "prompt",
                            unref(global)
                          )),
                          onKeydown: unref(promptHandleKeyDown)
                        }, {
                          count: withCtx(() => [
                            createTextVNode(toDisplayString(promptCount.value), 1)
                          ]),
                          _: 1
                        }, 8, ["value", "onKeydown"]),
                        createVNode(unref(NInput), {
                          value: unref(settings).data.settings.controlnet.negative_prompt,
                          "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(settings).data.settings.controlnet.negative_prompt = $event),
                          type: "textarea",
                          placeholder: "Negative prompt",
                          "show-count": "",
                          onKeyup: _cache[4] || (_cache[4] = ($event) => unref(promptHandleKeyUp)(
                            $event,
                            unref(settings).data.settings.controlnet,
                            "negative_prompt",
                            unref(global)
                          )),
                          onKeydown: unref(promptHandleKeyDown)
                        }, {
                          count: withCtx(() => [
                            createTextVNode(toDisplayString(negativePromptCount.value), 1)
                          ]),
                          _: 1
                        }, 8, ["value", "onKeydown"]),
                        createVNode(_sfc_main$4, { type: "controlnet" }),
                        createBaseVNode("div", _hoisted_2$2, [
                          createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                            trigger: withCtx(() => [
                              _hoisted_3$2
                            ]),
                            default: withCtx(() => [
                              createTextVNode(' ControlNet is a method of guiding the diffusion process. It allows you to control the output by providing a guidance image. This image will be processed automatically. You can also opt out and enable "Is Preprocessed" to provide your own preprocessed image. '),
                              _hoisted_4$2
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NSelect), {
                            options: unref(settings).controlnet_options,
                            value: unref(settings).data.settings.controlnet.controlnet,
                            "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(settings).data.settings.controlnet.controlnet = $event),
                            filterable: "",
                            tag: "",
                            style: { "flex-grow": "1" }
                          }, null, 8, ["options", "value"])
                        ]),
                        createVNode(_sfc_main$5, {
                          "dimensions-object": unref(settings).data.settings.controlnet
                        }, null, 8, ["dimensions-object"]),
                        createBaseVNode("div", _hoisted_5$2, [
                          createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                            trigger: withCtx(() => [
                              _hoisted_6$2
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Number of steps to take in the diffusion process. Higher values will result in more detailed images but will take longer to generate. There is also a point of diminishing returns around 100 steps. "),
                              _hoisted_7$2
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NSlider), {
                            value: unref(settings).data.settings.controlnet.steps,
                            "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(settings).data.settings.controlnet.steps = $event),
                            min: 5,
                            max: 300,
                            style: { "margin-right": "12px" }
                          }, null, 8, ["value"]),
                          createVNode(unref(NInputNumber), {
                            value: unref(settings).data.settings.controlnet.steps,
                            "onUpdate:value": _cache[7] || (_cache[7] = ($event) => unref(settings).data.settings.controlnet.steps = $event),
                            size: "small",
                            style: { "min-width": "96px", "width": "96px" },
                            min: 5,
                            max: 300
                          }, null, 8, ["value"])
                        ]),
                        createBaseVNode("div", _hoisted_8$2, [
                          createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                            trigger: withCtx(() => [
                              _hoisted_9$2
                            ]),
                            default: withCtx(() => [
                              createTextVNode(' Guidance scale indicates how much should model stay close to the prompt. Higher values might be exactly what you want, but generated images might have some artefacts. Lower values indicates that model can "dream" about this prompt more. '),
                              _hoisted_10$2
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NSlider), {
                            value: unref(settings).data.settings.controlnet.cfg_scale,
                            "onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(settings).data.settings.controlnet.cfg_scale = $event),
                            min: 1,
                            max: 30,
                            step: 0.5,
                            style: { "margin-right": "12px" }
                          }, null, 8, ["value"]),
                          createVNode(unref(NInputNumber), {
                            value: unref(settings).data.settings.controlnet.cfg_scale,
                            "onUpdate:value": _cache[9] || (_cache[9] = ($event) => unref(settings).data.settings.controlnet.cfg_scale = $event),
                            size: "small",
                            style: { "min-width": "96px", "width": "96px" },
                            min: 1,
                            max: 30,
                            step: 0.5
                          }, null, 8, ["value"])
                        ]),
                        createBaseVNode("div", _hoisted_11$2, [
                          createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                            trigger: withCtx(() => [
                              _hoisted_12$2
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Number of images to generate after each other. ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NSlider), {
                            value: unref(settings).data.settings.controlnet.batch_count,
                            "onUpdate:value": _cache[10] || (_cache[10] = ($event) => unref(settings).data.settings.controlnet.batch_count = $event),
                            min: 1,
                            max: 9,
                            style: { "margin-right": "12px" }
                          }, null, 8, ["value"]),
                          createVNode(unref(NInputNumber), {
                            value: unref(settings).data.settings.controlnet.batch_count,
                            "onUpdate:value": _cache[11] || (_cache[11] = ($event) => unref(settings).data.settings.controlnet.batch_count = $event),
                            size: "small",
                            style: { "min-width": "96px", "width": "96px" },
                            min: 1,
                            max: 9
                          }, null, 8, ["value"])
                        ]),
                        createVNode(_sfc_main$6, {
                          "batch-size-object": unref(settings).data.settings.controlnet
                        }, null, 8, ["batch-size-object"]),
                        createBaseVNode("div", _hoisted_13$2, [
                          createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                            trigger: withCtx(() => [
                              _hoisted_14$2
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" How much should the ControlNet affect the image. ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NSlider), {
                            value: unref(settings).data.settings.controlnet.controlnet_conditioning_scale,
                            "onUpdate:value": _cache[12] || (_cache[12] = ($event) => unref(settings).data.settings.controlnet.controlnet_conditioning_scale = $event),
                            min: 0.1,
                            max: 2,
                            style: { "margin-right": "12px" },
                            step: 0.025
                          }, null, 8, ["value"]),
                          createVNode(unref(NInputNumber), {
                            value: unref(settings).data.settings.controlnet.controlnet_conditioning_scale,
                            "onUpdate:value": _cache[13] || (_cache[13] = ($event) => unref(settings).data.settings.controlnet.controlnet_conditioning_scale = $event),
                            size: "small",
                            style: { "min-width": "96px", "width": "96px" },
                            min: 0.1,
                            max: 2,
                            step: 0.025
                          }, null, 8, ["value"])
                        ]),
                        createBaseVNode("div", _hoisted_15$2, [
                          createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                            trigger: withCtx(() => [
                              _hoisted_16$2
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" What resolution to use for the image processing. This process does not affect the final result but can affect the quality of the ControlNet processing. ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NSlider), {
                            value: unref(settings).data.settings.controlnet.detection_resolution,
                            "onUpdate:value": _cache[14] || (_cache[14] = ($event) => unref(settings).data.settings.controlnet.detection_resolution = $event),
                            min: 128,
                            max: 2048,
                            style: { "margin-right": "12px" },
                            step: 8
                          }, null, 8, ["value"]),
                          createVNode(unref(NInputNumber), {
                            value: unref(settings).data.settings.controlnet.detection_resolution,
                            "onUpdate:value": _cache[15] || (_cache[15] = ($event) => unref(settings).data.settings.controlnet.detection_resolution = $event),
                            size: "small",
                            style: { "min-width": "96px", "width": "96px" },
                            min: 128,
                            max: 2048,
                            step: 8
                          }, null, 8, ["value"])
                        ]),
                        createBaseVNode("div", _hoisted_17$2, [
                          createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                            trigger: withCtx(() => [
                              _hoisted_18$1
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Seed is a number that represents the starting canvas of your image. If you want to create the same image as your friend, you can use the same settings and seed to do so. "),
                              _hoisted_19$1
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NInputNumber), {
                            value: unref(settings).data.settings.controlnet.seed,
                            "onUpdate:value": _cache[16] || (_cache[16] = ($event) => unref(settings).data.settings.controlnet.seed = $event),
                            size: "small",
                            min: -1,
                            max: 999999999999,
                            style: { "flex-grow": "1" }
                          }, null, 8, ["value"])
                        ]),
                        createBaseVNode("div", _hoisted_20$1, [
                          _hoisted_21$1,
                          createVNode(unref(NSwitch), {
                            value: unref(settings).data.settings.controlnet.is_preprocessed,
                            "onUpdate:value": _cache[17] || (_cache[17] = ($event) => unref(settings).data.settings.controlnet.is_preprocessed = $event)
                          }, null, 8, ["value"])
                        ]),
                        createBaseVNode("div", _hoisted_22$1, [
                          _hoisted_23$1,
                          createVNode(unref(NSwitch), {
                            value: unref(settings).data.settings.controlnet.save_preprocessed,
                            "onUpdate:value": _cache[18] || (_cache[18] = ($event) => unref(settings).data.settings.controlnet.save_preprocessed = $event)
                          }, null, 8, ["value"])
                        ]),
                        createBaseVNode("div", _hoisted_24$1, [
                          _hoisted_25,
                          createVNode(unref(NSwitch), {
                            value: unref(settings).data.settings.controlnet.return_preprocessed,
                            "onUpdate:value": _cache[19] || (_cache[19] = ($event) => unref(settings).data.settings.controlnet.return_preprocessed = $event)
                          }, null, 8, ["value"])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(NGi), null, {
              default: withCtx(() => [
                createVNode(_sfc_main$7, { generate }),
                createVNode(_sfc_main$8, {
                  "current-image": unref(global).state.controlnet.currentImage,
                  images: unref(global).state.controlnet.images,
                  data: unref(settings).data.settings.controlnet,
                  onImageClicked: _cache[20] || (_cache[20] = ($event) => unref(global).state.controlnet.currentImage = $event)
                }, null, 8, ["current-image", "images", "data"]),
                createVNode(_sfc_main$9, {
                  style: { "margin-top": "12px" },
                  "gen-data": unref(global).state.controlnet.genData
                }, null, 8, ["gen-data"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const ControlNet_vue_vue_type_style_index_0_scoped_572c2180_lang = "";
const ControlNet = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-572c2180"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-fe0214b4"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { style: { "margin": "0 12px" } };
const _hoisted_2$1 = { class: "flex-container" };
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Steps", -1));
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("b", { class: "highlight" }, "We recommend using 20-50 steps for most images.", -1));
const _hoisted_5$1 = { class: "flex-container" };
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "CFG Scale", -1));
const _hoisted_7$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("b", { class: "highlight" }, "We recommend using 3-15 for most images.", -1));
const _hoisted_8$1 = {
  key: 0,
  class: "flex-container"
};
const _hoisted_9$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Self Attention Scale", -1));
const _hoisted_10$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("b", { class: "highlight" }, "PyTorch ONLY.", -1));
const _hoisted_11$1 = { class: "flex-container" };
const _hoisted_12$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Batch Count", -1));
const _hoisted_13$1 = { class: "flex-container" };
const _hoisted_14$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Denoising Strength", -1));
const _hoisted_15$1 = { class: "flex-container" };
const _hoisted_16$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Seed", -1));
const _hoisted_17$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("b", { class: "highlight" }, "For random seed use -1.", -1));
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Img2Img",
  setup(__props) {
    const global = useState();
    const settings = useSettings();
    const messageHandler = useMessage();
    const promptCount = computed(() => {
      return settings.data.settings.img2img.prompt.split(spaceRegex).length - 1;
    });
    const negativePromptCount = computed(() => {
      return settings.data.settings.img2img.negative_prompt.split(spaceRegex).length - 1;
    });
    const checkSeed = (seed) => {
      if (seed === -1) {
        seed = Math.floor(Math.random() * 999999999999);
      }
      return seed;
    };
    const imageSelectCallback = (base64Image) => {
      settings.data.settings.img2img.image = base64Image;
    };
    const generate = () => {
      var _a;
      if (settings.data.settings.img2img.seed === null) {
        messageHandler.error("Please set a seed");
        return;
      }
      global.state.generating = true;
      const seed = checkSeed(settings.data.settings.img2img.seed);
      fetch(`${serverUrl}/api/generate/img2img`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: {
            prompt: settings.data.settings.img2img.prompt,
            image: settings.data.settings.img2img.image,
            id: v4(),
            negative_prompt: settings.data.settings.img2img.negative_prompt,
            width: settings.data.settings.img2img.width,
            height: settings.data.settings.img2img.height,
            steps: settings.data.settings.img2img.steps,
            guidance_scale: settings.data.settings.img2img.cfg_scale,
            seed,
            batch_size: settings.data.settings.img2img.batch_size,
            batch_count: settings.data.settings.img2img.batch_count,
            strength: settings.data.settings.img2img.denoising_strength,
            scheduler: settings.data.settings.img2img.sampler,
            self_attention_scale: settings.data.settings.img2img.self_attention_scale,
            sigmas: settings.data.settings.img2img.sigmas,
            sampler_settings: settings.data.settings.sampler_config[settings.data.settings.img2img.sampler]
          },
          model: (_a = settings.data.settings.model) == null ? void 0 : _a.name
        })
      }).then((res) => {
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
            time_taken: parseFloat(parseFloat(data.time).toFixed(4)),
            seed
          };
        });
      }).catch((err) => {
        global.state.generating = false;
        messageHandler.error(err);
      });
    };
    const burner = new BurnerClock(
      settings.data.settings.img2img,
      settings,
      generate
    );
    onUnmounted(() => {
      burner.cleanup();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(unref(NGrid), {
          cols: "1 m:2",
          "x-gap": "12",
          responsive: "screen"
        }, {
          default: withCtx(() => [
            createVNode(unref(NGi), null, {
              default: withCtx(() => [
                createVNode(ImageUpload, {
                  callback: imageSelectCallback,
                  preview: unref(settings).data.settings.img2img.image,
                  style: { "margin-bottom": "12px" },
                  onFileDropped: _cache[0] || (_cache[0] = ($event) => unref(settings).data.settings.img2img.image = $event)
                }, null, 8, ["preview"]),
                createVNode(unref(NCard), {
                  title: "Settings",
                  style: { "margin-bottom": "12px" }
                }, {
                  default: withCtx(() => [
                    createVNode(unref(NSpace), {
                      vertical: "",
                      class: "left-container"
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(unref(NInput), {
                            value: unref(settings).data.settings.img2img.prompt,
                            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(settings).data.settings.img2img.prompt = $event),
                            type: "textarea",
                            placeholder: "Prompt",
                            "show-count": "",
                            onKeyup: _cache[2] || (_cache[2] = ($event) => unref(promptHandleKeyUp)(
                              $event,
                              unref(settings).data.settings.img2img,
                              "prompt",
                              unref(global)
                            )),
                            onKeydown: unref(promptHandleKeyDown)
                          }, {
                            count: withCtx(() => [
                              createTextVNode(toDisplayString(promptCount.value), 1)
                            ]),
                            _: 1
                          }, 8, ["value", "onKeydown"]),
                          createVNode(unref(NInput), {
                            value: unref(settings).data.settings.img2img.negative_prompt,
                            "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(settings).data.settings.img2img.negative_prompt = $event),
                            type: "textarea",
                            placeholder: "Negative prompt",
                            "show-count": "",
                            onKeyup: _cache[4] || (_cache[4] = ($event) => unref(promptHandleKeyUp)(
                              $event,
                              unref(settings).data.settings.img2img,
                              "negative_prompt",
                              unref(global)
                            )),
                            onKeydown: unref(promptHandleKeyDown)
                          }, {
                            count: withCtx(() => [
                              createTextVNode(toDisplayString(negativePromptCount.value), 1)
                            ]),
                            _: 1
                          }, 8, ["value", "onKeydown"]),
                          createVNode(_sfc_main$4, { type: "img2img" }),
                          createVNode(_sfc_main$5, {
                            "dimensions-object": unref(settings).data.settings.img2img
                          }, null, 8, ["dimensions-object"]),
                          createBaseVNode("div", _hoisted_2$1, [
                            createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                              trigger: withCtx(() => [
                                _hoisted_3$1
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Number of steps to take in the diffusion process. Higher values will result in more detailed images but will take longer to generate. There is also a point of diminishing returns around 100 steps. "),
                                _hoisted_4$1
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NSlider), {
                              value: unref(settings).data.settings.img2img.steps,
                              "onUpdate:value": _cache[5] || (_cache[5] = ($event) => unref(settings).data.settings.img2img.steps = $event),
                              min: 5,
                              max: 300,
                              style: { "margin-right": "12px" }
                            }, null, 8, ["value"]),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.img2img.steps,
                              "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(settings).data.settings.img2img.steps = $event),
                              size: "small",
                              style: { "min-width": "96px", "width": "96px" },
                              min: 5,
                              max: 300
                            }, null, 8, ["value"])
                          ]),
                          createBaseVNode("div", _hoisted_5$1, [
                            createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                              trigger: withCtx(() => [
                                _hoisted_6$1
                              ]),
                              default: withCtx(() => [
                                createTextVNode(' Guidance scale indicates how much should model stay close to the prompt. Higher values might be exactly what you want, but generated images might have some artefacts. Lower values indicates that model can "dream" about this prompt more. '),
                                _hoisted_7$1
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NSlider), {
                              value: unref(settings).data.settings.img2img.cfg_scale,
                              "onUpdate:value": _cache[7] || (_cache[7] = ($event) => unref(settings).data.settings.img2img.cfg_scale = $event),
                              min: 1,
                              max: 30,
                              step: 0.5,
                              style: { "margin-right": "12px" }
                            }, null, 8, ["value"]),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.img2img.cfg_scale,
                              "onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(settings).data.settings.img2img.cfg_scale = $event),
                              size: "small",
                              style: { "min-width": "96px", "width": "96px" },
                              min: 1,
                              max: 30,
                              step: 0.5
                            }, null, 8, ["value"])
                          ]),
                          Number.isInteger(unref(settings).data.settings.img2img.sampler) && ((_a = unref(settings).data.settings.model) == null ? void 0 : _a.backend) === "PyTorch" ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
                            createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                              trigger: withCtx(() => [
                                _hoisted_9$1
                              ]),
                              default: withCtx(() => [
                                _hoisted_10$1,
                                createTextVNode(" If self attention is >0, SAG will guide the model and improve the quality of the image at the cost of speed. Higher values will follow the guidance more closely, which can lead to better, more sharp and detailed outputs. ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NSlider), {
                              value: unref(settings).data.settings.img2img.self_attention_scale,
                              "onUpdate:value": _cache[9] || (_cache[9] = ($event) => unref(settings).data.settings.img2img.self_attention_scale = $event),
                              min: 0,
                              max: 1,
                              step: 0.05,
                              style: { "margin-right": "12px" }
                            }, null, 8, ["value"]),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.img2img.self_attention_scale,
                              "onUpdate:value": _cache[10] || (_cache[10] = ($event) => unref(settings).data.settings.img2img.self_attention_scale = $event),
                              size: "small",
                              style: { "min-width": "96px", "width": "96px" },
                              min: 0,
                              max: 1,
                              step: 0.05
                            }, null, 8, ["value"])
                          ])) : createCommentVNode("", true),
                          createBaseVNode("div", _hoisted_11$1, [
                            createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                              trigger: withCtx(() => [
                                _hoisted_12$1
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Number of images to generate after each other. ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NSlider), {
                              value: unref(settings).data.settings.img2img.batch_count,
                              "onUpdate:value": _cache[11] || (_cache[11] = ($event) => unref(settings).data.settings.img2img.batch_count = $event),
                              min: 1,
                              max: 9,
                              style: { "margin-right": "12px" }
                            }, null, 8, ["value"]),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.img2img.batch_count,
                              "onUpdate:value": _cache[12] || (_cache[12] = ($event) => unref(settings).data.settings.img2img.batch_count = $event),
                              size: "small",
                              style: { "min-width": "96px", "width": "96px" },
                              min: 1,
                              max: 9
                            }, null, 8, ["value"])
                          ]),
                          createVNode(_sfc_main$6, {
                            "batch-size-object": unref(settings).data.settings.img2img
                          }, null, 8, ["batch-size-object"]),
                          createBaseVNode("div", _hoisted_13$1, [
                            createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                              trigger: withCtx(() => [
                                _hoisted_14$1
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Lower values will stick more to the original image, 0.5-0.75 is ideal ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NSlider), {
                              value: unref(settings).data.settings.img2img.denoising_strength,
                              "onUpdate:value": _cache[13] || (_cache[13] = ($event) => unref(settings).data.settings.img2img.denoising_strength = $event),
                              min: 0.1,
                              max: 1,
                              style: { "margin-right": "12px" },
                              step: 0.025
                            }, null, 8, ["value"]),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.img2img.denoising_strength,
                              "onUpdate:value": _cache[14] || (_cache[14] = ($event) => unref(settings).data.settings.img2img.denoising_strength = $event),
                              size: "small",
                              style: { "min-width": "96px", "width": "96px" },
                              min: 0.1,
                              max: 1,
                              step: 0.025
                            }, null, 8, ["value"])
                          ]),
                          createBaseVNode("div", _hoisted_15$1, [
                            createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                              trigger: withCtx(() => [
                                _hoisted_16$1
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Seed is a number that represents the starting canvas of your image. If you want to create the same image as your friend, you can use the same settings and seed to do so. "),
                                _hoisted_17$1
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.img2img.seed,
                              "onUpdate:value": _cache[15] || (_cache[15] = ($event) => unref(settings).data.settings.img2img.seed = $event),
                              size: "small",
                              min: -1,
                              max: 999999999999,
                              style: { "flex-grow": "1" }
                            }, null, 8, ["value"])
                          ])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(NGi), null, {
              default: withCtx(() => [
                createVNode(_sfc_main$7, { generate }),
                createVNode(_sfc_main$8, {
                  "current-image": unref(global).state.img2img.currentImage,
                  images: unref(global).state.img2img.images,
                  data: unref(settings).data.settings.img2img,
                  onImageClicked: _cache[16] || (_cache[16] = ($event) => unref(global).state.img2img.currentImage = $event)
                }, null, 8, ["current-image", "images", "data"]),
                createVNode(_sfc_main$9, {
                  style: { "margin-top": "12px" },
                  "gen-data": unref(global).state.img2img.genData
                }, null, 8, ["gen-data"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const Img2Img_vue_vue_type_style_index_0_scoped_fe0214b4_lang = "";
const Img2Img = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-fe0214b4"]]);
var VueDrawingCanvas = /* @__PURE__ */ defineComponent({
  name: "VueDrawingCanvas",
  props: {
    strokeType: {
      type: String,
      validator: (value) => {
        return ["dash", "line", "square", "circle", "triangle", "half_triangle"].indexOf(value) !== -1;
      },
      default: () => "dash"
    },
    fillShape: {
      type: Boolean,
      default: () => false
    },
    width: {
      type: [String, Number],
      default: () => 600
    },
    height: {
      type: [String, Number],
      default: () => 400
    },
    image: {
      type: String,
      default: () => ""
    },
    eraser: {
      type: Boolean,
      default: () => false
    },
    color: {
      type: String,
      default: () => "#000000"
    },
    lineWidth: {
      type: Number,
      default: () => 5
    },
    lineCap: {
      type: String,
      validator: (value) => {
        return ["round", "square", "butt"].indexOf(value) !== -1;
      },
      default: () => "round"
    },
    lineJoin: {
      type: String,
      validator: (value) => {
        return ["miter", "round", "bevel"].indexOf(value) !== -1;
      },
      default: () => "miter"
    },
    lock: {
      type: Boolean,
      default: () => false
    },
    styles: {
      type: [Array, String, Object]
    },
    classes: {
      type: [Array, String, Object]
    },
    backgroundColor: {
      type: String,
      default: () => "#FFFFFF"
    },
    backgroundImage: {
      type: String,
      default: () => null
    },
    watermark: {
      type: Object,
      default: () => null
    },
    saveAs: {
      type: String,
      validator: (value) => {
        return ["jpeg", "png"].indexOf(value) !== -1;
      },
      default: () => "png"
    },
    canvasId: {
      type: String,
      default: () => "VueDrawingCanvas"
    },
    initialImage: {
      type: Array,
      default: () => []
    },
    additionalImages: {
      type: Array,
      default: () => []
    },
    outputWidth: {
      type: Number
    },
    outputHeight: {
      type: Number
    }
  },
  data() {
    return {
      loadedImage: null,
      drawing: false,
      context: null,
      images: [],
      strokes: {
        type: "",
        from: {
          x: 0,
          y: 0
        },
        coordinates: [],
        color: "",
        width: "",
        fill: false,
        lineCap: "",
        lineJoin: ""
      },
      guides: [],
      trash: []
    };
  },
  mounted() {
    this.setContext();
    this.$nextTick(() => {
      this.drawInitialImage();
      this.drawAdditionalImages();
    });
  },
  watch: {
    backgroundImage: function() {
      this.loadedImage = null;
    }
  },
  methods: {
    async setContext() {
      let canvas = document.querySelector("#" + this.canvasId);
      this.context = this.context ? this.context : canvas.getContext("2d");
      await this.setBackground();
    },
    drawInitialImage() {
      if (this.initialImage && this.initialImage.length > 0) {
        this.images = [].concat(this.images, this.initialImage);
        this.redraw(true);
      }
    },
    drawAdditionalImages() {
      if (this.additionalImages && this.additionalImages.length > 0) {
        let canvas = document.querySelector("#" + this.canvasId);
        this.additionalImages.forEach((watermarkObject) => {
          this.drawWatermark(canvas, this.context, watermarkObject);
        });
      }
    },
    clear() {
      this.context.clearRect(0, 0, Number(this.width), Number(this.height));
    },
    async setBackground() {
      this.clear();
      this.context.fillStyle = this.backgroundColor;
      this.context.fillRect(0, 0, Number(this.width), Number(this.height));
      await this.$nextTick(async () => {
        await this.drawBackgroundImage();
      });
      this.save();
    },
    async drawBackgroundImage() {
      if (!this.loadedImage) {
        return new Promise((resolve) => {
          if (!this.backgroundImage) {
            resolve();
            return;
          }
          const image = new Image();
          image.src = this.backgroundImage;
          image.onload = () => {
            this.context.drawImage(image, 0, 0, Number(this.width), Number(this.height));
            this.loadedImage = image;
            resolve();
          };
        });
      } else {
        this.context.drawImage(this.loadedImage, 0, 0, Number(this.width), Number(this.height));
      }
    },
    getCoordinates(event) {
      let x, y;
      if (event.touches && event.touches.length > 0) {
        let canvas = document.querySelector("#" + this.canvasId);
        let rect = canvas.getBoundingClientRect();
        x = event.touches[0].clientX - rect.left;
        y = event.touches[0].clientY - rect.top;
      } else {
        x = event.offsetX;
        y = event.offsetY;
      }
      return {
        x,
        y
      };
    },
    startDraw(event) {
      if (!this.lock) {
        this.drawing = true;
        let coordinate = this.getCoordinates(event);
        this.strokes = {
          type: this.eraser ? "eraser" : this.strokeType,
          from: coordinate,
          coordinates: [],
          color: this.eraser ? this.backgroundColor : this.color,
          width: this.lineWidth,
          fill: this.eraser || this.strokeType === "dash" || this.strokeType === "line" ? false : this.fillShape,
          lineCap: this.lineCap,
          lineJoin: this.lineJoin
        };
        this.guides = [];
      }
    },
    draw(event) {
      if (this.drawing) {
        if (!this.context) {
          this.setContext();
        }
        let coordinate = this.getCoordinates(event);
        if (this.eraser || this.strokeType === "dash") {
          this.strokes.coordinates.push(coordinate);
          this.drawShape(this.context, this.strokes, false);
        } else {
          switch (this.strokeType) {
            case "line":
              this.guides = [{
                x: coordinate.x,
                y: coordinate.y
              }];
              break;
            case "square":
              this.guides = [{
                x: coordinate.x,
                y: this.strokes.from.y
              }, {
                x: coordinate.x,
                y: coordinate.y
              }, {
                x: this.strokes.from.x,
                y: coordinate.y
              }, {
                x: this.strokes.from.x,
                y: this.strokes.from.y
              }];
              break;
            case "triangle":
              let center = Math.floor((coordinate.x - this.strokes.from.x) / 2) < 0 ? Math.floor((coordinate.x - this.strokes.from.x) / 2) * -1 : Math.floor((coordinate.x - this.strokes.from.x) / 2);
              let width = this.strokes.from.x < coordinate.x ? this.strokes.from.x + center : this.strokes.from.x - center;
              this.guides = [{
                x: coordinate.x,
                y: this.strokes.from.y
              }, {
                x: width,
                y: coordinate.y
              }, {
                x: this.strokes.from.x,
                y: this.strokes.from.y
              }];
              break;
            case "half_triangle":
              this.guides = [{
                x: coordinate.x,
                y: this.strokes.from.y
              }, {
                x: this.strokes.from.x,
                y: coordinate.y
              }, {
                x: this.strokes.from.x,
                y: this.strokes.from.y
              }];
              break;
            case "circle":
              let radiusX = this.strokes.from.x - coordinate.x < 0 ? (this.strokes.from.x - coordinate.x) * -1 : this.strokes.from.x - coordinate.x;
              this.guides = [{
                x: this.strokes.from.x > coordinate.x ? this.strokes.from.x - radiusX : this.strokes.from.x + radiusX,
                y: this.strokes.from.y
              }, {
                x: radiusX,
                y: radiusX
              }];
              break;
          }
          this.drawGuide(true);
        }
      }
    },
    drawGuide(closingPath) {
      this.redraw(true);
      this.$nextTick(() => {
        this.context.strokeStyle = this.color;
        this.context.lineWidth = 1;
        this.context.lineJoin = this.lineJoin;
        this.context.lineCap = this.lineCap;
        this.context.beginPath();
        this.context.setLineDash([15, 15]);
        if (this.strokes.type === "circle") {
          this.context.ellipse(this.guides[0].x, this.guides[0].y, this.guides[1].x, this.guides[1].y, 0, 0, Math.PI * 2);
        } else {
          this.context.moveTo(this.strokes.from.x, this.strokes.from.y);
          this.guides.forEach((coordinate) => {
            this.context.lineTo(coordinate.x, coordinate.y);
          });
          if (closingPath) {
            this.context.closePath();
          }
        }
        this.context.stroke();
      });
    },
    drawShape(context, strokes, closingPath) {
      context.strokeStyle = strokes.color;
      context.fillStyle = strokes.color;
      context.lineWidth = strokes.width;
      context.lineJoin = strokes.lineJoin === void 0 ? this.lineJoin : strokes.lineJoin;
      context.lineCap = strokes.lineCap === void 0 ? this.lineCap : strokes.lineCap;
      context.beginPath();
      context.setLineDash([]);
      if (strokes.type === "circle") {
        context.ellipse(strokes.coordinates[0].x, strokes.coordinates[0].y, strokes.coordinates[1].x, strokes.coordinates[1].y, 0, 0, Math.PI * 2);
      } else {
        context.moveTo(strokes.from.x, strokes.from.y);
        strokes.coordinates.forEach((stroke) => {
          context.lineTo(stroke.x, stroke.y);
        });
        if (closingPath) {
          context.closePath();
        }
      }
      if (strokes.fill) {
        context.fill();
      } else {
        context.stroke();
      }
    },
    stopDraw() {
      if (this.drawing) {
        this.strokes.coordinates = this.guides.length > 0 ? this.guides : this.strokes.coordinates;
        this.images.push(this.strokes);
        this.redraw(true);
        this.drawing = false;
        this.trash = [];
      }
    },
    reset() {
      if (!this.lock) {
        this.images = [];
        this.strokes = {
          type: "",
          coordinates: [],
          color: "",
          width: "",
          fill: false,
          lineCap: "",
          lineJoin: ""
        };
        this.guides = [];
        this.trash = [];
        this.redraw(true);
      }
    },
    undo() {
      if (!this.lock) {
        let strokes = this.images.pop();
        if (strokes) {
          this.trash.push(strokes);
          this.redraw(true);
        }
      }
    },
    redo() {
      if (!this.lock) {
        let strokes = this.trash.pop();
        if (strokes) {
          this.images.push(strokes);
          this.redraw(true);
        }
      }
    },
    async redraw(output) {
      output = typeof output !== "undefined" ? output : true;
      await this.setBackground().then(() => {
        this.drawAdditionalImages();
      }).then(() => {
        let baseCanvas = document.createElement("canvas");
        let baseCanvasContext = baseCanvas.getContext("2d");
        baseCanvas.width = Number(this.width);
        baseCanvas.height = Number(this.height);
        if (baseCanvasContext) {
          this.images.forEach((stroke) => {
            if (baseCanvasContext) {
              baseCanvasContext.globalCompositeOperation = stroke.type === "eraser" ? "destination-out" : "source-over";
              if (stroke.type !== "circle" || stroke.type === "circle" && stroke.coordinates.length > 0) {
                this.drawShape(baseCanvasContext, stroke, stroke.type === "eraser" || stroke.type === "dash" || stroke.type === "line" ? false : true);
              }
            }
          });
          this.context.drawImage(baseCanvas, 0, 0, Number(this.width), Number(this.height));
        }
      }).then(() => {
        if (output) {
          this.save();
        }
      });
    },
    wrapText(context, text, x, y, maxWidth, lineHeight) {
      const newLineRegex = /(\r\n|\n\r|\n|\r)+/g;
      const whitespaceRegex = /\s+/g;
      var lines = text.split(newLineRegex).filter((word) => word.length > 0);
      for (let lineNumber = 0; lineNumber < lines.length; lineNumber++) {
        var words = lines[lineNumber].split(whitespaceRegex).filter((word) => word.length > 0);
        var line = "";
        for (var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + " ";
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            if (this.watermark && this.watermark.fontStyle && this.watermark.fontStyle.drawType && this.watermark.fontStyle.drawType === "stroke") {
              context.strokeText(line, x, y);
            } else {
              context.fillText(line, x, y);
            }
            line = words[n] + " ";
            y += lineHeight;
          } else {
            line = testLine;
          }
        }
        if (this.watermark && this.watermark.fontStyle && this.watermark.fontStyle.drawType && this.watermark.fontStyle.drawType === "stroke") {
          context.strokeText(line, x, y);
        } else {
          context.fillText(line, x, y);
        }
        y += words.length > 0 ? lineHeight : 0;
      }
    },
    save() {
      let canvas = document.querySelector("#" + this.canvasId);
      if (this.watermark) {
        let temp = document.createElement("canvas");
        let ctx = temp.getContext("2d");
        if (ctx) {
          temp.width = Number(this.width);
          temp.height = Number(this.height);
          ctx.drawImage(canvas, 0, 0, Number(this.width), Number(this.height));
          this.drawWatermark(temp, ctx, this.watermark);
        }
      } else {
        let temp = document.createElement("canvas");
        let tempCtx = temp.getContext("2d");
        let tempWidth = this.outputWidth === void 0 ? this.width : this.outputWidth;
        let tempHeight = this.outputHeight === void 0 ? this.height : this.outputHeight;
        temp.width = Number(tempWidth);
        temp.height = Number(tempHeight);
        if (tempCtx) {
          tempCtx.drawImage(canvas, 0, 0, Number(tempWidth), Number(tempHeight));
          this.$emit("update:image", temp.toDataURL("image/" + this.saveAs, 1));
          return temp.toDataURL("image/" + this.saveAs, 1);
        }
      }
    },
    drawWatermark(canvas, ctx, watermark) {
      if (watermark.type === "Image") {
        let imageWidth = watermark.imageStyle ? watermark.imageStyle.width ? watermark.imageStyle.width : Number(this.width) : Number(this.width);
        let imageHeight = watermark.imageStyle ? watermark.imageStyle.height ? watermark.imageStyle.height : Number(this.height) : Number(this.height);
        const image = new Image();
        image.src = watermark.source;
        image.onload = () => {
          if (watermark && ctx) {
            ctx.drawImage(image, watermark.x, watermark.y, Number(imageWidth), Number(imageHeight));
          }
          let temp = document.createElement("canvas");
          let tempCtx = temp.getContext("2d");
          let tempWidth = this.outputWidth === void 0 ? this.width : this.outputWidth;
          let tempHeight = this.outputHeight === void 0 ? this.height : this.outputHeight;
          temp.width = Number(tempWidth);
          temp.height = Number(tempHeight);
          if (tempCtx) {
            tempCtx.drawImage(canvas, 0, 0, Number(tempWidth), Number(tempHeight));
            this.$emit("update:image", temp.toDataURL("image/" + this.saveAs, 1));
            return temp.toDataURL("image/" + this.saveAs, 1);
          }
        };
      } else if (watermark.type === "Text") {
        let font = watermark.fontStyle ? watermark.fontStyle.font ? watermark.fontStyle.font : "20px serif" : "20px serif";
        let align = watermark.fontStyle ? watermark.fontStyle.textAlign ? watermark.fontStyle.textAlign : "start" : "start";
        let baseline = watermark.fontStyle ? watermark.fontStyle.textBaseline ? watermark.fontStyle.textBaseline : "alphabetic" : "alphabetic";
        let color = watermark.fontStyle ? watermark.fontStyle.color ? watermark.fontStyle.color : "#000000" : "#000000";
        ctx.font = font;
        ctx.textAlign = align;
        ctx.textBaseline = baseline;
        if (watermark.fontStyle && watermark.fontStyle.rotate) {
          let centerX, centerY;
          if (watermark.fontStyle && watermark.fontStyle.width) {
            centerX = watermark.x + Math.floor(watermark.fontStyle.width / 2);
          } else {
            centerX = watermark.x;
          }
          if (watermark.fontStyle && watermark.fontStyle.lineHeight) {
            centerY = watermark.y + Math.floor(watermark.fontStyle.lineHeight / 2);
          } else {
            centerY = watermark.y;
          }
          ctx.translate(centerX, centerY);
          ctx.rotate(watermark.fontStyle.rotate * Math.PI / 180);
          ctx.translate(centerX * -1, centerY * -1);
        }
        if (watermark.fontStyle && watermark.fontStyle.drawType && watermark.fontStyle.drawType === "stroke") {
          ctx.strokeStyle = watermark.fontStyle.color;
          if (watermark.fontStyle && watermark.fontStyle.width) {
            this.wrapText(ctx, watermark.source, watermark.x, watermark.y, watermark.fontStyle.width, watermark.fontStyle.lineHeight);
          } else {
            ctx.strokeText(watermark.source, watermark.x, watermark.y);
          }
        } else {
          ctx.fillStyle = color;
          if (watermark.fontStyle && watermark.fontStyle.width) {
            this.wrapText(ctx, watermark.source, watermark.x, watermark.y, watermark.fontStyle.width, watermark.fontStyle.lineHeight);
          } else {
            ctx.fillText(watermark.source, watermark.x, watermark.y);
          }
        }
        let temp = document.createElement("canvas");
        let tempCtx = temp.getContext("2d");
        let tempWidth = this.outputWidth === void 0 ? this.width : this.outputWidth;
        let tempHeight = this.outputHeight === void 0 ? this.height : this.outputHeight;
        temp.width = Number(tempWidth);
        temp.height = Number(tempHeight);
        if (tempCtx) {
          tempCtx.drawImage(canvas, 0, 0, Number(tempWidth), Number(tempHeight));
          this.$emit("update:image", temp.toDataURL("image/" + this.saveAs, 1));
          return temp.toDataURL("image/" + this.saveAs, 1);
        }
      }
    },
    isEmpty() {
      return this.images.length > 0 ? false : true;
    },
    getAllStrokes() {
      return this.images;
    }
  },
  render() {
    return h("canvas", {
      id: this.canvasId,
      height: Number(this.height),
      width: Number(this.width),
      style: {
        "touchAction": "none",
        // @ts-ignore
        ...this.styles
      },
      class: this.classes,
      onMousedown: ($event) => this.startDraw($event),
      onMousemove: ($event) => this.draw($event),
      onMouseup: () => this.stopDraw(),
      onMouseleave: () => this.stopDraw(),
      onTouchstart: ($event) => this.startDraw($event),
      onTouchmove: ($event) => this.draw($event),
      onTouchend: () => this.stopDraw(),
      onTouchleave: () => this.stopDraw(),
      onTouchcancel: () => this.stopDraw(),
      onPointerdown: ($event) => this.startDraw($event),
      onPointermove: ($event) => this.draw($event),
      onPointerup: () => this.stopDraw(),
      onPointerleave: () => this.stopDraw(),
      onPointercancel: () => this.stopDraw()
    });
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-debbedfc"), n = n(), popScopeId(), n);
const _hoisted_1 = { style: { "margin": "0 12px" } };
const _hoisted_2 = { style: { "display": "inline-flex", "align-items": "center" } };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "bi bi-eraser",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z" })
], -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "file-upload" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "file-upload" }, "Select image")
], -1));
const _hoisted_5 = { class: "flex-container" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Width", -1));
const _hoisted_7 = { class: "flex-container" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Height", -1));
const _hoisted_9 = { class: "flex-container" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Steps", -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("b", { class: "highlight" }, "We recommend using 20-50 steps for most images.", -1));
const _hoisted_12 = { class: "flex-container" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "CFG Scale", -1));
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("b", { class: "highlight" }, "We recommend using 3-15 for most images.", -1));
const _hoisted_15 = {
  key: 0,
  class: "flex-container"
};
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Self Attention Scale", -1));
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("b", { class: "highlight" }, "PyTorch ONLY.", -1));
const _hoisted_18 = { class: "flex-container" };
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Batch Count", -1));
const _hoisted_20 = { class: "flex-container" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Batch Size", -1));
const _hoisted_22 = { class: "flex-container" };
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Seed", -1));
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("b", { class: "highlight" }, "For random seed use -1.", -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Inpainting",
  setup(__props) {
    const global = useState();
    const settings = useSettings();
    const messageHandler = useMessage();
    const promptCount = computed(() => {
      return settings.data.settings.inpainting.prompt.split(spaceRegex).length - 1;
    });
    const negativePromptCount = computed(() => {
      return settings.data.settings.inpainting.negative_prompt.split(spaceRegex).length - 1;
    });
    const checkSeed = (seed) => {
      if (seed === -1) {
        seed = Math.floor(Math.random() * 999999999999);
      }
      return seed;
    };
    const generate = () => {
      var _a;
      if (settings.data.settings.inpainting.seed === null) {
        messageHandler.error("Please set a seed");
        return;
      }
      generateMask();
      global.state.generating = true;
      const seed = checkSeed(settings.data.settings.inpainting.seed);
      fetch(`${serverUrl}/api/generate/inpainting`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: {
            prompt: settings.data.settings.inpainting.prompt,
            image: settings.data.settings.inpainting.image,
            mask_image: settings.data.settings.inpainting.mask_image,
            id: v4(),
            negative_prompt: settings.data.settings.inpainting.negative_prompt,
            width: settings.data.settings.inpainting.width,
            height: settings.data.settings.inpainting.height,
            steps: settings.data.settings.inpainting.steps,
            guidance_scale: settings.data.settings.inpainting.cfg_scale,
            seed,
            batch_size: settings.data.settings.inpainting.batch_size,
            batch_count: settings.data.settings.inpainting.batch_count,
            scheduler: settings.data.settings.inpainting.sampler,
            self_attention_scale: settings.data.settings.inpainting.self_attention_scale,
            sigmas: settings.data.settings.inpainting.sigmas,
            sampler_settings: settings.data.settings.sampler_config[settings.data.settings.inpainting.sampler]
          },
          model: (_a = settings.data.settings.model) == null ? void 0 : _a.name
        })
      }).then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        global.state.generating = false;
        res.json().then((data) => {
          global.state.inpainting.images = data.images;
          global.state.inpainting.currentImage = data.images[0];
          global.state.progress = 0;
          global.state.total_steps = 0;
          global.state.current_step = 0;
          global.state.inpainting.genData = {
            time_taken: parseFloat(parseFloat(data.time).toFixed(4)),
            seed
          };
        });
      }).catch((err) => {
        global.state.generating = false;
        messageHandler.error(err);
      });
    };
    const canvas = ref();
    const maskCanvas = ref();
    const width = ref(512);
    const height = ref(512);
    const strokeWidth = ref(10);
    const eraser = ref(false);
    const preview = ref("");
    const imageContainer = ref();
    function handleImageUpdate(img) {
      var _a, _b;
      const containerWidth = (_a = imageContainer.value) == null ? void 0 : _a.clientWidth;
      if (containerWidth === void 0)
        return;
      const containerScaledWidth = containerWidth;
      const containerScaledHeight = img.height * containerScaledWidth / img.width;
      const screenHeight = window.innerHeight;
      const screenHeightScaledHeight = containerScaledHeight * 0.7 * screenHeight / containerScaledHeight;
      const screenHeightScaledWidth = img.width * screenHeightScaledHeight / img.height;
      if (containerScaledWidth < screenHeightScaledWidth) {
        width.value = containerScaledWidth;
        height.value = containerScaledHeight;
      } else {
        width.value = screenHeightScaledWidth;
        height.value = screenHeightScaledHeight;
      }
      (_b = canvas.value) == null ? void 0 : _b.redraw(false);
    }
    function previewImage(event) {
      const input = event.target;
      if (input.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          var _a;
          const i = (_a = e.target) == null ? void 0 : _a.result;
          if (i) {
            const s = i.toString();
            preview.value = s;
            const img = new Image();
            img.src = s;
            img.onload = () => {
              handleImageUpdate(img);
              settings.data.settings.inpainting.image = s;
            };
          }
        };
        reader.readAsDataURL(input.files[0]);
      }
    }
    async function clearCanvas() {
      var _a;
      (_a = canvas.value) == null ? void 0 : _a.reset();
    }
    function undo() {
      var _a;
      (_a = canvas.value) == null ? void 0 : _a.undo();
    }
    function redo() {
      var _a;
      (_a = canvas.value) == null ? void 0 : _a.redo();
    }
    function toggleEraser() {
      eraser.value = !eraser.value;
    }
    function generateMask() {
      var _a;
      const x = (_a = canvas.value) == null ? void 0 : _a.getAllStrokes();
      if (maskCanvas.value !== void 0) {
        maskCanvas.value.images = x;
        maskCanvas.value.redraw(true);
      }
    }
    const burner = new BurnerClock(
      settings.data.settings.inpainting,
      settings,
      generate
    );
    onUnmounted(() => {
      burner.cleanup();
    });
    if (settings.data.settings.inpainting.image !== "") {
      preview.value = settings.data.settings.inpainting.image;
      const img = new Image();
      img.src = settings.data.settings.inpainting.image;
      img.onload = () => {
        handleImageUpdate(img);
      };
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(NGrid), {
          cols: "1 m:2",
          "x-gap": "12",
          responsive: "screen"
        }, {
          default: withCtx(() => [
            createVNode(unref(NGi), null, {
              default: withCtx(() => [
                createVNode(unref(NCard), { title: "Input image" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", {
                      class: "image-container",
                      ref_key: "imageContainer",
                      ref: imageContainer
                    }, [
                      createVNode(unref(VueDrawingCanvas), {
                        width: width.value,
                        height: height.value,
                        backgroundImage: preview.value,
                        lineWidth: strokeWidth.value,
                        strokeType: "dash",
                        lineCap: "round",
                        lineJoin: "round",
                        fillShape: false,
                        eraser: eraser.value,
                        color: "black",
                        ref_key: "canvas",
                        ref: canvas,
                        saveAs: "png",
                        "canvas-id": "VueDrawingCanvas1"
                      }, null, 8, ["width", "height", "backgroundImage", "lineWidth", "eraser"]),
                      createVNode(unref(VueDrawingCanvas), {
                        image: unref(settings).data.settings.inpainting.mask_image,
                        "onUpdate:image": _cache[0] || (_cache[0] = ($event) => unref(settings).data.settings.inpainting.mask_image = $event),
                        width: width.value,
                        height: height.value,
                        ref_key: "maskCanvas",
                        ref: maskCanvas,
                        saveAs: "png",
                        style: { "display": "none" },
                        "canvas-id": "VueDrawingCanvas2"
                      }, null, 8, ["image", "width", "height"])
                    ], 512),
                    createVNode(unref(NSpace), {
                      inline: "",
                      justify: "space-between",
                      align: "center",
                      style: { "width": "100%", "margin-top": "12px" }
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_2, [
                          createVNode(unref(NButton), {
                            class: "utility-button",
                            onClick: undo
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NIcon), null, {
                                default: withCtx(() => [
                                  createVNode(unref(ArrowUndoSharp))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NButton), {
                            class: "utility-button",
                            onClick: redo
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NIcon), null, {
                                default: withCtx(() => [
                                  createVNode(unref(ArrowRedoSharp))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NButton), {
                            class: "utility-button",
                            onClick: toggleEraser
                          }, {
                            default: withCtx(() => [
                              eraser.value ? (openBlock(), createBlock(unref(NIcon), { key: 0 }, {
                                default: withCtx(() => [
                                  _hoisted_3
                                ]),
                                _: 1
                              })) : (openBlock(), createBlock(unref(NIcon), { key: 1 }, {
                                default: withCtx(() => [
                                  createVNode(unref(BrushSharp))
                                ]),
                                _: 1
                              }))
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NButton), {
                            class: "utility-button",
                            onClick: clearCanvas
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(NIcon), null, {
                                default: withCtx(() => [
                                  createVNode(unref(TrashBinSharp))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NSlider), {
                            value: strokeWidth.value,
                            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => strokeWidth.value = $event),
                            min: 1,
                            max: 50,
                            step: 1,
                            style: { "width": "100px", "margin": "0 8px" }
                          }, null, 8, ["value"]),
                          createBaseVNode("p", null, toDisplayString(width.value) + "x" + toDisplayString(height.value), 1)
                        ]),
                        _hoisted_4
                      ]),
                      _: 1
                    }),
                    createBaseVNode("input", {
                      type: "file",
                      accept: "image/*",
                      onChange: previewImage,
                      id: "file-upload",
                      class: "hidden-input"
                    }, null, 32)
                  ]),
                  _: 1
                }),
                createVNode(unref(NCard), {
                  title: "Settings",
                  style: { "margin-top": "12px", "margin-bottom": "12px" }
                }, {
                  default: withCtx(() => [
                    createVNode(unref(NSpace), {
                      vertical: "",
                      class: "left-container"
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(unref(NInput), {
                            value: unref(settings).data.settings.inpainting.prompt,
                            "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(settings).data.settings.inpainting.prompt = $event),
                            type: "textarea",
                            placeholder: "Prompt",
                            "show-count": "",
                            onKeyup: _cache[3] || (_cache[3] = ($event) => unref(promptHandleKeyUp)(
                              $event,
                              unref(settings).data.settings.inpainting,
                              "prompt",
                              unref(global)
                            )),
                            onKeydown: unref(promptHandleKeyDown)
                          }, {
                            count: withCtx(() => [
                              createTextVNode(toDisplayString(promptCount.value), 1)
                            ]),
                            _: 1
                          }, 8, ["value", "onKeydown"]),
                          createVNode(unref(NInput), {
                            value: unref(settings).data.settings.inpainting.negative_prompt,
                            "onUpdate:value": _cache[4] || (_cache[4] = ($event) => unref(settings).data.settings.inpainting.negative_prompt = $event),
                            type: "textarea",
                            placeholder: "Negative prompt",
                            "show-count": "",
                            onKeyup: _cache[5] || (_cache[5] = ($event) => unref(promptHandleKeyUp)(
                              $event,
                              unref(settings).data.settings.inpainting,
                              "negative_prompt",
                              unref(global)
                            )),
                            onKeydown: unref(promptHandleKeyDown)
                          }, {
                            count: withCtx(() => [
                              createTextVNode(toDisplayString(negativePromptCount.value), 1)
                            ]),
                            _: 1
                          }, 8, ["value", "onKeydown"]),
                          createVNode(_sfc_main$4, { type: "inpainting" }),
                          createBaseVNode("div", _hoisted_5, [
                            _hoisted_6,
                            createVNode(unref(NSlider), {
                              value: unref(settings).data.settings.inpainting.width,
                              "onUpdate:value": _cache[6] || (_cache[6] = ($event) => unref(settings).data.settings.inpainting.width = $event),
                              min: 128,
                              max: 2048,
                              step: 8,
                              style: { "margin-right": "12px" }
                            }, null, 8, ["value"]),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.inpainting.width,
                              "onUpdate:value": _cache[7] || (_cache[7] = ($event) => unref(settings).data.settings.inpainting.width = $event),
                              size: "small",
                              style: { "min-width": "96px", "width": "96px" },
                              step: 8,
                              min: 128,
                              max: 2048
                            }, null, 8, ["value"])
                          ]),
                          createBaseVNode("div", _hoisted_7, [
                            _hoisted_8,
                            createVNode(unref(NSlider), {
                              value: unref(settings).data.settings.inpainting.height,
                              "onUpdate:value": _cache[8] || (_cache[8] = ($event) => unref(settings).data.settings.inpainting.height = $event),
                              min: 128,
                              max: 2048,
                              step: 8,
                              style: { "margin-right": "12px" }
                            }, null, 8, ["value"]),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.inpainting.height,
                              "onUpdate:value": _cache[9] || (_cache[9] = ($event) => unref(settings).data.settings.inpainting.height = $event),
                              size: "small",
                              style: { "min-width": "96px", "width": "96px" },
                              step: 8,
                              min: 128,
                              max: 2048
                            }, null, 8, ["value"])
                          ]),
                          createBaseVNode("div", _hoisted_9, [
                            createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                              trigger: withCtx(() => [
                                _hoisted_10
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Number of steps to take in the diffusion process. Higher values will result in more detailed images but will take longer to generate. There is also a point of diminishing returns around 100 steps. "),
                                _hoisted_11
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NSlider), {
                              value: unref(settings).data.settings.inpainting.steps,
                              "onUpdate:value": _cache[10] || (_cache[10] = ($event) => unref(settings).data.settings.inpainting.steps = $event),
                              min: 5,
                              max: 300,
                              style: { "margin-right": "12px" }
                            }, null, 8, ["value"]),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.inpainting.steps,
                              "onUpdate:value": _cache[11] || (_cache[11] = ($event) => unref(settings).data.settings.inpainting.steps = $event),
                              size: "small",
                              style: { "min-width": "96px", "width": "96px" },
                              min: 5,
                              max: 300
                            }, null, 8, ["value"])
                          ]),
                          createBaseVNode("div", _hoisted_12, [
                            createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                              trigger: withCtx(() => [
                                _hoisted_13
                              ]),
                              default: withCtx(() => [
                                createTextVNode(' Guidance scale indicates how much should model stay close to the prompt. Higher values might be exactly what you want, but generated images might have some artefacts. Lower values indicates that model can "dream" about this prompt more. '),
                                _hoisted_14
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NSlider), {
                              value: unref(settings).data.settings.inpainting.cfg_scale,
                              "onUpdate:value": _cache[12] || (_cache[12] = ($event) => unref(settings).data.settings.inpainting.cfg_scale = $event),
                              min: 1,
                              max: 30,
                              step: 0.5,
                              style: { "margin-right": "12px" }
                            }, null, 8, ["value"]),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.inpainting.cfg_scale,
                              "onUpdate:value": _cache[13] || (_cache[13] = ($event) => unref(settings).data.settings.inpainting.cfg_scale = $event),
                              size: "small",
                              style: { "min-width": "96px", "width": "96px" },
                              min: 1,
                              max: 30,
                              step: 0.5
                            }, null, 8, ["value"])
                          ]),
                          Number.isInteger(unref(settings).data.settings.inpainting.sampler) && ((_a = unref(settings).data.settings.model) == null ? void 0 : _a.backend) === "PyTorch" ? (openBlock(), createElementBlock("div", _hoisted_15, [
                            createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                              trigger: withCtx(() => [
                                _hoisted_16
                              ]),
                              default: withCtx(() => [
                                _hoisted_17,
                                createTextVNode(" If self attention is >0, SAG will guide the model and improve the quality of the image at the cost of speed. Higher values will follow the guidance more closely, which can lead to better, more sharp and detailed outputs. ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NSlider), {
                              value: unref(settings).data.settings.inpainting.self_attention_scale,
                              "onUpdate:value": _cache[14] || (_cache[14] = ($event) => unref(settings).data.settings.inpainting.self_attention_scale = $event),
                              min: 0,
                              max: 1,
                              step: 0.05,
                              style: { "margin-right": "12px" }
                            }, null, 8, ["value"]),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.inpainting.self_attention_scale,
                              "onUpdate:value": _cache[15] || (_cache[15] = ($event) => unref(settings).data.settings.inpainting.self_attention_scale = $event),
                              size: "small",
                              style: { "min-width": "96px", "width": "96px" },
                              min: 0,
                              max: 1,
                              step: 0.05
                            }, null, 8, ["value"])
                          ])) : createCommentVNode("", true),
                          createBaseVNode("div", _hoisted_18, [
                            createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                              trigger: withCtx(() => [
                                _hoisted_19
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Number of images to generate after each other. ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NSlider), {
                              value: unref(settings).data.settings.inpainting.batch_count,
                              "onUpdate:value": _cache[16] || (_cache[16] = ($event) => unref(settings).data.settings.inpainting.batch_count = $event),
                              min: 1,
                              max: 9,
                              style: { "margin-right": "12px" }
                            }, null, 8, ["value"]),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.inpainting.batch_count,
                              "onUpdate:value": _cache[17] || (_cache[17] = ($event) => unref(settings).data.settings.inpainting.batch_count = $event),
                              size: "small",
                              style: { "min-width": "96px", "width": "96px" },
                              min: 1,
                              max: 9
                            }, null, 8, ["value"])
                          ]),
                          createBaseVNode("div", _hoisted_20, [
                            createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                              trigger: withCtx(() => [
                                _hoisted_21
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Number of images to generate in paralel. ")
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NSlider), {
                              value: unref(settings).data.settings.inpainting.batch_size,
                              "onUpdate:value": _cache[18] || (_cache[18] = ($event) => unref(settings).data.settings.inpainting.batch_size = $event),
                              min: 1,
                              max: 9,
                              style: { "margin-right": "12px" }
                            }, null, 8, ["value"]),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.inpainting.batch_size,
                              "onUpdate:value": _cache[19] || (_cache[19] = ($event) => unref(settings).data.settings.inpainting.batch_size = $event),
                              size: "small",
                              style: { "min-width": "96px", "width": "96px" },
                              min: 1,
                              max: 9
                            }, null, 8, ["value"])
                          ]),
                          createBaseVNode("div", _hoisted_22, [
                            createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                              trigger: withCtx(() => [
                                _hoisted_23
                              ]),
                              default: withCtx(() => [
                                createTextVNode(" Seed is a number that represents the starting canvas of your image. If you want to create the same image as your friend, you can use the same settings and seed to do so. "),
                                _hoisted_24
                              ]),
                              _: 1
                            }),
                            createVNode(unref(NInputNumber), {
                              value: unref(settings).data.settings.inpainting.seed,
                              "onUpdate:value": _cache[20] || (_cache[20] = ($event) => unref(settings).data.settings.inpainting.seed = $event),
                              size: "small",
                              min: -1,
                              max: 999999999999,
                              style: { "flex-grow": "1" }
                            }, null, 8, ["value"])
                          ])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(unref(NGi), null, {
              default: withCtx(() => [
                createVNode(_sfc_main$7, { generate }),
                createVNode(_sfc_main$8, {
                  "current-image": unref(global).state.inpainting.currentImage,
                  images: unref(global).state.inpainting.images,
                  data: unref(settings).data.settings.inpainting,
                  onImageClicked: _cache[21] || (_cache[21] = ($event) => unref(global).state.inpainting.currentImage = $event)
                }, null, 8, ["current-image", "images", "data"]),
                createVNode(_sfc_main$9, {
                  style: { "margin-top": "12px" },
                  "gen-data": unref(global).state.inpainting.genData
                }, null, 8, ["gen-data"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
const Inpainting_vue_vue_type_style_index_0_scoped_debbedfc_lang = "";
const Inpainting = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-debbedfc"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Image2ImageView",
  setup(__props) {
    const state = useState();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NTabs), {
        type: "segment",
        value: unref(state).state.img2img.tab,
        "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(state).state.img2img.tab = $event)
      }, {
        default: withCtx(() => [
          createVNode(unref(NTabPane), {
            tab: "Image to Image",
            name: "img2img"
          }, {
            default: withCtx(() => [
              createVNode(Img2Img)
            ]),
            _: 1
          }),
          createVNode(unref(NTabPane), {
            tab: "ControlNet",
            name: "controlnet"
          }, {
            default: withCtx(() => [
              createVNode(ControlNet)
            ]),
            _: 1
          }),
          createVNode(unref(NTabPane), {
            tab: "Inpainting",
            name: "inpainting"
          }, {
            default: withCtx(() => [
              createVNode(Inpainting)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["value"]);
    };
  }
});
export {
  _sfc_main as default
};
