<script setup>
import { useModalStore } from "@stores/ModalStore";
import { storeToRefs } from "pinia";

const { closeModal } = useModalStore();
const { modalState } = storeToRefs(useModalStore());
</script>

<template>
  <Teleport to="#modals">
    <Transition name="modal-window-transition">
      <div
        class="modal-window__wrapper"
        @click.self="closeModal"
        v-if="modalState?.component"
      >
        <div class="modal-window">
          <component :is="modalState?.component" v-bind="modalState?.props" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal-window {
  background-color: var(--clr-white);
  padding: var(--space-md);
  border-bottom: 2px solid var(--clr-green-400);
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;

  &__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    background-color: var(--clr-overlay-300);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--clr-gray-500);
  }
}

.modal-window-transition-enter-from,
.modal-window-transition-leave-to {
  opacity: 0;
}

.modal-window-transition-enter-active,
.modal-window-transition-leave-active {
  transition: 0.25s ease all;
}
</style>
