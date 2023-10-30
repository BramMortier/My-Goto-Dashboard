<script setup>
import { RouterLink, useRoute } from "vue-router";
import { getFullRouteInfo } from "@helpers";

const props = defineProps({
  tabsInfo: { default: [] },
});

const route = useRoute();
</script>

<template>
  <nav class="tabs">
    <ul class="tabs__list">
      <li
        v-for="tab in props.tabsInfo"
        class="tabs__tab"
        :class="{ 'tabs__tab--active': tab.pathName === route.name }"
      >
        <RouterLink :to="{ name: tab.pathName }">{{ tab.label }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.tabs {
  display: flex;
  width: fit-content;

  &__list {
    display: flex;
  }

  &__tab {
    position: relative;
    border-bottom: 2px solid var(--clr-gray-500);
    transition: var(--hover-transition);

    &:not(&--active):hover {
      border-color: var(--clr-gray-700);
    }

    &--active {
      border-color: var(--clr-green-400);
    }

    a {
      display: flex;
      align-items: center;
      min-height: 44px;
      padding-inline: var(--space-md);
    }
  }
}
</style>
