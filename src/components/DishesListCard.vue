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
          publicStorageBucketUrl + encodeURIComponent(props.dish.thumbnail_path)
        })`,
      }"
    ></div>
    <div class="dish-card__main">
      <div class="dish-card__general-info">
        <h4>{{ props.dish.name }} - {{ props.dish.suppliers.name }}</h4>
        <p>{{ props.dish.description }}</p>
      </div>
      <div class="dish-card__main-info">
        <div class="dish-card__nutrition-info">
          <p>Calories: {{ props.dish.calories }}kcal</p>
          <p>Fat: {{ props.dish.fat }}g</p>
          <p>Protien: {{ props.dish.protien }}g</p>
          <p>Carbohydrates: {{ props.dish.carbohydrates }}g</p>
        </div>

        <div class="dish-card__price-info">
          <p>Buy price: {{ props.dish.purchase_price }}kr.</p>
          <p>Sell price: {{ props.dish.sell_price }}kr.</p>
        </div>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.dish-card {
  display: grid;
  grid-template-columns: 15.625rem 1fr;
  gap: var(--space-md);
  padding-bottom: var(--space-md);
  border-bottom: 1px solid var(--clr-gray-500);

  &:not(:last-child) {
    margin-bottom: var(--space-md);
  }

  &__thumbnail {
    height: 12.5rem;
    width: 15.625rem;
    border-radius: var(--border-radius-md);

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  &__general-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    & > h4 {
      font-size: var(--fs-lg);
    }

    & > p {
      color: var(--clr-gray-700);
    }
  }

  &__main-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
  }

  &__price-info {
    display: flex;
    gap: var(--space-xl);
    line-height: var(--lh-xs);
  }

  &__nutrition-info {
    display: flex;
    gap: var(--space-sm);
    flex-wrap: wrap;
    max-width: 350px;

    & > p {
      line-height: var(--lh-xs);
      padding: var(--space-xs) var(--space-sm);
      border-radius: var(--border-radius-md);
      background-color: var(--clr-gray-100);
    }
  }
}
</style>
