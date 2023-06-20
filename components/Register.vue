<script setup>

const activeStep = ref('about');
const progressBarWidth = ref('0%');

    const formValues = reactive({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      street: '',
      city: '',
    });

    const nextStep = () => {
      if (activeStep.value === 'about') {
        activeStep.value = 'account';
        progressBarWidth.value = '33%';
      } else if (activeStep.value === 'account') {
        activeStep.value = 'address';
        progressBarWidth.value = '66%';
      } else if (activeStep.value === 'address') {
        activeStep.value = 'login';
        progressBarWidth.value = '100%';
      } else if (activeStep.value === 'login') {
        console.log(formValues);
      }
    };

    const previousStep = () => {
      if (activeStep.value === 'account') {
        activeStep.value = 'about';
        progressBarWidth.value = '0%';
      } else if (activeStep.value === 'address') {
        activeStep.value = 'account';
        progressBarWidth.value = '33%';
      } else if (activeStep.value === 'login') {
        activeStep.value = 'address';
        progressBarWidth.value = '66%';
      }
    };
</script>

<template>
 <div class="w-full max-w-3xl px-3 text-center flex:0 auto mx-auto mt-12">
  {{ progressBarWidth }}
  <div class="w-full h-10 bg-gray-100 rounded-2xl mt-3">
    <div class="h-full bg-gradient-to-tl from-[#141727] to-[#3a416f] rounded-2xl text-white" :style="{ width: progressBarWidth }">
    </div>
  </div>
   <!-- <h3 class="text-[#344767] mt-12 text-2xl">Ne hizmeti almak istiyorsun?</h3>
   <h5 class="font-normal dark:text-white text-[#8392ab] mt-2">Almak istediğiniz hizmeti seç, hemen hizmet almaya başla!</h5>  -->
   <div multisteps-form="" class="mb-12 mt-5">
      <div class="flex flex-wrap -mx-3">
         <div class="w-full max-w-full px-3 m-auto [flex:0_0_auto]">
            <form class="relative mb-32" style="height: 423px;">
               <div form="about" v-if="activeStep === 'about'" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 dark:bg-grey-950 dark:shadow-dark-xl shadow-xl rounded-2xl bg-clip-border h-auto opacity-100 visible" active="">
                  <div class="flex flex-wrap -mx-3 text-center">
                     <div class="w-10/12 max-w-full px-3 mx-auto [flex:0_0_auto]">
                        <h3 class="text-[#344767] mt-12 text-2xl">Ne hizmeti almak istiyorsun?</h3>
                        <h5 class="font-normal dark:text-white text-[#8392ab] mt-2">Almak istediğiniz hizmeti seç, hemen hizmet almaya başla!</h5>
                     </div>
                  </div>
                  <div>
                     <div class="flex flex-wrap mt-4 -mx-3">
                        <div class="w-full max-w-full px-3 mt-6 text-left [flex:0_0_auto] sm:w-full sm:mt-0">
                          <!-- <label class="mb-2 ml-1 font-bold text-[.75rem] text-slate-700" for="First Name">First Name</label>
                          <input type="text" name="First Name" placeholder="Eg. Michael" class="mb-4 focus:shadow-[0_0_0_2px_#e9aede] dark:bg-grey-950 dark:placeholder:text-white/80 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-[#e293d3] focus:outline-none"> -->
                           <div class="w-full max-w-full ml-auto [flex:0_0_auto] md:w-full">
                           <label class="mb-2 ml-1 font-bold text-sm text-slate-700" for="Country">Dersler</label>
                           <div class="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                              <div class="choices__inner">
                                 <select choice="" class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input" name="choices-country" choices-select="" hidden="" tabindex="-1" data-choice="active">
                                    <option value="Algeria">Matematik</option>
                                    <option value="Algeria">Yabancı Dil</option>
                                    <option value="Algeria">Fizik</option>
                                    <option value="Algeria">Spor</option>
                                    <option value="Algeria">Müzik</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                        <div class="w-full max-w-full ml-auto mt-3 [flex:0_0_auto] md:w-full">
                           <label class="mb-2 ml-1 font-bold text-sm text-slate-700" for="Country">Ders Kategorileri</label>
                           <div class="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                              <div class="choices__inner">
                                 <select choice="" class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input" name="choices-country" choices-select="" hidden="" tabindex="-1" data-choice="active">
                                    <option value="Algeria">Genel Matematik</option>
                                    <option value="Algeria">Geometri</option>
                                    <option value="Algeria">Mantık</option>
                                    <option value="Algeria">Liner Cebir</option>
                                    <option value="Algeria">Diferansiyel Denklemler</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                        <div class="w-full max-w-full ml-auto mt-3 [flex:0_0_auto] md:w-full">
                           <label class="mb-2 ml-1 font-bold text-sm text-slate-700" for="Country">Seviye</label>
                           <div class="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                              <div class="choices__inner">
                                 <select choice="" class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input" name="choices-country" choices-select="" hidden="" tabindex="-1" data-choice="active">
                                    <option value="Algeria">İlk Okul</option>
                                    <option value="Algeria">Lise</option>
                                    <option value="Algeria">Üniversite</option>
                                    <option value="Algeria">KPSS</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                      </div>
                     </div>
                     <div class="flex mt-6">
                      <button type="button" aria-controls="account" next-form-btn="" href="javascript:;" @click="nextStep" class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25">Devam Et
                      </button>
                    </div>
                  </div>
               </div>
               <div form="account" v-if="activeStep === 'account'" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 mt-5 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border h-auto opacity-100 visible" active="">
                  <div class="flex flex-wrap -mx-3 text-center">
                     <div class="w-10/12 max-w-full px-3 mx-auto [flex:0_0_auto]">
                        <h3 class="text-[#344767] mt-3 text-2xl">Dersleri nerede almak istiyorsunuz?</h3>
                        <h5 class="font-normal text-[#8392ab] mt-2">Birden fazla seçim yapabilirsiniz.</h5>
                     </div>
                  </div>
                  <div>
                     <div class="flex flex-wrap mt-6 -mx-3">
                        <div class="w-full max-w-full px-3 ml-auto sm:[flex:0_0_auto] sm:w-3/12 shrink-0">
                           <input id="design" type="checkbox" class="absolute pointer-events-none peer [clip:rect(0,0,0,0)]">
                           <label checkbox-color-label="" for="design" class="inline-block px-16 py-12 mb-4 ml-1 font-bold text-center uppercase align-middle transition-all bg-transparent border-2 border-solid rounded-lg shadow-none cursor-pointer group peer-checked:bg-[#8392ab] hover:scale-[1.02] leading-pro text-[.75rem] ease-in tracking-tight active:opacity-[.85] active:shadow-xs border-[#8392ab] text-[#8392ab] hover:border-[#8392ab] hover:bg-transparent hover:opacity-75 active:border-[#8392ab] active:bg-[#8392ab] active:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px"  viewBox="0 0 576 512">
                              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                            </svg>
                           </label>
                           <h6 class="select-none dark:text-white">Öğrenci Evinde</h6>
                        </div>
                        <div class="w-full max-w-full px-3 sm:[flex:0_0_auto] sm:w-3/12 shrink-0">
                           <input id="code" type="checkbox" class="absolute pointer-events-none peer [clip:rect(0,0,0,0)]">
                           <label checkbox-color-label="" for="code" class="inline-block px-16 py-12 mb-4 ml-1 font-bold text-center uppercase align-middle transition-all bg-transparent border-2 border-solid rounded-lg shadow-none cursor-pointer group peer-checked:bg-[#8392ab] hover:scale-[1.02] leading-pro text-[.75rem] ease-in tracking-tight active:opacity-[.85] active:shadow-xs border-[#8392ab] text-[#8392ab] hover:border-[#8392ab] hover:bg-transparent hover:opacity-75 active:border-[#8392ab] active:bg-[#8392ab] active:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px"  viewBox="0 0 576 512">
                              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                            </svg>
                           </label>
                           <h6 class="select-none dark:text-white">Öğretmen Evinde</h6>
                        </div>
                        <div class="w-full max-w-full px-3 mr-auto sm:[flex:0_0_auto] sm:w-3/12 shrink-0">
                           <input id="develop" type="checkbox" class="absolute pointer-events-none peer [clip:rect(0,0,0,0)]">
                           <label checkbox-color-label="" for="develop" class="select-none inline-block px-16 py-12 mb-4 ml-1 font-bold text-center uppercase align-middle transition-all bg-transparent border-2 border-solid rounded-lg shadow-none cursor-pointer group peer-checked:bg-[#8392ab] hover:scale-[1.02] leading-pro text-[.75rem] ease-in tracking-tight active:opacity-[.85] active:shadow-xs border-[#8392ab] text-[#8392ab] hover:border-[#8392ab] hover:bg-transparent hover:opacity-75 active:border-[#8392ab] active:bg-[#8392ab] active:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 512 512">
                              <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
                            </svg>
                           </label>
                           <h6 class="select-none dark:text-white">Online</h6>
                        </div>
                        <div class="w-full max-w-full px-3 mt-12 ml-auto [flex:0_0_auto] md:w-6/12">
                           <label class="mb-2 ml-1 font-bold text-sm text-slate-700" for="Country">Şehir</label>
                           <div class="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                              <div class="choices__inner">
                                 <select choice="" class="focus:shadow-[0_0_0_2px_#e5e7eb] text-[.875rem] mt-2 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input" name="choices-country" choices-select="" hidden="" tabindex="-1" data-choice="active">
                                    <option value="Algeria">İstanbul</option>
                                    <option value="Algeria">Ankara</option>
                                    <option value="Algeria">İzmir</option>
                                    <option value="Algeria">Adana</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                        <div class="w-full max-w-full px-3 mt-12 mb-8 ml-auto [flex:0_0_auto] md:w-6/12">
                           <label class="mb-2 ml-1 font-bold text-sm text-slate-700" for="Country">İlçe</label>
                           <div class="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                              <div class="choices__inner">
                                 <select choice="" class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input" name="choices-country" choices-select="" hidden="" tabindex="-1" data-choice="active">
                                    <option value="Algeria">Adalar</option>
                                    <option value="Algeria">Bahçelievler</option>
                                    <option value="Algeria">Kartal</option>
                                    <option value="Algeria">Tuzla</option>
                                 </select>
                              </div>
                           </div>
                        </div>

                     </div>
                     <div class="flex mt-6"><button type="button" aria-controls="about"  @click="previousStep" prev-form-btn="" href="javascript:;" class="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]">Geri Dön</button>
                        <button type="button" aria-controls="address" @click="nextStep" next-form-btn="" href="javascript:;" class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25">Devam Et</button>
                     </div>
                  </div>
               </div>
               <div form="address" v-if="activeStep === 'address'" class="absolute top-0 left-0 mt-5 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border h-auto opacity-100 visible" active="">
                  <div class="flex flex-wrap -mx-3 text-center">
                     <div class="w-10/12 max-w-full px-3 mx-auto [flex:0_0_auto]">
                        <h5 class="text-[#344767] font-normal mt-1">Sana daha iyi yardımcı olabilmemiz için istek ve beklentilerini buradan yazabilirsin.</h5>
                     </div>
                  </div>
                  <div>
                     <div class="flex flex-wrap -mx-3 text-left">
                        <div class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-full">
                          <label class="mb-4 ml-1 font-bold text-sm text-slate-700" for="Street Name">Beklentilerin</label>
                          <textarea name="Street Name" rows="8" class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none">
                            </textarea>
                          </div>
                     </div>
                     <div class="flex flex-wrap -mx-3">
                        <div class="flex w-full max-w-full px-3 mt-6 [flex:0_0_auto]"><button type="button" aria-controls="account" prev-form-btn="" @click="previousStep" href="javascript:;" class="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]">Geri Dön</button>
                           <button type="button" send-form-btn="" @click="nextStep" href="javascript:;" class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25">Devam et</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div form="address" v-if="activeStep === 'login'" class="absolute top-0 left-0 mt-5 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 dark:bg-grey-950 dark:shadow-dark-xl shadow-xl rounded-2xl bg-clip-border h-auto opacity-100 visible" active="">
                  <div class="flex flex-wrap -mx-3 text-center">
                     <div class="w-10/12 max-w-full px-3 mx-auto [flex:0_0_auto]">
                        <h5 class="text-[#344767] font-normal dark:text-white text-2xl">Çok az kaldı...</h5>
                        <p class="text-[#67748e] mt-2">Bilgilerini doldurup kayıt işlemini tamamlayabilirsin.</p>
                     </div>
                  </div>
                  <div>
                     <div class="flex flex-wrap -mx-3 text-left">
                        <div class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-6/12">
                          <label class="mb-2 ml-1 font-bold text-sm text-slate-700" for="Street Name">Ad</label>
                          <input type="text" name="Street Name" placeholder="Adınız" class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-400 focus:outline-none">
                        </div>
                        <div class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-6/12">
                          <label class="mb-2 ml-1 font-bold text-sm text-slate-700" for="Street No">Soyad</label>
                          <input type="text" name="Street No" min="01" placeholder="Soyadınız" class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none">
                        </div>
                        <div class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-6/12">
                          <label class="mb-2 ml-1 font-bold text-sm text-slate-700" for="Street Name">E-Posta</label>
                          <input type="text" name="Street Name" placeholder="E-Posta Adresiniz" class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none">
                        </div>
                        <div class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-6/12">
                          <label class="mb-2 ml-1 font-bold text-sm text-slate-700" for="Street No">Şifre</label>
                          <input type="password" name="Street No" min="01" placeholder="Şifre" class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none">
                        </div>
                     </div>
                     <div class="flex flex-wrap -mx-3">
                        <div class="flex w-full max-w-full px-3 mt-6 [flex:0_0_auto]"><button type="button" aria-controls="account" prev-form-btn="" @click="previousStep" href="javascript:;" class="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]">Geri Dön</button>
                          <button type="button" send-form-btn="" @click="nextStep" href="javascript:;" class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25">Kaydol</button>
                        </div>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </div>
</div>
</template>