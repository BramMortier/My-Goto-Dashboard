<script setup>
import { publicStorageBucketUrl } from "@services/storageService";

const props = defineProps({
  allergy: Object,
});
</script>

<template>
  <li class="allergy-card">
    <div class="allergy-card__icon">
      <img
        :src="publicStorageBucketUrl + props.allergy.icon_path"
        alt="allergy icon"
      />
    </div>
    <div class="allergy-card__main">
      <h4>{{ props.allergy.name }}</h4>
      <p>In 0 dishes</p>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.allergy-card {
  display: flex;
  gap: var(--space-md);
  padding: 0 0 var(--space-md) 0;
  margin-bottom: var(--space-md);
  border-bottom: 1px solid var(--clr-gray-500);
  transition: var(--hover-transition);

  &:hover {
    cursor: pointer;
    border-color: var(--clr-gray-700);

    .allergy-card {
      &__icon {
        background-color: var(--clr-gray-300);
      }
    }
  }

  &__icon {
    width: 4rem;
    height: 4rem;
    border-radius: var(--border-radius-md);
    background-color: var(--clr-gray-100);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--hover-transition);

    img {
      width: 2rem;
      height: 2rem;
      filter: invert(31%) sepia(1%) saturate(0%) hue-rotate(253deg)
        brightness(99%) contrast(89%);
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--space-sm);

    & > h4 {
      font-weight: var(--fw-semibold);
    }

    & > p {
      line-height: var(--lh-xs);
      color: var(--clr-gray-700);
    }
  }
}
</style>
