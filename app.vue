<script setup>

const menuItems = useState("menuItems", () => {
  return [
    {
      name: "Dersler",
      target: "/classes",
    },
    {
      name: "Kurslar",
      target: "/menu",
    },
    {
      name: "Ders Talepleri",
      target: "/tischreservierungen",
    },
    {
      name: "Hakkımızda",
      target: "/bildergalerie",
    },
    {
      name: "Blog",
      target: "/jetzt-bestellen",
    },
  ];
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtPage/>
  </div>
</template>