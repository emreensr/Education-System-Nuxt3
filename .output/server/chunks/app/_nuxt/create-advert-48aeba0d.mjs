import __nuxt_component_0 from './Icon-55c87a06.mjs';
import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'maska';
import 'date-fns';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import 'http-graceful-shutdown';
import './config-ea18f8e6.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  __name: "create-advert",
  __ssrInlineRender: true,
  setup(__props) {
    const progressBarWidth = ref("0");
    const title = ref("");
    const activeStep = ref("category");
    const isMaxLengthExceeded = computed(() => {
      return title.value.length > 80;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full max-w-7xl px-3 flex:0 auto mx-auto h-screen" }, _attrs))}><div class="w-full max-w-7xl mx-auto mt-12 lg:mt-24"><div class="relative h-10 rounded-full bg-gray-100"><div class="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#00dc82] via-[#34cdfe] to-[#4c7eea] transition-width duration-500" style="${ssrRenderStyle({ width: unref(progressBarWidth) + "%" })}"></div><div class="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10"><span class="text-xl text-black font-semibold">${ssrInterpolate(unref(progressBarWidth))}%</span></div></div></div><div multisteps-form=""><div class="flex flex-wrap -mx-3"><div class="w-full max-w-full px-3 m-auto [flex:0_0_auto]"><form class="relative" style="${ssrRenderStyle({ "height": "423px" })}">`);
      if (unref(activeStep) === "category") {
        _push(`<div form="category" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words border-0 rounded-2xl bg-clip-border h-auto opacity-100 visible" active=""><div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto my-3 p-3"><div class="bg-[#fff1f1] p-12 rounded-2xl hidden md:block"><div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:info-outline-rounded",
          size: "38",
          color: "black"
        }, null, _parent));
        _push(`<h1 class="font-bold text-3xl">Bilgi </h1></div><p class="mt-3 text-base">Ba\u015Fl\u0131\u011F\u0131n\u0131z ilan\u0131n\u0131z\u0131n ba\u015Far\u0131s\u0131n\u0131n anahtar\u0131d\u0131r!</p><p class="mt-1 text-base">\u0130lan\u0131n\u0131z\u0131 \xF6zenle haz\u0131rlay\u0131n, e\u015Fsiz ve g\xF6z al\u0131c\u0131 olmal\u0131 ve en fazla 80 karakter i\xE7ermeli.</p></div><div class=""><h1 class="font-semibold text-3xl">Hangi alanlarda hizmet veriyorsunuz?</h1><div class="mt-5"><label for="country" class="block text-sm font-medium leading-6 text-gray-900">Kategori <span class="font-medium text-red-600">*</span></label><div class="mt-2"><select id="country" name="country" autocomplete="country-name" class="p-3 bg-gray-50 border border-gray-300 text-gray-900 focus:shadow-[0_0_0_2px_#e5e7eb] text-md mt-2 leading-5.6 ease block w-full appearance-none rounded-md bg-clip-padding font-normal outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none"><option>Matematik</option><option>Y\xFCzme</option><option>Yabanc\u0131 Dil</option></select></div></div><div class="mt-5"><label for="country" class="block text-sm font-medium leading-6 text-gray-900">Alt Kategori <span class="font-medium text-red-600">*</span></label><div class="mt-2"><select id="country" name="country" autocomplete="country-name" class="p-3 bg-gray-50 border border-gray-300 text-gray-900 focus:shadow-[0_0_0_2px_#e5e7eb] text-md mt-2 leading-5.6 ease block w-full appearance-none rounded-md bg-clip-padding p-2.5 font-normal outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input"><option>Almanca</option><option>\u0130ngilizce</option><option>Frans\u0131zca</option></select></div></div><div class="flex mt-6">`);
        if (!unref(isMaxLengthExceeded)) {
          _push(`<button type="button" href="javascript:;" class="inline-block px-3 py-3 md:mt-12 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25">Devam Et</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeStep) === "advertTitle") {
        _push(`<div form="advertTitle" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 rounded-2xl bg-clip-border h-auto opacity-100 visible" active=""><div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto my-3 p-3"><div class="bg-[#fff1f1] p-12 rounded-2xl hidden lg:block"><div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:info-outline-rounded",
          size: "38",
          color: "black"
        }, null, _parent));
        _push(`<h1 class="font-bold text-3xl">Bilgi </h1></div><p class="mt-3 text-base">Ba\u015Fl\u0131\u011F\u0131n\u0131z ilan\u0131n\u0131z\u0131n ba\u015Far\u0131s\u0131n\u0131n anahtar\u0131d\u0131r!</p><p class="mt-1 text-base">\u0130lan\u0131n\u0131z\u0131 \xF6zenle haz\u0131rlay\u0131n, e\u015Fsiz ve g\xF6z al\u0131c\u0131 olmal\u0131 ve en fazla 80 karakter i\xE7ermeli.</p></div><div class=""><h1 class="font-semibold text-3xl">\u0130lan Ba\u015Fl\u0131\u011F\u0131</h1><div class="mt-5"><textarea class="w-full bg-transparent border-2 border-gray-300 rounded-lg py-2 px-4 placeholder-gray-400 focus:outline-none outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none" placeholder="\xF6rnek: Size \xFCniversiteye haz\u0131rl\u0131k s\xFCrecinde matematik derslerinde yard\u0131mc\u0131 olabilirim" rows="4">${ssrInterpolate(unref(title))}</textarea><div class="mt-5 flex justify-between"><div class="text-gray-400 text-[13px] font-medium">${ssrInterpolate(unref(title).length)}/80 </div>`);
        if (unref(isMaxLengthExceeded)) {
          _push(`<p class="text-red-500 text-sm">Maksimum 80 karakter giriniz.</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="flex mt-12 gap-8"><button type="button" aria-controls="account" prev-form-btn="" href="javascript:;" class="inline-block px-3 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]"> Geri D\xF6n </button><button type="button" href="javascript:;" class="inline-block px-3 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25"${ssrIncludeBooleanAttr(unref(isMaxLengthExceeded)) ? " disabled" : ""}> Devam Et </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeStep) === "classes") {
        _push(`<div form="classes" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 rounded-2xl bg-clip-border h-auto opacity-100 visible" active=""><div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto my-3 p-3"><div class="bg-[#fff1f1] p-12 rounded-2xl hidden md:block"><div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:info-outline-rounded",
          size: "38",
          color: "black"
        }, null, _parent));
        _push(`<h1 class="font-bold text-3xl">Bilgi </h1></div><p class="mt-3 text-base">\xD6zel ders \xF6\u011Fretmeni olarak y\xF6ntemlerinizi ve bilgilerinizi nas\u0131l aktard\u0131\u011F\u0131n\u0131z\u0131 a\xE7\u0131klay\u0131n</p><p class="mt-2 text-base">\xD6\u011Fretim teknik ve y\xF6ntemleriniz</p><p class="mt-2 text-base">Ders i\u015Flenme bi\xE7imi</p><p class="mt-2 text-base">\xD6\u011Fretmen olarak detaylar\u0131n\u0131z</p><p class="mt-2 text-base">\xD6\u011Fretim teknik ve y\xF6ntemleriniz</p></div><div class=""><h1 class="font-semibold text-3xl">Dersler Hakk\u0131nda</h1><div class="mt-5"><textarea class="w-full bg-transparent border-2 border-gray-300 rounded-lg py-2 px-4 placeholder-gray-400 outline-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none" placeholder="Ders i\u015Fleme tekniklerini ve y\xF6ntemlerini buradan a\xE7\u0131klayabilirsiniz" rows="6">${ssrInterpolate(_ctx.description)}</textarea></div><div class="flex mt-12"><button type="button" aria-controls="account" prev-form-btn="" href="javascript:;" class="inline-block px-3 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]">Geri D\xF6n</button><button type="button" href="javascript:;" class="inline-block px-3 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25">Devam Et</button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeStep) === "about") {
        _push(`<div form="about" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 rounded-2xl bg-clip-border h-auto opacity-100 visible" active=""><div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto my-3 p-3"><div class="bg-[#fff1f1] p-12 rounded-2xl hidden md:block"><div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:info-outline-rounded",
          size: "38",
          color: "black"
        }, null, _parent));
        _push(`<h1 class="font-bold text-3xl">Bilgi </h1></div><p class="mt-3 text-base">G\xFCven verin, yetkinli\u011Finizi kan\u0131tlay\u0131n ve \xF6\u011Frencilere uzmanl\u0131\u011F\u0131n\u0131z hakk\u0131nda g\xFCven verin.</p><p class="mt-2 text-base">Bunlar \xF6\u011Frencilerin sizin hakk\u0131n\u0131zda ilk okuyaca\u011F\u0131 \u015Feylerden biri, yazd\u0131klar\u0131n\u0131z\u0131n daha \xE7ekici ve g\xFCvenilir olmas\u0131 i\xE7in yaz\u0131m kurallar\u0131na ve yaz\u0131 bi\xE7iminize dikkat edin.</p></div><div class=""><h1 class="font-semibold text-3xl">Sizin Hakk\u0131n\u0131zda</h1><div class="mt-5"><textarea class="w-full bg-transparent border-2 border-gray-300 rounded-lg py-2 px-4 placeholder-gray-400 outline-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none" placeholder="\xD6\u011Frencilerin sizi tan\u0131mas\u0131 ve neden sizi tercih etmeleri gerekti\u011Fini anlat\u0131n" rows="6">${ssrInterpolate(_ctx.description)}</textarea></div><div class="flex mt-12"><button type="button" aria-controls="account" prev-form-btn="" href="javascript:;" class="inline-block px-3 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]">Geri D\xF6n</button><button type="button" href="javascript:;" class="inline-block px-3 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25">Devam Et</button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeStep) === "location") {
        _push(`<div form="location" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 rounded-2xl bg-clip-border h-auto opacity-100 visible" active=""><div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto my-3 p-3"><div class="bg-[#fff1f1] p-12 rounded-2xl hidden md:block"><div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:info-outline-rounded",
          size: "38",
          color: "black"
        }, null, _parent));
        _push(`<h1 class="font-bold text-3xl">Bilgi </h1></div><p class="mt-3 text-base">Adresiniz sitede asla yer almaz. Sadece ders vermeyi kabul etti\u011Finiz \xF6\u011Frencilere iletilir.</p><p class="mt-3 text-base">Derslerinizi belirtti\u011Finiz adresteki evinizde verebilirsiniz.</p><p class="mt-3 text-base">\xD6\u011Frencinin evine veya kararla\u015Ft\u0131raca\u011F\u0131n\u0131z ba\u015Fka bir mekana gitmek i\xE7in gidebilece\u011Finiz en fazla uzakl\u0131k</p><p class="mt-3 text-base">S\u0131n\u0131rlar\u0131 ortadan kald\u0131r\u0131n, webcam \xFCzerinden derslerinizi online olarak t\xFCm d\xFCnyadaki \xF6\u011Frencilere verin</p></div><div class=""><h1 class="font-semibold text-3xl">Dersin Verilece\u011Fi Yer</h1><div class="mt-5"><fieldset><div class="mt-6 space-y-6"><div class="relative flex gap-x-3 border border-gray-100 shadow-sm p-5 rounded-lg hover:bg-gray-200"><div class="flex h-6 items-center"><input id="comments" name="comments" type="checkbox" class="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"></div><div class="text-sm leading-6"><label for="comments" class="font-medium text-base text-gray-900">\xD6\u011Frenci Evinde</label></div></div><div class="relative flex gap-x-3 border border-gray-100 shadow-sm p-5 rounded-lg hover:bg-gray-200"><div class="flex h-6 items-center"><input id="candidates" name="candidates" type="checkbox" class="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"></div><div class="text-sm leading-6"><label for="candidates" class="font-medium text-base text-gray-900">\xD6\u011Fretmen Evinde</label></div></div><div class="relative flex gap-x-3 border border-gray-100 shadow-sm p-5 rounded-lg hover:bg-gray-200"><div class="flex h-6 items-center"><input id="offers" name="offers" type="checkbox" class="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"></div><div class="text-sm leading-6"><label for="offers" class="font-medium text-base text-gray-900">Online</label></div></div></div></fieldset></div><div class="flex mt-12"><button type="button" aria-controls="account" prev-form-btn="" href="javascript:;" class="inline-block px-3 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]">Geri D\xF6n</button><button type="button" href="javascript:;" class="inline-block px-3 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25">Devam Et</button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeStep) === "price") {
        _push(`<div form="price" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 rounded-2xl bg-clip-border h-auto opacity-100 visible" active=""><div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto my-3 p-3"><div class="bg-[#fff1f1] p-12 rounded-2xl hidden lg:block"><div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:info-outline-rounded",
          size: "38",
          color: "black"
        }, null, _parent));
        _push(`<h1 class="font-bold text-3xl">Bilgi</h1></div><p class="mt-3 text-base">Saatlik ders \xFCcretinizi se\xE7mekte ve istedi\u011Finiz zaman de\u011Fi\u015Ftirmekte \xF6zg\xFCrs\xFCn\xFCz.</p><p class="mt-3 text-base">Yeni ba\u015Fl\u0131yorsan\u0131z, \xE7ok y\xFCksek bir saatlik \xFCcret se\xE7memek sizin yarar\u0131n\u0131za olabilir, \xFCcretinizi de\u011Fi\u015Ftirmek i\xE7in yorum ve referans almay\u0131 bekleyin.</p></div><div class="flex flex-col justify-between"><h1 class="font-semibold text-3xl">Saatlik \xDCcret</h1><div class="mt-5"><div class="flex"><span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md"> \u20BA </span><input type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="100"></div></div><div class="flex mt-12"><button type="button" aria-controls="account" prev-form-btn="" href="javascript:;" class="inline-block px-3 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]"> Geri D\xF6n </button><button type="button" href="javascript:;" class="inline-block px-3 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25"${ssrIncludeBooleanAttr(unref(isMaxLengthExceeded)) ? " disabled" : ""}> Devam Et </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeStep) === "photo") {
        _push(`<div form="photo" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 rounded-2xl bg-clip-border h-auto opacity-100 visible" active=""><div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto my-3 p-3"><div class="bg-[#fff1f1] p-12 rounded-2xl hidden lg:block"><div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "material-symbols:info-outline-rounded",
          size: "38",
          color: "black"
        }, null, _parent));
        _push(`<h1 class="font-bold text-3xl">Bilgi </h1></div><p class="mt-3 text-base">\u0130lan\u0131n\u0131z\u0131n daha fazla ilgi \xE7ekmesi i\xE7in g\xF6rsel y\xFCklemelisiniz.</p><p class="mt-3 text-base">Profesyonel ve kaliteli bir foto\u011Fraf \xF6\u011Frencilerinizle g\xFCven olu\u015Fturman\u0131za ve taleplerinizi artt\u0131rman\u0131za yard\u0131mc\u0131 olacakt\u0131r.</p></div><div class=""><h1 class="font-semibold text-3xl">Vitrin</h1><div class="mt-5"><div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"><div class="text-center"><svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd"></path></svg><div class="mt-4 flex text-sm leading-6 text-gray-600"><label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"><span>G\xF6rsel Y\xFCkle</span><input id="file-upload" name="file-upload" type="file" class="sr-only"></label><p class="pl-1">ya da s\xFCr\xFCkle b\u0131rak</p></div><p class="text-xs leading-5 text-gray-600">PNG, JPG, maksimum 10MB</p></div></div></div><div class="flex mt-12 gap-8"><button type="button" aria-controls="account" prev-form-btn="" href="javascript:;" class="inline-block px-3 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]"> Geri D\xF6n </button><button type="button" href="javascript:;" class="inline-block px-3 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25"> \xD6demeye ge\xE7 </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/create-advert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-advert-48aeba0d.mjs.map
