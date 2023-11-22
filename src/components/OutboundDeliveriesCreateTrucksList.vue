<script setup>
import { onMounted, ref } from "vue";
import { useField } from "vee-validate";
import { getAllLocationsByType } from "@services/locationService";

const props = defineProps({
  name: String,
});

const trucks = ref(null);

onMounted(async () => {
  const { data: getAllLocationsData, error: getAllLocationsError } =
    await getAllLocationsByType("Truck");

  trucks.value = getAllLocationsData;
});

const { value: selectedTruck, errorMessage } = useField(() => props.name);

const handleTruckChange = (truck) => {
  if (selectedTruck.value?.id === truck.id) {
    selectedTruck.value = null;
    return;
  } else {
    selectedTruck.value = truck;
  }
};
</script>

<template>
  <ul class="outbound-deliveries-create-trucks-list">
    <li
      v-for="truck in trucks"
      :key="truck.id"
      class="outbound-deliveries-create-trucks-list__card"
      :class="{
        'outbound-deliveries-create-trucks-list__card--selected':
          truck.id === selectedTruck?.id,
      }"
      @click="handleTruckChange(truck)"
    >
      <div class="outbound-deliveries-create-trucks-list__card-info">
        <h4>{{ truck.name }}</h4>
        <p>{{ truck.capacity }}</p>
      </div>
      <div class="outbound-deliveries-create-trucks-list__selected-icon">
        <img
          src="@assets/icons/checkmark.svg"
          alt="dishes list selected icon"
        />
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.outbound-deliveries-create-trucks-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-sm);

  &__card {
    display: flex;
    min-width: 15rem;
    justify-content: space-between;
    background-color: var(--clr-gray-100);
    border-radius: var(--border-radius-md);
    padding: var(--space-sm);
    min-height: 7.5rem;
    transition: var(--hover-transition);
    border: 1px solid transparent;

    &--selected {
      border-color: var(--clr-green-400);

      .outbound-deliveries-create-trucks-list {
        &__selected-icon {
          opacity: 1;
        }
      }
    }

    &:hover {
      background-color: var(--clr-gray-300);
      cursor: pointer;
    }
  }

  &__card-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    & > h4 {
      font-weight: var(--fw-semibold);
    }

    & > p {
      line-height: var(--lh-xs);
    }
  }

  &__selected-icon {
    width: 2rem;
    height: 2rem;
    padding: var(--space-xs);
    border-radius: 100%;
    background-color: var(--clr-green-400);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: var(--hover-transition);
    align-self: flex-end;

    img {
      filter: invert(99%) sepia(0%) saturate(4196%) hue-rotate(150deg)
        brightness(111%) contrast(101%);
    }
  }
}
</style>
