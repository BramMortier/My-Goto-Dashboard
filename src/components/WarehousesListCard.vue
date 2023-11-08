<script setup>
const props = defineProps({
  warehouse: Object,
});
</script>

<template>
  <li class="warehouse-list-card">
    <div class="warehouse-list-card__thumbnail">
      <img src="@assets/icons/warehouse.svg" alt="warehouse list card icon" />
    </div>
    <div class="warehouse-list-card__main">
      <h4>{{ props.warehouse.name }}</h4>
      <div class="warehouse-list-card__info">
        <div class="warehouse-list-card__info-entry">
          <p>Address:</p>
          <span
            >{{ props.warehouse.street }}
            {{ props.warehouse.street_number }}</span
          >
        </div>
        <div class="warehouse-list-card__info-entry">
          <p>Postal code:</p>
          <span>{{ props.warehouse.postal_code }}</span>
        </div>
        <div class="warehouse-list-card__info-entry">
          <p>City:</p>
          <span>{{ props.warehouse.city }}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.warehouse-list-card {
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: var(--space-md);
  padding-bottom: var(--space-md);
  border-bottom: 1px solid var(--clr-gray-500);

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
      width: 2rem;
      height: 2rem;
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
    }

    & > span {
      line-height: var(--lh-xs);
      color: var(--clr-gray-700);
    }
  }
}
</style>
