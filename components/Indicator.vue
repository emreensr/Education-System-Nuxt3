<template>
  <div class="flex justify-center mb:12 lg:mb-20 space-x-3">
    <div
      v-for="(page, index) in pages"
      :key="index"
      :class="['w-[2cm] h-2 rounded-md', { 'bg-blue-600 text-white': index === activePageIndex, 'bg-gray-300': index !== activePageIndex }]"
    >
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  activePageIndex: Number,
  totalPages: Number
});

const pages = Array.from({ length: props.totalPages });
</script>
