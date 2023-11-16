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
  console.log(trucks.value);
});

const { value: selectedTruck, errorMessage } = useField(() => props.name);
</script>

<template>
  <ul class="outbound-deliveries-create-trucks-list">
    <li
      v-for="truck in trucks"
      :key="truck.id"
      class="outbound-deliveries-create-trucks-list__card"
    >
      {{ truck.name }}
      {{ truck.capacity }}
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
