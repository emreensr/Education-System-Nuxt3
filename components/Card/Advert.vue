<script setup>

const advertStatus = ref(true)

const changeAdvertStatus = (event) => {
    event.preventDefault(); 
    
    advertStatus.value = !advertStatus.value
    console.log(advertStatus);
}

</script>

<template>
    <!-- This is an example component -->
    <div class='relative flex'>
        <div class='w-full max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden'>
            <div class='max-w-md mx-auto'>
              <div class='h-[190px]' style='background-image:url(https://bgcp.bionluk.com/images/portfolio/1400x788/42ad5955-e341-4d1b-b166-d000da76cb08.png);background-size:cover;background-position:center'>
               </div>
              <div class='p-3 sm:p-3'>
                <div class='flex flex-row'>
                </div>
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
                <p class='text-gray-800 text-base mt-2 p-2'>Ben matematik konusunda size yardım edebilir ve gelişiminize katkıda bulunabilirim.</p>
                <div class="flex justify-center items-center">
                <!-- <div class="font-semibold text-center mx-4">
                    <button type="button" class="flex items-center gap-3 inline-block px-6 py-3 mt-4 mb-0 ml-auto font-bold text-white align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-sm ease-in tracking-tight shadow-md bg-150 bg-x-25">
                            <span class="text-white text-md">İlana Git</span>
                    </button>
                </div> -->
              </div>
            </div>
            </div>
        </div>
        <div class="absolute right-0 top-0 z-20 rounded-md bg-[#2d3640] px-2 py-2 text-sm font-medium text-white">
            <button @click="changeAdvertStatus($event)" class="mx-2 inline-flex select-none rounded-lg text-sm font-medium text-white">
                <Icon v-if="advertStatus" name="iconamoon:eye-off-bold" size="24" color="white"/>
                <Icon v-else name="iconamoon:eye-light" size="24" color="white"/>
            </button>
            <button v-if="true" class="mx-2 inline-flex select-none rounded-lg text-sm font-medium text-white">
                <Icon name="ic:baseline-delete" size="24" color="white"/>
            </button>
            <button v-if="true" class="mx-2 inline-flex select-none rounded-lg text-sm font-medium text-white">
                <Icon name="ic:baseline-edit" size="24" color="white"/>
            </button>
        </div>
    </div>
    </template>