<script setup>
import { transformToFormattedDateShort } from "@helpers/index";
import { useRouter } from "vue-router";
import { useModalStore } from "@stores/ModalStore";
import { useNotificationStore } from "@stores/NotificationStore";
import { deleteMeals } from "@services/mealService";

import BaseButton from "@components/BaseButton.vue";

const props = defineProps({
  inboundDelivery: Object,
});

const { closeModal } = useModalStore();
const { addNotification } = useNotificationStore();
const router = useRouter();

const handleDeleteInboundDelivery = async (inboundDeliverySupplierBatch) => {
  closeModal();

  const { data: deleteMealsData, error: deleteMealsError } = await deleteMeals(
    inboundDeliverySupplierBatch
  );

  if (!deleteMealsError) {
    addNotification({
      title: "Succes!",
      message: "Warehouse inventory items deleted succesfully",
      type: "succes",
      removeDelay: 2000,
    });

    setTimeout(() => router.go(0), 1200);
  } else {
    addNotification({
      title: "Error!",
      message: "Failed to delete warehouse inventory items",
      type: "error",
      removeDelay: 2000,
    });
  }
};
</script>

<template>
  <div class="warehouse-inbound-deliveries-modal-confirm-delete">
    <div class="warehouse-inbound-deliveries-modal-confirm-delete__body">
      <p>
        Are you sure you want to delete all the meals from the following inbound
        delivery?
      </p>
      <ul class="warehouse-inbound-deliveries-modal-confirm-delete__info-list">
        <li
          class="warehouse-inbound-deliveries-modal-confirm-delete__info-list-entry"
        >
          <p>Dish:</p>
          <span>{{ props.inboundDelivery.dish_name }}</span>
        </li>
        <li
          class="warehouse-inbound-deliveries-modal-confirm-delete__info-list-entry"
        >
          <p>Amount of units:</p>
          <span>{{ props.inboundDelivery.amount }}</span>
        </li>
        <li
          class="warehouse-inbound-deliveries-modal-confirm-delete__info-list-entry"
        >
          <p>Supplier batch number/id:</p>
          <span>{{ props.inboundDelivery.supplier_batch }}</span>
        </li>
        <li
          class="warehouse-inbound-deliveries-modal-confirm-delete__info-list-entry"
        >
          <p>Batch expiry date:</p>
          <span>{{
            transformToFormattedDateShort(
              new Date(props.inboundDelivery.expires_at)
            )
          }}</span>
        </li>
      </ul>
    </div>
    <div
      class="warehouse-inbound-deliveries-modal-confirm-delete__action-buttons"
    >
      <BaseButton
        @click="
          handleDeleteInboundDelivery(props.inboundDelivery.supplier_batch)
        "
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
.warehouse-inbound-deliveries-modal-confirm-delete {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

  &__action-buttons {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-md);
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);

    & > p {
      max-width: 28.125rem;
    }
  }

  &__info-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  &__info-list-entry {
    display: flex;
    align-items: center;
    line-height: var(--lh-xs);
    justify-content: space-between;
    gap: var(--space-4xl);

    & > span {
      color: var(--clr-gray-700);
    }
  }
}
</style>
