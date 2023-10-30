<script setup></script>

<template>
  <Teleport to="body">
    <Transition name="modal-window-transition">
      <div class="modal-window__wrapper">
        <div class="modal-window">
          <component :is="" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: var(--clr-overlay-300);
  display: flex;
  align-items: center;
  justify-content: center;
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
