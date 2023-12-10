<script setup>
import { ref } from "vue";
import { useModalStore } from "@stores/ModalStore";
import { useNotificationStore } from "@stores/NotificationStore";
import { generateArrayFromLength, sanitizeMachinePlan } from "@helpers/index";

import BaseButton from "@components/BaseButton.vue";

const props = defineProps({
  machine: Object,
  onUpdateOutboundDeliveryContents: Function,
});

const emit = defineEmits(["updateOutboundDeliveryContents"]);

const { closeModal } = useModalStore();
const { addNotification } = useNotificationStore();

const inventoryRefillPlan = ref(
  sanitizeMachinePlan(props.machine.machine_plan)
);

const hoveredMeal = ref({
  dish: null,
  index: null,
});

const setHoveredMeal = (dish, index) => {
  hoveredMeal.value = { dish, index };
};

const handleUpdateInventoryRefillPlan = (dishId, addedAmount) => {
  inventoryRefillPlan.value = inventoryRefillPlan.value.map((dish) => {
    if (dishId === dish.dish_id) {
      return {
        ...dish,
        added_quantity: addedAmount,
      };
    }
    return { ...dish };
  });
};

const handleUpdateOutboundDeliveryContents = (contentEntry) => {
  emit("updateOutboundDeliveryContents", contentEntry);

  addNotification({
    title: "Succes!",
    message: "Added to inbound delivery succesfully",
    type: "succes",
    removeDelay: 2000,
  });
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
          :style="{ width: `${props.machine.stocked_capacity}%` }"
        ></div>
      </div>
      <p>{{ props.machine.stocked_capacity }} / {{ props.machine.capacity }}</p>
    </div>
    <h4>Machine inventory overview</h4>
    <div class="outbound-deliveries-create-refill-machine__tooltip">
      <p>
        The gray squares represent the ideal amount of meals for this machine.
        It is not a hard limit so you can go over or under as long as the
        capacity can handle it
      </p>
    </div>
    <ul class="outbound-deliveries-create-refill-machine__inventory-overview">
      <li
        v-for="entry in inventoryRefillPlan"
        :key="entry.dish_id"
        class="outbound-deliveries-create-refill-machine__inventory-overview-entry"
      >
        <div
          class="outbound-deliveries-create-refill-machine__inventory-overview-entry-quantity"
        >
          <p>{{ entry.dish_name }}</p>
          <ul
            class="outbound-deliveries-create-refill-machine__inventory-overview-meals"
            @mouseleave="setHoveredMeal(null, null)"
          >
            <li
              v-for="(_, index) in generateArrayFromLength(
                entry.suggested_quantity
              )"
              :key="index"
              @click="handleUpdateInventoryRefillPlan(entry.dish_id, index + 1)"
              @mouseover="setHoveredMeal(entry.dish_name, index)"
              class="outbound-deliveries-create-refill-machine__inventory-overview-meal"
              :class="{
                'outbound-deliveries-create-refill-machine__inventory-overview-meal--selected':
                  hoveredMeal.dish === entry.dish_name &&
                  hoveredMeal.index >= index,
                'outbound-deliveries-create-refill-machine__inventory-overview-meal--added':
                  index + 1 <= entry.added_quantity,
              }"
            ></li>
          </ul>
        </div>
        <div
          class="outbound-deliveries-create-refill-machine__inventory-overview-entry-quantity-controls"
        >
          <button
            @click="
              handleUpdateInventoryRefillPlan(
                entry.dish_id,
                entry.added_quantity ? entry.added_quantity - 1 : 0
              )
            "
          >
            <img src="@assets/icons/minus.svg" alt="minus icon" />
          </button>
          <div>
            <p>
              {{ entry.added_quantity ? entry.added_quantity : 0 }} /
              {{ entry.suggested_quantity }}
            </p>
          </div>
          <button
            @click="
              handleUpdateInventoryRefillPlan(
                entry.dish_id,
                entry.added_quantity ? entry.added_quantity + 1 : 1
              )
            "
          >
            <img src="@assets/icons/plus.svg" alt="plus icon" />
          </button>
        </div>
      </li>
    </ul>
    <BaseButton
      stretch="fit-content"
      @click="
        handleUpdateOutboundDeliveryContents({
          inventoryRefillPlan,
          machine: props.machine,
        });
        closeModal();
      "
      >Add to outbound delivery</BaseButton
    >
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
    background-color: var(--clr-green-400);
  }

  &__tooltip {
    background-color: var(--clr-gray-100);
    border-radius: var(--border-radius-md);
    padding: var(--space-sm);
    margin-bottom: var(--space-lg);

    & > p {
      max-width: 37.5rem;
      color: var(--clr-gray-700);
      font-size: var(--fs-sm);
    }
  }

  &__inventory-overview {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);
  }

  &__inventory-overview-entry {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

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
  }

  &__inventory-overview-entry-quantity-controls {
    display: flex;
    gap: var(--space-xs);
    height: fit-content;
    align-items: center;

    & > div {
      background-color: var(--clr-gray-100);
      border-radius: var(--border-radius-md);
      padding: var(--space-xs);
      height: 2rem;
      min-width: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      & > p {
        line-height: var(--lh-xs);
      }
    }

    & > button {
      border: none;
      background-color: var(--clr-green-400);
      border-radius: var(--border-radius-md);
      padding: var(--space-xs) var(--space-xs);
      transition: var(--hover-transition);

      &:hover {
        cursor: pointer;
        background-color: var(--clr-green-500);
      }

      & > img {
        height: 1rem;
        width: 1rem;
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(1deg)
          brightness(105%) contrast(101%);
      }
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

    &--added {
      background-color: var(--clr-green-400);
    }
  }
}
</style>
