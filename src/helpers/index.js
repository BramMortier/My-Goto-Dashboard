import { useRouter } from "vue-router";

export const getFullRouteInfo = (routeName) => {
  const router = useRouter();

  return router.options.routes.find((route) => {
    if (route.name === routeName) return route;
  });
};

export const generateTabsFromRoute = (route) => {
  console.log(route.children);

  return route.children.map((route) => {
    const { label, pathName } =
      route.meta.breadcrumbs[route.meta.breadcrumbs.length - 1];
    console.log(label, pathName);
    return { label, pathName };
  });
};

export const getCurrentDateFormatted = () => {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
