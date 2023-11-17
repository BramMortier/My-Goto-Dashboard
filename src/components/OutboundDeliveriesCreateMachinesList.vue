<script setup>
import { onMounted, ref } from "vue";
import { getAllMachinesWithPlan } from "@services/locationService";
import { useModalStore } from "@stores/ModalStore";

import OutboundDeliveriesCreateRefillMachineModal from "@components/OutboundDeliveriesCreateRefillMachineModal.vue";

const { openModal } = useModalStore();

const machines = ref(null);

onMounted(async () => {
  const {
    data: getAllMachinesWithPlanData,
    error: getAllMachinesWithPlanError,
  } = await getAllMachinesWithPlan();

  machines.value = getAllMachinesWithPlanData;
});
</script>

<template>
  <ul class="outbound-deliveries-create-machines-list">
    <li
      v-for="machine in machines"
      :key="machine.id"
      class="outbound-deliveries-create-machines-list__card"
      @click="
        openModal({
          component: OutboundDeliveriesCreateRefillMachineModal,
          props: { machine: machine },
        })
      "
    >
      <div class="outbound-deliveries-create-machines-list__thumbnail">
        <img
          src="@assets/icons/vending-machine-v4.svg"
          alt="machines list card icon"
        />
      </div>
      <div class="outbound-deliveries-create-machines-list__main">
        <h4>{{ machine.location_name }}</h4>
        <span>43/70 meals filled (61,1%)</span>
        <p class="outbound-deliveries-create-machines-list__filled-status">
          Optional refill
        </p>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.outbound-deliveries-create-machines-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
  max-height: 50rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--clr-gray-500);
  }

  &__card {
    display: grid;
    grid-template-columns: 4rem 1fr;
    gap: var(--space-md);
    padding-bottom: var(--space-md);
    border-bottom: 1px solid var(--clr-gray-500);

    &:hover {
      cursor: pointer;
    }
  }

  &__thumbnail {
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--clr-gray-100);
    border-radius: var(--border-radius-md);

    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;

    & > h4 {
      font-weight: var(--fw-semibold);
      margin-bottom: var(--space-sm);
    }

    & > span {
      line-height: var(--lh-xs);
      margin-bottom: var(--space-md);
    }
  }

  &__filled-status {
    background-color: var(--clr-green-400);
    color: var(--clr-white);
    border-radius: var(--border-radius-md);
    padding: var(--space-xs) var(--space-sm);
    line-height: var(--lh-xs);
    width: fit-content;
  }
}
</style>
