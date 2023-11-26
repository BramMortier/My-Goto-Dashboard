<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useRightClickMenuStore } from "@stores/RightClickMenuStore";
import { storeToRefs } from "pinia";

const { closeMenu } = useRightClickMenuStore();
const { rightClickMenuState } = storeToRefs(useRightClickMenuStore());

const rightClickMenu = ref(null);

onClickOutside(rightClickMenu, () => closeMenu());
</script>

<template>
  <Teleport to="#right-click-menus">
    <Transition name="right-click-menu-transition">
      <ul
        v-if="rightClickMenuState?.component"
        class="right-click-menu"
        ref="rightClickMenu"
        :style="{
          top: rightClickMenuState.menuY + 'px',
          left: rightClickMenuState.menuX + 'px',
        }"
      >
        <component
          :is="rightClickMenuState?.component"
          v-bind="rightClickMenuState?.props"
        />
      </ul>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.right-click-menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: var(--clr-white);
  border-bottom: 2px solid var(--clr-green-400);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
}

.right-click-menu-transition-enter-from,
.right-click-menu-transition-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.right-click-menu-transition-enter-active,
.right-click-menu-transition-leave-active {
  transition: 0.15s ease all;
}
</style>
