<script setup>
import { useRoute } from "vue-router";

import TheGeneralInfoBreadcrumbs from "@components/TheGeneralInfoBreadcrumbs.vue";

const route = useRoute();
</script>

<template>
  <section class="general-info">
    <div class="general-info__route-info">
      <h2>
        {{ route.meta.breadcrumbs[route.meta.breadcrumbs.length - 1].label }}
      </h2>
      <TheGeneralInfoBreadcrumbs />
    </div>
    <div class="general-info__user-info-container">
      <div class="general-info__user-info">
        <p>Hi, Niels Bjorndahl</p>
        <span>Monday, 11 okt 2023</span>
      </div>
      <div class="general-info__user-profile-picture">
        <img src="@assets/icons/person.svg" alt="profile icon" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.general-info {
  display: flex;
  justify-content: space-between;

  &__route-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    & > h2 {
      font-size: var(--fs-2xl);
    }
  }

  &__user-info-container {
    display: flex;
    gap: var(--space-lg);
  }

  &__user-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    text-align: right;

    & > p {
      text-decoration: underline;
      color: var(--clr-black);
    }

    & > span {
      line-height: var(--lh-xs);
      color: var(--clr-gray-700);
    }
  }

  &__user-profile-picture {
    border-radius: var(--border-radius-md);
    background-color: var(--clr-green-400);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.75rem;
    width: 3.75rem;

    img {
      height: 2rem;
      width: fit-content;
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(60deg)
        brightness(104%) contrast(105%);
    }
  }
}
</style>
