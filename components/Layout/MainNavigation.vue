<script setup>
const menuItems = useState("menuItems");
</script>

<template>
  <nav role="navigation" class="hidden lg:block">
    <ul class="flex items-center space-x-9 font-semibold uppercase tracking-[0.15em] lg:text-xs 2xl:text-sm text-accent">
      <li v-for="menuItem in menuItems" :key="menuItem.name">
        <nuxt-link :to="menuItem.target" :title="menuItem.name" class="hover:brightness-125">
          {{ menuItem.name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
