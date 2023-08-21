import { _ as __nuxt_component_0 } from "./nuxt-link-26e5a74c.js";
import { _ as __nuxt_component_1 } from "./Swiper-01a7ff46.js";
import { ref, mergeProps, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "destr";
import "klona";
import "maska";
import "date-fns";
import "defu";
import "swiper/vue";
import "swiper";
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const showModal = ref(false);
    const cities = ref([
      {
        id: 1,
        name: "İstanbul",
        locations: [
          {
            id: 1,
            name: "Tuzla"
          },
          {
            id: 2,
            name: "Pendik"
          },
          {
            id: 3,
            name: "Kartal"
          },
          {
            id: 4,
            name: "Maltepe"
          },
          {
            id: 5,
            name: "Ataşehir"
          }
        ]
      },
      {
        id: 2,
        name: "Kocaeli",
        locations: [
          {
            id: 3,
            name: "Gebze"
          },
          {
            id: 4,
            name: "Çayırova"
          }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_CardSwiper = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app md:bg-[#F4F5F7] md:p-5" }, _attrs))}><main class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:my-3 max-w-6xl container mx-auto"><div class="fixed bottom-0 left-0 right-0 z-50 bg-white md:hidden"><div class="flex justify-between items-center p-3 space-x-3"><div class="items-center mt-2"><div class="flex items-center space-x-2"><a href="/user/yunus-emre"><img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" class="rounded-full h-12 w-12" alt=""></a><div class="flex flex-col space-y-1"><a href="/user/yunus-emre"><span class="text-[14px] text-gray-400">Yunus Emre</span></a><span class="text-xl font-semibold">700₺/saat</span></div></div></div><div class="font-semibold text-center mx-4 p-3"><button type="button" class="flex items-center gap-2 inline-block px-5 py-3 mb-0 ml-auto font-bold text-white align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-md ease-in tracking-tight shadow-md bg-150 bg-x-25"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-white" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"></path></svg><span class="text-white text-md">Ders Talep Et</span></button></div></div></div><aside class="col-span-12 lg:col-span-4"><div class="bg-white shadow-md rounded-xl md:rounded-3xl md:p-5 lg:sticky lg:top-28"><div class="max-w-md mx-auto text-center items-center"><img class="bg-white md:rounded-xl mt-2 md:mt-0 shadow mb-4 w-full max-w-md mx-auto" src="https://bgcp.bionluk.com/images/portfolio/1400x788/96ef3b09-6a68-4002-b2be-7613f37848ea.png" alt=""><p class="font-semibold text-lg my-3">Matematik öğretmeninden online (tüm Türkiye) ve yüz yüze tecrübe ve enerji bir aradan</p><div class="border-b border-gray-100 max-w-full"></div></div><div class="p-3 md:p-0"><div class="hidden md:flex justify-between space-x-6 items-center mt-2"><div class="flex items-center space-x-2"><img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" class="rounded-full h-12 w-12" alt=""><div class="flex flex-col space-y-1"><a href="/profile/1"><span class="text-[15px]">Yunus Emre</span></a><span class="text-[#8b95a1] text-[15px]">Matematik</span></div></div><div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/user/emre-ensar",
        class: "flex items-center gap-3 inline-block px-3 py-2 mt-4 mb-0 ml-auto font-semibold text-white align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-green-500 leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-normal text-sm text-white"${_scopeId}>Profile Git</span>`);
          } else {
            return [
              createVNode("span", { class: "font-normal text-sm text-white" }, "Profile Git")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex justify-between space-x-6 mt-2 md:mt-5 items-center"><div class="flex items-center space-x-2"><div class="flex flex-col space-y-2"><span class="font-normal text-dm">Saatlik Ücret</span></div></div><div><p class="text-[18px] font-normal text-black">700₺</p></div></div><div class="flex justify-between space-x-6 mt-3 items-center"><div class="flex items-center space-x-2"><div class="flex flex-col space-y-2"><span class="font-normal text-md">Cevaplama Süresi</span></div></div><div><p class="text-[18px] font-normal text-black">1 saat</p></div></div><div class="flex justify-between space-x-6 mt-3 items-center"><div class="flex items-center space-x-2"><div class="flex flex-col space-y-2"><span class="font-normal text-md">Öğrenci Sayısı</span></div></div><div><p class="text-[18px] font-normal text-black">20+</p></div></div><div class="hidden md:flex justify-center items-center"><div class="font-semibold text-center mx-4"><button type="button" class="flex items-center gap-2 inline-block px-6 py-3 mt-8 mb-0 ml-auto font-bold text-right text-white align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-white" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"></path></svg><span class="text-white text-md">Ders Talep Et</span></button></div></div></div></div></aside><article class="col-span-12 lg:col-span-8"><div class="bg-white mb-4 p-3 items-center"><div class="overflow-x-auto"><ul class="flex flex-nowrap gap-3 m-0"><li class="flex-none w-auto border border-green-500/10 p-2 rounded-2xl bg-green-500/10 text-green-600 font-medium text-[15px]">Geometri</li><li class="flex-none w-auto border border-green-500/10 p-2 rounded-2xl bg-green-500/10 text-green-600 font-medium text-[15px]">Trigonometri</li><li class="flex-none w-auto border border-green-500/10 p-2 rounded-2xl bg-green-500/10 text-green-600 font-medium text-[15px]">Liner Cebir</li><li class="flex-none w-auto border border-green-500/10 p-2 rounded-2xl bg-green-500/10 text-green-600 font-medium text-[15px]">İstatistik</li><li class="flex-none w-auto border border-green-500/10 p-2 rounded-2xl bg-green-500/10 text-green-600 font-medium text-[15px]">Mantık</li></ul></div></div><div class="bg-white p-5 md:my-10"><div class="flex gap-1 items-center text-center font-semibold text-xl"><h2 class="text-[20px] font-semibold">Ders ile ilgili bilgiler</h2></div><p class="text-gray-800 text-base mt-3 leading-7"> Derslerimi öğrencimin seviyesine göre gelişim sağlayacak şekilde bir harita yöntem ve kılavuz metodlara uygun şekilde ders işlemekteyim. <p>Ödev,soru çözümü, denemeler gibi bir çok yöntemle pekiştirme yöntemleri uyguluyoruz.</p> Genellikle derslerim ; ilk 10 dk öğrencinin konuyla ilgili ön hazırlığını ölçerek daha sonra ki 40 dk ise bu ölçüme göre konu anlatımı içerik üretimi ve soru örnek çözümleri ile geçmekte son 10 dk ise konunun kısa özetiyle geçmektedir. </p></div><div class="flex bg-white p-3 lg:my-10"><div class="flex flex-col justify-center w-full px-2 py-1"><div class="flex justify-between items-center"><div class="flex flex-col"><h2 class="text-[20px] font-semibold">Ders mekanları</h2></div></div><div class="grid grid-cols-2 lg:grid-cols-3 gap-4 py-3"><div class="flex group shadow shadow-gray-200 items-center p-3 rounded-lg bg-white"><div class="flex items-center justify-center h-[45px] min-w-[45px] bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path></svg></div><div class="flex-1"><h4 class="mb-0 text-sm font-normal">Kendi evinde</h4></div></div><div class="flex group shadow shadow-gray-200 items-center p-3 rounded-lg bg-white"><div class="flex items-center justify-center h-[45px] min-w-[45px] bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path></svg></div><div class="flex-1"><h4 class="mb-0 text-sm font-normal">Öğrenci evinde</h4></div></div><div class="flex group shadow shadow-gray-200 items-center p-3 rounded-lg bg-white"><div class="flex items-center justify-center h-[45px] min-w-[45px] bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"></path></svg></div><div class="flex-1"><h4 class="mb-0 text-sm font-normal">Online</h4></div></div></div></div></div><div class="flex bg-white md:my-10 p-3"><div class="flex flex-col justify-center w-full py-1"><div class="flex gap-1 items-center text-center font-semibold text-xl mb-0.5 mx-3 mt-3"><div class="flex flex-col"><h2 class="text-[20px] font-semibold">Ders verdiği konumlar</h2></div></div><div class="grid grid-cols-2 lg:grid-cols-4 gap-4 py-3 px-3"><!--[-->`);
      ssrRenderList(unref(cities), (city, index) => {
        _push(`<div class="flex items-center bg-slate-100 rounded-md p-3">${ssrInterpolate(city.name)}</div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center items-center"><div class="font-semibold text-center mx-4"><button type="button" class="flex items-center gap-3 inline-block px-6 py-3 mt-4 mb-0 ml-auto font-bold text-white align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25"> Detaylı Gör </button></div></div>`);
      if (unref(showModal)) {
        _push(`<div class="fixed top-0 left-0 flex w-full h-full bg-black bg-opacity-50 md:items-center justify-center z-50"><div class="bg-white rounded-none md:rounded-2xl p-8 w-full md:h-96 max-w-2xl"><div class="flex justify-end"><button class="text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><h2 class="text-xl font-semibold mb-4">Detaylı Konumlar</h2><ul><!--[-->`);
        ssrRenderList(unref(cities), (city, index) => {
          _push(`<li class="my-3 flex flex-col space-x-2 gap-1"><span class="font-semibold text-lg">${ssrInterpolate(city.name)}: </span><!--[-->`);
          ssrRenderList(city.locations, (location, idx) => {
            _push(`<span class="text-gray-600">${ssrInterpolate(location.name)}</span>`);
          });
          _push(`<!--]--></li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></article></main><div class="max-w-8xl mx-auto mt-12"><h1 class="text-[24px] font-semibold text-center">Kategori ile ilgili diğer ilanlar</h1><div class="py-8 max-w-6xl mx-auto">`);
      _push(ssrRenderComponent(_component_CardSwiper, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/advert/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-ac3a0e87.js.map
