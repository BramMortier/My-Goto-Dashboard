<script setup>
import AllergiesListCard from "@components/AllergiesListCard.vue";
</script>

<template>
  <ul class="allergies-list">
    <AllergiesListCard />
    <AllergiesListCard />
    <AllergiesListCard />
    <AllergiesListCard />
  </ul>
</template>

<style lang="scss" scoped>
.allergies-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: var(--space-lg);
}
</style>
