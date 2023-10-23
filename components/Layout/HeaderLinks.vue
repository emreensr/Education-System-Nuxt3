<script setup>
import { useUserStore } from "~/store/user";

const runtimeConfig = useRuntimeConfig();
const userStore = useUserStore();

const loginModal = ref(false)
const registerModal = ref(false)

const openLoginModal = () => {
  registerModal.value = false;
  loginModal.value = true;
};

const openRegisterModal = () => {
  registerModal.value = true;
};

const closeModal = () => {
  loginModal.value = false;
  registerModal.value = false;
};
const error = ref(null)

const credentials = reactive({
  email: "",
  password: "",
});

const handleSubmit = async () => {
  error.value = null;

  await $fetch(runtimeConfig.public.apiURL + "/login", {
    body: credentials,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      try {
        userStore.setUserToken(response.access_token);
        userStore.setUserDetails(response.details, true, false);
        await navigateTo("/profile");
        closeModal()
      } catch (err) {
        console.log(err);
        console.log("err", err);
      }
    })
    .catch((err) => {
      console.log(err.response);
      if (err.response) {
      error.value = err.response._data.message;
      console.log(error.value);
    } 
    })
};

const handleClickOutside = (event) => {
  const loginPopup = document.querySelector(".loginPopup");
  const loginIcon = document.querySelector(".loginIcon");
  try {
    if (!loginPopup.contains(event?.target) && !loginIcon.contains(event?.target)) {
    closeModal()
  }
  } catch (error) {
    // console.log(error);
  }

};
onMounted(async () => {
  await nextTick();
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

</script>

<template>
<div class="fixed top-0 left-0 w-full h-full bg-black z-50 bg-opacity-70 flex md:items-center justify-center transition duration-500" v-if="loginModal">
    <div class="bg-white p-6 rounded-2xl shadow-lg w-full max-w-xl overflow-y-auto loginPopup">
      <div class="flex items-center justify-between mx-auto mb-6">
        <h2 class="font-medium text-lg"></h2>
        <button class="text-gray-600 hover:text-gray-800" @click="closeModal">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 hover:text-gray-500" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

    <div class="flex flex-col justify-center px-6 py-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-16 w-auto" src="/headLogo.png" alt="Your Company">
        <h2 class="mt-10 text-center text-3xl font-semibold leading-9 tracking-tight text-[#010C20]">Giriş Yap</h2>
      </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST" @submit.prevent="handleSubmit"
      >
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">E-Posta</label>
          <div class="mt-2">
            <input id="email" 
            name="email" 
            type="email" 
            v-model="credentials.email"
            autocomplete="email" 
            class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2.5 font-normal text-grey-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-400 focus:outline-none">
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Şifre</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-[#010C20] hover:text-[#0D47A1]">Şifremi unuttum?</a>
            </div>
          </div>
          <div class="mt-2">
            <input id="password"
             name="password" 
             type="password" 
             v-model="credentials.password"
             autocomplete="current-password" 
             class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2.5 font-normal text-grey-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-400 focus:outline-none">
          </div>
        </div>
        <div
        v-if="error"
        class="text-red-600 bg-red-50 px-4 py-2 text-sm rounded-md"
      >
        {{ error }}
      </div>

        <div>
          <button type="submit" 
          :disabled="(!credentials.email || !credentials.password)"
          :class="(!credentials.email || !credentials.password) ? 'bg-gray-300' : 'bg-[#010C20]'"
          class="flex w-full justify-center rounded-md bg-[#010C20] px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Giriş Yap</button>
        </div>
      </form>

      <nuxt-link
      to="/register"
      @click="closeModal"
      >
      <p class="mt-10 text-center text-sm text-gray-500">
        Hesabınız yok mu?
        <a href="#" class="font-semibold leading-6 text-[#010C20] hover:text-[#0D47A1]">Kaydolun</a>
      </p>
    </nuxt-link>
    </div>
  </div>
</div>
</div>

<div>
    <ul
      class="flex items-center space-x-5 absolute right-4 top-1/2 transform -translate-y-1/2 lg:static lg:translate-y-0"
    >
      <li v-if="!userStore.getToken">
        <nuxt-link
          @click="openLoginModal"
          class="flex items-center space-x-2.5 text-sm cursor-pointer loginIcon"
        >
        <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        color="#000000ff"
        class="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
        style="color: rgb(0, 0, 0)"
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
          ></path>
        </g>
      </svg>
        </nuxt-link>
      </li>
      <li v-else>
        <nuxt-link to="/profile" class="flex items-center space-x-2.5 text-sm">
          <img
            v-if="userStore.getUserPhoto?.user?.avatar"
            :src="
              runtimeConfig.public.baseURL +
              userStore.getUserPhoto?.user?.avatar
            "
            class="aspect-square rounded-full w-10 transition duration-200 object-cover"
            alt=""
          />
          <div
            v-else
            class="bg-gray-100 w-10 aspect-square flex items-center justify-center rounded-full p-2"
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
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
