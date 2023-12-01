<script setup>
import { ref, onMounted } from "vue";
import { getAllLocationsByType } from "@services/locationService";
import { useModalStore } from "@stores/ModalStore";

import WarehousesListCard from "@components/WarehousesListCard.vue";
import WarehousesListCardCreate from "@components/WarehousesListCardCreate.vue";
import WarehousesModalCreate from "@components/WarehousesModalCreate.vue";

const warehouses = ref(null);

const { openModal } = useModalStore();

onMounted(async () => {
  const { data: getAllLocationsData, error: getAllLocationsError } =
    await getAllLocationsByType("Warehouse");

  warehouses.value = getAllLocationsData;
});
</script>

<template>
  <ul class="warehouses-list">
    <WarehousesListCardCreate
      @click="openModal({ component: WarehousesModalCreate })"
    />
    <WarehousesListCard
      v-for="warehouse in warehouses"
      :key="warehouse.id"
      :warehouse="warehouse"
    />
  </ul>
</template>

<style lang="scss" scoped></style>
