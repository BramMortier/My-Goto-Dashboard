<script setup>
import { ref, onMounted } from "vue";
import { getAllLocationsByType } from "@services/locationService";
import { useModalStore } from "@stores/ModalStore";

import TrucksListCard from "@components/TrucksListCard.vue";
import TrucksListCardCreate from "@components/TrucksListCardCreate.vue";
import TrucksModalCreate from "@components/TrucksModalCreate.vue";

const trucks = ref(null);

const { openModal } = useModalStore();

onMounted(async () => {
  const { data: getAllLocationsData, error: getAllLocationsError } =
    await getAllLocationsByType("Truck");

  trucks.value = getAllLocationsData;
});
</script>

<template>
  <ul class="trucks-list">
    <TrucksListCardCreate
      @click="openModal({ component: TrucksModalCreate })"
    />
    <TrucksListCard v-for="truck in trucks" :key="truck.id" :truck="truck" />
  </ul>
</template>

<style lang="scss" scoped></style>
