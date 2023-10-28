<script setup>
import { RouterView } from "vue-router";

import "@styles/index.scss";
</script>

<template>
  <component :is="$route.meta.layout || 'div'">
    <RouterView />
  </component>
</template>

<style lang="scss" scoped></style>
