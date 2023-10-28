import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@stores/AuthStore";
import { routes } from "@router/routes";

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: routes,
});

router.beforeEach((to) => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated && to.meta.requiresAuth) return { name: "LoginPage" };
});
