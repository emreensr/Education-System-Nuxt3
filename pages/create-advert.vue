<script setup>
definePageMeta({
  layout: "main",
});

const progressBarWidth = ref('1');
const title = ref('')
const activeStep = ref('category');

const isMaxLengthExceeded = computed(() => {
   return title.value.length > 80;
});

const nextStep = () => {
      if (activeStep.value === 'category') {
        activeStep.value = 'advertTitle';
        progressBarWidth.value = '2';
      } else if (activeStep.value === 'advertTitle') {
        activeStep.value = 'classes';
        progressBarWidth.value = '3';
      } else if (activeStep.value === 'address') {
        activeStep.value = 'login';
        progressBarWidth.value = '3';
      } else if (activeStep.value === 'login') {
        console.log(formValues);
      }
    };
    
    const previousStep = () => {
      if (activeStep.value === 'advertTitle') {
        activeStep.value = 'category';
        progressBarWidth.value = '1';
      } else if (activeStep.value === 'classes') {
        activeStep.value = 'advertTitle';
        progressBarWidth.value = '2';
      } else if (activeStep.value === 'login') {
        activeStep.value = 'address';
        progressBarWidth.value = '66%';
      }
    };
</script>

<template>
<NuxtLayout>
   <div class="w-full max-w-7xl px-3 flex:0 auto mx-auto h-screen">
  <div class="w-full h-10 rounded-2xl mt-24">
    <div class="h-full text-center rounded-2xl text-black">
      <span class="text-3xl font-bold">{{ progressBarWidth }} / 5 ADIM</span>
    </div>
  </div>
   <!-- <h3 class="text-[#344767] mt-12 text-2xl">Ne hizmeti almak istiyorsun?</h3>
   <h5 class="font-normal dark:text-white text-[#8392ab] mt-2">Almak istediğiniz hizmeti seç, hemen hizmet almaya başla!</h5>  -->
   <div multisteps-form="" class="mb-12">
      <div class="flex flex-wrap -mx-3">
         <div class="w-full max-w-full px-3 m-auto [flex:0_0_auto]">
            <form class="relative mb-32" style="height: 423px;">
               <div form="category" v-if="activeStep === 'category'" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words border-0 rounded-2xl bg-clip-border h-auto opacity-100 visible" active="">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto my-3 md:my-16 p-3">
                  <div class="bg-[#fff1f1] p-12 rounded-2xl">
                     <div class="flex items-center gap-2">
                        <Icon name="material-symbols:info-outline-rounded" size="38" color="black" />
                     <h1 class="font-bold text-3xl">Bilgi
                     </h1>
                  </div>
                     <p class="mt-3 text-base">Başlığınız ilanınızın başarısının anahtarıdır!</p>
                     <p class="mt-1 text-base">İlanınızı özenle hazırlayın, eşsiz ve göz alıcı olmalı ve en fazla 80 karakter içermeli.</p>
                  </div>
                  <div class="">
                     <h1 class="font-semibold text-3xl">Hangi alanlarda hizmet veriyorsunuz?</h1>
                     <div class="mt-5">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Kategori
                                 <span class="font-medium text-red-600">*</span>
                                    </label>
                                    <div class="mt-2">
                                        <select id="country" name="country" autocomplete="country-name"
                                         class="p-3 bg-gray-50 border border-gray-300 text-gray-900 focus:shadow-[0_0_0_2px_#e5e7eb] text-md mt-2 leading-5.6 ease block w-full appearance-none rounded-md bg-clip-padding p-2.5 font-normal outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input">
                                        <option>Matematik</option>
                                        <option>Yüzme</option>
                                        <option>Yabancı Dil</option>
                                        </select>
                                    </div>
                        </div>
                        <div class="mt-5">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Alt Kategori
                                 <span class="font-medium text-red-600">*</span>
                                    </label>
                                    <div class="mt-2">
                                        <select id="country" name="country" autocomplete="country-name"
                                         class="p-3 bg-gray-50 border border-gray-300 text-gray-900 focus:shadow-[0_0_0_2px_#e5e7eb] text-md mt-2 leading-5.6 ease block w-full appearance-none rounded-md bg-clip-padding p-2.5 font-normal outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input">
                                        <option>Almanca</option>
                                        <option>İngilizce</option>
                                        <option>Fransızca</option>
                                        </select>
                                    </div>
                        </div>
                        <div class="flex mt-6">
                           <button type="button" v-if="!isMaxLengthExceeded" @click="nextStep" href="javascript:;" class="inline-block px-6 py-3 md:mt-12 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25">Devam Et</button>
                        </div>
                  </div>
               </div>
               </div>
               <div form="advertTitle" v-if="activeStep === 'advertTitle'" class="absolute top-0 left-0 flex flex-col w-full mt-5 min-w-0 p-4 break-words bg-white border-0 rounded-2xl bg-clip-border h-auto opacity-100 visible" active="">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto my-3 md:my-16 p-3">
                  <div class="bg-[#fff1f1] p-12 rounded-2xl">
                     <div class="flex items-center gap-2">
                        <Icon name="material-symbols:info-outline-rounded" size="38" color="black" />
                     <h1 class="font-bold text-3xl">Bilgi
                     </h1>
                  </div>
                     <p class="mt-3 text-base">Başlığınız ilanınızın başarısının anahtarıdır!</p>
                     <p class="mt-1 text-base">İlanınızı özenle hazırlayın, eşsiz ve göz alıcı olmalı ve en fazla 80 karakter içermeli.</p>
                  </div>
                  <div class="">
                     <h1 class="font-semibold text-3xl">İlan Başlığı</h1>
                     <div class="mt-5">
                        <textarea 
                              v-model="title"
                              class="w-full
                              bg-transparent 
                              border-2 
                              border-gray-300 
                              rounded-lg 
                              py-2 
                              px-4 
                              placeholder-gray-400 
                              focus:outline-none 
                              focus:ring-2 
                              focus:ring-indigo-500 
                              focus:border-transparent 
                              resize-none" 
                              placeholder="örnek: Size üniversiteye hazırlık sürecinde matematik derslerinde yardımcı olabilirim"
                              rows="4">
                           </textarea>
                           <div class="mt-5 flex justify-between">
                              <div class="text-gray-400 text-[13px] font-medium">
                                 {{ title.length}}/80
                              </div>
                              <p class="text-red-500 text-sm" v-if="isMaxLengthExceeded">Maksimum 80 karakter giriniz.</p>
                           </div>
                        </div>
                        <div class="flex mt-12">
                           <button type="button" aria-controls="account" prev-form-btn="" @click="previousStep" href="javascript:;" class="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]">Geri Dön</button>
                           <button type="button" v-if="!isMaxLengthExceeded" @click="nextStep" href="javascript:;" class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25">Devam Et</button>
                        </div>
                  </div>
               </div>
               </div>
               <div form="classes" v-if="activeStep === 'classes'" class="absolute top-0 left-0 mt-5 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 rounded-2xl bg-clip-border h-auto opacity-100 visible" active="">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto my-3 md:my-16 p-3">
                  <div class="bg-[#fff1f1] p-12 rounded-2xl">
                     <div class="flex items-center gap-2">
                        <Icon name="material-symbols:info-outline-rounded" size="38" color="black" />
                     <h1 class="font-bold text-3xl">Bilgi
                     </h1>
                  </div>
                     <p class="mt-3 text-base">Özel ders öğretmeni olarak yöntemlerinizi ve bilgilerinizi nasıl aktardığınızı açıklayın</p>
                     <p class="mt-2 text-base">Öğretim teknik ve yöntemleriniz</p>
                     <p class="mt-2 text-base">Ders işlenme biçimi</p>
                     <p class="mt-2 text-base">Öğretmen olarak detaylarınız</p>
                     <p class="mt-2 text-base">Öğretim teknik ve yöntemleriniz</p>

                  </div>
                  <div class="">
                     <h1 class="font-semibold text-3xl">Dersler Hakkında</h1>
                     <div class="mt-5">
                        <textarea 
                              v-model="description"
                              class="w-full
                              bg-transparent 
                              border-2 
                              border-gray-300 
                              rounded-lg 
                              py-2 
                              px-4 
                              placeholder-gray-400 
                              focus:outline-none 
                              focus:ring-2 
                              focus:ring-indigo-500 
                              focus:border-transparent 
                              resize-none" 
                              placeholder="Ders işleme tekniklerini ve yöntemlerini buradan açıklayabilirsiniz"
                              rows="6">
                           </textarea>
                           <!-- <div class="mt-5 flex justify-between">
                              <div class="text-gray-400 text-[13px] font-medium">
                                 {{ title.length}}/500
                              </div>
                              <p class="text-red-500 text-sm" v-if="isMaxLengthExceeded">Maksimum 80 karakter giriniz.</p>
                           </div> -->
                        </div>
                        <div class="flex mt-12">
                           <button type="button" aria-controls="account" prev-form-btn="" @click="previousStep" href="javascript:;" class="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]">Geri Dön</button>
                           <button type="button" @click="nextStep" href="javascript:;" class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25">Devam Et</button>
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
                        <div class="flex w-full max-w-full px-3 mt-6 [flex:0_0_auto]">
                           <button type="button" aria-controls="account" prev-form-btn="" @click="previousStep" href="javascript:;" class="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]">Geri Dön</button>
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
</NuxtLayout>
</template>