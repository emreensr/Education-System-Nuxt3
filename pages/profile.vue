<script setup>
definePageMeta({
  layout: "main",
});
</script>

<template>
    <NuxtLayout>
    <div class="app bg-[#F4F5F7] p-5">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:my-3 max-w-8xl container mx-auto">
            <div class="py-10 bg-white shadow-md p-5 col-span-12 lg:col-span-3 lg:h-screen">
                <div class="flex items-center justify-center">
                    <label for="image" class="relative cursor-pointer">
                        <img 
                             class="rounded-md" 
                             width="120" 
                             src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f7703994b69d48ca802df55729a2325c_xl.jpg"
                        >
                        <div class="absolute bottom-0 right-0 rounded-full bg-white shadow-xl border p-1 border-gray-300 inline-block w-[32px]">
                            <Icon name="ph:pencil-simple-line-bold" size="17" class="-mt-1 ml-0.5"/>
                        </div>
                    </label>
                    <input
                        class="hidden"
                        type="file"
                        id="image"
                        accept="image/png, image/jpeg, image/jpg"
                    >
                 </div>
                <ul>
                    <li>
                    <nuxt-link
                        to="/user/emre-ensar"
                        class="flex space-x-2 text-[15px] bg-purple-500 mt-10 shadow-md mb-2 cursor-pointer hover:text-[#EC5252] duration-150 px-2 py-2 mb-1 block rounded-md hover:bg-purple-400"
                        exact-active-class="bg-gray-100"
                        >
                        <Icon name="icon-park-outline:preview-open" size="22" color="white"/>
                        <span class="font-normal text-sm text-white">Profilimi Görüntüle</span>
                    </nuxt-link>
                    </li>
                    <li>
                    <nuxt-link
                        to="/profile"
                        class="flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100"
                        exact-active-class="bg-gray-100"
                        >
                        <Icon name="material-symbols:person" size="22" color="gray"/>
                        <span class="font-normal text-sm text-[#3F4254]">Kişisel Bilgilerim</span>
                    </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            to="/profile/my-lessons"
                            class="flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100"
                            exact-active-class="bg-gray-100"
                        >
                        <Icon name="solar:notebook-linear" size="22" color="gray" />
                        <span class="font-normal text-sm text-[#3F4254]">Hangi Dersleri Verebilirsin?</span>
                    </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            to="/profile/locations"
                            class="flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100"
                            exact-active-class="bg-gray-100"
                            >
                        <Icon name="material-symbols:location-on" size="22" color="gray" />
                        <span class="font-normal text-sm text-[#3F4254]">Ders Verebileceğin Konumlar</span>
                    </nuxt-link>

                    </li>
                    <li>
                        <nuxt-link
                            to="/profile/available-days"
                            class="flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100"
                            exact-active-class="bg-gray-100"
                            >
                        <Icon name="material-symbols:event-available" size="22" color="gray" />
                        <span class="font-normal text-sm text-[#3F4254]">Müsait Günlerin</span>
                        </nuxt-link>

                    </li>
                    <li>
                        <nuxt-link
                            to="/profile/lesson-requests"
                            class="flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100"
                            exact-active-class="bg-gray-100"
                            >
                        <Icon name="carbon:document-multiple-01" size="22" color="gray" />
                        <span class="font-normal text-sm text-[#3F4254]">Ders Talepleri</span>
                        </nuxt-link>

                    </li>
                    <li>
                        <nuxt-link
                            to="/profile/comments"
                            class="flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100"
                            exact-active-class="bg-gray-100"
                            >
                        <Icon name="uil:comments-alt" size="22" color="gray" />
                        <span class="font-normal text-sm text-[#3F4254]">Yorumlar</span>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            to="/profile/invite-friends"
                            class="flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100"
                            exact-active-class="bg-gray-100"
                            >
                        <Icon name="ic:baseline-person-add-alt-1" size="22" color="gray" />
                        <span class="font-normal text-sm text-[#3F4254]">Arkadaşına Tavsiye Et</span>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link
                            to="/profile/settings"
                            class="flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100"
                            exact-active-class="bg-gray-100"
                            >
                        <Icon name="material-symbols:settings-rounded" size="22" color="gray" />
                        <span class="font-normal text-sm text-[#3F4254]">Ayarlar</span>
                       </nuxt-link>
                    </li>
                    <button class="w-full mt-10 bg-[#EC5252] rounded-full py-1.5 text-white">Çıkış Yap</button>
                </ul>
            </div>
            <main class="min-h-screen col-span-12 lg:col-span-9 bg-white border-l">
                <NuxtPage />
            </main>
        </div>
        </div>
    </NuxtLayout>
    </template>