<script setup>
import { useRouter } from "vue-router";
import { useModalStore } from "@stores/ModalStore";
import { publicStorageBucketUrl } from "@services/storageService";
import { useNotificationStore } from "@stores/NotificationStore";
import { deleteAllergy } from "@services/allergyService";

import BaseButton from "@components/BaseButton.vue";

const props = defineProps({
  allergy: Object,
});

console.log(props.allergy);

const { closeModal } = useModalStore();
const { addNotification } = useNotificationStore();

const handleDeleteAllergy = async (allergyId) => {
  console.log(allergyId);
  console.log("deleting allergy...");

  const { data: deleteAllergyData, error: deleteAllergyError } =
    await deleteAllergy(allergyId);

  if (!deleteAllergyError) {
    addNotification({
      title: "Succes!",
      message: "Deleted allergy succesfully",
      type: "succes",
      removeDelay: 2000,
    });

    setTimeout(() => router.go(0), 1200);
  } else {
    addNotification({
      title: "Error!",
      message: "Failed to delete allergy",
      type: "error",
      removeDelay: 2000,
    });
  }

  console.log(deleteAllergyData);
  console.log(deleteAllergyError);
};
</script>

<template>
  <div class="allergies-modal-confirm-delete">
    <div class="allergies-modal-confirm-delete__body">
      <p>Are you sure u want to delete the following allergy?</p>
      <div class="allergies-modal-confirm-delete__allergy-icon">
        <img
          :src="publicStorageBucketUrl + props.allergy.icon_path"
          alt="allergy icon"
        />
      </div>
      <h4>{{ props.allergy.name }}</h4>
    </div>
    <div class="allergies-modal-confirm-delete__action-buttons">
      <BaseButton
        @click="handleDeleteAllergy(props.allergy.id)"
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
.allergies-modal-confirm-delete {
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

  &__allergy-icon {
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
