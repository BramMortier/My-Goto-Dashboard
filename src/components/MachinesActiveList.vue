<script setup>
import { ref, onMounted } from "vue";
import { getAllMachinesWithPlan } from "@services/locationService";

import MachinesActiveListCard from "@components/MachinesActiveListCard.vue";

const activeMachines = ref(null);

onMounted(async () => {
  const {
    data: getAllMachinesWithPlanData,
    error: getAllMachinesWithPlanError,
  } = await getAllMachinesWithPlan();

  activeMachines.value = getAllMachinesWithPlanData;
  console.log(activeMachines.value);
});
</script>

<template>
  <ul class="machines-active-list">
    <MachinesActiveListCard
      v-for="machine in activeMachines"
      :key="machine.id"
      :machine="machine"
    />
  </ul>
</template>

<style lang="scss" scoped>
.machines-active-list {
  display: grid;
  column-gap: var(--space-lg);
  row-gap: var(--space-md);
  grid-template-columns: repeat(3, 1fr);
}
</style>
