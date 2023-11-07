<script setup>
import { useModalStore } from "@stores/ModalStore";

import WarehousesListCard from "@components/WarehousesListCard.vue";
import WarehousesListCardCreate from "@components/WarehousesListCardCreate.vue";
import WarehousesModalCreate from "@components/WarehousesModalCreate.vue";

const { openModal } = useModalStore();
</script>

<template>
  <ul class="warehouses-list">
    <WarehousesListCardCreate
      @click="openModal({ component: WarehousesModalCreate })"
    />
    <WarehousesListCard />
  </ul>
</template>

<style lang="scss" scoped></style>
