import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-26e5a74c.mjs';
import { useSSRContext, ref, provide, mergeProps, withCtx, createVNode, inject, unref, createTextVNode, toDisplayString, openBlock, createBlock } from 'vue';
import { u as useHead, e as useState } from '../server.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import __nuxt_component_0$3 from './Icon-55c87a06.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'maska';
import 'date-fns';
import './config-ea18f8e6.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main$5 = {
  __name: "MobileNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = inject("mobile-navigation");
    const menuItems = useState("menuItems");
    const closeMenu = () => {
      isVisible.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      if (unref(isVisible)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black bg-opacity-80 backdrop-blur p-4 absolute top-full left-0 w-full h-custom border-t border-t-black pt-8 z-40" }, _attrs))}><nav role="navigation" class="px-4 space-y-8"><ul class="space-y-6 text-base uppercase font-medium text-gray-50"><!--[-->`);
        ssrRenderList(unref(menuItems), (menuItem) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: menuItem.target,
            title: menuItem.name,
            onClick: closeMenu
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(menuItem.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(menuItem.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul><div class="space-y-4"><div class="uppercase text-sm text-gray-400">Bizi takip edin</div><ul class="space-y-4 text-sm font-medium"><li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/",
          class: "flex items-center space-x-2.5",
          title: "Instagram Profile"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"${_scopeId}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"${_scopeId}></path></svg><span class="text-gray-100"${_scopeId}>Instagram</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "w-4 h-4 text-white",
                  viewBox: "0 0 24 24",
                  fill: "currentColor"
                }, [
                  createVNode("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" })
                ])),
                createVNode("span", { class: "text-gray-100" }, "Instagram")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/",
          class: "flex items-center space-x-2.5",
          title: "Facebook Profile"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"${_scopeId}><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"${_scopeId}></path></svg><span class="text-gray-100"${_scopeId}>Facebook</span>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "w-4 h-4 text-white",
                  viewBox: "0 0 24 24",
                  fill: "currentColor"
                }, [
                  createVNode("path", { d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" })
                ])),
                createVNode("span", { class: "text-gray-100" }, "Facebook")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></div></nav></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/MobileNavigation.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "MainNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const menuItems = useState("menuItems");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        role: "navigation",
        class: "hidden lg:block"
      }, _attrs))}><ul class="flex items-center space-x-9 font-semibold uppercase tracking-[0.15em] lg:text-md 2xl:text-sm text-accent"><!--[-->`);
      ssrRenderList(unref(menuItems), (menuItem) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: menuItem.target,
          title: menuItem.name,
          class: "hover:brightness-125"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(menuItem.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(menuItem.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/MainNavigation.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "HeaderLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const loginModal = ref(false);
    const registerModal = ref(false);
    const openLoginModal = () => {
      registerModal.value = false;
      loginModal.value = true;
    };
    const closeModal = () => {
      loginModal.value = false;
      registerModal.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      _push(`<!--[-->`);
      if (unref(loginModal)) {
        _push(`<div class="fixed top-0 left-0 w-full h-full bg-black z-50 bg-opacity-50 flex md:items-center justify-center transition duration-500"><div class="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xl overflow-y-auto loginPopup"><div class="flex items-center justify-between mx-auto mb-6"><h2 class="font-medium text-lg"></h2><button class="text-gray-600 hover:text-gray-800"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="flex flex-col justify-center px-6 py-12 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-sm"><img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="Your Company"><h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Giri\u015F Yap</h2></div><div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"><form class="space-y-6" action="#" method="POST"><div><label for="email" class="block text-sm font-medium leading-6 text-gray-900">E-Posta</label><div class="mt-2"><input id="email" name="email" type="email" autocomplete="email" required class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2.5 font-normal text-grey-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-400 focus:outline-none"></div></div><div><div class="flex items-center justify-between"><label for="password" class="block text-sm font-medium leading-6 text-gray-900">\u015Eifre</label><div class="text-sm"><a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">\u015Eifremi unuttum?</a></div></div><div class="mt-2"><input id="password" name="password" type="password" autocomplete="current-password" required class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2.5 font-normal text-grey-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-400 focus:outline-none"></div></div><div><button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Giri\u015F Yap</button></div></form>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/register",
          onClick: closeModal
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="mt-10 text-center text-sm text-gray-500"${_scopeId}> Hesab\u0131n\u0131z yok mu? <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"${_scopeId}>Kaydolun</a></p>`);
            } else {
              return [
                createVNode("p", { class: "mt-10 text-center text-sm text-gray-500" }, [
                  createTextVNode(" Hesab\u0131n\u0131z yok mu? "),
                  createVNode("a", {
                    href: "#",
                    class: "font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  }, "Kaydolun")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><ul class="flex items-center space-x-5 absolute right-4 top-1/2 transform -translate-y-1/2 lg:static lg:translate-y-0"><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        onClick: openLoginModal,
        class: "flex items-center space-x-2.5 text-sm cursor-pointer loginIcon"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" height="1em" viewBox="0 0 448 512"${_scopeId}><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "w-6 h-6",
                height: "1em",
                viewBox: "0 0 448 512"
              }, [
                createVNode("path", { d: "M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/HeaderLinks.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$3;
const _imports_0$1 = "" + publicAssetsURL("headLogo.png");
const _sfc_main$2 = {
  __name: "MainHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileNavigation = ref(false);
    provide("mobile-navigation", mobileNavigation);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutMobileNavigation = __nuxt_component_0$1;
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_LayoutMainNavigation = __nuxt_component_2;
      const _component_LayoutHeaderLinks = __nuxt_component_3;
      _push(`<header${ssrRenderAttrs(mergeProps({
        role: "heading",
        class: "py-4 shadow-lg bg-white sticky top-0 z-50"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_LayoutMobileNavigation, null, null, _parent));
      _push(`<div class="grid grid-cols-12 max-w-8xl mx-auto"><div class="col-span-12 lg:col-span-2 flex items-center justify-center relative h-16"><button type="button" class="absolute left-2.5 top-1/2 transform -translate-y-1/2 focus:outline-none lg:hidden rotate-180"><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" class="text-accent w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z" fill-rule="nonzero"></path></svg></button>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        title: "Ristorante Pizzeria Minigolf",
        class: "z-20 w-36 transition duration-400 flex items-center justify-center relative"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img width="140" id="logoMain"${ssrRenderAttr("src", _imports_0$1)} alt="Pizzeria Minigolf"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                width: "140",
                id: "logoMain",
                src: _imports_0$1,
                alt: "Pizzeria Minigolf"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-12 lg:col-span-8 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_LayoutMainNavigation, null, null, _parent));
      _push(`</div><div class="col-span-2 flex items-center justify-center 2xl:justify-end">`);
      _push(ssrRenderComponent(_component_LayoutHeaderLinks, null, null, _parent));
      _push(`</div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/MainHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _imports_0 = "" + publicAssetsURL("logo.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(_attrs)}><footer class="bg-[#010C20] shadow dark:bg-gray-900"><div class="mx-auto max-w-7xl"><div class="grid grid-cols-1 lg:grid-cols-4 lg:gap-10 gap-12 lg:py-12 py-8"><div class="col-span-1 lg:ml-0 ml-3"><img class="w-40 text-white" id="logoMain"${ssrRenderAttr("src", _imports_0)} alt="Pizzeria Minigolf"><p class="text-[#b0b0b8] py-5 lg:ml-0 ml-3"> Sizi alan\u0131nda uzman en yak\u0131n \xF6\u011Fretmene ula\u015Ft\u0131rarak en verimli \u015Fekilde \xF6zel ders alman\u0131z\u0131 sa\u011Flar. </p></div><div class="col-span-1 lg:ml-0 ml-3"><h1 class="text-white text-xl font-semibold">Kullan\u0131c\u0131 \u0130\u015Flemleri</h1><div class="flex space-x-20"><ul class="pl-4 mt-6 text-[#b0b0b8] space-y-3"><li>Kullan\u0131m \u015Eartlar\u0131</li><li>Gizlilik Politikam\u0131z</li><li>\u0130ade \u015Eartlar\u0131m\u0131z</li><li>Mesafeli Sat\u0131\u015F S\xF6zle\u015Fmemiz</li></ul></div></div><div class="col-span-1 lg:ml-0 ml-3"><h1 class="text-white text-xl font-semibold">\xD6zel Ders \u0130\u015Flemleri</h1><div class="flex space-x-20"><ul class="pl-4 mt-6 text-[#b0b0b8] space-y-3"><li>\xD6zel Ders Talepleri</li><li>\xD6zel Ders Verme</li><li>\xD6zel Ders Alma</li><li>Online Ders</li></ul></div></div><div class="col-span-1 lg:ml-0 ml-3"><h1 class="text-white text-xl font-semibold">Hesap \u0130\u015Flemleri</h1><div class="flex space-x-20"><ul class="pl-4 mt-6 text-[#b0b0b8] space-y-3"><li>Giri\u015F Yap</li><li>Kay\u0131t Ol</li></ul></div></div></div><hr class="border border-solid border-gray-800"><div class="lg:flex justify-between items-center pt-5 pb-8"><div class="text-[#b0b0b8] lg:ml-0 ml-3"><h1> \xA9 2023 <span class="text-white">Egitiva</span> T\xFCm haklar\u0131 sakl\u0131d\u0131r. </h1></div><div><ul class="flex text-white gap-2 lg:ml-0 ml-3 lg:mt-0 mt-3"><li><div class="flex lg:col-span-2 h-10 w-10 rounded-md bg-[#ffffff1a] items-center justify-center">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "gg:facebook",
    size: "20"
  }, null, _parent));
  _push(`</div></li><li><div class="flex lg:col-span-2 h-10 w-10 rounded-md bg-[#ffffff1a] items-center justify-center">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "jam:linkedin",
    size: "20"
  }, null, _parent));
  _push(`</div></li><li><div class="flex lg:col-span-2 h-10 w-10 rounded-md bg-[#ffffff1a] items-center justify-center">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "mdi:twitter",
    size: "20"
  }, null, _parent));
  _push(`</div></li><li><div class="flex lg:col-span-2 h-10 w-10 rounded-md bg-[#ffffff1a] items-center justify-center">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "mdi:youtube",
    size: "20"
  }, null, _parent));
  _push(`</div></li></ul></div></div></div></footer></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/MainFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "main",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      htmlAttrs: {
        class: "overflow-y-scroll scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutMainHeader = __nuxt_component_0;
      const _component_LayoutMainFooter = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_LayoutMainHeader, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_LayoutMainFooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/main.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=main-3b14bc64.mjs.map
