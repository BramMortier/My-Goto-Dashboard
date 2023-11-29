<script setup>
import { useRightClickMenuStore } from "@stores/RightClickMenuStore";

import LocationsActionMenu from "@components/LocationsActionMenu.vue";

const props = defineProps({
  machine: Object,
});

const { openMenu } = useRightClickMenuStore();
</script>

<template>
  <li
    class="machines-list-card"
    @click.right.prevent="
      openMenu({
        component: LocationsActionMenu,
        props: { location: props.machine },
      })
    "
  >
    <div class="machines-list-card__thumbnail">
      <img
        src="@assets/icons/vending-machine-v4.svg"
        alt="machines list card icon"
      />
    </div>
    <div class="machines-list-card__main">
      <h4>{{ props.machine.name }}</h4>
      <p class="machines-list-card__assigned-dishes">6 Assigned dishes</p>
      <div class="machines-list-card__info">
        <div class="machines-list-card__info-entry">
          <p>Address:</p>
          <span>
            {{ props.machine.street }} {{ props.machine.street_number }}
          </span>
        </div>
        <div class="machines-list-card__info-entry">
          <p>Postal code:</p>
          <span>{{ props.machine.postal_code }}</span>
        </div>
        <div class="machines-list-card__info-entry">
          <p>City:</p>
          <span>{{ props.machine.city }}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.machines-list-card {
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
      text-align: right;
    }
  }
}
</style>
