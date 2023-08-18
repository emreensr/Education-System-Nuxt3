// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxt/image-edge",
    "nuxt-swiper",
    "@vueuse/nuxt",
  ],
  plugins: [
    { src: '~/plugins/aos.js', mode: 'client' }
  ],
  runtimeConfig: {
    public: {
      apiURL: process.env.API_URL || "http://localhost:8000/api",
      baseURL: process.env.BASE_URL || "http://localhost:8000/",
      restaurantId: process.env.RESTAURANT_ID || "1",
    },
  },
  build: {
    transpile: ['@vuepic/vue-datepicker']
  },
  googleFonts: {
    families: {
      Poppins: [200, 300, 400, 500, 600, 700, 800],
    },
    display: "swap",
    prefetch: true,
  },
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dtvxxmogd/image/upload/",
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1980,
      "3xl": 2400,
      "4xl": 2560,
    },
  },
});
