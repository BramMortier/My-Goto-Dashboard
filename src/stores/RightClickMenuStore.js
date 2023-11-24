import { defineStore } from "pinia";
import { useMouse } from "@helpers/index";
import { ref } from "vue";
import { markRaw } from "vue";

const defaultState = { component: null, props: {}, menuX: 0, menuY: 0 };

export const useRightClickMenuStore = defineStore("right-click-menu", () => {
  const rightClickMenuState = ref(defaultState);

  const { x: menuX, y: menuY } = useMouse();

  const openMenu = ({ component, props }) => {
    rightClickMenuState.value = {
      component: markRaw(component),
      props: props || {},
      menuX: menuX.value,
      menuY: menuY.value,
    };

    console.log(rightClickMenuState.value);
  };

  const closeMenu = () => {
    rightClickMenuState.value = defaultState;
  };

  return { rightClickMenuState, openMenu, closeMenu };
});
