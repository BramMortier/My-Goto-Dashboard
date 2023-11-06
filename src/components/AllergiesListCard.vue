<script setup></script>

<template>
  <li class="allergy-card">
    <div class="allergy-card__icon">
      <img src="@assets/icons/allergies.svg" alt="allergy icon" />
    </div>
    <div class="allergy-card__main">
      <h4>Allergy name</h4>
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

  &__icon {
    width: 4rem;
    height: 4rem;
    border-radius: var(--border-radius-md);
    background-color: var(--clr-gray-100);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 2rem;
      height: 2rem;
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
