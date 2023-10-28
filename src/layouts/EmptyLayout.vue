<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main class="empty-layout">
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
.empty-layout {
  padding: var(--space-xl);
  background-color: var(--clr-gray-100);
  min-height: 100vh;
  display: flex;

  background-image: url("@assets/images/background-pattern-grayscale.png");
  background-position: bottom right;
  background-size: 75vw;
  background-repeat: no-repeat;
}
</style>
