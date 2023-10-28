<script setup>
import BaseButton from "./BaseButton.vue";
</script>

<template>
  <div class="sidebar-action-buttons">
    <BaseButton>Settings</BaseButton>
    <BaseButton type="outlined" variant="tertiary">Logout</BaseButton>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-action-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  justify-self: flex-end;
}
</style>
