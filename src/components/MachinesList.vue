<script setup>
import { ref, onMounted } from "vue";
import { useModalStore } from "@stores/ModalStore";
import { getAllMachinesWithPlan } from "@services/locationService";

import MachinesListCard from "@components/MachinesListCard.vue";
import MachinesListCardCreate from "@components/MachinesListCardCreate.vue";
import MachinesModalCreate from "@components/MachinesModalCreate.vue";

const machines = ref(null);

const { openModal } = useModalStore();

onMounted(async () => {
  const { data: getAllLocationsData, error: getAllLocationsError } =
    await getAllMachinesWithPlan();

  machines.value = getAllLocationsData;
  console.log(machines.value);
});
</script>

<template>
  <ul class="machines-list">
    <MachinesListCardCreate
      @click="openModal({ component: MachinesModalCreate })"
    />
    <MachinesListCard
      v-for="machine in machines"
      :key="machine.machine_id"
      :machine="machine"
    />
  </ul>
</template>

<style lang="scss" scoped>
.machines-list {
  display: grid;
  column-gap: var(--space-lg);
  row-gap: var(--space-md);
  grid-template-columns: repeat(3, 1fr);
}
</style>
