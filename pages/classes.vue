<script setup>
definePageMeta({
  layout: "main",
});
</script>


<template>
    <NuxtLayout>
<div class="app bg-[#F4F5F7] p-3">
    <div class="max-w-4xl mx-auto my-5 bg-white shadow-sm rounded-xl p-5">
        <div class="flex flex-wrap justify-between items-center">
            <div class="w-full max-w-full px-3 mb-4 md:w-6/12">
            <label class="mb-2 ml-1 font-bold text-slate-700" for="Country">Şehir</label>
            <div class="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                <div class="choices__inner">
                <select choice="" class="focus:shadow-[0_0_0_2px_#e9aede] mt-2 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-3 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-[#e293d3] focus:outline-none choices__input" name="choices-country" choices-select="" hidden="" tabindex="-1" data-choice="active">
                    <option value="Algeria">İstanbul</option>
                    <option value="Algeria">Ankara</option>
                    <option value="Algeria">İzmir</option>
                    <option value="Algeria">Adana</option>
                </select>
                </div>
            </div>
            </div>
            <div class="w-full max-w-full px-3 mb-4 md:w-6/12">
            <label class="mb-2 ml-1 font-bold text-slate-700" for="Country">Dersler</label>
            <div class="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                <div class="choices__inner">
                <select choice="" class="focus:shadow-[0_0_0_2px_#e9aede] mt-2 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-3 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-[#e293d3] focus:outline-none choices__input" name="choices-country" choices-select="" hidden="" tabindex="-1" data-choice="active">
                    <option value="Algeria">Matematik</option>
                    <option value="Algeria">Yabancı Dil</option>
                    <option value="Algeria">Müzik</option>
                    <option value="Algeria">Yazılım</option>
                </select>
                </div>
            </div>
            </div>
        </div>
        <div class="text-center">
            <button class="bg-indigo-600 py-3 px-6 my-2 rounded-md text-white hover:bg-indigo-500">Eğitmen Bul</button>
        </div>
        </div>
        <div class="mx-auto max-w-6xl my-10 px-2">
           <h1 class="text-base font-semibold text-[24px]">Öne Çıkan Eğitmenler</h1>
           <p class="my-2 text-gray-600">Kategorisinde en çok öne çıkan eğitmenlerin bazılarını senin için listeledik</p>
        </div>
        <div class="mx-auto max-w-6xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-5 gap-8">
            <CardContent />
            <CardContent />
            <CardContent />
            <CardContent />
            <CardContent />
            <CardContent />
        </div>
        <div class="text-center items-center my-10">
      
  <ul class="inline-flex items-center -space-x-px">
    <li>
      <a href="#" class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Previous</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Next</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </li>
  </ul>
</div>
       
</div>
</NuxtLayout>
</template>