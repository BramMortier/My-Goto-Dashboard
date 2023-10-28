<script setup>
import { RouterView } from "vue-router";

import TheSidebar from "@components/TheSidebar.vue";
import TheGeneralInfo from "@components/TheGeneralInfo.vue";
</script>

<template>
  <div class="sidebar-layout">
    <TheSidebar />
    <main class="sidebar-layout__main">
      <TheGeneralInfo />
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-layout {
  display: grid;
  grid-template-columns: 18.75rem 1fr;

  &__main {
    padding: var(--space-xl);
    background-color: var(--clr-gray-100);
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);

    background-image: url("@assets/images/background-pattern-grayscale.png");
    background-position: bottom right;
    background-size: 75%;
    background-repeat: no-repeat;
  }
}
</style>
