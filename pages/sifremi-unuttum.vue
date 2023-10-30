<script setup>
import { useUserStore } from "~/store/user";
const { errorHandler } = useErrorHandler();
const userStore = useUserStore();

definePageMeta({
  layout: "main",
});

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const errors = ref([]);

const credentials = reactive({
  token: route.query.token ?? "",
  email: route.query.email ?? "",
  password: "",
  password_confirmation: ""
});

const handleSubmit = async () => {
  errors.value = [];

  await $fetch(runtimeConfig.public.apiURL + "/reset-password", {
    body: {
      email: credentials.email,
      token: credentials.token,
      password: credentials.password,
      password_confirmation: credentials.password_confirmation
    },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
        userStore.setUserDetails(response.details, false, true);
        navigateTo("/");
    })
    .catch((err) => {
      errors.value = errorHandler(err)
    })
};

</script>

<template>
 <div class="mx-auto max-w-2xl">
    <div
    class="bg-white p-6 w-full max-w-xl overflow-y-auto"
  >
    <div class="flex flex-col justify-center px-6 py-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2
          class="mt-2 text-center text-3xl font-semibold leading-9 tracking-tight text-[#010C20]"
        >
          Şifre Sıfırlama
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          class="space-y-6"
          action="#"
          method="POST"
          @submit.prevent="handleSubmit"
        >
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Şifre</label
            >
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                v-model="credentials.password"
                autocomplete="email"
                class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2.5 font-normal text-grey-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Şifre Tekrar</label
              >
            </div>
            <div class="mt-2">
              <input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                v-model="credentials.password_confirmation"
                autocomplete="current-password"
                class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2.5 font-normal text-grey-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-400 focus:outline-none"
              />
            </div>
          </div>
          <div v-if="errors?.length > 0">
            <ul
              class="p-2.5 rounded-md bg-red-50 text-red-500 text-sm space-y-2"
            >
              <li v-for="error in errors">{{ error }}</li>
            </ul>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-[#010C20] px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Giriş Yap
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
 </div>
</template>