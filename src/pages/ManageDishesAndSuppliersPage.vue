<script setup>
import { RouterView } from "vue-router";
import { getFullRouteInfo, generateTabsFromRoute } from "@helpers/index";

import BasePageTabs from "@components/BasePageTabs.vue";

const tabsInfo = generateTabsFromRoute(
  getFullRouteInfo("ManageDishesAndSuppliersPage")
);
</script>

<template>
  <div class="manage-dishes-and-suppliers-page">
    <BasePageTabs :tabsInfo="tabsInfo" />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.manage-dishes-and-suppliers-page {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}
</style>
