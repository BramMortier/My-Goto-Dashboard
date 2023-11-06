<script setup>
import TrucksListCard from "@components/TrucksListCard.vue";
import TrucksListCardCreate from "@components/TrucksListCardCreate.vue";
</script>

<template>
  <ul class="trucks-list">
    <TrucksListCardCreate />
    <TrucksListCard />
    <TrucksListCard />
  </ul>
</template>

<style lang="scss" scoped></style>
