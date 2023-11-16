<script setup>
import { ref, onMounted } from "vue";
import { useField } from "vee-validate";
import { getAllUsersByRole } from "@services/userService";

const props = defineProps({
  name: String,
});

const truckDrivers = ref(null);

onMounted(async () => {
  const { data: getAllUsersByRoleData, error: getAllMealsCountError } =
    await getAllUsersByRole("TRUCK_DRIVER");

  truckDrivers.value = getAllUsersByRoleData;
});

const { value: selectedTruckDriver, errorMessage } = useField(() => props.name);

const handleTruckDriverChange = (truckDriver) => {
  selectedTruckDriver.value = truckDriver;
};
</script>

<template>
  <ul class="outbound-deliveries-create-truck-driver-list">
    <li
      v-for="driver in truckDrivers"
      :key="driver.truck_driver_id"
      class="outbound-deliveries-create-truck-driver-list__card"
      :class="{
        'outbound-deliveries-create-truck-driver-list__card--selected':
          selectedTruckDriver?.truck_driver_id === driver.truck_driver_id,
      }"
      @click="handleTruckDriverChange(driver)"
    >
      <p>
        {{ driver.firstname }}
        {{ driver.lastname }}
      </p>
      <div class="outbound-deliveries-create-truck-driver-list__selected-icon">
        <img
          src="@assets/icons/checkmark.svg"
          alt="dishes list selected icon"
        />
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.outbound-deliveries-create-truck-driver-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);

  &__card {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border: 1px solid transparent;
    border-radius: var(--border-radius-md);
    background-color: var(--clr-gray-100);
    padding: var(--space-sm) var(--space-sm) var(--space-sm) var(--space-md);
    transition: var(--hover-transition);
    max-width: 25rem;

    &--selected {
      border-color: var(--clr-green-400);

      .outbound-deliveries-create-truck-driver-list {
        &__selected-icon {
          opacity: 1;
        }
      }
    }

    &:hover {
      cursor: pointer;
      background-color: var(--clr-gray-300);
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

    img {
      filter: invert(99%) sepia(0%) saturate(4196%) hue-rotate(150deg)
        brightness(111%) contrast(101%);
    }
  }
}
</style>
