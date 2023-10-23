<script setup>
import { useUserStore } from "~/store/user";
const userStore = useUserStore();
const runtimeConfig = useRuntimeConfig();

definePageMeta({
  layout: "main",
  middleware: "restricted",
});

let file = ref(null);
let uploadedImage = ref(null);

const handleLogout = () => {
  userStore.signOut();
};

const getUploadedImage = async (e) => {
  file.value = e.target.files[0];
  uploadedImage.value = URL.createObjectURL(file.value);

  const formData = new FormData();
  formData.append("avatar", file.value);

  try {
    const avatarResponse = await $fetch(runtimeConfig.public.apiURL + "/update-student-image", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${userStore.getToken}`,
      },
    });
    
    const userResponse = await $fetch(runtimeConfig.public.apiURL + "/get-user-details", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userStore.getToken}`,
      },
    });
    userStore.setUserDetails(userResponse.details);
  } catch (err) {
    console.error(err);
  } finally {
    file.value = null;
    uploadedImage.value = null;
  }
};

</script>

<template>
  <div class="app bg-[#F4F5F7] p-5">
    <div
      class="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:my-3 max-w-8xl container mx-auto"
    >
      <div
        class="py-10 bg-white shadow-md p-5 col-span-12 lg:col-span-3 lg:h-screen"
      >
        <div class="flex items-center justify-center">
          <label for="image" class="relative cursor-pointer">
            <img
              v-if="uploadedImage"
              :src="uploadedImage"
              class="rounded-md"
              width="120"
            />
            <img
              v-else-if="userStore.getUserDetails?.user?.avatar"
              :src="
                runtimeConfig.public.baseURL +
                userStore.getUserDetails?.user?.avatar"
                class="aspect-square rounded-full transition duration-200 object-cover"
                width="120"
                alt=""
            />
            <div
              v-else
              class="bg-gray-100 w-28 aspect-square flex items-center justify-center rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"
                />
              </svg>
            </div>
            <div
              class="absolute bottom-0 right-0 rounded-full bg-white shadow-xl border p-1 border-gray-300 inline-block w-[32px]"
            >
              <Icon
                name="ph:pencil-simple-line-bold"
                size="17"
                class="-mt-1 ml-0.5"
              />
            </div>
          </label>
          <input
            class="hidden"
            type="file"
            id="image"
            @change="getUploadedImage"
            accept="image/png, image/jpeg, image/jpg"
          />
        </div>
        <ul>
          <li>
            <nuxt-link
              to="/user/emre-ensar"
              class="flex space-x-2 text-[15px] bg-purple-500 mt-10 shadow-md mb-2 cursor-pointer hover:text-[#EC5252] duration-150 px-2 py-2 mb-1 block rounded-md hover:bg-purple-400"
              exact-active-class="bg-gray-100"
            >
              <Icon
                name="icon-park-outline:preview-open"
                size="22"
                color="white"
              />
              <span class="font-normal text-sm text-white"
                >Profilimi Görüntüle</span
              >
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/profile"
              class="flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100"
              exact-active-class="bg-gray-100"
            >
              <Icon name="material-symbols:person" size="22" color="gray" />
              <span class="font-normal text-sm text-[#3F4254]"
                >Kişisel Bilgilerim</span
              >
            </nuxt-link>
          </li>
          <li v-if="userStore.getUserDetails.user.user_type == 'teacher'">
            <nuxt-link
              to="/profile/my-adverts"
              class="flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100"
              exact-active-class="bg-gray-100"
            >
              <Icon
                name="material-symbols:chrome-reader-mode-outline-rounded"
                size="22"
                color="gray"
              />
              <span class="font-normal text-sm text-[#3F4254]">İlanlarım</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/profile/my-messages"
              class="flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100"
              exact-active-class="bg-gray-100"
            >
              <Icon
                name="material-symbols:android-chat"
                size="22"
                color="gray"
              />
              <span class="font-normal text-sm text-[#3F4254]">Mesajlarım</span>
            </nuxt-link>
          </li>
          <li v-if="userStore.getUserDetails.user.user_type == 'teacher'">
            <nuxt-link
              to="/profile/buy-packages"
              class="flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100"
              exact-active-class="bg-gray-100"
            >
              <Icon
                name="material-symbols:package-outline"
                size="22"
                color="gray"
              />
              <span class="font-normal text-sm text-[#3F4254]">Paketler</span>
            </nuxt-link>
          </li>
          <li v-if="userStore.getUserDetails.user.user_type == 'teacher'">
            <nuxt-link
              to="/profile/my-lessons"
              class="flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100"
              exact-active-class="bg-gray-100"
            >
              <Icon name="fluent:data-usage-edit-20-regular" size="22" color="gray" />
              <span class="font-normal text-sm text-[#3F4254]"
                >Blog Yazılarım</span
              >
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/profile/lesson-requests"
              class="flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100"
              exact-active-class="bg-gray-100"
            >
              <Icon name="carbon:document-multiple-01" size="22" color="gray" />
              <span class="font-normal text-sm text-[#3F4254]"
                >Ders Talepleri</span
              >
            </nuxt-link>
          </li>
          <li v-if="userStore.getUserDetails.user.user_type == 'student'">
            <nuxt-link
              to="/profile/lesson-requests"
              class="flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100"
              exact-active-class="bg-gray-100"
            >
              <Icon name="material-symbols:person-search" size="22" color="gray" />
              <span class="font-normal text-sm text-[#3F4254]"
                >Öğretmen Bul</span
              >
            </nuxt-link>
          </li>
          <li v-if="userStore.getUserDetails.user.user_type == 'teacher'">
            <nuxt-link
              to="/profile/comments"
              class="flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100"
              exact-active-class="bg-gray-100"
            >
              <Icon name="uil:comments-alt" size="22" color="gray" />
              <span class="font-normal text-sm text-[#3F4254]">Yorumlar</span>
            </nuxt-link>
          </li>
          <li v-if="userStore.getUserDetails.user.user_type == 'student'">
            <nuxt-link
              to="/profile/invite-friends"
              class="flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100"
              exact-active-class="bg-gray-100"
            >
              <Icon
                name="ic:baseline-person-add-alt-1"
                size="22"
                color="gray"
              />
              <span class="font-normal text-sm text-[#3F4254]"
                >Arkadaşına Tavsiye Et</span
              >
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/profile/settings"
              class="flex space-x-2 text-[15px] cursor-pointer hover:text-[#EC5252] duration-150 px-4 py-2 mb-1 block rounded-md hover:bg-gray-100"
              exact-active-class="bg-gray-100"
            >
              <Icon
                name="material-symbols:settings-rounded"
                size="22"
                color="gray"
              />
              <span class="font-normal text-sm text-[#3F4254]">Ayarlar</span>
            </nuxt-link>
          </li>
          <button
            class="w-full mt-6 bg-red-500 rounded-full py-1.5 text-white"
            @click="handleLogout"
          >
            Çıkış Yap
          </button>
        </ul>
      </div>
      <main class="min-h-screen col-span-12 lg:col-span-9 bg-white border-l">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
