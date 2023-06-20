<script setup>

    definePageMeta({
    layout: "main",
    });

</script>

<template>
<nav class="flex items-center justify-between px-6 bg-white py-6 border-b">
                <div class="flex flex-col gap-2">
                    <h1 class="text-2xl font-semibold">İlanlarım</h1>
                    <p class="text-gray-600">Buradan tüm ilanlarını yönetebilir ve yeni bir ilan oluşturabilirsin.</p>
                </div>
                <nuxt-link 
                        to="/create-advert"
                        type="submit" 
                        class="flex
                              items-center
                              justify-center
                              text-white 
                              bg-blue-700 
                              hover:bg-blue-600 
                              focus:ring-4 
                              focus:outline-none 
                              focus:ring-blue-300 
                              font-medium 
                              rounded-lg 
                              text-sm
                              px-4 
                              py-4
                              cursor-pointer"
                          >
                       <Icon name="ic:round-plus" size="20" color="white" />
                        <span class="hidden lg:block md:block">Yeni İlan Oluştur</span>
                      </nuxt-link > 
                </nav>
                <div class="mx-6">
                    <div class="md:flex space-y-3 md:space-y-0 md:space-x-4 mt-6">
                    <form>
                    <div class="space-y-12">
                      <div class="mx-auto max-w-6xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:p-5 mt-5">
                         <CardAdvert />
                         <CardAdvert />
                         <CardAdvert />

                      </div>
                    </div>
                    </form>
                    </div>
                </div>
</template>