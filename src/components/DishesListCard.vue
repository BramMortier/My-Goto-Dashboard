<script setup>
import { publicStorageBucketUrl } from "@services/storageService";

const props = defineProps({
  dish: Object,
});
</script>

<template>
  <li class="dish-card">
    <div
      class="dish-card__thumbnail"
      :style="{
        backgroundImage: `url(${
          publicStorageBucketUrl + props.dish.thumbnail_path
        })`,
      }"
    >
      <div class="dish-card__price">{{ props.dish.sell_price }}kr.</div>
    </div>
    <h4>{{ props.dish.name }}</h4>
    <span>{{ props.dish.suppliers.name }}</span>
    <p>
      {{ props.dish.description }}
    </p>
    <ul class="dish-card__nutrition">
      <h5>Nutrition</h5>
      <li class="dish-card__nutrition-entry">
        <p>Calories:</p>
        <span>{{ props.dish.calories }}kcal</span>
      </li>
      <li class="dish-card__nutrition-entry">
        <p>Fat:</p>
        <span>{{ props.dish.fat }}g</span>
      </li>
      <li class="dish-card__nutrition-entry">
        <p>Protien:</p>
        <span>{{ props.dish.protien }}g</span>
      </li>
      <li class="dish-card__nutrition-entry">
        <p>Carbohydrates:</p>
        <span>{{ props.dish.carbohydrates }}g</span>
      </li>
    </ul>
  </li>
</template>

<style lang="scss" scoped>
.dish-card {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--clr-gray-500);
  padding-bottom: var(--space-md);

  &__thumbnail {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-md);
    background-color: var(--clr-gray-100);
    border-radius: var(--border-radius-md);
    height: 11.25rem;
    overflow: hidden;

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &__price {
    position: absolute;
    content: "";
    bottom: var(--space-sm);
    right: var(--space-sm);
    background-color: var(--clr-white);
    color: var(--clr-black);
    border-radius: var(--border-radius-md);
    padding: var(--space-xs) var(--space-sm);
    line-height: var(--lh-xs);
  }

  & > h4 {
    line-height: var(--lh-xs);
    color: var(--clr-black);
    margin-bottom: var(--space-sm);
    font-weight: var(--fw-semibold);
  }

  & > span {
    line-height: var(--lh-xs);
    margin-bottom: var(--space-sm);
    font-size: var(--fs-sm);
  }

  & > p {
    color: var(--clr-gray-700);
    font-size: var(--fs-sm);
    margin-bottom: var(--space-md);
  }

  &__nutrition {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    justify-content: flex-end;
    flex: 1;

    & > h5 {
      color: var(--clr-black);
      text-decoration: underline;
      font-size: var(--fs-md);
      margin-bottom: var(--space-2xs);
    }
  }

  &__nutrition-entry {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > span {
      color: var(--clr-gray-700);
      font-size: var(--fs-sm);
      line-height: var(--lh-xs);
    }

    p {
      line-height: var(--lh-xs);
    }
  }
}
</style>
