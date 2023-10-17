<script setup>
definePageMeta({
  layout: "main",
});
</script>

<template>
  <HomeMainSlider />
  <HomeCategorySection />
  <HomeGoTopArrow />
  <h1 class="text-center font-semibold text-2xl lg:text-3xl mb-3 mt-8">
    EN İYİ ÖĞRETMENLER
  </h1>
  <p class="text-center">Kategorisinden en iyi öğretmenleri sizin için listeledik.</p>
  <div class="mx-auto max-w-6xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-6 p-5">
    <CardContent />
    <CardContent />
    <CardContent />
    <CardContent />
    <CardContent />
    <CardContent />
  </div>
  <HomeInfoSection />
  <div class="mx-auto max-w-8xl gap-8">
    <HomeFeatureSection />
  </div>
  <HomeFaq />
</template>
