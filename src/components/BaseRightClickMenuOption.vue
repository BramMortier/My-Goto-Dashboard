<script setup></script>

<template>
  <li class="right-click-menu-option">
    <slot></slot>
  </li>
</template>

<style lang="scss" scoped>
.right-click-menu-option {
  display: flex;
  gap: var(--space-sm);
  padding: 0 var(--space-md);
  min-height: 3rem;
  min-width: 12.5rem;
  align-items: center;
  transition: var(--hover-transition);

  &:hover {
    background-color: var(--clr-gray-100);
    cursor: pointer;
  }
}
</style>
