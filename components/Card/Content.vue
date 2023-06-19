<template>
<!-- This is an example component -->
<div class='relative flex items-center justify-center'>
    <div class='w-full max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden'>
        <div class='max-w-md mx-auto'>
          <div class='h-[190px]' style='background-image:url(https://bgcp.bionluk.com/images/portfolio/1400x788/42ad5955-e341-4d1b-b166-d000da76cb08.png);background-size:cover;background-position:center'>
           </div>
          <div class='p-3 sm:p-3'>
            <div class='flex flex-row'>
            </div>
             <!-- Item -->
             <div class="flex justify-between space-x-6 items-center">
                <div class="flex items-center space-x-2">
                    <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" class="rounded-full h-12 w-12" alt="">
                    <div class="flex flex-col space-y-1">
                        <a href="/user/emre-ensar">
                             <span class="text-[15px]">Emre Ensar</span>
                        </a>

                        <span class="text-[#8b95a1] text-[15px]">Matematik</span>
                    </div>
                    
                </div>
                <div>
                    <p class='text-[20px] font-bold text-[#0FB478]'>700₺</p>
                </div>
            </div>
            <!-- Item -->
              <!-- Item -->
              <!-- <div class="flex justify-between space-x-6 mt-3 items-center">
                <div class="flex items-center space-x-2">
                    <div class="flex flex-col space-y-2">
                <div class="flex items-center mt-0.5 mb-3">
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
                <div>
                    <p class='text-[13px] font-semibold text-yellow-400'>28 Yorum</p>
                </div>
            </div> -->
            <p class='text-gray-800 text-base mt-2'>Ben matematik konusunda size yardım edebilir ve gelişiminize katkıda bulunabilirim.</p>
            <div class="flex justify-center items-center">

            <div class="font-semibold text-center mx-4">
                <button type="button" class="flex items-center gap-3 inline-block px-6 py-3 mt-4 mb-0 ml-auto font-bold text-white align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25">
                        <span class="text-white text-md">İlana Git</span>
                </button>
            </div>
          </div>
        </div>
        </div>
    </div>
    <span v-if="false" class="absolute left-0 top-0 z-10 ml-3 mt-1 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white"> Öne Çıkan </span>

</div>
</template>