<script setup>
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();
</script>

<template>
  <ul class="breadcrumbs">
    <li
      v-for="(breadcrumb, index) in route.meta.breadcrumbs"
      :key="index"
      class="breadcrumbs__link"
    >
      <RouterLink :to="breadcrumb.path">{{ breadcrumb.label }}</RouterLink>
      <img
        src="@assets/icons/chevron-right-light.svg"
        alt="breadcrumb spacer"
      />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: var(--space-sm);

  &__link {
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    &:last-child img {
      display: none;
    }

    a {
      color: var(--clr-gray-700);

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    img {
      filter: invert(81%) sepia(11%) saturate(0%) hue-rotate(154deg)
        brightness(89%) contrast(86%);
    }
  }
}
</style>
