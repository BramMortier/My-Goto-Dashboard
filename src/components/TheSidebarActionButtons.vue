<script setup>
import { useAuthStore } from "@stores/AuthStore";

import BaseButton from "@components/BaseButton.vue";
import { router } from "@router";

const { logout } = useAuthStore();

const handleLogout = async () => {
  const [error] = await logout();
  if (error) {
    console.log("logout error!", error);
  } else {
    console.log("logout succes!");
    await router.push({ name: "LoginPage" });
  }
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
