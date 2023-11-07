<script setup>
import { useModalStore } from "@stores/ModalStore";

import MachinesListCard from "@components/MachinesListCard.vue";
import MachinesListCardCreate from "@components/MachinesListCardCreate.vue";
import MachinesModalCreate from "@components/MachinesModalCreate.vue";

const { openModal } = useModalStore();
</script>

<template>
  <ul class="machines-list">
    <MachinesListCardCreate
      @click="openModal({ component: MachinesModalCreate })"
    />
    <MachinesListCard />
    <MachinesListCard />
    <MachinesListCard />
    <MachinesListCard />
    <MachinesListCard />
    <MachinesListCard />
    <MachinesListCard />
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
