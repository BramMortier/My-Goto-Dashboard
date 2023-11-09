import { useRouter } from "vue-router";

export const getFullRouteInfo = (routeName) => {
  const router = useRouter();

  return router.options.routes.find((route) => {
    if (route.name === routeName) return route;
  });
};

export const generateTabsFromRoute = (route) => {
  return route.children.map((route) => {
    const { label, pathName } =
      route.meta.breadcrumbs[route.meta.breadcrumbs.length - 1];
    return { label, pathName };
  });
};

export const transformToFormattedDate = (date) => {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const transformToFormattedDateShort = (date) =>
  date.toLocaleDateString("en-US");
