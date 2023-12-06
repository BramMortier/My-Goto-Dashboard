import EmptyLayout from "@layouts/EmptyLayout.vue";
import SidebarLayout from "@layouts/SidebarLayout.vue";

export const routes = [
  {
    path: "/",
    name: "OverviewDashboardPage",
    meta: {
      layout: SidebarLayout,
      requiresAuth: true,
      breadcrumbs: [{ label: "Dashboard", pathName: "OverviewDashboardPage" }],
    },
    component: () => import("@pages/OverviewDashboardPage.vue"),
  },
  {
    path: "/machines",
    name: "OverviewMachinesPage",
    meta: {
      layout: SidebarLayout,
      requiresAuth: true,
      breadcrumbs: [
        { label: "Dashboard", pathName: "OverviewDashboardPage" },
        { label: "Machines", pathName: "OverviewMachinesPage" },
      ],
    },
    component: () => import("@pages/OverviewMachinesPage.vue"),
  },
  {
    path: "/warehouse",
    name: "OverviewWarehousePage",
    meta: {
      layout: SidebarLayout,
      requiresAuth: true,
      breadcrumbs: [
        { label: "Dashboard", pathName: "OverviewDashboardPage" },
        { label: "Warehouse", pathName: "OverviewWarehousePage" },
      ],
    },
    component: () => import("@pages/OverviewWarehousePage.vue"),
  },
  {
    path: "/outbound-deliveries",
    name: "OverviewOutboundDeliveriesPage",
    meta: {
      layout: SidebarLayout,
      requiresAuth: true,
      breadcrumbs: [
        { label: "Dashboard", pathName: "OverviewDashboardPage" },
        {
          label: "Outbound deliveries",
          pathName: "OverviewOutboundDeliveriesPage",
        },
      ],
    },
    component: () => import("@pages/OverviewOutboundDeliveriesPage.vue"),
  },
  {
    path: "/outbound-deliveries/:id",
    name: "DetailsOutboundDeliveryPage",
    meta: {
      layout: SidebarLayout,
      requiresAuth: true,
      breadcrumbs: [
        { label: "Dashboard", pathName: "OverviewDashboardPage" },
        {
          label: "Outbound deliveries",
          pathName: "OverviewOutboundDeliveriesPage",
        },
        {
          label: "Delivery details",
          pathName: "DetailsOutboundDeliveryPage",
        },
      ],
    },
    component: () => import("@pages/DetailsOutboundDeliveryPage.vue"),
  },
  {
    path: "/outbound-deliveries/plan-delivery",
    name: "PlanOutboundDeliveriesPage",
    meta: {
      layout: SidebarLayout,
      requiresAuth: true,
      breadcrumbs: [
        { label: "Dashboard", pathName: "OverviewDashboardPage" },
        {
          label: "Outbound deliveries",
          pathName: "OverviewOutboundDeliveriesPage",
        },
        {
          label: "Plan delivery",
          pathName: "PlanOutboundDeliveriesPage",
        },
      ],
    },
    component: () => import("@pages/PlanOutboundDeliveriesPage.vue"),
  },
  {
    path: "/dishes-and-suppliers",
    name: "ManageDishesAndSuppliersPage",
    redirect: { name: "ManageDishesPage" },
    meta: {
      layout: SidebarLayout,
      requiresAuth: true,
      breadcrumbs: [
        { label: "Dashboard", pathName: "OverviewDashboardPage" },
        {
          label: "Dishes & suppliers",
          pathName: "ManageDishesAndSuppliersPage",
        },
      ],
    },
    component: () => import("@pages/ManageDishesAndSuppliersPage.vue"),
    children: [
      {
        path: "manage-dishes",
        name: "ManageDishesPage",
        meta: {
          breadcrumbs: [
            { label: "Dashboard", pathName: "OverviewDashboardPage" },
            {
              label: "Dishes & suppliers",
              pathName: "ManageDishesAndSuppliersPage",
            },
            {
              label: "Manage dishes",
              pathName: "ManageDishesPage",
            },
          ],
        },
        component: () => import("@pages/ManageDishesPage.vue"),
      },
      {
        path: "manage-suppliers",
        name: "ManageSuppliersPage",
        meta: {
          breadcrumbs: [
            { label: "Dashboard", pathName: "OverviewDashboardPage" },
            {
              label: "Dishes & suppliers",
              pathName: "ManageDishesAndSuppliersPage",
            },
            {
              label: "Manage suppliers",
              pathName: "ManageSuppliersPage",
            },
          ],
        },
        component: () => import("@pages/ManageSuppliersPage.vue"),
      },
    ],
  },
  {
    path: "/locations",
    name: "ManageLocationsPage",
    redirect: { name: "ManageMachineLocationsPage" },
    meta: {
      layout: SidebarLayout,
      requiresAuth: true,
      breadcrumbs: [
        { label: "Dashboard", pathName: "OverviewDashboardPage" },
        {
          label: "Manage locations",
          pathName: "ManageLocationsPage",
        },
      ],
    },
    component: () => import("@pages/ManageLocationsPage.vue"),
    children: [
      {
        path: "manage-machines",
        name: "ManageMachineLocationsPage",
        meta: {
          breadcrumbs: [
            { label: "Dashboard", pathName: "OverviewDashboardPage" },
            {
              label: "Manage locations",
              pathName: "ManageLocationsPage",
            },
            {
              label: "Manage machine locations",
              pathName: "ManageMachineLocationsPage",
            },
          ],
        },
        component: () => import("@pages/ManageMachineLocationsPage.vue"),
      },
      {
        path: "manage-truck-and-warehouses",
        name: "ManageTruckAndWarehouseLocationsPage",
        meta: {
          breadcrumbs: [
            { label: "Dashboard", pathName: "OverviewDashboardPage" },
            {
              label: "Manage locations",
              pathName: "ManageLocationsPage",
            },
            {
              label: "Manage truck and warehouse locations",
              pathName: "ManageTruckAndWarehouseLocationsPage",
            },
          ],
        },
        component: () =>
          import("@pages/ManageTruckAndWarehouseLocationsPage.vue"),
      },
    ],
  },
  {
    path: "/allergies",
    name: "ManageAllergiesPage",
    meta: {
      layout: SidebarLayout,
      requiresAuth: true,
      breadcrumbs: [
        { label: "Dashboard", pathName: "OverviewDashboardPage" },
        {
          label: "Manage allergies",
          pathName: "ManageAllergiesPage",
        },
      ],
    },
    component: () => import("@pages/ManageAllergiesPage.vue"),
  },
  {
    path: "/users",
    name: "ManageUsersPage",
    meta: {
      layout: SidebarLayout,
      requiresAuth: true,
      breadcrumbs: [
        { label: "Dashboard", pathName: "OverviewDashboardPage" },
        {
          label: "Manage users",
          pathName: "ManageUsersPage",
        },
      ],
    },
    component: () => import("@pages/ManageUsersPage.vue"),
  },
  {
    path: "/login",
    name: "LoginPage",
    meta: {
      layout: EmptyLayout,
      breadcrumbs: [
        { label: "Dashboard", pathName: "OverviewDashboardPage" },
        { label: "login", pathName: "LoginPage" },
      ],
    },
    component: () => import("@pages/LoginPage.vue"),
  },
];
