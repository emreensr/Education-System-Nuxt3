<script setup>
useHead({
  htmlAttrs: {
    class:
      "overflow-y-scroll scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400",
  },
});
</script>

<template>
  <LayoutMainHeader />
  <slot />
</template>