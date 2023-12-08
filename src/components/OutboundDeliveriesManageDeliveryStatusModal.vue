<script setup>
import { useModalStore } from "@stores/ModalStore";
import { updateMealsToInTransport } from "@services/mealService";

import BaseButton from "@components/BaseButton.vue";

const props = defineProps({
  deliveryStatus: String,
  deliveryId: String,
});

const { closeModal } = useModalStore();

const handleStatusUpdate = async (deliveryId) => {
  const {
    data: updateMealsToInTransportData,
    error: updateMealsToInTransportError,
  } = await updateMealsToInTransport(deliveryId);

  console.log(updateMealsToInTransportData);
  console.log(updateMealsToInTransportError);
};
</script>

<template>
  <div class="outbound-deliveries-manage-delivery-status-modal">
    <p>
      Set this delivery status to
      <span class="outbound-deliveries-manage-delivery-status-modal__bold"
        >"{{ props.deliveryStatus }}"
      </span>
    </p>
    <div
      class="outbound-deliveries-manage-delivery-status-modal__action-buttons"
    >
      <BaseButton
        @click="handleStatusUpdate(props.deliveryId)"
        type="outlined"
        variant="tertiary"
        stretch="fit-content"
        >Confirm
      </BaseButton>
      <BaseButton @click="closeModal()" stretch="fit-content"
        >Cancel
      </BaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.outbound-deliveries-manage-delivery-status-modal {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

  &__bold {
    font-weight: var(--fw-semibold);
    color: var(--clr-black);
  }

  &__action-buttons {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-md);
  }
}
</style>
