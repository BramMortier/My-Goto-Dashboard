<script setup>
import WarehousesListCard from "@components/WarehousesListCard.vue";
import WarehousesListCardCreate from "@components/WarehousesListCardCreate.vue";
</script>

<template>
  <ul class="warehouses-list">
    <WarehousesListCardCreate />
    <WarehousesListCard />
  </ul>
</template>

<style lang="scss" scoped></style>
