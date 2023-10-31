import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);

  const isAuthenticated = () => {
    return user.value !== null;
  };

  return { user, isAuthenticated };
});
