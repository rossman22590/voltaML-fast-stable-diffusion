import { _ as _sfc_main$1 } from "./GenerateSection.vue_vue_type_script_setup_true_lang.js";
import { I as ImageUpload } from "./ImageUpload.js";
import { d as defineComponent, u as useState, a as useSettings, b as useMessage, D as ref, c as computed, e as openBlock, f as createElementBlock, g as createVNode, w as withCtx, h as unref, N as NGi, i as NCard, j as NSpace, n as createBaseVNode, x as NSelect, q as NTooltip, m as createTextVNode, k as NInput, t as toDisplayString, y as NGrid, s as serverUrl, z as spaceRegex, A as pushScopeId, B as popScopeId, _ as _export_sfc } from "./index.js";
import { v as v4 } from "./v4.js";
import { N as NSlider, a as NSwitch } from "./Switch.js";
import { N as NInputNumber } from "./InputNumber.js";
import "./CloudUpload.js";
const _withScopeId = (n) => (pushScopeId("data-v-95e673e5"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "main-container" };
const _hoisted_2 = { class: "flex-container" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Sampler", -1));
const _hoisted_4 = { class: "flex-container" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Treshold", -1));
const _hoisted_6 = { class: "flex-container" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "slider-label" }, "Weighted", -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TaggerView",
  setup(__props) {
    const global = useState();
    const settings = useSettings();
    const messageHandler = useMessage();
    const imageSelectCallback = (base64Image) => {
      settings.data.settings.tagger.image = base64Image;
    };
    const generate = () => {
      global.state.generating = true;
      fetch(`${serverUrl}/api/generate/interrogate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: {
            image: settings.data.settings.tagger.image,
            id: v4(),
            threshold: settings.data.settings.tagger.threshold
          },
          model: settings.data.settings.tagger.model
        })
      }).then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        global.state.generating = false;
        res.json().then(
          (data) => {
            global.state.tagger.positivePrompt = data.positive;
            global.state.tagger.negativePrompt = data.negative;
          }
        );
      }).catch((err) => {
        global.state.generating = false;
        messageHandler.error(err);
      });
    };
    const weighted = ref(false);
    function MapToPrompt(map) {
      if (weighted.value) {
        let weightedPrompt = Array();
        for (const [key, value] of map) {
          if (value.toFixed(2) === "1.00") {
            weightedPrompt.push(`${key}`);
            continue;
          } else {
            weightedPrompt.push(`(${key}: ${value.toFixed(2)})`);
          }
        }
        return weightedPrompt.join(", ");
      } else {
        let prompt = Array();
        for (const [key, value] of map) {
          prompt.push(key);
        }
        return prompt.join(", ");
      }
    }
    const computedPrompt = computed(() => {
      const sortedMap = new Map(
        [...global.state.tagger.positivePrompt].sort((a, b) => b[1] - a[1])
      );
      return MapToPrompt(sortedMap);
    });
    const computedNegativePrompt = computed(() => {
      const sortedMap = new Map(
        [...global.state.tagger.negativePrompt].sort((a, b) => b[1] - a[1])
      );
      return MapToPrompt(sortedMap);
    });
    const promptCount = computed(() => {
      return computedPrompt.value.split(spaceRegex).length - 1;
    });
    const negativePromptCount = computed(() => {
      return computedNegativePrompt.value.split(spaceRegex).length - 1;
    });
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
                createVNode(ImageUpload, {
                  callback: imageSelectCallback,
                  preview: unref(settings).data.settings.tagger.image,
                  style: { "margin-bottom": "12px" },
                  onFileDropped: _cache[0] || (_cache[0] = ($event) => unref(settings).data.settings.tagger.image = $event)
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
                        createBaseVNode("div", _hoisted_2, [
                          _hoisted_3,
                          createVNode(unref(NSelect), {
                            options: [
                              {
                                label: "Deepdanbooru",
                                value: "deepdanbooru"
                              },
                              {
                                label: "CLIP",
                                value: "clip"
                              },
                              {
                                label: "Flamingo",
                                value: "flamingo"
                              }
                            ],
                            value: unref(settings).data.settings.tagger.model,
                            "onUpdate:value": _cache[1] || (_cache[1] = ($event) => unref(settings).data.settings.tagger.model = $event),
                            style: { "flex-grow": "1" }
                          }, null, 8, ["value"])
                        ]),
                        createBaseVNode("div", _hoisted_4, [
                          createVNode(unref(NTooltip), { style: { "max-width": "600px" } }, {
                            trigger: withCtx(() => [
                              _hoisted_5
                            ]),
                            default: withCtx(() => [
                              createTextVNode(" Confidence treshold of the model. The higher the value, the more tokens will be given to you. ")
                            ]),
                            _: 1
                          }),
                          createVNode(unref(NSlider), {
                            value: unref(settings).data.settings.tagger.threshold,
                            "onUpdate:value": _cache[2] || (_cache[2] = ($event) => unref(settings).data.settings.tagger.threshold = $event),
                            min: 0.1,
                            max: 1,
                            style: { "margin-right": "12px" },
                            step: 0.025
                          }, null, 8, ["value"]),
                          createVNode(unref(NInputNumber), {
                            value: unref(settings).data.settings.tagger.threshold,
                            "onUpdate:value": _cache[3] || (_cache[3] = ($event) => unref(settings).data.settings.tagger.threshold = $event),
                            size: "small",
                            style: { "min-width": "96px", "width": "96px" },
                            min: 0.1,
                            max: 1,
                            step: 0.025
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
                createVNode(_sfc_main$1, {
                  generate,
                  "do-not-disable-generate": ""
                }),
                createVNode(unref(NCard), null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_6, [
                      _hoisted_7,
                      createVNode(unref(NSwitch), {
                        value: weighted.value,
                        "onUpdate:value": _cache[4] || (_cache[4] = ($event) => weighted.value = $event)
                      }, null, 8, ["value"])
                    ]),
                    createVNode(unref(NInput), {
                      value: computedPrompt.value,
                      "onUpdate:value": _cache[5] || (_cache[5] = ($event) => computedPrompt.value = $event),
                      type: "textarea",
                      placeholder: "Prompt",
                      "show-count": ""
                    }, {
                      count: withCtx(() => [
                        createTextVNode(toDisplayString(promptCount.value), 1)
                      ]),
                      _: 1
                    }, 8, ["value"]),
                    createVNode(unref(NInput), {
                      value: computedNegativePrompt.value,
                      "onUpdate:value": _cache[6] || (_cache[6] = ($event) => computedNegativePrompt.value = $event),
                      type: "textarea",
                      placeholder: "Negative prompt",
                      "show-count": ""
                    }, {
                      count: withCtx(() => [
                        createTextVNode(toDisplayString(negativePromptCount.value), 1)
                      ]),
                      _: 1
                    }, 8, ["value"])
                  ]),
                  _: 1
                })
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
const TaggerView_vue_vue_type_style_index_0_scoped_95e673e5_lang = "";
const TaggerView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-95e673e5"]]);
export {
  TaggerView as default
};
