<script setup>
import { useModalStore } from "@stores/ModalStore";

import BaseButton from "@components/BaseButton.vue";

const props = defineProps({
  status: String,
});

const { closeModal } = useModalStore();
</script>

<template>
  <div class="outbound-deliveries-manage-delivery-status-modal">
    <p>
      Set this delivery status to
      <span class="outbound-deliveries-manage-delivery-status-modal__bold"
        >"{{ status }}"
      </span>
    </p>
    <div
      class="outbound-deliveries-manage-delivery-status-modal__action-buttons"
    >
      <BaseButton type="outlined" variant="tertiary" stretch="fit-content"
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
