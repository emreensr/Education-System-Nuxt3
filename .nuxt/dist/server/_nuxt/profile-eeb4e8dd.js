import __nuxt_component_0 from "./Icon-55c87a06.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-26e5a74c.js";
import { _ as __nuxt_component_2 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "destr";
import "devalue";
import "./config-ea18f8e6.js";
import "klona";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "maska";
import "date-fns";
import "defu";
const _sfc_main = {
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_NuxtPage = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app bg-[#F4F5F7] p-5" }, _attrs))}><div class="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:my-3 max-w-8xl container mx-auto"><div class="py-10 bg-white shadow-md p-5 col-span-12 lg:col-span-3 lg:h-screen"><div class="flex items-center justify-center"><label for="image" class="relative cursor-pointer"><img class="rounded-md" width="120" src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f7703994b69d48ca802df55729a2325c_xl.jpg"><div class="absolute bottom-0 right-0 rounded-full bg-white shadow-xl border p-1 border-gray-300 inline-block w-[32px]">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:pencil-simple-line-bold",
        size: "17",
        class: "-mt-1 ml-0.5"
      }, null, _parent));
      _push(`</div></label><input class="hidden" type="file" id="image" accept="image/png, image/jpeg, image/jpg"></div><ul><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/user/emre-ensar",
        class: "flex space-x-2 text-[15px] bg-purple-500 mt-10 shadow-md mb-2 cursor-pointer hover:text-[#EC5252] duration-150 px-2 py-2 mb-1 block rounded-md hover:bg-purple-400",
        "exact-active-class": "bg-gray-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "icon-park-outline:preview-open",
              size: "22",
              color: "white"
            }, null, _parent2, _scopeId));
            _push2(`<span class="font-normal text-sm text-white"${_scopeId}>Profilimi Görüntüle</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "icon-park-outline:preview-open",
                size: "22",
                color: "white"
              }),
              createVNode("span", { class: "font-normal text-sm text-white" }, "Profilimi Görüntüle")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/profile",
        class: "flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100",
        "exact-active-class": "bg-gray-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "material-symbols:person",
              size: "22",
              color: "gray"
            }, null, _parent2, _scopeId));
            _push2(`<span class="font-normal text-sm text-[#3F4254]"${_scopeId}>Kişisel Bilgilerim</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "material-symbols:person",
                size: "22",
                color: "gray"
              }),
              createVNode("span", { class: "font-normal text-sm text-[#3F4254]" }, "Kişisel Bilgilerim")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/profile/my-adverts",
        class: "flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100",
        "exact-active-class": "bg-gray-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "material-symbols:chrome-reader-mode-outline-rounded",
              size: "22",
              color: "gray"
            }, null, _parent2, _scopeId));
            _push2(`<span class="font-normal text-sm text-[#3F4254]"${_scopeId}>İlanlarım</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "material-symbols:chrome-reader-mode-outline-rounded",
                size: "22",
                color: "gray"
              }),
              createVNode("span", { class: "font-normal text-sm text-[#3F4254]" }, "İlanlarım")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/profile/my-lessons",
        class: "flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100",
        "exact-active-class": "bg-gray-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "solar:notebook-linear",
              size: "22",
              color: "gray"
            }, null, _parent2, _scopeId));
            _push2(`<span class="font-normal text-sm text-[#3F4254]"${_scopeId}>Hangi Dersleri Verebilirsin?</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "solar:notebook-linear",
                size: "22",
                color: "gray"
              }),
              createVNode("span", { class: "font-normal text-sm text-[#3F4254]" }, "Hangi Dersleri Verebilirsin?")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/profile/lesson-requests",
        class: "flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100",
        "exact-active-class": "bg-gray-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "carbon:document-multiple-01",
              size: "22",
              color: "gray"
            }, null, _parent2, _scopeId));
            _push2(`<span class="font-normal text-sm text-[#3F4254]"${_scopeId}>Ders Talepleri</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "carbon:document-multiple-01",
                size: "22",
                color: "gray"
              }),
              createVNode("span", { class: "font-normal text-sm text-[#3F4254]" }, "Ders Talepleri")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/profile/comments",
        class: "flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100",
        "exact-active-class": "bg-gray-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "uil:comments-alt",
              size: "22",
              color: "gray"
            }, null, _parent2, _scopeId));
            _push2(`<span class="font-normal text-sm text-[#3F4254]"${_scopeId}>Yorumlar</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "uil:comments-alt",
                size: "22",
                color: "gray"
              }),
              createVNode("span", { class: "font-normal text-sm text-[#3F4254]" }, "Yorumlar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/profile/invite-friends",
        class: "flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100",
        "exact-active-class": "bg-gray-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ic:baseline-person-add-alt-1",
              size: "22",
              color: "gray"
            }, null, _parent2, _scopeId));
            _push2(`<span class="font-normal text-sm text-[#3F4254]"${_scopeId}>Arkadaşına Tavsiye Et</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ic:baseline-person-add-alt-1",
                size: "22",
                color: "gray"
              }),
              createVNode("span", { class: "font-normal text-sm text-[#3F4254]" }, "Arkadaşına Tavsiye Et")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/profile/settings",
        class: "flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100",
        "exact-active-class": "bg-gray-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "material-symbols:settings-rounded",
              size: "22",
              color: "gray"
            }, null, _parent2, _scopeId));
            _push2(`<span class="font-normal text-sm text-[#3F4254]"${_scopeId}>Ayarlar</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "material-symbols:settings-rounded",
                size: "22",
                color: "gray"
              }),
              createVNode("span", { class: "font-normal text-sm text-[#3F4254]" }, "Ayarlar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><button class="w-full mt-10 bg-[#EC5252] rounded-full py-1.5 text-white">Çıkış Yap</button></ul></div><main class="min-h-screen col-span-12 lg:col-span-9 bg-white border-l">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=profile-eeb4e8dd.js.map
