<script setup>
import { getAllAllergies } from "@services/allergyService";
import { ref, onMounted } from "vue";

import AllergiesListCard from "@components/AllergiesListCard.vue";

const allergies = ref(null);

onMounted(async () => {
  const { data: getAllAllergiesData, error: getAllAllergiesError } =
    await getAllAllergies();

  allergies.value = getAllAllergiesData;
});
</script>

<template>
  <ul class="allergies-list">
    <AllergiesListCard
      v-for="allergy in allergies"
      :key="allergy.id"
      :allergy="allergy"
    />
  </ul>
</template>

<style lang="scss" scoped>
.allergies-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: var(--space-lg);
}
</style>
