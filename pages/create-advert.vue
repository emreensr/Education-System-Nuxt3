<script setup>
definePageMeta({
  layout: "main",
});

const progressBarWidth = ref('0');
const title = ref('')
const activeStep = ref('category');

const isMaxLengthExceeded = computed(() => {
   return title.value.length > 80;
});

const nextStep = () => {
      if (activeStep.value === 'category') {
        activeStep.value = 'advertTitle';
        progressBarWidth.value = '17';
      } else if (activeStep.value === 'advertTitle') {
        activeStep.value = 'classes';
        progressBarWidth.value = '34';
      } else if (activeStep.value === 'classes') {
        activeStep.value = 'about';
        progressBarWidth.value = '51';
      } else if (activeStep.value === 'about') {
         activeStep.value = 'location';
        progressBarWidth.value = '68';
      } else if (activeStep.value === 'location') {
         activeStep.value = 'price';
        progressBarWidth.value = '85';
      } else if (activeStep.value === 'price') {
         activeStep.value = 'photo';
        progressBarWidth.value = '100';
      }
    };
    
    const previousStep = () => {
      if (activeStep.value === 'advertTitle') {
        activeStep.value = 'category';
        progressBarWidth.value = '0';
      } else if (activeStep.value === 'classes') {
        activeStep.value = 'advertTitle';
        progressBarWidth.value = '17';
      } else if (activeStep.value === 'about') {
        activeStep.value = 'classes';
        progressBarWidth.value = '34';
      } else if (activeStep.value === 'location') {
        activeStep.value = 'about';
        progressBarWidth.value = '51';
      } else if (activeStep.value === 'price') {
        activeStep.value = 'location';
        progressBarWidth.value = '68';
      } else if (activeStep.value === 'photo') {
        activeStep.value = 'price';
        progressBarWidth.value = '85';
      }
    };
</script>

<template>
   <div class="w-full max-w-7xl px-3 flex:0 auto mx-auto h-screen">
      <div class="w-full max-w-7xl mx-auto mt-12 lg:mt-24">
  <div class="relative h-10 rounded-full bg-gray-100">
    <div class="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#00dc82] via-[#34cdfe] to-[#0047e1] transition-width duration-500" :style="{ width: progressBarWidth + '%' }"></div>
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10">
      <span class="text-xl text-black font-bold">{{ progressBarWidth }}%</span>
    </div>
   </div>
</div>

   <div multisteps-form="">
      <div class="flex flex-wrap -mx-3">
         <div class="w-full max-w-full px-3 m-auto [flex:0_0_auto]">
            <form class="relative" style="height: 423px;">
               <div form="category" v-if="activeStep === 'category'" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words border-0 rounded-2xl bg-clip-border h-auto opacity-100 visible" active="">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto my-3 p-3">
                  <div class="bg-[#fff1f1] p-12 rounded-2xl hidden md:block">
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
                                         class="p-3 
                                         bg-gray-50 
                                         border
                                         border-gray-300 
                                         text-gray-900 
                                         focus:shadow-[0_0_0_2px_#e5e7eb] 
                                         text-md mt-2 
                                         leading-5.6 
                                         ease block 
                                         w-full 
                                         appearance-none 
                                         rounded-md 
                                         bg-clip-padding 
                                         font-normal
                                         outline-none
                                         transition-all 
                                         placeholder:text-grey-500 
                                         focus:border-gray-400 
                                         focus:outline-none"
                                         >
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
                           <button type="button" v-if="!isMaxLengthExceeded" @click="nextStep" href="javascript:;" class="inline-block px-3 py-3 md:mt-12 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25">Devam Et</button>
                        </div>
                  </div>
               </div>
               </div>
               <div form="advertTitle" v-if="activeStep === 'advertTitle'" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 rounded-2xl bg-clip-border h-auto opacity-100 visible" active="">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto my-3 p-3">
                  <div class="bg-[#fff1f1] p-12 rounded-2xl hidden lg:block">
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
                              outline-none
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
                        <div class="flex mt-12 gap-8">
                           <button type="button" aria-controls="account" prev-form-btn="" @click="previousStep" href="javascript:;" 
                                   class="inline-block px-3 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]"
                                   >
                                   Geri Dön
                                 </button>
                           <button type="button" @click="nextStep" href="javascript:;"
                                   class="inline-block px-3 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25"
                                   :disabled="isMaxLengthExceeded"
                            >
                            Devam Et
                           </button>
                        </div>
                  </div>
               </div>
               </div>
               <div form="classes" v-if="activeStep === 'classes'" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 rounded-2xl bg-clip-border h-auto opacity-100 visible" active="">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto my-3 p-3">
                  <div class="bg-[#fff1f1] p-12 rounded-2xl hidden md:block">
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
                              outline-none
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
                           <button type="button" aria-controls="account" prev-form-btn="" @click="previousStep" href="javascript:;" class="inline-block px-3 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]">Geri Dön</button>
                           <button type="button" @click="nextStep" href="javascript:;" class="inline-block px-3 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25">Devam Et</button>
                        </div>
                  </div>
               </div>
               </div>
               <div form="about" v-if="activeStep === 'about'" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 rounded-2xl bg-clip-border h-auto opacity-100 visible" active="">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto my-3 p-3">
                  <div class="bg-[#fff1f1] p-12 rounded-2xl hidden md:block">
                     <div class="flex items-center gap-2">
                        <Icon name="material-symbols:info-outline-rounded" size="38" color="black" />
                     <h1 class="font-bold text-3xl">Bilgi
                     </h1>
                  </div>
                     <p class="mt-3 text-base">Güven verin, yetkinliğinizi kanıtlayın ve öğrencilere uzmanlığınız hakkında güven verin.</p>
                     <p class="mt-2 text-base">Bunlar öğrencilerin sizin hakkınızda ilk okuyacağı şeylerden biri, yazdıklarınızın daha çekici ve güvenilir olması için yazım kurallarına ve yazı biçiminize dikkat edin.</p>

                  </div>
                  <div class="">
                     <h1 class="font-semibold text-3xl">Sizin Hakkınızda</h1>
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
                              outline-none
                              focus:outline-none 
                              focus:ring-2 
                              focus:ring-indigo-500 
                              focus:border-transparent 
                              resize-none" 
                              placeholder="Öğrencilerin sizi tanıması ve neden sizi tercih etmeleri gerektiğini anlatın"
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
                           <button type="button" aria-controls="account" prev-form-btn="" @click="previousStep" href="javascript:;" class="inline-block px-3 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]">Geri Dön</button>
                           <button type="button" @click="nextStep" href="javascript:;" class="inline-block px-3 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25">Devam Et</button>
                        </div>
                  </div>
               </div>
               </div>
               <div form="location" v-if="activeStep === 'location'" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 rounded-2xl bg-clip-border h-auto opacity-100 visible" active="">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto my-3 p-3">
                  <div class="bg-[#fff1f1] p-12 rounded-2xl hidden md:block">
                     <div class="flex items-center gap-2">
                        <Icon name="material-symbols:info-outline-rounded" size="38" color="black" />
                     <h1 class="font-bold text-3xl">Bilgi
                     </h1>
                  </div>
                     <p class="mt-3 text-base">Adresiniz sitede asla yer almaz. Sadece ders vermeyi kabul ettiğiniz öğrencilere iletilir.</p>
                     <p class="mt-3 text-base">Derslerinizi belirttiğiniz adresteki evinizde verebilirsiniz.</p>
                     <p class="mt-3 text-base">Öğrencinin evine veya kararlaştıracağınız başka bir mekana gitmek için gidebileceğiniz en fazla uzaklık</p>
                     <p class="mt-3 text-base">Sınırları ortadan kaldırın, webcam üzerinden derslerinizi online olarak tüm dünyadaki öğrencilere verin</p>
                  </div>
                  <div class="">
                     <h1 class="font-semibold text-3xl">Dersin Verileceği Yer</h1>
                     <div class="mt-5">
                        <fieldset>
                              <div class="mt-6 space-y-6">
                                 <div class="relative flex gap-x-3 border border-gray-100 shadow-sm p-5 rounded-lg hover:bg-gray-200">
                                 <div class="flex h-6 items-center">
                                    <input id="comments" name="comments" type="checkbox" class="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                 </div>
                                 <div class="text-sm leading-6">
                                    <label for="comments" class="font-medium text-base text-gray-900">Öğrenci Evinde</label>
                                 </div>
                                 </div>
                                 <div class="relative flex gap-x-3 border border-gray-100 shadow-sm p-5 rounded-lg hover:bg-gray-200">
                                 <div class="flex h-6 items-center">
                                    <input id="candidates" name="candidates" type="checkbox" class="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                 </div>
                                 <div class="text-sm leading-6">
                                    <label for="candidates" class="font-medium text-base text-gray-900">Öğretmen Evinde</label>
                                 </div>
                                 </div>
                                 <div class="relative flex gap-x-3 border border-gray-100 shadow-sm p-5 rounded-lg hover:bg-gray-200">
                                 <div class="flex h-6 items-center">
                                    <input id="offers" name="offers" type="checkbox" class="h-6 w-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                                 </div>
                                 <div class="text-sm leading-6">
                                    <label for="offers" class="font-medium text-base text-gray-900">Online</label>
                                 </div>
                                 </div>
                              </div>
                           </fieldset>
                        </div>
                        <div class="flex mt-12">
                           <button type="button" aria-controls="account" prev-form-btn="" @click="previousStep" href="javascript:;" class="inline-block px-3 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]"
                           >Geri Dön</button>
                           <button type="button" @click="nextStep" href="javascript:;" class="inline-block px-3 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25"
                           >Devam Et</button>
                        </div>
                  </div>
               </div>
               </div>
               <div form="price" v-if="activeStep === 'price'" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 rounded-2xl bg-clip-border h-auto opacity-100 visible" active="">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto my-3 p-3">
                     <div class="bg-[#fff1f1] p-12 rounded-2xl hidden lg:block">
                        <div class="flex items-center gap-2">
                           <Icon name="material-symbols:info-outline-rounded" size="38" color="black" />
                           <h1 class="font-bold text-3xl">Bilgi</h1>
                        </div>
                        <p class="mt-3 text-base">Saatlik ders ücretinizi seçmekte ve istediğiniz zaman değiştirmekte özgürsünüz.</p>
                        <p class="mt-3 text-base">Yeni başlıyorsanız, çok yüksek bir saatlik ücret seçmemek sizin yararınıza olabilir, ücretinizi değiştirmek için yorum ve referans almayı bekleyin.</p>
                     </div>
                     <div class="flex flex-col justify-between">
                        <h1 class="font-semibold text-3xl">Saatlik Ücret</h1>
                        <div class="mt-5">
                           <div class="flex">
                              <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                                 ₺
                              </span>
                              <input type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="100">
                           </div>
                        </div>
                        <div class="flex mt-12">
                           <button type="button" aria-controls="account" prev-form-btn="" @click="previousStep" href="javascript:;" class="inline-block px-3 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]">
                              Geri Dön
                           </button>
                           <button type="button" @click="nextStep" href="javascript:;" class="inline-block px-3 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25" :disabled="isMaxLengthExceeded">
                              Devam Et
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div form="photo" v-if="activeStep === 'photo'" class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 rounded-2xl bg-clip-border h-auto opacity-100 visible" active="">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto my-3 p-3">
                  <div class="bg-[#fff1f1] p-12 rounded-2xl hidden lg:block">
                     <div class="flex items-center gap-2">
                        <Icon name="material-symbols:info-outline-rounded" size="38" color="black" />
                     <h1 class="font-bold text-3xl">Bilgi
                     </h1>
                  </div>
                     <p class="mt-3 text-base">İlanınızın daha fazla ilgi çekmesi için görsel yüklemelisiniz.</p>
                     <p class="mt-3 text-base">Profesyonel ve kaliteli bir fotoğraf öğrencilerinizle güven oluşturmanıza ve taleplerinizi arttırmanıza yardımcı olacaktır.</p>
                  </div>
                  <div class="">
                     <h1 class="font-semibold text-3xl">Vitrin</h1>
                     <div class="mt-5">
                           <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                              <div class="text-center">
                              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                 <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                              </svg>
                              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                 <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                    <span>Görsel Yükle</span>
                                    <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                 </label>
                                 <p class="pl-1">ya da sürükle bırak</p>
                              </div>
                              <p class="text-xs leading-5 text-gray-600">PNG, JPG, maksimum 10MB</p>
                              </div>
                        </div>
                        </div>
                        <div class="flex mt-12 gap-8">
                           <button type="button" aria-controls="account" prev-form-btn="" @click="previousStep" href="javascript:;" 
                                   class="inline-block px-3 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]"
                                   >
                                   Geri Dön
                                 </button>
                           <button type="button" @click="nextStep" href="javascript:;"
                                   class="inline-block px-3 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25"
                            >
                            Ödemeye geç
                           </button>
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