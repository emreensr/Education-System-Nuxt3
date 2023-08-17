<script setup>
const mobileNavigation = ref(false);

const toggleMobileNavigation = () => {
  mobileNavigation.value = !mobileNavigation.value;
  console.log( mobileNavigation.value);
};

provide("mobile-navigation", mobileNavigation);
</script>

<template>
  <header role="heading" class="py-4 shadow-lg bg-white sticky top-0 z-50">
    <LayoutMobileNavigation />
    <div class="grid grid-cols-12 max-w-8xl mx-auto">
      <div
        class="col-span-12 lg:col-span-2 flex items-center justify-center relative h-16"
      >
        <button
          type="button"
          class="absolute left-2.5 top-1/2 transform -translate-y-1/2 focus:outline-none lg:hidden rotate-180"
          @click="toggleMobileNavigation"
        >
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            class="text-accent w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
              fill-rule="nonzero"
            />
          </svg>
        </button>
        <nuxt-link
          to="/"
          title="Ristorante Pizzeria Minigolf"
          class="z-20 w-36 transition duration-400 flex items-center justify-center relative"
        >
          <img width="140" id="logoMain"
            src="/headLogo.png"
            alt="Pizzeria Minigolf"
          />
        </nuxt-link>
      </div>
      <div class="col-span-12 lg:col-span-8 flex items-center justify-center">
        <LayoutMainNavigation />
      </div>
      <div class="col-span-2 flex items-center justify-center 2xl:justify-end">
        <LayoutHeaderLinks />
      </div>
    </div>
  </header>
</template>
<style lang="scss">
.h-custom {
  min-height: calc(100vh - 97.85px);
}
</style>
