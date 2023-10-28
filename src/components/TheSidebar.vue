<script setup>
import TheSidebarPrimaryNavigation from "@components/TheSidebarPrimaryNavigation.vue";
import BaseDivider from "@components/BaseDivider.vue";
import TheSidebarActionButtons from "./TheSidebarActionButtons.vue";
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__main">
      <img
        src="@assets/icons/logo-horizontal-color.svg"
        alt="horizontal logo colored version"
        class="sidebar__logo"
      />
      <BaseDivider />
      <TheSidebarPrimaryNavigation />
    </div>
    <TheSidebarActionButtons />
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--space-xl);
  min-height: 100vh;

  &__main {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
  }

  &__logo {
    max-width: 8.75rem;
  }
}
</style>
