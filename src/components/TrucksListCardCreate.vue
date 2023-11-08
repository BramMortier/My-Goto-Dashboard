<script setup></script>

<template>
  <li class="truck-list-card-create">
    <div class="truck-list-card-create__thumbnail">
      <img src="@assets/icons/plus.svg" alt="truck list card icon" />
    </div>
    <div class="truck-list-card-create__main">
      <h4>Add a truck</h4>
      <div class="truck-list-card-create__info">
        <div class="truck-list-card-create__info-entry">
          <p>Max capacity:</p>
          <span>1200 meals</span>
        </div>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.truck-list-card-create {
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: var(--space-md);
  padding-bottom: var(--space-md);
  border-bottom: 1px solid var(--clr-gray-500);
  transition: var(--hover-transition);

  &:hover {
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-bottom: var(--space-md);
  }

  &__thumbnail {
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--clr-gray-100);
    border-radius: var(--border-radius-md);

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;

    & > h4 {
      font-weight: var(--fw-semibold);
      margin-bottom: var(--space-md);
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  &__info-entry {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > p {
      line-height: var(--lh-xs);
      background-color: var(--clr-gray-100);
      border-radius: var(--border-radius-md);
      color: var(--clr-gray-100);
    }

    & > span {
      line-height: var(--lh-xs);
      background-color: var(--clr-gray-100);
      border-radius: var(--border-radius-md);
      color: var(--clr-gray-100);
    }
  }
}
</style>
