<script setup>
import { onMounted, ref } from "vue";
import { useField } from "vee-validate";
import { getAllMachinesWithPlan } from "@services/locationService";
import { useModalStore } from "@stores/ModalStore";

import OutboundDeliveriesCreateRefillMachineModal from "@components/OutboundDeliveriesCreateRefillMachineModal.vue";
import MachinesListCardRefillStatus from "@components/MachinesListCardRefillStatus.vue";

const props = defineProps({
  name: String,
});

const { openModal } = useModalStore();

const machines = ref(null);

onMounted(async () => {
  const {
    data: getAllMachinesWithPlanData,
    error: getAllMachinesWithPlanError,
  } = await getAllMachinesWithPlan();

  machines.value = getAllMachinesWithPlanData;
  outboundDeliveryContents.value = [];
});

const { value: outboundDeliveryContents, errorMessage } = useField(
  () => props.name
);

const updateOutboundDeliveryContents = (contentEntry) => {
  console.log("updating...");
  outboundDeliveryContents.value.push(contentEntry);
};
</script>

<template>
  <ul class="outbound-deliveries-create-machines-list">
    <li
      v-for="machine in machines"
      :key="machine.location_id"
      class="outbound-deliveries-create-machines-list__card"
      @click="
        openModal({
          component: OutboundDeliveriesCreateRefillMachineModal,
          props: {
            machine: machine,
            onUpdateOutboundDeliveryContents: updateOutboundDeliveryContents,
          },
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
        <span
          >{{ machine.stocked_capacity }}/{{ machine.capacity }} meals filled
          ({{
            Math.floor((machine.stocked_capacity / machine.capacity) * 100)
          }}%)</span
        >
        <MachinesListCardRefillStatus :machine="machine" />
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
      filter: invert(30%) sepia(0%) saturate(121%) hue-rotate(167deg)
        brightness(102%) contrast(90%);
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
}
</style>
