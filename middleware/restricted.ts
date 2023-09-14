import { useUserStore } from "~/store/user";

export default defineNuxtRouteMiddleware(() => {
  const userStore = useUserStore();

  if (!userStore.getToken) {
    return navigateTo("/");
  }
});
