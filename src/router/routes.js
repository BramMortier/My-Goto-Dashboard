import EmptyLayout from "@layouts/EmptyLayout.vue";
import SidebarLayout from "@layouts/SidebarLayout.vue";

export const routes = [
  {
    path: "/",
    name: "OverviewDashboardPage",
    meta: {
      layout: SidebarLayout,
      requiresAuth: true,
      breadcrumbs: [{ label: "Dashboard", path: "/" }],
    },
    component: () => import("@pages/OverviewDashboardPage.vue"),
  },
  {
    path: "/dishes-and-suppliers",
    name: "ManageDishesAndSuppliersPage",
    meta: {
      layout: SidebarLayout,
      requiresAuth: true,
      breadcrumbs: [
        { label: "Dashboard", path: "/" },
        { label: "dishes & suppliers", path: "/dishes-and-suppliers" },
      ],
    },
    component: () => import("@pages/ManageDishesAndSuppliersPage.vue"),
  },
  {
    path: "/login",
    name: "LoginPage",
    meta: {
      layout: EmptyLayout,
      breadcrumbs: [
        { label: "Dashboard", path: "/" },
        { label: "login", path: "/login" },
      ],
    },
    component: () => import("@pages/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "RegisterPage",
    meta: {
      layout: EmptyLayout,
      breadcrumbs: [
        { label: "Dashboard", path: "/" },
        { label: "register", path: "/register" },
      ],
    },
    component: () => import("@pages/RegisterPage.vue"),
  },
];
