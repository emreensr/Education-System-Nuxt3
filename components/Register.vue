<script setup>
const runtimeConfig = useRuntimeConfig();
const activeStep = ref("user_type");
const progressBarWidth = ref("0%");
const activePageIndex = ref(0);
const totalPages = ref(5);
const selectedOption = ref("");

const selectedLocations = ref([]);
const locationOptions = [
  {
    value: 'home',
    label: 'Kendi Evimde',
    icon: {
      viewBox: '0 0 576 512',
      path:
        'M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z',
    },
  },
  {
    value: 'teacherHome',
    label: 'Öğretmen Evinde',
    icon: {
      viewBox: '0 0 576 512',
      path:
        'M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z',
    },
  },
  {
    value: 'online',
    label: 'Online',
    icon: {
      viewBox: '0 0 512 512',
      path:
        'M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z',
    },
  },
];

const error = ref(null);

const credentials = reactive({
  category_id: "",
  sub_category_id: "",
  level_id: "",
  location: [],
  city_id: "",
  district_id: "",
  expectations: "",
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  phone: "",
});

watch(selectedLocations, () => {
  credentials.location = selectedLocations.value.map(locationValue => locationValue);
});

console.log(credentials);
console.log(selectedLocations);

const handleSubmit = async () => {
  error.value = null;

  await $fetch(runtimeConfig.public.apiURL + "/studentRegister", {
    body: credentials,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      try {
        // userStore.setUserToken(response.access_token);
        // userStore.setUserDetails(response.details, true, false);
        await navigateTo("/profile");
        closeModal();
      } catch (err) {
        console.log(err.response);
        console.log("err", err);
      }
    })
    .catch((err) => {
      if (err.response && err.response.status === 401) {
        error.value = err.response._data.message;
      }
    });
};

const handleClickOutside = (event) => {
  const loginPopup = document.querySelector(".loginPopup");
  const loginIcon = document.querySelector(".loginIcon");
  try {
    if (
      !loginPopup.contains(event?.target) &&
      !loginIcon.contains(event?.target)
    ) {
      closeModal();
    }
  } catch (error) {
    // console.log(error);
  }
};

const updateTotalPages = () => {
  if (selectedOption.value === "student") {
    return 5;
  } else if (selectedOption.value === "teacher") {
    return 2;
  }
};

onMounted(() => {
  totalPages.value = updateTotalPages();
});

const computedTotalPages = computed(() => {
  return totalPages.value;
});

const nextStep = () => {
  if (activeStep.value === "user_type" && selectedOption.value === "student") {
    activeStep.value = "about";
    activePageIndex.value = 1;
  } else if (activeStep.value === "about") {
    activeStep.value = "account";
    activePageIndex.value = 2;
  } else if (activeStep.value === "account") {
    activeStep.value = "address";
    activePageIndex.value = 3;
  } else if (activeStep.value === "address") {
    activeStep.value = "login";
    activePageIndex.value = 4;
  } else if (activeStep.value === "login") {
    console.log(credentials);
  } else {
    activeStep.value = "login";
    activePageIndex.value = 1;
  }
};

const previousStep = () => {
  if (activeStep.value === "login" && selectedOption.value === "student") {
    activeStep.value = "address";
    activePageIndex.value = 3;
  } else if (activeStep.value === "address") {
    activeStep.value = "account";
    activePageIndex.value = 2;
  } else if (activeStep.value === "account") {
    activeStep.value = "about";
    activePageIndex.value = 1;
  } else if (activeStep.value === "about") {
    activeStep.value = "user_type";
    activePageIndex.value = 0;
  } else {
    activeStep.value = "user_type";
    activePageIndex.value = 0;
  }
};
</script>

<template>
  <div class="w-full max-w-3xl px-3 flex:0 auto mx-auto lg:mt-24 mt-12">
    <Indicator
      :activePageIndex="activePageIndex"
      :totalPages="computedTotalPages"
    />
    <div multisteps-form="" class="mb-12 mt-5">
      <div class="flex flex-wrap -mx-3">
        <div class="w-full max-w-full px-3 m-auto [flex:0_0_auto]">
          <form
            class="relative lg:mb-32 mb-52"
            style="height: 423px"
            @submit.prevent="handleSubmit"
          >
            <div
              form="account"
              v-if="activeStep === 'user_type'"
              class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 mt-5 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border h-auto opacity-100 visible"
              active=""
            >
              <div class="flex flex-wrap -mx-3 text-center">
                <div class="w-10/12 max-w-full px-3 mx-auto [flex:0_0_auto]">
                  <h3 class="text-[#344767] mt-3 text-2xl">Hesap Oluştur</h3>
                  <p class="font-normal text-[#8392ab] mt-2">
                    Buradan kayıt olarak Eğitiva dünyasındaki binlerce kişiden
                    biri olabilirsin.
                  </p>
                </div>
              </div>
              <div class="w-full space-y-3 my-8">
                <div
                  class="relative flex border items-center shadow-sm p-5 rounded-lg"
                  :class="{ 'border-blue-600': selectedOption === 'student' }"
                >
                  <div class="border rounded-md p-3 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-7 w-7"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                      />
                    </svg>
                  </div>
                  <div class="flex h-6 items-center"></div>
                  <div class="text-sm leading-6">
                    <label for="student" class="font-medium ml-2 text-gray-900"
                      >Ders Almak İstiyorum</label
                    >
                  </div>
                  <input
                    id="student"
                    type="radio"
                    value="student"
                    name="option"
                    class="w-8 h-8 ml-auto text-blue-600 bg-gray-100 border-gray-300 rounded"
                    v-model="selectedOption"
                  />
                </div>
                <div
                  class="relative flex border items-center shadow-sm p-5 rounded-lg"
                  :class="{ 'border-blue-600': selectedOption === 'teacher' }"
                >
                  <div class="border border-gray-200 rounded-md p-3 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-9 w-9"
                      viewBox="0 0 640 512"
                    >
                      <path
                        d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V192h56 64 16c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64H576V256H384V224H320v48c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H243.1 177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9V480c0 17.7 14.3 32 32 32s32-14.3 32-32z"
                      />
                    </svg>
                  </div>
                  <div class="flex h-6 items-center"></div>
                  <div class="text-sm leading-6">
                    <label for="teacher" class="font-medium ml-2 text-gray-900"
                      >Ders Vermek İstiyorum</label
                    >
                  </div>
                  <input
                    id="teacher"
                    type="radio"
                    value="teacher"
                    name="option"
                    class="w-8 h-8 ml-auto text-blue-600 bg-gray-100 border-gray-300 rounded"
                    v-model="selectedOption"
                  />
                </div>
              </div>
              <div class="flex mt-6">
                <button
                  type="button"
                  aria-controls="account"
                  next-form-btn=""
                  href="javascript:;"
                  @click="nextStep"
                  class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25"
                >
                  Devam Et
                </button>
              </div>
            </div>
            <div
              form="about"
              v-if="activeStep === 'about' && selectedOption == 'student'"
              class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 dark:bg-grey-950 dark:shadow-dark-xl shadow-xl rounded-2xl bg-clip-border h-auto opacity-100 visible"
              active=""
            >
              <div class="flex flex-wrap -mx-3 text-center">
                <div class="w-10/12 max-w-full px-3 mx-auto [flex:0_0_auto]">
                  <h3 class="text-[#344767] mt-4 text-2xl">
                    Ne hizmeti almak istiyorsun?
                  </h3>
                  <h5 class="font-normal dark:text-white text-[#8392ab] mt-2">
                    Almak istediğiniz hizmeti seç, hemen hizmet almaya başla!
                  </h5>
                </div>
              </div>
              <div>
                <div class="flex flex-wrap mt-4 -mx-3">
                  <div
                    class="w-full max-w-full px-3 mt-6 text-left [flex:0_0_auto] sm:w-full sm:mt-0"
                  >
                    <!-- <label class="mb-2 ml-1 font-bold text-[.75rem] text-slate-700" for="First Name">First Name</label>
                          <input type="text" name="First Name" placeholder="Eg. Michael" class="mb-4 focus:shadow-[0_0_0_2px_#e9aede] dark:bg-grey-950 dark:placeholder:text-white/80 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-[#e293d3] focus:outline-none"> -->
                    <div
                      class="w-full max-w-full ml-auto [flex:0_0_auto] md:w-full"
                    >
                      <label
                        class="mb-2 ml-1 font-bold text-sm text-slate-700"
                        for="Country"
                        >Dersler</label
                      >
                      <div
                        class="choices"
                        data-type="select-one"
                        tabindex="0"
                        role="combobox"
                        aria-autocomplete="list"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div class="choices__inner">
                          <select
                            choice=""
                            class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input"
                            name="category"
                            v-model="credentials.category_id"
                            choices-select=""
                            hidden=""
                            tabindex="-1"
                            data-choice="active"
                          >
                            <option value="1">Matematik</option>
                            <option value="2">Yabancı Dil</option>
                            <option value="3">Fizik</option>
                            <option value="4">Spor</option>
                            <option value="5">Müzik</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div
                      class="w-full max-w-full ml-auto mt-3 [flex:0_0_auto] md:w-full"
                    >
                      <label
                        class="mb-2 ml-1 font-bold text-sm text-slate-700"
                        for="Country"
                        >Ders Kategorileri</label
                      >
                      <div
                        class="choices"
                        data-type="select-one"
                        tabindex="0"
                        role="combobox"
                        aria-autocomplete="list"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div class="choices__inner">
                          <select
                            choice=""
                            class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input"
                            name="sub_category"
                            v-model="credentials.sub_category_id"
                            choices-select=""
                            hidden=""
                            tabindex="-1"
                            data-choice="active"
                          >
                            <option value="1">Genel Matematik</option>
                            <option value="2">Geometri</option>
                            <option value="3">Mantık</option>
                            <option value="4">Liner Cebir</option>
                            <option value="5"> Diferansiyel Denklemler</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div
                      class="w-full max-w-full ml-auto mt-3 [flex:0_0_auto] md:w-full"
                    >
                      <label
                        class="mb-2 ml-1 font-bold text-sm text-slate-700"
                        for="Country"
                        >Seviye</label
                      >
                      <div
                        class="choices"
                        data-type="select-one"
                        tabindex="0"
                        role="combobox"
                        aria-autocomplete="list"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <div class="choices__inner">
                          <select
                            choice=""
                            class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input"
                            name="level"
                            v-model="credentials.level_id"
                            choices-select=""
                            hidden=""
                            tabindex="-1"
                            data-choice="active"
                          >
                            <option value="1">İlk Okul</option>
                            <option value="2">Lise</option>
                            <option value="3">Üniversite</option>
                            <option value="4">KPSS</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex mt-6">
                  <div class="flex w-full max-w-full px-3 mt-6 [flex:0_0_auto]">
                    <button
                      type="button"
                      aria-controls="account"
                      prev-form-btn=""
                      @click="previousStep"
                      href="javascript:;"
                      class="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]"
                    >
                      Geri Dön
                    </button>
                    <button
                      type="button"
                      send-form-btn=""
                      @click="nextStep"
                      href="javascript:;"
                      class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25"
                    >
                      Devam Et
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              form="account"
              v-if="activeStep === 'account' && selectedOption == 'student'"
              class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 mt-3 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border h-auto opacity-100 visible"
              active=""
            >
              <div class="flex flex-wrap -mx-3 text-center">
                <div class="w-10/12 max-w-full px-3 mx-auto [flex:0_0_auto]">
                  <h3 class="text-[#344767] text-2xl">
                    Dersleri nerede almak istiyorsunuz?
                  </h3>
                  <h5 class="font-normal text-[#8392ab] mt-2">
                    Birden fazla seçim yapabilirsiniz.
                  </h5>
                </div>
              </div>
              <div>
                <div class="flex flex-wrap -mx-3 px-3">
                  <div class="w-full space-y-3 mt-5">
                    <label
                      class="relative flex border items-center border-gray-100 shadow-sm p-3 rounded-lg"
                      for="location"
                      v-for="(locationOption, index) in locationOptions"
                      :key="index"
                    >
                      <div class="border border-gray-200 rounded-md p-3 mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25px"
                          height="25px"
                          :viewBox="locationOption.icon.viewBox"
                        >
                          <path :d="locationOption.icon.path" fill="currentColor" />
                        </svg>
                      </div>
                      <div class="flex h-6 items-center"></div>
                      <div class="text-sm leading-6">
                        {{ locationOption.label }}
                      </div>
                      <input
                        :id="locationOption.value"
                        type="checkbox"
                        :value="locationOption.value"
                        :name="locationOption.value"
                        v-model="selectedLocations"
                        class="w-6 h-6 ml-auto text-blue-600 bg-gray-100 border-gray-300 rounded"
                      />
                    </label>
                  </div>
                  <div
                    class="w-full max-w-full lg:mt-8 mt-2 ml-auto [flex:0_0_auto] md:w-6/12"
                  >
                    <label
                      class="mb-2 ml-1 font-bold text-sm text-slate-700"
                      for="Country"
                      >Şehir</label
                    >
                    <div class="choices__inner">
                      <select
                        choice=""
                        class="focus:shadow-[0_0_0_2px_#e5e7eb] text-[.875rem] mt-2 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input"
                        name="city"
                        v-model="credentials.city_id"
                        choices-select=""
                        hidden=""
                        tabindex="-1"
                        data-choice="active"
                      >
                        <option value="1">İstanbul</option>
                        <option value="2">Ankara</option>
                        <option value="3">İzmir</option>
                        <option value="4">Adana</option>
                      </select>
                    </div>
                  </div>
                  <div
                    class="w-full max-w-full lg:mt-8 mt-2 mb-8 ml-auto [flex:0_0_auto] md:w-6/12"
                  >
                    <label
                      class="mb-2 ml-1 font-bold text-sm text-slate-700"
                      for="Country"
                      >İlçe</label
                    >
                    <div
                      class="choices"
                      data-type="select-one"
                      tabindex="0"
                      role="combobox"
                      aria-autocomplete="list"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div class="choices__inner">
                        <select
                          choice=""
                          class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none choices__input"
                          name="district_id"
                          v-model="credentials.district_id"
                          choices-select=""
                          hidden=""
                          tabindex="-1"
                          data-choice="active"
                        >
                          <option value="1">Adalar</option>
                          <option value="2">Bahçelievler</option>
                          <option value="3">Kartal</option>
                          <option value="4">Tuzla</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex mt-6">
                  <button
                    type="button"
                    aria-controls="about"
                    @click="previousStep"
                    prev-form-btn=""
                    href="javascript:;"
                    class="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]"
                  >
                    Geri Dön
                  </button>
                  <button
                    type="button"
                    aria-controls="address"
                    @click="nextStep"
                    next-form-btn=""
                    href="javascript:;"
                    class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25"
                  >
                    Devam Et
                  </button>
                </div>
              </div>
            </div>
            <div
              form="address"
              v-if="activeStep === 'address' && selectedOption == 'student'"
              class="absolute top-0 left-0 mt-5 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border h-auto opacity-100 visible"
              active=""
            >
              <div class="flex flex-wrap -mx-3 text-center">
                <div class="w-10/12 max-w-full px-3 mx-auto [flex:0_0_auto]">
                  <h5 class="text-[#344767] font-normal mt-1">
                    Sana daha iyi yardımcı olabilmemiz için istek ve
                    beklentilerini buradan yazabilirsin.
                  </h5>
                </div>
              </div>
              <div>
                <div class="flex flex-wrap -mx-3 text-left">
                  <div
                    class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-full"
                  >
                    <label
                      class="mb-4 ml-1 font-bold text-sm text-slate-700"
                      for="Street Name"
                      >Beklentilerin</label
                    >
                    <textarea
                      name="Street Name"
                      rows="8"
                      v-model="credentials.expectations"
                      class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none"
                    >
                    </textarea>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3">
                  <div class="flex w-full max-w-full px-3 mt-6 [flex:0_0_auto]">
                    <button
                      type="button"
                      aria-controls="account"
                      prev-form-btn=""
                      @click="previousStep"
                      href="javascript:;"
                      class="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]"
                    >
                      Geri Dön
                    </button>
                    <button
                      type="button"
                      send-form-btn=""
                      @click="nextStep"
                      href="javascript:;"
                      class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25"
                    >
                      Devam et
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              form="address"
              v-if="activeStep === 'login'"
              class="absolute top-0 left-0 mt-5 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 shadow-xl rounded-2xl bg-clip-border h-auto opacity-100 visible"
              active=""
            >
              <div class="flex flex-wrap -mx-3 text-center">
                <div class="w-10/12 max-w-full px-3 mx-auto [flex:0_0_auto]">
                  <h5
                    class="text-[#344767] font-normal dark:text-white text-2xl"
                  >
                    Çok az kaldı...
                  </h5>
                  <p class="text-[#67748e] mt-2">
                    Bilgilerini doldurup kayıt işlemini tamamlayabilirsin.
                  </p>
                </div>
              </div>
              <div>
                <div class="flex flex-wrap -mx-3 text-left">
                  <div
                    class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-6/12"
                  >
                    <label
                      class="mb-2 ml-1 font-bold text-sm text-slate-700"
                      for="Street Name"
                      >Ad</label
                    >
                    <input
                      type="text"
                      name="Street Name"
                      v-model="credentials.first_name"
                      placeholder="Adınız"
                      class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-400 focus:outline-none"
                    />
                  </div>
                  <div
                    class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-6/12"
                  >
                    <label
                      class="mb-2 ml-1 font-bold text-sm text-slate-700"
                      for="Street No"
                      >Soyad</label
                    >
                    <input
                      type="text"
                      name="Street No"
                      v-model="credentials.last_name"
                      min="01"
                      placeholder="Soyadınız"
                      class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none"
                    />
                  </div>
                  <div
                    class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-6/12"
                  >
                    <label
                      class="mb-2 ml-1 font-bold text-sm text-slate-700"
                      for="Street Name"
                      >E-Posta</label
                    >
                    <input
                      type="text"
                      name="Street Name"
                      v-model="credentials.email"
                      placeholder="E-Posta Adresiniz"
                      class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none"
                    />
                  </div>
                  <div
                    class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-6/12"
                  >
                    <label
                      class="mb-2 ml-1 font-bold text-sm text-slate-700"
                      for="Street No"
                      >Şifre</label
                    >
                    <input
                      type="password"
                      name="Street No"
                      v-model="credentials.password"
                      min="01"
                      placeholder="Şifre"
                      class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none"
                    />
                  </div>
                  <div
                    class="w-full max-w-full px-3 mt-4 [flex:0_0_auto] md:w-6/12"
                  >
                    <label
                      class="mb-2 ml-1 font-bold text-sm text-slate-700"
                      for="Street Name"
                      >Telefon</label
                    >
                    <input
                      type="text"
                      name="Phone"
                      v-model="credentials.phone"
                      placeholder="Telefon Numaranız"
                      class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none"
                    />
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3">
                  <div class="flex w-full max-w-full px-3 mt-6 [flex:0_0_auto]">
                    <button
                      type="button"
                      aria-controls="account"
                      prev-form-btn=""
                      @click="previousStep"
                      href="javascript:;"
                      class="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs bg-gradient-to-tl from-[#ced4da] to-[#ebeff4] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25 text-[#3a416f]"
                    >
                      Geri Dön
                    </button>
                    <button
                      type="submit"
                      send-form-btn=""
                      @click="nextStep"
                      href="javascript:;"
                      class="inline-block px-6 py-3 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-[1.02] active:opacity-[.85] hover:shadow-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-[#141727] to-[#3a416f] leading-pro text-[.75rem] ease-in tracking-tight shadow-md bg-150 bg-x-25"
                    >
                      Kaydol
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
