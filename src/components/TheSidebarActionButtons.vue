<script setup>
import BaseButton from "@components/BaseButton.vue";
import { logout } from "@services/authService";
import { router } from "@router";

const handleLogout = async () => {
  const { data: logoutData, error: logoutError } = await logout();
  if (logoutError) {
    console.log("logout error!", logoutError);
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
