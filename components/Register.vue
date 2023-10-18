<script setup>

import { useUserStore } from "~/store/user";

const runtimeConfig = useRuntimeConfig();
const userStore = useUserStore();
const { errorHandler } = useErrorHandler();

const activeStep = ref("about");
const activePageIndex = ref(0);
const totalPages = ref(4);
const selectedOption = ref("");
const errors = ref([]);
const cities = ref([]);
const districts = ref([]);
const selectedLocations = ref([]);
const categories = ref([]);
const subCategories = ref([]);
const levels = ref([]);
const locations = ref([]);

const getCourseLocations = async () => {
  const response = await fetch(`${runtimeConfig.public.apiURL}/course-locations`);
  const data = await response.json();
  locations.value = data.data;
};

const isSelected = (locationValue) => {
  return selectedLocations.value.includes(locationValue);
};

const getCities = async () => {
  const response = await fetch(`${runtimeConfig.public.apiURL}/cities`);
  const data = await response.json();
  cities.value = data.data;
};

const getDistricts = async () => {
  districts.value = [];
  credentials.district_id = '';
  const response = await fetch(
    `${runtimeConfig.public.apiURL}/city/${credentials.city_id}/districts`
  );
  const data = await response.json();
  districts.value = data.data;
};

const getCategories = async () => {
  const response = await fetch(`${runtimeConfig.public.apiURL}/categories`);
  const data = await response.json();
  categories.value = data.data;
  console.log('Categories fetched:', categories.value);
};

const getSubCategories = async () => {
  levels.value = [];
  credentials.sub_category_id = '';
  credentials.level_id = '';
  const response = await fetch(
    `${runtimeConfig.public.apiURL}/category/${credentials.category_id}/sub_categories`
  );
  const data = await response.json();
  subCategories.value = data.data;
  console.log('Sub Categories fetched:', subCategories.value);

};

const getCategoryLevels = async () => {
  levels.value = [];
  credentials.level_id = '';
  const response = await fetch(
    `${runtimeConfig.public.apiURL}/category/${credentials.category_id}/levels`
  );
  const data = await response.json();
  levels.value = data.data;
}

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
  password_confirmation: "",
  phone: "",
});

const teacherCredentials = reactive({
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  password_confirmation: "",
  phone: "",
});

watch(selectedLocations, () => {
  credentials.location = selectedLocations.value.map(
    (locationValue) => locationValue
  );
});

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
        console.log(response);
        userStore.setUserToken(response.access_token);
        userStore.setUserDetails(response, true, false);
        await navigateTo("/profile");
        closeModal();
      } catch (err) {
        console.log(err.response);
        console.log("err", err);
      }
    })
    .catch((err) => {
      if (err.response) {
        error.value = err.response._data.message;
      }
    });
};

const handleTeacherSubmit = async () => {
  errors.value = [];
  await $fetch(runtimeConfig.public.apiURL + "/teacherRegister", {
    method: "POST",
    body: teacherCredentials,
  })
  .then((response) => {
        userStore.setUserToken(response.access_token);
        userStore.setUserDetails(response, true, false);
      navigateTo("/profile");
    })
    .catch((err) => {
      errors.value = errorHandler(err)
    })
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
  getCategories();
  getCities();
  getCourseLocations();
  totalPages.value = updateTotalPages();
});

const computedTotalPages = computed(() => {
  return totalPages.value;
});

const nextStep = () => {
  if (activeStep.value === "about") {
    activeStep.value = "account";
    activePageIndex.value = 1;
  } else if (activeStep.value === "account") {
    activeStep.value = "address";
    activePageIndex.value = 2;
  } else if (activeStep.value === "address") {
    activeStep.value = "login";
    activePageIndex.value = 3;
  } else if (activeStep.value === "login") {
    console.log(credentials);
  } else {
    activeStep.value = "login";
    activePageIndex.value = 1;
  }
};

const previousStep = () => {
  if (activeStep.value === "login") {
    activeStep.value = "address";
    activePageIndex.value = 2;
  } else if (activeStep.value === "address") {
    activeStep.value = "account";
    activePageIndex.value = 1;
  } else if (activeStep.value === "account") {
    activeStep.value = "about";
    activePageIndex.value = 0;
  } else {
    activeStep.value = "about";
    activePageIndex.value = 0;
  }
};


const activeTab = ref(0);
const tabs = [
  {
    label: "ÖĞRENCİ KAYIT",
    href: "#",
    icon: {
      viewBox: "0 0 20 20",
      path:
        "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",
    },
  },
  {
    label: "ÖĞRETMEN KAYIT",
    href: "#",
    icon: {
      viewBox: "0 0 640 512",
      path:
        "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z",
    },
  }
];

const setActiveTab = (index) => {
  activeTab.value = index;
};

</script>

<template>
  <div class="bg-[#f8f8f8]">
    <div class="mx-auto max-w-6xl auto lg:pt-20 lg:pb-32">
      <div class="grid md:grid-cols-5 grid-cols-1 mx-auto rounded-3xl">
        <div class="col-span-2">
          <img
            src="/login2.png"
            class="md:block h-full w-full object-cover rounded-l-xl hidden"
          />
        </div>
        <div class="w-full col-span-3">
          <div class="border-b border-gray-200">
            <ul class="flex justify-between -mb-px text-sm font-medium text-center text-gray-500">
              <li v-for="(tab, index) in tabs" :key="index" class="w-1/2">
                <a
                  :href="tab.href"
                  :class="[
                    'inline-flex p-4 w-full items-center border-b-2 hover:bg-gray-100 hover:text-[#010C20]',
                    { 'text-[#010C20] w-full items-center border-[#010C20] active': index === activeTab },
                  ]"
                  @click="setActiveTab(index)"
                >
                  <svg
                    :class="['w-5 h-5 mr-2', { ' text-[#010C20]': index === activeTab }]"
                    fill="currentColor"
                    :viewBox="tab.icon.viewBox"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      v-if="index === activeTab || !tab.icon.onlyActive"
                      :d="tab.icon.path"
                      :clip-rule="tab.icon.clipRule || 'evenodd'"
                      :fill-rule="tab.icon.fillRule || 'evenodd'"
                    />
                  </svg>
                  <p class="text-xs lg:text-base">
                    {{ tab.label }}
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <!-- <Indicator
             v-if="activeTab === 0"
            :activePageIndex="activePageIndex"
            :totalPages="computedTotalPages"
          /> -->
          <div multisteps-form="" class="mb-12 mt-5" v-if="activeTab == 0">
            <div class="flex flex-wrap -mx-3">
              <div class="w-full max-w-full px-3 m-auto [flex:0_0_auto]">
                <form
                  class="relative lg:mb-32 mb-52"
                  style="height: 423px"
                  @submit.prevent="handleSubmit"
                >
                  <!-- <div
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
                  </div> -->
                  <div
                    form="about"
                    v-if="activeStep === 'about'"
                    class="absolute overflow-y-auto top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 rounded-2xl bg-clip-border h-auto opacity-100 visible"
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
                            <div>
                              <div class="choices__inner">
                                <select
                                  id="category"
                                  name="category"
                                  v-model="credentials.category_id"
                                  @change="getSubCategories"
                                  class="px-3 py-2 
                                  bg-white border 
                                  border-gray-300 
                                  text-gray-900 
                                  focus:shadow-[0_0_0_2px_#e5e7eb] 
                                  text-[.875rem] mt-2 
                                  leading-5.6 
                                  ease block 
                                  w-full 
                                  appearance-none 
                                  rounded-md 
                                  bg-clip-padding 
                                  p-2.5 font-normal 
                                  focus:outline-none 
                                  transition-all 
                                  focus:border-gray-400"
                                >
                                <option value="">Ders Seçiniz</option>
                                <option
                                    v-for="category in categories"
                                    :value="category.id"
                                    :key="category.id"
                                  >
                                    {{ category.name }}
                                  </option>
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
                            <div>
                              <div class="choices__inner">
                                <select
                                  id="category"
                                  name="category"
                                  v-model="credentials.sub_category_id"
                                  @change="getCategoryLevels"
                                  class="px-3 py-2 bg-white border border-gray-300 text-gray-900 focus:shadow-[0_0_0_2px_#e5e7eb] text-[.875rem] mt-2 leading-5.6 ease block w-full appearance-none rounded-md bg-clip-padding p-2.5 font-normal focus:outline-none transition-all placeholder:text-grey-500 focus:border-gray-400"
                                >
                                <option value="">Kategori Seçiniz</option>
                                  <option
                                    v-for="subCategory in subCategories"
                                    :value="subCategory.id"
                                    :key="subCategory.id"
                                  >
                                    {{ subCategory.name }}
                                  </option>
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
                                id="category"
                                name="category"
                                v-model="credentials.level_id"
                                class="px-3 py-2 bg-white border border-gray-300 text-gray-900 focus:shadow-[0_0_0_2px_#e5e7eb] text-[.875rem] mt-2 leading-5.6 ease block w-full appearance-none rounded-md bg-clip-padding p-2.5 font-normal focus:outline-none transition-all placeholder:text-grey-500 focus:border-gray-400"
                              >
                              <option value="">Seviye Seçiniz</option>
                                <option
                                  v-for="level in levels"
                                  :value="level.id"
                                  :key="level.id"
                                >
                                  {{ level.name }}
                                </option>
                              </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mt-auto flex mt-6">
                        <div class="flex w-full max-w-full px-3 mt-6 [flex:0_0_auto]">
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
                    v-if="activeStep === 'account'"
                    class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 mt-3 break-words bg-white border-0 bg-clip-border h-auto opacity-100 visible"
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
                            class="relative flex border items-center shadow-sm p-3 rounded-lg"
                            for="location"
                            v-for="(locationOption, index) in locations"
                            :key="index"
                            :class="{
                              'border-blue-600': isSelected(locationOption.id),
                            }"
                          >
                            <div class="border rounded-md p-3 mr-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25px"
                                height="25px"
                                viewBox="0 0 576 512"
                              >
                                <path
                                  :d="locationOption.icon"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <div class="flex h-6 items-center"></div>
                            <div class="text-sm leading-6">
                              {{ locationOption.name }}
                            </div>
                            <input
                              :id="locationOption.id"
                              type="checkbox"
                              :value="locationOption.id"
                              :name="locationOption.name"
                              v-model="selectedLocations"
                              class="w-6 h-6 ml-auto text-blue-600 bg-gray-100 border-gray-300 rounded"
                            />
                          </label>
                        </div>
                        <div
                          class="grid grid-cols-1 w-full md:grid-cols-2 lg:mt-8 mt-2 gap-4"
                        >
                          <div class="w-full">
                            <label
                              class="mb-2 ml-1 font-bold text-sm text-slate-700"
                              for="Country"
                              >Şehir</label
                            >
                            <div class="">
                              <select
                                class="focus:shadow-[0_0_0_2px_#e5e7eb] text-[.875rem] mt-2 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none"
                                name="city"
                                v-model="credentials.city_id"
                                @change="getDistricts"
                              >
                                <option disabled value="">Şehir Seçiniz</option>
                                <option
                                  v-for="(city, index) in cities"
                                  :value="city.id"
                                  :key="city.id"
                                >
                                  {{ city.name }}
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="w-full">
                            <label
                              class="mb-2 ml-1 font-bold text-sm text-slate-700"
                              for="Country"
                              >İlçe</label
                            >
                            <div>
                              <div class="">
                                <select
                                  id="district"
                                  name="district"
                                  v-model="credentials.district_id"
                                  class="px-3 py-2 bg-white border border-gray-300 text-gray-900 focus:shadow-[0_0_0_2px_#e5e7eb] text-[.875rem] mt-2 leading-5.6 ease block w-full appearance-none rounded-md bg-clip-padding p-2.5 font-normal focus:outline-none transition-all placeholder:text-grey-500 focus:border-gray-400"
                                >
                                <option disabled value="">İlçe Seçiniz</option>
                                  <option
                                    v-for="(district, index) in districts"
                                    :value="district.id"
                                    :key="district.id"
                                  >
                                    {{ district.name }}
                                  </option>
                                </select>
                              </div>
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
                    v-if="activeStep === 'address'"
                    class="absolute top-0 left-0 mt-5 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 bg-clip-border h-auto opacity-100 visible"
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
                    class="absolute top-0 left-0 mt-5 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0 bg-clip-border h-auto opacity-100 visible"
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
                        class="w-full max-w-full px-3 mt-4 [flex:0_0_auto] md:w-6/12"
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
                          type="emailemre"
                          name="Street Name"
                          v-model="credentials.email"
                          placeholder="E-Posta Adresiniz"
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
                        class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-6/12"
                      >
                        <label
                          class="mb-2 ml-1 font-bold text-sm text-slate-700"
                          for="Street No"
                          >Şifre Tekrar</label
                        >
                        <input
                          type="password"
                          name="Street No"
                          v-model="credentials.password_confirmation"
                          min="01"
                          placeholder="Şifre Tekrar"
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
          <div multisteps-form="" class="mb-12 mt-5" v-if="activeTab == 1">
            <div class="flex flex-wrap -mx-3">
              <div class="w-full max-w-full px-3 m-auto [flex:0_0_auto]">
                <form
                  class="relative lg:mb-32 mb-52"
                  style="height: 423px"
                  @submit.prevent="handleTeacherSubmit"
                >
                  <div
                    class="absolute top-0 left-0 flex flex-col w-full min-w-0 p-4 break-words bg-white border-0  bg-clip-border h-auto opacity-100 visible"
                    active=""
                  >
                  <div v-if="errors?.length > 0">
                    <ul
                      class="p-2.5 rounded-md bg-red-50 text-red-500 text-sm space-y-2"
                    >
                      <li v-for="error in errors">{{ error }}</li>
                    </ul>
                  </div>
                    <div>
                      <div class="flex flex-wrap -mx-3 text-left">
                        <div
                          class="w-full max-w-full px-3 mt-4 [flex:0_0_auto] md:w-6/12"
                        >
                          <label
                            class="mb-2 ml-1 font-bold text-sm text-slate-700"
                            for="Street Name"
                            >Ad</label
                          >
                          <span class="font-medium text-red-600"> *</span>
                          <input
                            type="text"
                            name="Street Name"
                            v-model="teacherCredentials.first_name"
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
                          <span class="font-medium text-red-600"> *</span>
                          <input
                            type="text"
                            name="Street No"
                            v-model="teacherCredentials.last_name"
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
                          <span class="font-medium text-red-600"> *</span>
                          <input
                            type="emailemre"
                            name="Street Name"
                            v-model="teacherCredentials.email"
                            placeholder="E-Posta Adresiniz"
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
                          <span class="font-medium text-red-600"> *</span>
                          <input
                            type="text"
                            name="Phone"
                            v-maska
                            data-maska="(###) ### ## ##"
                            v-model="teacherCredentials.phone"
                            placeholder="Telefon Numaranız"
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
                          <span class="font-medium text-red-600"> *</span>
                          <input
                            type="password"
                            name="Street No"
                            v-model="teacherCredentials.password"
                            min="01"
                            placeholder="Şifre"
                            class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none"
                          />
                        </div>
                        <div
                          class="w-full max-w-full px-3 mt-4 ml-auto [flex:0_0_auto] md:w-6/12"
                        >
                          <label
                            class="mb-2 ml-1 font-bold text-sm text-slate-700"
                            for="Street No"
                            >Şifre Tekrar</label
                          >
                          <span class="font-medium text-red-600"> *</span>
                          <input
                            type="password"
                            name="Street No"
                            v-model="teacherCredentials.password_confirmation"
                            min="01"
                            placeholder="Şifre Tekrar"
                            class="focus:shadow-[0_0_0_2px_#e5e7eb] mt-2 text-[.875rem] leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-grey-300 bg-white bg-clip-padding px-3 py-2 font-normal text-grey-700 outline-none transition-all placeholder:text-grey-500 focus:border-gray-400 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div class="flex flex-wrap -mx-3">
                        <div class="flex w-full max-w-full px-3 mt-6 [flex:0_0_auto]">
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
      </div>
    </div>
  </div>
</template>
