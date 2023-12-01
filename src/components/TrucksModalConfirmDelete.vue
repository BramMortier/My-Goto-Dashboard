<script setup>
import { useRouter } from "vue-router";
import { useModalStore } from "@stores/ModalStore";
import { useNotificationStore } from "@stores/NotificationStore";
import { deleteLocation } from "@services/locationService";

import BaseButton from "@components/BaseButton.vue";

const props = defineProps({
  truck: Object,
});

const { closeModal } = useModalStore();
const { addNotification } = useNotificationStore();
const router = useRouter();

const handleDeleteTruck = async (truckId) => {
  const { data: deleteLocationData, error: deleteLocationError } =
    await deleteLocation(truckId);

  if (!deleteLocationError) {
    addNotification({
      title: "Succes!",
      message: "Deleted truck succesfully",
      type: "succes",
      removeDelay: 2000,
    });

    setTimeout(() => router.go(0), 1200);
  } else {
    addNotification({
      title: "Error!",
      message: "Failed to delete truck",
      type: "error",
      removeDelay: 2000,
    });
  }
};
</script>

<template>
  <div class="trucks-modal-confirm-delete">
    <div class="trucks-modal-confirm-delete__body">
      <p>Are you sure u want to delete the following truck?</p>
      <div class="trucks-modal-confirm-delete__truck-icon">
        <img src="@assets/icons/truck.svg" alt="truck icon" />
      </div>
      <h4>{{ props.truck.name }}</h4>
    </div>
    <div class="trucks-modal-confirm-delete__action-buttons">
      <BaseButton
        @click="handleDeleteTruck(props.truck.id)"
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
.trucks-modal-confirm-delete {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);

    & > h4 {
      font-weight: var(--fw-semibold);
    }
  }

  &__truck-icon {
    width: 4rem;
    height: 4rem;
    border-radius: var(--border-radius-md);
    background-color: var(--clr-gray-100);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--hover-transition);

    img {
      width: 2rem;
      height: 2rem;
      filter: invert(31%) sepia(1%) saturate(0%) hue-rotate(253deg)
        brightness(99%) contrast(89%);
    }
  }

  &__action-buttons {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-md);
  }
}
</style>
