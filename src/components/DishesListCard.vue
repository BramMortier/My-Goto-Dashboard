<script setup>
const props = defineProps({
  dish: Object,
});
</script>

<template>
  <li class="dish-card">
    <div class="dish-card__thumbnail">
      <img src="@assets/icons/plus.svg" alt="action icon" />
      <div class="dish-card__price">39kr.</div>
    </div>
    <h4>Fresh herb pasta salad</h4>
    <span>Farmer's Fridge</span>
    <p>
      A garden-fresh medley of pasta, herbs, and crisp vegetables, drizzled with
      a tangy...
    </p>
    <h5>Nutrition</h5>
    <ul class="dish-card__nutrition">
      <li class="dish-card__nutrition-entry">
        <p>Calories:</p>
        <span>280kcal</span>
      </li>
      <li class="dish-card__nutrition-entry">
        <p>Fat:</p>
        <span>9g</span>
      </li>
      <li class="dish-card__nutrition-entry">
        <p>Protien:</p>
        <span>7g</span>
      </li>
      <li class="dish-card__nutrition-entry">
        <p>Carbohydrates:</p>
        <span>32g</span>
      </li>
    </ul>
  </li>
</template>

<style lang="scss" scoped>
.dish-card {
  display: flex;
  flex-direction: column;

  &__thumbnail {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-md);
    background-color: var(--clr-gray-100);
    border-radius: var(--border-radius-md);
    height: 11.25rem;

    & > img {
      height: 3rem;
      width: 3rem;
    }
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

  & > h5 {
    color: var(--clr-black);
    text-decoration: underline;
    font-size: var(--fs-md);
    margin-bottom: var(--space-md);
  }

  &__nutrition {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
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
