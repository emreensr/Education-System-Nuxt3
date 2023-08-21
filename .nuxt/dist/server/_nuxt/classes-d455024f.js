import { _ as __nuxt_component_0 } from "./Content-3febba75.js";
import { ref, toRef, getCurrentInstance, onServerPrefetch, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { a as useNuxtApp, c as createError, b as useRuntimeConfig } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
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
const getDefault = () => null;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  const nuxt = useNuxtApp();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref(getCachedData() ?? options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxt.isHydrating && opts._initial !== false) && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", () => promise);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const _sfc_main$1 = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    totalPages: Number,
    currentPage: Number
  },
  emits: ["change"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center -space-x-px" }, _attrs))}><li><a href="#" class="block px-4 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"><span class="sr-only">Previous</span><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></a></li><!--[-->`);
      ssrRenderList(__props.totalPages, (pageNumber) => {
        _push(`<li><a href="" class="px-4 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">${ssrInterpolate(pageNumber)}</a></li>`);
      });
      _push(`<!--]--><li><a href="#" class="block px-4 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"><span class="sr-only">Next</span><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a></li></ul>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "classes",
  __ssrInlineRender: true,
  setup(__props) {
    const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
    const products = ref([]);
    const page = ref(1);
    const productsPage = ref("");
    useAsyncData(async () => {
      const response = await fetch(`${runtimeConfig.public.apiURL}/products?page=${page.value}`);
      const data = await response.json();
      products.value = data.data;
      productsPage.value = data.data.last_page;
    }, "$nCzfstbWqy");
    console.log(products);
    const refetch = (pageNumber) => {
      page.value = pageNumber;
    };
    console.log(products);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardContent = __nuxt_component_0;
      const _component_CardPagination = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app bg-[#F4F5F7] p-3" }, _attrs))}><div class="max-w-4xl mx-auto my-5 bg-white shadow-sm rounded-xl p-5"><div class="flex flex-wrap justify-between items-center"><div class="w-full max-w-full px-3 mb-4 md:w-6/12"><label class="mb-2 ml-1 font-bold text-slate-700" for="Country">Şehir</label><div class="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"><div class="choices__inner"><select choice="" class="focus:shadow-[0_0_0_2px_#e9aede] mt-2 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-3 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-[#e293d3] focus:outline-none choices__input" name="choices-country" choices-select="" hidden="" tabindex="-1" data-choice="active"><option value="Algeria">İstanbul</option><option value="Algeria">Ankara</option><option value="Algeria">İzmir</option><option value="Algeria">Adana</option></select></div></div></div><div class="w-full max-w-full px-3 mb-4 md:w-6/12"><label class="mb-2 ml-1 font-bold text-slate-700" for="Country">Dersler</label><div class="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"><div class="choices__inner"><select choice="" class="focus:shadow-[0_0_0_2px_#e9aede] mt-2 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-3 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-[#e293d3] focus:outline-none choices__input" name="choices-country" choices-select="" hidden="" tabindex="-1" data-choice="active"><option value="Algeria">Matematik</option><option value="Algeria">Yabancı Dil</option><option value="Algeria">Müzik</option><option value="Algeria">Yazılım</option></select></div></div></div></div><div class="text-center"><button class="bg-indigo-600 py-3 px-6 my-2 rounded-md text-white hover:bg-indigo-500">Eğitmen Bul</button></div></div><div class="mx-auto max-w-6xl my-10"><div class="flex justify-between space-x-6 items-center bg-indigo-600 rounded-md border p-6 border-gray-200"><div class="flex items-center space-x-2"><div class="flex flex-col space-y-1"><a href="/profile/1"><span class="text-[15px] text-white">Bütçenize uygun alanında uzman tüm eğitmenleri burada görebilirsiniz</span></a></div></div><div><p class="text-[18px] font-semibold text-white">1000+ Eğitmen</p></div></div></div><div class="mx-auto max-w-6xl my-10 px-2"><h1 class="text-base font-semibold text-[24px]">Öne Çıkan Eğitmenler</h1><p class="my-2 text-gray-600">Kategorisinde en çok öne çıkan eğitmenlerin bazılarını senin için listeledik</p></div><div class="mx-auto max-w-6xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-5 gap-8"><!--[-->`);
      ssrRenderList(unref(products).data, (product) => {
        _push(ssrRenderComponent(_component_CardContent, {
          key: product.id,
          data: product
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="text-center items-center my-10">`);
      _push(ssrRenderComponent(_component_CardPagination, {
        onChange: refetch,
        totalPages: unref(productsPage),
        currentPage: unref(page).value
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/classes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=classes-d455024f.js.map
