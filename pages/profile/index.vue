<script setup>
definePageMeta({
  layout: "main",
});

const activeTab = ref(0);
    const tabs = [
      {
        label: 'Genel Bilgiler',
        href: '#',
        icon: {
          viewBox: '0 0 20 20',
          path: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z',
        },
      },
      {
        label: 'Kendini Tanıt',
        href: '#',
        icon: {
            viewBox: '0 0 640 512',
            path:
            'M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z',
        },
      },
    ];

    const setActiveTab = (index) => {
      activeTab.value = index;
    };

</script>

<template>  
        <div class="border-b border-gray-200 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500">
                <li v-for="(tab, index) in tabs" :key="index" class="mr-2">
                    <a
                    :href="tab.href"
                    :class="[
                        'inline-flex p-4 border-b-2 rounded-t-lg hover:border-blue-600 hover:text-blue-600',
                        { 'text-blue-600 border-blue-600 active': index === activeTab }
                    ]"
                    @click="setActiveTab(index)"
                    >
                    <svg
                        :class="[
                        'w-5 h-5 mr-2',
                        { 'text-blue-600': index === activeTab }
                        ]"
                        :fill="index === activeTab ? 'currentColor' : 'none'"
                        :viewBox="tab.icon.viewBox"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        v-if="index === activeTab || !tab.icon.onlyActive"
                        :d="tab.icon.path"
                        :clip-rule="tab.icon.clipRule || 'evenodd'"
                        :fill-rule="tab.icon.fillRule || 'evenodd'"
                        />
                    </svg>
                    {{ tab.label }}
                    </a>
                </li>
            </ul>
        </div>
            <div v-if="activeTab === 0" class="mx-6">
                    <div class="w-full space-y-3 md:space-y-0 md:space-x-4 mt-6">
                    <form>
                    <div class="space-y-12">
                        <div class="pb-4">
                            <h2 class="text-base font-semibold leading-7 text-gray-900">Kişisel Bilgiler</h2>
                            <p class="mt-1 text-sm leading-6 text-gray-600">Buradan kişisel bilgilerinizi girebilir ve güncelleyebilirsiniz.</p>
                            <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-6">
                                <div class="sm:col-span-3">
                                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Adınız
                                        <span class="font-medium text-red-600">*</span>
                                    </label>
                                    <div class="mt-2">
                                        <input type="text" id="first_name" name="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Soyadınız
                                        <span class="font-medium text-red-600">*</span>
                                    </label>
                                    <div class="mt-2">
                                        <input type="text" id="last_name" name="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-Posta Adresiniz
                                        <span  class="font-medium text-red-600">*</span>
                                    </label>
                                    <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z">
                                            </path>
                                        </svg>
                                    </div>
                                        <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 ">
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefon Numaranız
                                        <span class="font-medium text-red-600">*</span>
                                    </label>
                                    <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 512 512">
                                            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                                        </svg>
                                    </div>
                                        <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 ">
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Doğum Tarihi</label>
                                    <div class="mt-2">
                                        <input type="date" id="birth_date" name="birth_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Şehir
                                        <span class="font-medium text-red-600">*</span>
                                    </label>
                                    <div class="mt-2">
                                        <select id="country" name="country" autocomplete="country-name"
                                         class="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 focus:shadow-[0_0_0_2px_#e5e7eb] text-[.875rem] mt-2 leading-5.6 ease block w-full appearance-none rounded-md bg-clip-padding p-2.5 font-normal outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input">
                                        <option>İstanbul</option>
                                        <option>Ankara</option>
                                        <option>İzmir</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">İlçe
                                        <span class="font-medium text-red-600">*</span>
                                    </label>
                                    <div class="mt-2">
                                        <select id="country" name="country" autocomplete="country-name" 
                                        class="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 focus:shadow-[0_0_0_2px_#e5e7eb] text-[.875rem] mt-2 leading-5.6 ease block w-full appearance-none rounded-md bg-clip-padding p-2.5 font-normal outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input">
                                        <option>Tuzla</option>
                                        <option>Kartal</option>
                                        <option>Pendik</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Mahalle</label>
                                    <div class="mt-2">
                                        <select id="country" name="country" autocomplete="country-name"
                                        class="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 focus:shadow-[0_0_0_2px_#e5e7eb] text-[.875rem] mt-2 leading-5.6 ease block w-full appearance-none rounded-md bg-clip-padding p-2.5 font-normal outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input">
                                        <option>Akfırat</option>
                                        <option>Cami</option>
                                        <option>Mimarsinan</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" class="text-sm font-normal leading-6 text-gray-900">İptal</button>
                        <button type="submit" class="rounded-md bg-green-600 px-3 py-2 text-sm font-normal text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Kaydet</button>
                    </div>
                    </form>
                    </div>
                </div>

                <div v-if="activeTab === 1" class="mx-6">
                    <div class="w-full space-y-3 md:space-y-0 md:space-x-4 mt-6">
                    <form>
                    <div class="space-y-12">
                        <div class="pb-4">
                            <h2 class="text-base font-semibold leading-7 text-gray-900">Kişisel Bilgiler</h2>
                            <p class="mt-1 text-sm leading-6 text-gray-600">Buradan kişisel bilgilerinizi girebilirsiniz.</p>
                            <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-6">
                                <div class="sm:col-span-3">
                                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Üniversite</label>
                                    <div class="mt-2">
                                        <select id="country" name="country" autocomplete="country-name" 
                                        class="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 focus:shadow-[0_0_0_2px_#e5e7eb] text-[.875rem] mt-2 leading-5.6 ease block w-full appearance-none rounded-md bg-clip-padding p-2.5 font-normal outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input">
                                        <option>Akdeniz Üniversitesi</option>
                                        <option>ODTÜ</option>
                                        <option>Boğaziçi Üniversitesi</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Fakülte</label>
                                    <div class="mt-2">
                                        <select id="country" name="country" autocomplete="country-name" 
                                        class="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 focus:shadow-[0_0_0_2px_#e5e7eb] text-[.875rem] mt-2 leading-5.6 ease block w-full appearance-none rounded-md bg-clip-padding p-2.5 font-normal outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input">
                                        <option>Bilgisayar Mühendisliği</option>
                                        <option>Endüstri Mühendisliği</option>
                                        <option>Matematik</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Bölüm</label>
                                    <div class="mt-2">
                                        <select id="country" name="country" autocomplete="country-name" 
                                        class="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 focus:shadow-[0_0_0_2px_#e5e7eb] text-[.875rem] mt-2 leading-5.6 ease block w-full appearance-none rounded-md bg-clip-padding p-2.5 font-normal outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input">
                                        <option>Kimya</option>
                                        <option>Matematik</option>
                                        <option>Fizik</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Eğitim Durumu</label>
                                    <div class="mt-2">
                                        <select id="country" name="country" autocomplete="country-name" 
                                        class="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 focus:shadow-[0_0_0_2px_#e5e7eb] text-[.875rem] mt-2 leading-5.6 ease block w-full appearance-none rounded-md bg-clip-padding p-2.5 font-normal outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input">
                                        <option>Mezun</option>
                                        <option>Öğrenci</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Tecrübeniz</label>
                                    <div class="mt-2">
                                        <select id="country" name="country" autocomplete="country-name" 
                                        class="p-2.5 bg-gray-50 border border-gray-300 text-gray-900 focus:shadow-[0_0_0_2px_#e5e7eb] text-[.875rem] mt-2 leading-5.6 ease block w-full appearance-none rounded-md bg-clip-padding p-2.5 font-normal outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input">
                                        <option>1 Yıl</option>
                                        <option>2 Yıl</option>
                                        <option>3 Yıl</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">1 cümle ile kendinizden bahsedin</label>
                                    <div class="mt-2">
                                        <input type="text" id="first_name" name="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                    </div>
                                </div>
                                
                                <div class="col-span-full">
                                    <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Hakkınızda</label>
                                    <div class="mt-2">
                                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                                        placeholder="Kısaca kendinizden bahsedin..."></textarea>
                                    </div>
                                    <!-- <p class="mt-1 text-sm leading-6 text-gray-500">Kendinizi kısaca anlatın</p> -->
                                </div>
                                <div class="col-span-full">
                                    <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Tecrübelerim</label>
                                    <div class="mt-2">
                                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                                        placeholder="Kısaca tecrübelerinizden bahsedin..."></textarea>

                                    </div>
                                    <!-- <p class="mt-1 text-sm leading-6 text-gray-500">Tecrübelerinizden bahsedin</p> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" class="text-sm font-normal leading-6 text-gray-900">İptal</button>
                        <button type="submit" class="rounded-md bg-green-600 px-3 py-2 text-sm font-normal text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Kaydet</button>
                    </div>
                    </form>
                    </div>
                </div>
</template>