<script setup>
    const swiperData = ref([
        {
            img: 'https://bgcp.bionluk.com/images/portfolio/526x296/aab4f1b5-9402-4058-af84-7e14a20f123d.jpg'
        },
        {
            img: 'https://bgcp.bionluk.com/images/portfolio/526x296/1fa3b35c-5921-4ec2-bde1-5b04e1fa1ee5.jpg'
        },
        {
            img: 'https://bgcp.bionluk.com/images/portfolio/526x296/b3966b3f-c6c8-4c89-afe5-45cc13c47f34.png'
        },
        {
            img: 'https://bgcp.bionluk.com/images/portfolio/526x296/c1866d65-6ca8-42c6-886e-e4d9ead10059.png'
        },
        {
            img: 'https://bgcp.bionluk.com/images/portfolio/526x296/77726c09-30b5-48a0-bf3b-53750dc7d6ce.png'
        },
        {
            img: 'https://bgcp.bionluk.com/images/portfolio/526x296/5b87ffd1-ddd9-4dca-b423-3e0e2209256f.jpg'
        },
        {
            img: 'https://bgcp.bionluk.com/images/portfolio/526x296/3882a487-6d4f-41a0-9d81-dabaf57b4862.png'
        }
    ]);

</script>

<template>
    <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
        :slides-per-view="1"
        :breakpoints="{ 
            640:{ 
                slidesPerView:1
            },
            768:{
                 slidesPerView:2, 
            },
            1024: {
                slidesPerView: 4,
            },
         }"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{
            clickable: true,
            bulletClass: 'swiper-bullet',
            bulletActiveClass: 'swiper-bullet-active',
        }"
    >

    <swiper-slide
      class="relative"
      v-for="photo in swiperData"
      :key="key"
    >
    <div class='relative flex items-center justify-center px-2'>
    <div class='w-full max-w-md mx-auto bg-white border rounded-xl overflow-hidden'>
        <div class='max-w-md mx-auto'>
          <img :src="photo.img" />
          <div class='p-3 sm:p-3'>
            <div class='flex flex-row'>
            </div>
             <!-- Item -->
             <div class="flex justify-between space-x-6 items-center">
                <div class="flex items-center space-x-2">
                    <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" class="rounded-full h-12 w-12" alt="">
                    <div class="flex flex-col space-y-1">
                        <a href="/profile/1">
                             <span class="text-[15px]">Emre Ensar</span>
                        </a>

                        <span class="text-[#8b95a1] text-[15px]">Matematik</span>
                    </div>
                    
                </div>
                <div>
                    <p class='text-[20px] font-bold text-[#0FB478]'>700₺</p>
                </div>
            </div>
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
   </swiper-slide>
    </Swiper>
</template>