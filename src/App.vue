<script setup>
import { RouterView } from "vue-router";

import TheSidebar from "@components/TheSidebar.vue";
import TheGeneralInfo from "@components/TheGeneralInfo.vue";

import "@styles/index.scss";
</script>

<template>
  <div class="app-layout">
    <TheSidebar />
    <main class="app-layout__main">
      <TheGeneralInfo />
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  display: grid;
  grid-template-columns: 18.75rem 1fr;

  &__main {
    padding: var(--space-xl);
    background-color: var(--clr-gray-100);
  }
}
</style>
