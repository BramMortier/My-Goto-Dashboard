export const routes = [
  {
    path: "/",
    name: "OverviewDashboardPage",
    component: () => import("@pages/OverviewDashboardPage.vue"),
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("@pages/LoginPage.vue"),
  },
];
