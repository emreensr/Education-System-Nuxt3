<script setup>
const showArrow = ref(false);

const handleScroll = () => {
  showArrow.value = window.scrollY > 200; 
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const goTop = () => {
  const startY = window.scrollY;
  const startTime = Date.now();
  
  const animateScroll = () => {
    const currentTime = Date.now();
    const progress = Math.min((currentTime - startTime) / 500, 1);
    
    window.scrollTo(0, startY * (1 - progress)); 
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };
  
  animateScroll();
};
</script>

<template>
  <div
    @click="goTop"
    class="fixed max-w-7xl px-4 lg:px-8 z-50 bottom-10 right-5 sm:right-0 cursor-pointer first:max-w-7xl
     mx-auto transition-transform duration-1000 ease-out hover:-translate-y-2"
     :class="{ 'opacity-100 transform translate-y-0': showArrow, 'opacity-0 transform -translate-y-5': !showArrow }"
  >
    <div class="w-30 h-30 rounded-full bg-[#010C20] p-3">
      <Icon name="uil:angle-up" size="27" color="white"/>
    </div>
  </div>
</template>
