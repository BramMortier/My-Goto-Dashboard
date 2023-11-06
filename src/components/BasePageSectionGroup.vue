<script setup></script>

<template>
  <div class="page-section-group">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.page-section-group {
  padding: var(--space-md);

  &:not(:last-child) {
    border-bottom: 2px solid var(--clr-gray-100);
  }
}
</style>
