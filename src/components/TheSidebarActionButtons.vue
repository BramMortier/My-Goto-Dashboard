<script setup>
import { useAuthStore } from "@stores/AuthStore";

import BaseButton from "./BaseButton.vue";

const { logout } = useAuthStore();

const handleLogout = async () => {
  const [error] = await logout();
  if (error) console.log("logout error!", error);
};
</script>

<template>
  <div class="sidebar-action-buttons">
    <BaseButton>Settings</BaseButton>
    <BaseButton @click="handleLogout" type="outlined" variant="tertiary"
      >Logout</BaseButton
    >
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
