import { d as defineComponent, e as openBlock, f as createElementBlock, g as createVNode, w as withCtx, h as unref, c3 as NResult, i as NCard } from "./index.js";
const _hoisted_1 = { style: { "width": "100vw", "height": "100vh", "display": "flex", "align-items": "center", "justify-content": "center", "backdrop-filter": "blur(4px)" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "404View",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(NCard), { style: { "max-width": "40vw", "border-radius": "12px" } }, {
          default: withCtx(() => [
            createVNode(unref(NResult), {
              status: "404",
              title: "You got lucky, this page doesn't exist!",
              description: "Next time, there will be a rickroll.",
              size: "large"
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  _sfc_main as default
};
