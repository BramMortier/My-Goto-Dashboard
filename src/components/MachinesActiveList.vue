<script setup>
import { ref, onMounted } from "vue";

import MachinesActiveListCard from "@components/MachinesActiveListCard.vue";

const activeMachines = ref(null);
</script>

<template>
  <ul class="machines-active-list">
    <!-- <MachinesActiveListCard
      v-for="machine in activeMachines"
      :key="machine.id"
    /> -->
  </ul>
</template>

<style lang="scss" scoped></style>
