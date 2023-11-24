<script setup>
import { useRightClickMenuStore } from "@stores/RightClickMenuStore";
import { storeToRefs } from "pinia";

const { closeMenu } = useRightClickMenuStore();
const { rightClickMenuState } = storeToRefs(useRightClickMenuStore());
</script>

<template>
  <Teleport to="#right-click-menus">
    <Transition>
      <div
        class="right-click-menu__wrapper"
        @click.self="closeMenu"
        @click.right.prevent.self="closeMenu"
        v-if="rightClickMenuState?.component"
      >
        <div
          class="right-click-menu"
          :style="{
            top: rightClickMenuState.menuY + 'px',
            left: rightClickMenuState.menuX + 'px',
          }"
        >
          <component
            :is="rightClickMenuState?.component"
            v-bind="rightClickMenuState?.props"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.right-click-menu {
  position: absolute;
  display: flex;
  background-color: var(--clr-white);
  border-bottom: 2px solid var(--clr-green-400);

  &__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    background-color: transparent;
  }
}
</style>
