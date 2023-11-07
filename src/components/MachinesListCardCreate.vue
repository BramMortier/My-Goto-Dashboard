<script setup></script>

<template>
  <li class="machines-list-card-create">
    <div class="machines-list-card-create__thumbnail">
      <img src="@assets/icons/plus.svg" alt="machines list card icon" />
    </div>
    <div class="machines-list-card-create__main">
      <h4>Add a machine</h4>
      <p class="machines-list-card-create__assigned-dishes">
        6 Assigned dishes
      </p>
      <div class="machines-list-card-create__info">
        <div class="machines-list-card-create__info-entry">
          <p>Address:</p>
          <span>Asta Nielsen Strædet 14</span>
        </div>
        <div class="machines-list-card-create__info-entry">
          <p>Postal code:</p>
          <span>2500</span>
        </div>
        <div class="machines-list-card-create__info-entry">
          <p>City:</p>
          <span>København</span>
        </div>
        <div class="machines-list-card-create__info-entry">
          <p>Geolocation:</p>
          <span>55.66696, 12.51517</span>
        </div>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.machines-list-card-create {
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: var(--space-md);
  padding-bottom: var(--space-md);
  border-bottom: 1px solid var(--clr-gray-500);

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

  &__assigned-dishes {
    background-color: var(--clr-gray-100);
    color: var(--clr-gray-100);
    border-radius: var(--border-radius-md);
    padding: var(--space-xs) var(--space-sm);
    margin-bottom: var(--space-md);
    line-height: var(--lh-xs);
    width: fit-content;
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
      text-align: right;
    }
  }
}
</style>
