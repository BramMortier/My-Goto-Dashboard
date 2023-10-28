import EmptyLayout from "@layouts/EmptyLayout.vue";
import SidebarLayout from "@layouts/SidebarLayout.vue";

export const routes = [
  {
    path: "/",
    name: "OverviewDashboardPage",
    meta: { layout: SidebarLayout },
    component: () => import("@pages/OverviewDashboardPage.vue"),
  },
  {
    path: "/login",
    name: "LoginPage",
    meta: { layout: EmptyLayout },
    component: () => import("@pages/LoginPage.vue"),
  },
];
