<script setup>

    definePageMeta({
    layout: "main",
    });

 const showMore = ref(false);
 const locations = ref([
        'Tuzla',
        'Pendik',
        'Kartal',
        'Maltepe',
        'Kadıköy',
        'Ataşehir',
        'Sultanbeyli',
        'Sancaktepe',
        'Ümraniye',
        'Çekmeköy',
      ]);

const visibleLocations = computed(() => {
    return showMore.value ? locations.value : locations.value.slice(0, 4);
});

const toggleShowMore = () => {
      showMore.value = !showMore.value;
    };
</script>

<template>
<NuxtLayout>
<div class="app bg-[#F4F5F7] p-5">
 <main class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:my-3 max-w-6xl container mx-auto">
    <aside class="col-span-12 lg:col-span-4">
        <div class="bg-white shadow-md rounded-lg p-5 lg:sticky lg:top-28">
            <div class="flex flex-col gap-1 text-center items-center">
                <img class="h-32 w-32 bg-white p-2 rounded-full shadow mb-4" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80" alt="">
                <p class="font-semibold text-xl">Emre Ensar</p>
                <div class="text- leading-normal text-gray-500 flex justify-center items-center">
                    <div class="flex items-center mt-2.5 mb-3">
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>First star</title>
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Second star</title>
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>Third star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>Fourth star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <title>Fifth star</title>
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                        </path>
                    </svg>
                    <span
                        class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>
                </div>
            </div>
            <div class="flex justify-between space-x-6 mt-5 items-center">
                <div class="flex items-center space-x-2">
                    <div class="flex flex-col space-y-2">
                        <span class="font-normal text-sm">Saatlik Ücret</span>
                    </div>
                </div>
                <div>
                    <p class='text-[18px] font-bold text-black'>700₺</p>
                </div>
            </div>
            <div class="flex justify-between space-x-6 mt-5 items-center">
                <div class="flex items-center space-x-2">
                    <div class="flex flex-col space-y-2">
                        <span class="font-normal text-sm">Cevaplama Süresi</span>
                    </div>
                </div>
                <div>
                    <p class='text-[18px] font-bold text-black'>1 saat</p>
                </div>
            </div>
            <div class="flex justify-between space-x-6 mt-5 items-center">
                <div class="flex items-center space-x-2">
                    <div class="flex flex-col space-y-2">
                        <span class="font-normal text-sm">Öğrenci Sayısı</span>
                    </div>
                </div>
                <div>
                    <p class='text-[18px] font-bold text-black'>20+</p>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <div class="font-semibold text-center mx-4">
                    <button type="button" class="flex items-center gap-3 inline-block px-6 py-3 mt-8 mb-0 ml-auto font-bold text-right text-white align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25"
                    ><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-white" viewBox="0 0 512 512">
                        <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/>
                    </svg>
                    <span class="text-white text-md">Ders Talebinde Bulun</span>
                </button>
                </div>
            </div>
        </div>        
    </aside>

    <article class="col-span-12 lg:col-span-8">
        <div class="bg-white mb-4 p-5">
                <div class="flex gap-1 items-center text-center font-semibold text-xl">
                    <h2 class="text-[20px] font-semibold">Eğitim Bilgileri</h2>
                </div>
                <div class="mt-5">
                    <p class="text-gray-800 text-base">
                        Tuzla Teknik Ve Anadolu Lisesi - Web Programcılığı
                    </p>
                    <p class="text-gray-800 text-base">
                        Kocaeli Üniversitesi - Bilgisayar Programcılığı
                    </p>
                    <p class="text-gray-800 text-base">
                        Doğuş Üniversitesi - Bilgisayar Mühendisliği
                    </p>
                </div>
        </div>

        <div class="bg-white p-5 my-10">
                <div class="flex gap-1 items-center text-center font-semibold text-xl">
                    <h2 class="text-[20px] font-semibold">Ders ile ilgili bilgiler</h2>
                </div>
                <p class="text-gray-800 text-base mt-5">Merhaba ben Emre Ensar Çapcı, 2020 yılında doğuş Üniversitesinden mezun oldum.
                Şu an matematik alanında özel ders ve eğitim danışmanlığı konusunda destek oluyorum.
                Kişiye özel bir eğitim modeli ile öğrencilerime katkıda bulunuyorum.
                </p>
                <p class="text-gray-800 text-base mt-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                </p>
        </div>
        <div class="bg-white p-5">
                <!-- <div class="border-b border-gray-100"></div>  -->
                <div class="flex gap-1 items-center text-center font-semibold text-xl">
                    <h2 class="text-[20px] font-semibold">Verdiği Hizmetler</h2>
                </div>
                <div class="mx-auto max-w-6xl grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 lg:p-5 mt-5">
                    <CardContent />
                    <CardContent />
                </div>
        </div>
        <div class="flex bg-white my-10 p-5">
            <div class="flex flex-col justify-center w-full py-1">
                <div class="flex gap-1 items-center text-center font-semibold text-xl mb-0.5 mx-3 mt-3">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 384 512">
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                    </svg> -->
                    <div class="flex flex-col">
                        <h2 class="text-[20px] font-semibold">Ders verdiği konumlar</h2>
                    </div>
                </div>
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 py-3 px-3">
                    <div
                        v-for="(location, index) in visibleLocations"
                        :key="index"
                        class="flex items-center bg-slate-100 rounded-md p-3"
                        >
                        {{ location }}
                    </div> 
                   </div>
                <div class="flex justify-center items-center">
                <div class="font-semibold text-center mx-4">
                    <button 
                    type="button" 
                    @click="toggleShowMore" 
                    class="flex items-center gap-3 inline-block px-6 py-3 mt-4 mb-0 ml-auto font-bold text-white align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25">
                    {{ showMore ? 'Daha Az Göster' : 'Daha Fazla Göster' }}
                    </button>
                </div>
</div>
            </div>
        </div>
        <div class="flex bg-white p-5 lg:my-10">
            <div class="flex flex-col justify-center w-full px-2 py-1">
                <div class="flex justify-between items-center ">
                    <div class="flex flex-col">
                        <h2 class="text-[20px] font-semibold">Ders mekanları</h2>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 py-3">
                    <div class="flex group shadow shadow-gray-200 items-center p-3 rounded-lg bg-white">
                        <div class="flex items-center justify-center h-[45px] min-w-[45px] bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 576 512">
                              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                            </svg>                        
                        </div>
                        <div class="flex-1">
                            <h4 class="mb-0 text-sm font-normal">Kendi evinde</h4>
                        </div>
                    </div>
                    <div class="flex group shadow shadow-gray-200 items-center p-3 rounded-lg bg-white">
                        <div class="flex items-center justify-center h-[45px] min-w-[45px] bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 576 512">
                              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                            </svg>
                       </div>
                        <div class="flex-1">
                            <h4 class="mb-0 text-sm font-normal">Öğrenci evinde</h4>
                        </div>
                    </div>
                    <div class="flex group shadow shadow-gray-200 items-center p-3 rounded-lg bg-white">
                        <div class="flex items-center justify-center h-[45px] min-w-[45px]  bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 512 512">
                              <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
                            </svg>
                        </div>
                        <div class="flex-1">
                            <h4 class="mb-0 text-sm font-normal">Online</h4>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        <section class="bg-white py-8 p-5">
            <div class="mx-auto">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-[20px] font-semibold text-gray-900">Yorumlar (20)</h2>
            </div>
            <form v-if="false" class="mb-6">
                <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                    <label for="comment" class="sr-only">Yorum Yaz..</label>
                    <textarea id="comment" rows="6"
                        class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                        placeholder="Yorum Yaz.." required></textarea>
                </div>
                <button type="submit"
                    class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
                    Paylaş
                </button>
            </form>
            <article class="p-6 mb-6 text-base bg-white rounded-xl border border-gray-300">
                <footer class="flex justify-between items-center mb-2">
                    <div class="flex items-center">
                        <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                                class="mr-2 w-6 h-6 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                alt="Michael Gough">Michael Gough</p>
                    </div>
                </footer>
                <p class="text-gray-800 text-base">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                    instruments for the UX designers. The knowledge of the design tools are as important as the
                    creation of the design strategy.</p>
                <!-- <div class="flex items-center mt-4 space-x-4">
                    <button type="button"
                        class="flex items-center text-sm text-gray-500 hover:underline">
                        <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                            Yanıtla
                    </button>
                </div> -->
            </article>
            <article class="p-6 mb-6 ml-6 lg:ml-12 text-base bg-[#f7f7f7] rounded-xl border border-gray-300">
                <footer class="flex justify-between items-center mb-2">
                    <div class="flex items-center">
                        <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                                class="mr-2 w-6 h-6 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                alt="Jese Leos">Emre Ensar</p>
                    </div>
                </footer>
                <p class="text-gray-800 text-base">Much appreciated! Glad you liked it ☺️</p>
            </article>
            <article class="p-6 mb-6 text-base bg-white rounded-xl border border-gray-300">
                <footer class="flex justify-between items-center mb-2">
                    <div class="flex items-center">
                        <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                                class="mr-2 w-6 h-6 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                alt="Bonnie Green">Bonnie Green</p>
                    </div>
                </footer>
                <p class="text-gray-800 text-base">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
            </article>
            <article class="p-6 text-base bg-white rounded-xl border border-gray-300">
                <footer class="flex justify-between items-center mb-2">
                    <div class="flex items-center">
                        <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                                class="mr-2 w-6 h-6 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                alt="Helene Engels">Helene Engels</p>
                        <!-- <p class="text-sm text-gray-600"><time pubdate datetime="2022-06-23"
                                title="June 23rd, 2022">Jun. 23, 2022</time></p> -->
                    </div>
                </footer>
                <p class="text-gray-800 text-base">Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p>
            </article>
        </div>
</section>

    </article>
</main>

<div class="max-w-8xl mx-auto mt-12">
<h1 class="text-[24px] font-semibold text-center">Kategori ile ilgili diğer ilanlar</h1>
    <div class="py-8 max-w-6xl mx-auto">
        <CardSwiper />
    </div>
</div>
</div>
</NuxtLayout>
</template>