<script setup>
import { useModalStore } from "@stores/ModalStore";

import TrucksListCard from "@components/TrucksListCard.vue";
import TrucksListCardCreate from "@components/TrucksListCardCreate.vue";
import TrucksModalCreate from "@components/TrucksModalCreate.vue";

const { openModal } = useModalStore();
</script>

<template>
  <ul class="trucks-list">
    <TrucksListCardCreate
      @click="openModal({ component: TrucksModalCreate })"
    />
    <TrucksListCard />
    <TrucksListCard />
  </ul>
</template>

<style lang="scss" scoped></style>
