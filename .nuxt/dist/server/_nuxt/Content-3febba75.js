import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Content",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center justify-center" }, _attrs))}><div class="w-full max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden"><div class="max-w-md mx-auto"><div class="h-[190px]" style="${ssrRenderStyle({ "background-image": "url(https://bgcp.bionluk.com/images/portfolio/1400x788/42ad5955-e341-4d1b-b166-d000da76cb08.png)", "background-size": "cover", "background-position": "center" })}"></div><div class="p-3 sm:p-3"><div class="flex flex-row"></div><div class="flex justify-between space-x-6 items-center"><div class="flex items-center space-x-2"><img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" class="rounded-full h-12 w-12" alt=""><div class="flex flex-col space-y-1"><a href="/user/emre-ensar"><span class="text-[15px]">${ssrInterpolate((_a = __props.data) == null ? void 0 : _a.name)}</span></a><span class="text-[#8b95a1] text-[15px]">Matematik</span></div></div><div><p class="text-[20px] font-bold text-[#0FB478]">${ssrInterpolate((_b = __props.data) == null ? void 0 : _b.price)}₺</p></div></div><p class="text-gray-800 text-base mt-2">Ben matematik konusunda size yardım edebilir ve gelişiminize katkıda bulunabilirim.</p><div class="flex justify-center items-center"><div class="font-semibold text-center mx-4"><button type="button" class="flex items-center gap-3 inline-block px-6 py-3 mt-4 mb-0 ml-auto font-bold text-white align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25"><span class="text-white text-md">İlana Git</span></button></div></div></div></div></div>`);
      {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Content.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Content-3febba75.js.map
