import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, mergeProps, unref, withCtx, createVNode, createCommentVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { Autoplay, EffectCreative, Pagination } from "swiper";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
const _sfc_main = {
  __name: "Swiper",
  __ssrInlineRender: true,
  setup(__props) {
    const swiperData = ref([
      {
        img: "https://bgcp.bionluk.com/images/portfolio/526x296/aab4f1b5-9402-4058-af84-7e14a20f123d.jpg"
      },
      {
        img: "https://bgcp.bionluk.com/images/portfolio/526x296/1fa3b35c-5921-4ec2-bde1-5b04e1fa1ee5.jpg"
      },
      {
        img: "https://bgcp.bionluk.com/images/portfolio/526x296/b3966b3f-c6c8-4c89-afe5-45cc13c47f34.png"
      },
      {
        img: "https://bgcp.bionluk.com/images/portfolio/526x296/c1866d65-6ca8-42c6-886e-e4d9ead10059.png"
      },
      {
        img: "https://bgcp.bionluk.com/images/portfolio/526x296/77726c09-30b5-48a0-bf3b-53750dc7d6ce.png"
      },
      {
        img: "https://bgcp.bionluk.com/images/portfolio/526x296/5b87ffd1-ddd9-4dca-b423-3e0e2209256f.jpg"
      },
      {
        img: "https://bgcp.bionluk.com/images/portfolio/526x296/3882a487-6d4f-41a0-9d81-dabaf57b4862.png"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      _push(ssrRenderComponent(_component_Swiper, mergeProps({
        modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperEffectCreative" in _ctx ? _ctx.SwiperEffectCreative : unref(EffectCreative), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination)],
        "slides-per-view": 1.3,
        breakpoints: {
          640: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 4
          }
        },
        loop: true,
        autoplay: { delay: 5e3, disableOnInteraction: false },
        pagination: {
          clickable: true,
          bulletClass: "swiper-bullet",
          bulletActiveClass: "swiper-bullet-active"
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(swiperData), (photo) => {
              _push2(ssrRenderComponent(_component_swiper_slide, {
                class: "relative",
                key: _ctx.key
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="relative flex items-center justify-center px-2"${_scopeId2}><div class="w-full max-w-md mx-auto bg-white border rounded-xl overflow-hidden"${_scopeId2}><div class="max-w-md mx-auto"${_scopeId2}><img${ssrRenderAttr("src", photo.img)}${_scopeId2}><div class="p-3 sm:p-3"${_scopeId2}><div class="flex flex-row"${_scopeId2}></div><div class="flex justify-between space-x-6 items-center"${_scopeId2}><div class="flex items-center space-x-2"${_scopeId2}><img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" class="rounded-full h-12 w-12" alt=""${_scopeId2}><div class="flex flex-col space-y-1"${_scopeId2}><a href="/profile/1"${_scopeId2}><span class="text-[15px]"${_scopeId2}>Emre Ensar</span></a><span class="text-[#8b95a1] text-[15px]"${_scopeId2}>Matematik</span></div></div><div${_scopeId2}><p class="text-[20px] font-bold text-[#0FB478]"${_scopeId2}>700₺</p></div></div><p class="text-gray-800 text-base mt-2"${_scopeId2}>Ben matematik konusunda size yardım edebilir ve gelişiminize katkıda bulunabilirim.</p><div class="flex justify-center items-center"${_scopeId2}><div class="font-semibold text-center mx-4"${_scopeId2}><button type="button" class="flex items-center gap-3 inline-block px-6 py-3 mt-4 mb-0 ml-auto font-bold text-white align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25"${_scopeId2}><span class="text-white text-md"${_scopeId2}>İlana Git</span></button></div></div></div></div></div>`);
                    {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "relative flex items-center justify-center px-2" }, [
                        createVNode("div", { class: "w-full max-w-md mx-auto bg-white border rounded-xl overflow-hidden" }, [
                          createVNode("div", { class: "max-w-md mx-auto" }, [
                            createVNode("img", {
                              src: photo.img
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "p-3 sm:p-3" }, [
                              createVNode("div", { class: "flex flex-row" }),
                              createVNode("div", { class: "flex justify-between space-x-6 items-center" }, [
                                createVNode("div", { class: "flex items-center space-x-2" }, [
                                  createVNode("img", {
                                    src: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
                                    class: "rounded-full h-12 w-12",
                                    alt: ""
                                  }),
                                  createVNode("div", { class: "flex flex-col space-y-1" }, [
                                    createVNode("a", { href: "/profile/1" }, [
                                      createVNode("span", { class: "text-[15px]" }, "Emre Ensar")
                                    ]),
                                    createVNode("span", { class: "text-[#8b95a1] text-[15px]" }, "Matematik")
                                  ])
                                ]),
                                createVNode("div", null, [
                                  createVNode("p", { class: "text-[20px] font-bold text-[#0FB478]" }, "700₺")
                                ])
                              ]),
                              createVNode("p", { class: "text-gray-800 text-base mt-2" }, "Ben matematik konusunda size yardım edebilir ve gelişiminize katkıda bulunabilirim."),
                              createVNode("div", { class: "flex justify-center items-center" }, [
                                createVNode("div", { class: "font-semibold text-center mx-4" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "flex items-center gap-3 inline-block px-6 py-3 mt-4 mb-0 ml-auto font-bold text-white align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25"
                                  }, [
                                    createVNode("span", { class: "text-white text-md" }, "İlana Git")
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ]),
                        createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(swiperData), (photo) => {
                return openBlock(), createBlock(_component_swiper_slide, {
                  class: "relative",
                  key: _ctx.key
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "relative flex items-center justify-center px-2" }, [
                      createVNode("div", { class: "w-full max-w-md mx-auto bg-white border rounded-xl overflow-hidden" }, [
                        createVNode("div", { class: "max-w-md mx-auto" }, [
                          createVNode("img", {
                            src: photo.img
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "p-3 sm:p-3" }, [
                            createVNode("div", { class: "flex flex-row" }),
                            createVNode("div", { class: "flex justify-between space-x-6 items-center" }, [
                              createVNode("div", { class: "flex items-center space-x-2" }, [
                                createVNode("img", {
                                  src: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
                                  class: "rounded-full h-12 w-12",
                                  alt: ""
                                }),
                                createVNode("div", { class: "flex flex-col space-y-1" }, [
                                  createVNode("a", { href: "/profile/1" }, [
                                    createVNode("span", { class: "text-[15px]" }, "Emre Ensar")
                                  ]),
                                  createVNode("span", { class: "text-[#8b95a1] text-[15px]" }, "Matematik")
                                ])
                              ]),
                              createVNode("div", null, [
                                createVNode("p", { class: "text-[20px] font-bold text-[#0FB478]" }, "700₺")
                              ])
                            ]),
                            createVNode("p", { class: "text-gray-800 text-base mt-2" }, "Ben matematik konusunda size yardım edebilir ve gelişiminize katkıda bulunabilirim."),
                            createVNode("div", { class: "flex justify-center items-center" }, [
                              createVNode("div", { class: "font-semibold text-center mx-4" }, [
                                createVNode("button", {
                                  type: "button",
                                  class: "flex items-center gap-3 inline-block px-6 py-3 mt-4 mb-0 ml-auto font-bold text-white align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25"
                                }, [
                                  createVNode("span", { class: "text-white text-md" }, "İlana Git")
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createCommentVNode("", true)
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/Swiper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=Swiper-01a7ff46.js.map
