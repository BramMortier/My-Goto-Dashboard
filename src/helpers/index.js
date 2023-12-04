import { useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

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

export const sanitizeMachinePlan = (machinePlan) => {
  return machinePlan.filter(
    (entry) =>
      entry.available_quantity !== 0 ||
      entry.suggested_quantity !== 0 ||
      entry.in_transport_quantity !== 0
  );
};

export const sanitizeOutboundDeliveryContents = (outboundDeliveryContents) => {
  if (outboundDeliveryContents) {
    return outboundDeliveryContents.map((machine) => ({
      ...machine,
      inventoryRefillPlan: machine.inventoryRefillPlan.filter((plan) =>
        plan.hasOwnProperty("added_quantity")
      ),
    }));
  } else {
    return [];
  }
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

export const generateArrayFromLength = (length) =>
  Array.from({ length }, (_, index) => index);

export const useMouse = () => {
  const x = ref(0);
  const y = ref(0);

  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  onMounted(() => window.addEventListener("mousemove", update));
  onUnmounted(() => window.removeEventListener("mousemove", update));

  return { x, y };
};
