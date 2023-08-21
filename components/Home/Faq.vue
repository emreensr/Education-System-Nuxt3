<template>
  <div
    class="mx-auto max-w-6xl border-b border-gray-200 lg:my-16 my-8 text-center"
  >
    <p class="my-8 text-3xl font-bold text-gray-900 lg:text-4xl">
      Sıkça Sorulan Sorular
    </p>
    <ul
      class="flex flex-wrap -mb-px text-md font-medium text-center text-[#525258]"
    >
      <li v-for="(tab, index) in tabs" :key="index" class="mr-2">
        <a
          :class="[
            'inline-flex p-4 border-b-2 hover:border-[#010C20] hover:bg-gray-100 cursor-pointer transition-colors duration-300 ease-in-out',
            {
              'text-[#010C20] border-[#010C20] active bg-gray-200 ':
                index === activeTab,
            },
          ]"
          @click="setActiveTab(index)"
        >
          <svg
            :class="[
              'w-8 h-8 md:h-5 md:w-5 mr-2',
              { 'text-[#010C20]': index === activeTab },
            ]"
            :fill="currentColor"
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
          {{ tab.label }}
        </a>
      </li>
    </ul>
  </div>
  <div v-if="activeTab === 0" class="mx-6 lg:mb-24 mb-12">
    <div class="mx-auto max-w-6xl grid lg:grid-cols-4 gap-10">
      <div class="col-span-1">
        <h1 class="font-bold text-4xl">Orders & Shipping</h1>
      </div>
      <div class="col-span-3 space-y-8">
        <div
          v-for="(item, index) in accordionItems"
          :key="index"
          class="space-y-3 cursor-pointer"
        >
          <div
            class="flex justify-between items-center"
            @click="toggleAccordion(index)"
          >
            <h1 class="font-medium text-lg">
              {{ item.title }}
            </h1>
            <h1 :class="['text-3xl', { 'text-red-500': item.open }]">
              {{ item.open ? "-" : "+" }}
            </h1>
          </div>
          <p class="text-[#525258]" v-if="item.open">
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-if="activeTab === 1" class="mx-6 lg:my-12">
    <div class="mx-auto max-w-6xl grid lg:grid-cols-4 gap-10">
      <div class="col-span-1">
        <h1 class="font-bold text-4xl">Orders & Shipping</h1>
      </div>
      <div class="col-span-3 space-y-8">
        <div
          v-for="(item, index) in accordionItems"
          :key="index"
          class="space-y-3 cursor-pointer"
        >
          <div
            class="flex justify-between items-center"
            @click="toggleAccordion(index)"
          >
            <h1 class="font-medium text-xl">
              {{ item.title }}
            </h1>
            <h1 :class="['text-3xl', { 'text-red-500': item.open }]">
              {{ item.open ? "-" : "+" }}
            </h1>
          </div>
          <p class="text-[#525258]" v-if="item.open">
            {{ item.content }}
          </p>
        </div>
      </div>
      <div class="col-span-1 lg:my-12">
        <h1 class="font-bold text-4xl">Returns & Exchanges</h1>
      </div>
      <div class="col-span-3 space-y-8 lg:my-12">
        <div class="space-y-3">
          <div class="flex justify-between">
            <h1 class="font-base text-2xl cursor-pointer">
              What are business days?
            </h1>
            <h1 class="text-3xl font-normal">+</h1>
          </div>
          <p class="text-[#525258]" v-if="true">
            Non similique culpa in provident quos sit commodi beatae ea laborum
            suscipit id autem velit aut iusto odio et deleniti quis et
            doloremque
          </p>
        </div>
        <div class="space-y-3">
          <div class="flex justify-between">
            <h1 class="font-base text-2xl cursor-pointer">
              What are business days?
            </h1>
            <h1 class="text-3xl font-normal">+</h1>
          </div>
          <p class="text-[#525258]" v-if="false">
            Non similique culpa in provident quos sit commodi beatae ea laborum
            suscipit id autem velit aut iusto odio et deleniti quis et
            doloremque
          </p>
        </div>
        <div class="space-y-3">
          <div class="flex justify-between">
            <h1 class="font-base text-2xl cursor-pointer">
              What are business days?
            </h1>
            <h1 class="text-3xl font-normal">+</h1>
          </div>
          <p class="text-[#525258]" v-if="false">
            Non similique culpa in provident quos sit commodi beatae ea laborum
            suscipit id autem velit aut iusto odio et deleniti quis et
            doloremque
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-if="activeTab === 2" class="mx-6 lg:my-12">
    <div class="mx-auto max-w-6xl grid lg:grid-cols-4 gap-10">
      <div class="col-span-1">
        <h1 class="font-bold text-4xl">Orders & Shipping</h1>
      </div>
      <div class="col-span-3 space-y-8">
        <div
          v-for="(item, index) in accordionItems"
          :key="index"
          class="space-y-3 cursor-pointer"
        >
          <div
            class="flex justify-between items-center"
            @click="toggleAccordion(index)"
          >
            <h1 class="font-medium text-xl">
              {{ item.title }}
            </h1>
            <h1 :class="['text-3xl', { 'text-red-500': item.open }]">
              {{ item.open ? "-" : "+" }}
            </h1>
          </div>
          <p class="text-[#525258]" v-if="item.open">
            {{ item.content }}
          </p>
        </div>
      </div>
      <div class="col-span-1 lg:my-12">
        <h1 class="font-bold text-4xl">Discounts</h1>
      </div>
      <div class="col-span-3 space-y-8 lg:my-12">
        <div class="space-y-3">
          <div class="flex justify-between">
            <h1 class="font-base text-2xl cursor-pointer">
              What are business days?
            </h1>
            <h1 class="text-3xl font-normal">+</h1>
          </div>
          <p class="text-[#525258]" v-if="true">
            Non similique culpa in provident quos sit commodi beatae ea laborum
            suscipit id autem velit aut iusto odio et deleniti quis et
            doloremque
          </p>
        </div>
        <div class="space-y-3">
          <div class="flex justify-between">
            <h1 class="font-base text-2xl cursor-pointer">
              What are business days?
            </h1>
            <h1 class="text-3xl font-normal">+</h1>
          </div>
          <p class="text-[#525258]" v-if="false">
            Non similique culpa in provident quos sit commodi beatae ea laborum
            suscipit id autem velit aut iusto odio et deleniti quis et
            doloremque
          </p>
        </div>
        <div class="space-y-3">
          <div class="flex justify-between">
            <h1 class="font-base text-2xl cursor-pointer">
              What are business days?
            </h1>
            <h1 class="text-3xl font-normal">+</h1>
          </div>
          <p class="text-[#525258]" v-if="false">
            Non similique culpa in provident quos sit commodi beatae ea laborum
            suscipit id autem velit aut iusto odio et deleniti quis et
            doloremque
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const rawAccordionItems = [
  {
    title: "How do I know my package has shipped?",
    content:
      "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et",
    open: false,
  },
  {
    title: "Why are certain products unavailable to ship internationally?",
    content:
      "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et",
    open: false,
  },
  {
    title: "How long will my package take to arrive?",
    content:
      "Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et",
    open: false,
  },
];

const accordionItems = ref([...rawAccordionItems]);

const toggleAccordion = (index) => {
  accordionItems.value[index].open = !accordionItems.value[index].open;
};

const computedAccordionItems = computed(() => {
  return accordionItems.value;
});

const activeTab = ref(0);
const tabs = [
  {
    label: "Genel Sorular",
    href: "#",
    icon: {
      viewBox: "0 0 20 20",
      path: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",
    },
  },
  {
    label: "Öğretmen Soruları",
    href: "#",
    icon: {
      viewBox: "0 0 640 512",
      path: "M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V192h56 64 16c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64H576V256H384V224H320v48c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H243.1 177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9V480c0 17.7 14.3 32 32 32s32-14.3 32-32z",
    },
  },
  {
    label: "Öğrenci Soruları",
    href: "#",
    icon: {
      viewBox: "0 0 640 512",
      path: "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z",
    },
  },
];

const setActiveTab = (index) => {
  activeTab.value = index;
};
</script>
