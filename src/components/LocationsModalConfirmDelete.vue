<script setup>
import { useRouter } from "vue-router";
import { useModalStore } from "@stores/ModalStore";
import { useNotificationStore } from "@stores/NotificationStore";
import { deleteLocation } from "@services/locationService";

import BaseButton from "@components/BaseButton.vue";

const props = defineProps({
  location: Object,
});

console.log(props.location);

const { closeModal } = useModalStore();
const { addNotification } = useNotificationStore();
const router = useRouter();

const handleDeleteLocation = async (locationId) => {
  closeModal();

  const { data: deleteLocationData, error: deleteLocationError } =
    await deleteLocation(locationId);

  if (!deleteLocationError) {
    addNotification({
      title: "Succes!",
      message: "Deleted location succesfully",
      type: "succes",
      removeDelay: 2000,
    });

    setTimeout(() => router.go(0), 1200);
  } else {
    addNotification({
      title: "Error!",
      message: "Failed to delete location",
      type: "error",
      removeDelay: 2000,
    });
  }
};
</script>

<template>
  <div class="locations-modal-confirm-delete">
    <div class="locations-modal-confirm-delete__body">
      <p>Are you sure u want to delete the following location?</p>
      <div class="locations-modal-confirm-delete__location-icon">
        <img
          v-if="props.location.type === 'Machine'"
          src="@assets/icons/vending-machine-v4.svg"
          alt="vending machine icon"
        />
        <img
          v-else-if="props.location.type === 'Truck'"
          src="@assets/icons/truck.svg"
          alt="truck machine icon"
        />
        <img v-else src="@assets/icons/warehouse.svg" alt="warehouse icon" />
      </div>
      <h4>{{ props.location.name }}</h4>
    </div>
    <div class="locations-modal-confirm-delete__action-buttons">
      <BaseButton
        @click="handleDeleteLocation(props.location.id)"
        type="outlined"
        variant="tertiary"
        stretch="fit-content"
        >Confirm</BaseButton
      >
      <BaseButton @click="closeModal()" stretch="fit-content"
        >Cancel</BaseButton
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.locations-modal-confirm-delete {
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

  &__location-icon {
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

      &[alt="vending machine icon"] {
        height: 2.5rem;
        width: 2.5rem;
      }
    }
  }

  &__action-buttons {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-md);
  }
}
</style>
