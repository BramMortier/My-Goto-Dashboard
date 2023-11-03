<template>
  <li class="dish-card-create">
    <div class="dish-card-create__thumbnail">
      <img src="@assets/icons/plus.svg" alt="action icon" />
      <div class="dish-card-create__price">39kr.</div>
    </div>
    <h4>Fresh herb pasta salad</h4>
    <span>Farmer's Fridge</span>
    <div class="dish-card-create__description">
      <p>These</p>
      <p>Are</p>
      <p>Some very</p>
      <p>Nice word that im writing</p>
      <p>Down</p>
    </div>
    <ul class="dish-card-create__nutrition">
      <h5>Nutrition</h5>
      <li class="dish-card-create__nutrition-entry">
        <p>Calories:</p>
        <span>280kcal</span>
      </li>
      <li class="dish-card-create__nutrition-entry">
        <p>Fat:</p>
        <span>9g</span>
      </li>
      <li class="dish-card-create__nutrition-entry">
        <p>Protien:</p>
        <span>7g</span>
      </li>
      <li class="dish-card-create__nutrition-entry">
        <p>Carbohydrates:</p>
        <span>32g</span>
      </li>
    </ul>
  </li>
</template>

<style lang="scss" scoped>
.dish-card-create {
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

    & > img {
      height: 3rem;
      width: 3rem;
    }
  }

  &__description {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
    margin-bottom: var(--space-md);

    & > p {
      color: var(--clr-gray-700);
      font-size: var(--fs-sm);
      line-height: var(--lh-xs);
      background-color: var(--clr-gray-100);
      border-radius: var(--border-radius-md);
      color: var(--clr-gray-100);
    }
  }

  &__price {
    position: absolute;
    content: "";
    line-height: var(--lh-xs);
    bottom: var(--space-sm);
    right: var(--space-sm);
    background-color: var(--clr-gray-300);
    color: var(--clr-gray-300);
    border-radius: var(--border-radius-md);
    padding: var(--space-xs) var(--space-sm);
  }

  & > h4 {
    line-height: var(--lh-xs);
    margin-bottom: var(--space-sm);
    color: var(--clr-black);
    font-weight: var(--fw-semibold);
  }

  & > span {
    line-height: var(--lh-xs);
    margin-bottom: var(--space-sm);
    font-size: var(--fs-sm);
    background-color: var(--clr-gray-300);
    border-radius: var(--border-radius-md);
    color: var(--clr-gray-300);
    width: fit-content;
  }

  &__nutrition {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    justify-content: flex-end;
    flex: 1;

    & > h5 {
      color: var(--clr-gray-300);
      background-color: var(--clr-gray-300);
      border-radius: var(--border-radius-md);
      width: fit-content;
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
      color: var(--clr-gray-300);
      font-size: var(--fs-sm);
      line-height: var(--lh-xs);
      background-color: var(--clr-gray-300);
      border-radius: var(--border-radius-md);
    }

    & > p {
      color: var(--clr-gray-100);
      line-height: var(--lh-xs);
      background-color: var(--clr-gray-100);
      border-radius: var(--border-radius-md);
    }
  }
}
</style>
