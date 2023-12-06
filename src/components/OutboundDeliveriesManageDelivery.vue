<script setup>
import { ref } from "vue";
import { outboundDeliveryStatuses } from "@constants";
import { useModalStore } from "@stores/ModalStore";

import OutboundDeliveriesManageDeliveryStatusModal from "@components/OutboundDeliveriesManageDeliveryStatusModal.vue";

const props = defineProps({
  status: String,
});

const { openModal } = useModalStore();

const status = ref(null);
</script>

<template>
  <div class="outbound-deliveries-manage-delivery">
    <ul class="outbound-deliveries-manage-delivery__progress">
      <li
        v-for="(status, index) in outboundDeliveryStatuses"
        :key="index"
        @click="
          openModal({
            component: OutboundDeliveriesManageDeliveryStatusModal,
            props: {
              status: status,
            },
          })
        "
        class="outbound-deliveries-manage-delivery__progress-stage"
        :class="{
          'outbound-deliveries-manage-delivery__progress-stage--active':
            props.status === status,
          'outbound-deliveries-manage-delivery__progress-stage--completed':
            outboundDeliveryStatuses.indexOf(props.status) >= index,
        }"
      >
        <p>{{ index + 1 }}. {{ status }}</p>
        <div></div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.outbound-deliveries-manage-delivery {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space-xl);

  &__progress {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-xs);
  }

  &__progress-stage {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    &:first-child div {
      border-top-left-radius: var(--border-radius-md);
      border-bottom-left-radius: var(--border-radius-md);
    }

    &:last-child div {
      border-top-right-radius: var(--border-radius-md);
      border-bottom-right-radius: var(--border-radius-md);
    }

    & > p {
      line-height: var(--lh-xs);
    }

    & > div {
      height: 32px;
      width: 100%;
      background-color: var(--clr-gray-100);
      border: 2px solid transparent;
      transition: var(--hover-transition);

      &:hover {
        cursor: pointer;
        transform: scaleY(1.1);
        filter: brightness(0.96);
      }
    }

    &--active {
      & > p {
        font-weight: var(--fw-semibold);
        color: var(--clr-black);
      }
    }

    &--completed {
      &:nth-child(1) {
        & > div {
          background-color: var(--clr-yellow-500);
        }
      }

      &:nth-child(2) {
        & > div {
          background-color: var(--clr-orange-500);
        }
      }

      &:nth-child(3) {
        & > div {
          background-color: var(--clr-green-400);
        }
      }

      &:nth-child(4) {
        & > div {
          background-color: var(--clr-green-500);
        }
      }
    }
  }
}
</style>
