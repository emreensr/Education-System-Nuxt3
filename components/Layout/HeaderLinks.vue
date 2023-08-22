<script setup>

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
<div class="fixed top-0 left-0 w-full h-full bg-black z-50 bg-opacity-50 flex md:items-center justify-center transition duration-500" v-if="loginModal">
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

    <div class="flex flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-20 w-auto" src="/headLogo.png" alt="Your Company">
        <h2 class="mt-10 text-center text-3xl font-semibold leading-9 tracking-tight text-[#010C20]">Giriş Yap</h2>
      </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">E-Posta</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2.5 font-normal text-grey-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-400 focus:outline-none">
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
            <input id="password" name="password" type="password" autocomplete="current-password" required class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2.5 font-normal text-grey-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-400 focus:outline-none">
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-[#010C20] px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#0D47A1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Giriş Yap</button>
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
      <li>
        <nuxt-link
          @click="openLoginModal"
          class="flex items-center space-x-2.5 text-sm cursor-pointer loginIcon"
        >
          <svg xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6" 
          height="1em" viewBox="0 0 448 512"
          >
          <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/>        </svg>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
