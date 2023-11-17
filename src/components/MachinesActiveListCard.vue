<script setup>
import { generateArrayFromLength } from "@helpers/index";

const props = defineProps({
  machine: Object,
});
</script>

<template>
  <li class="machines-active-list-card">
    <div class="machines-active-list-card__thumbnail">
      <img
        src="@assets/icons/vending-machine-v4.svg"
        alt="machines list card icon"
      />
    </div>
    <div class="machines-active-list-card__main">
      <h4>{{ props.machine.location_name }}</h4>
      <span>43/{{ props.machine.capacity }} meals filled (61,1%)</span>
      <p class="machines-active-list-card__assigned-dishes">
        6 Assigned dishes
      </p>
      <ul class="machines-active-list-card__inventory-overview">
        <li
          v-for="entry in props.machine.machine_plan"
          class="machines-active-list-card__inventory-overview-entry"
        >
          <div
            class="machines-active-list-card__inventory-overview-entry-quantity"
          >
            <p>{{ entry.dish_name }}</p>
            <ul>
              <li
                v-for="(_, index) in generateArrayFromLength(
                  entry.suggested_quantity
                )"
                :key="index"
              ></li>
            </ul>
          </div>
          <p>0 / {{ entry.suggested_quantity }}</p>
        </li>
      </ul>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.machines-active-list-card {
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: var(--space-md);
  padding-bottom: var(--space-md);
  border-bottom: 1px solid var(--clr-gray-500);

  &:hover {
    cursor: pointer;
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
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;

    & > h4 {
      font-weight: var(--fw-semibold);
      margin-bottom: var(--space-sm);
    }

    & > span {
      line-height: var(--lh-xs);
      margin-bottom: var(--space-md);
    }
  }

  &__assigned-dishes {
    background-color: var(--clr-green-400);
    color: var(--clr-white);
    border-radius: var(--border-radius-md);
    padding: var(--space-xs) var(--space-sm);
    margin-bottom: var(--space-md);
    line-height: var(--lh-xs);
    width: fit-content;
  }

  &__inventory-overview {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  &__inventory-overview-entry {
    display: flex;
    justify-content: space-between;

    & > p {
      line-height: var(--lh-xs);
    }
  }

  &__inventory-overview-entry-quantity {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    & > P {
      line-height: var(--lh-xs);
    }

    & > ul {
      display: grid;
      grid-template-columns: repeat(12, 16px);
      gap: var(--space-2xs);

      & > li {
        width: 16px;
        height: 16px;
        border-radius: 3px;
        background-color: var(--clr-gray-300);
      }
    }
  }
}
</style>
