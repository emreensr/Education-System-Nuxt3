<script setup>
definePageMeta({
  layout: "main",
});

const runtimeConfig = useRuntimeConfig();
const products = ref([]);
const page = ref(1);
const productsPage = ref('');

const { error, execute, refresh } = useAsyncData(async () => {
      const response = await fetch(`${runtimeConfig.public.apiURL}/products?page=${page.value}`);
      const data = await response.json();
      products.value = data.data;
      productsPage.value = data.data.last_page;
    });
    console.log(products);

const refetch = (pageNumber) => {
  page.value = pageNumber
}
    
console.log(products);

</script>


<template>
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
        <div class="mx-auto max-w-6xl my-10">
          <div class="flex justify-between space-x-6 items-center bg-indigo-600 rounded-md border p-6 border-gray-200">
                <div class="flex items-center space-x-2">
                    <!-- <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" class="rounded-full h-12 w-12" alt=""> -->
                    <div class="flex flex-col space-y-1">
                        <a href="/profile/1">
                             <span class="text-[15px] text-white">Bütçenize uygun alanında uzman tüm eğitmenleri burada görebilirsiniz</span>
                        </a>
                    </div>
                </div>
                <div>
                    <p class='text-[18px] font-semibold text-white'>1000+ Eğitmen</p>
                </div>
            </div>
        </div>

        <div class="mx-auto max-w-6xl my-10 px-2">
           <h1 class="text-base font-semibold text-[24px]">Öne Çıkan Eğitmenler</h1>
           <p class="my-2 text-gray-600">Kategorisinde en çok öne çıkan eğitmenlerin bazılarını senin için listeledik</p>
        </div>
        <div class="mx-auto max-w-6xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-5 gap-8">
            <CardContent 
              v-for="product in products.data" 
              :key="product.id"
              :data="product"
              />
        </div>
        <div class="text-center items-center my-10">
        <CardPagination @change="refetch" :totalPages="productsPage" :currentPage="page.value" />
</div>
       
</div>
</template>