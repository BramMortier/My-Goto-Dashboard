<script setup>
import { ref } from "vue";
import { generateArrayFromLength } from "@helpers/index";

const props = defineProps({
  machine: Object,
});

const inventoryRefillPlan = ref(props.machine.machine_plan);
const hoveredMeal = ref({
  dish: null,
  index: null,
});

const setHoveredMeal = (dish, index) => {
  hoveredMeal.value = { dish, index };
};
</script>

<template>
  <div class="outbound-deliveries-create-refill-machine">
    <h3>Configure refill</h3>
    <h4>Machine capacity</h4>
    <div
      class="outbound-deliveries-create-refill-machine__capacity-bar-container"
    >
      <div class="outbound-deliveries-create-refill-machine__capacity-bar">
        <div
          class="outbound-deliveries-create-refill-machine__capacity-bar-value"
        ></div>
      </div>
      <p>0 / 70</p>
    </div>
    <h4>Machine inventory overview</h4>
    <ul class="outbound-deliveries-create-refill-machine__inventory-overview">
      <li
        v-for="(entry, index) in inventoryRefillPlan"
        :key="index"
        class="outbound-deliveries-create-refill-machine__inventory-overview-entry"
      >
        <div
          class="outbound-deliveries-create-refill-machine__inventory-overview-entry-quantity"
        >
          {{ entry.dish_name }}
          <ul
            class="outbound-deliveries-create-refill-machine__inventory-overview-meals"
            @mouseleave="setHoveredMeal(null, null)"
          >
            <li
              v-for="(_, index) in generateArrayFromLength(
                entry.suggested_quantity
              )"
              :key="index"
              class="outbound-deliveries-create-refill-machine__inventory-overview-meal"
              :class="{
                'outbound-deliveries-create-refill-machine__inventory-overview-meal--selected':
                  hoveredMeal.dish === entry.dish_name &&
                  hoveredMeal.index >= index,
              }"
              @mouseover="setHoveredMeal(entry.dish_name, index)"
            ></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.outbound-deliveries-create-refill-machine {
  & > h3 {
    font-size: var(--fs-lg);
    margin-bottom: var(--space-lg);
  }

  & > h4 {
    font-size: var(--fs-sm);
    text-transform: uppercase;
    color: var(--clr-gray-900);
    margin-bottom: var(--space-lg);
  }

  &__capacity-bar-container {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    margin-bottom: var(--space-lg);
  }

  &__capacity-bar {
    display: flex;
    height: 2rem;
    min-width: 560px;
    border-radius: var(--border-radius-md);
    background-color: var(--clr-gray-100);
    overflow: hidden;

    & > p {
      width: 100%;
      line-height: var(--lh-xs);
    }
  }

  &__capacity-bar-value {
    height: 2rem;
    border-top-left-radius: var(--border-radius-md);
    border-bottom-left-radius: var(--border-radius-md);
    width: 73%;
    background-color: var(--clr-green-400);
  }

  &__inventory-overview {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  &__inventory-overview-entry-quantity {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    & > P {
      line-height: var(--lh-xs);
    }
  }

  &__inventory-overview-meals {
    display: grid;
    grid-template-columns: repeat(12, 20px);
    gap: var(--space-2xs);
    width: fit-content;
  }

  &__inventory-overview-meal {
    width: 20px;
    height: 20px;
    border-radius: var(--border-radius-md);
    background-color: var(--clr-gray-300);
    transition: var(--hover-transition);

    &--selected {
      cursor: pointer;
      filter: brightness(90%);
    }
  }
}
</style>
