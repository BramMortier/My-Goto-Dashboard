<script setup>
import { useModalStore } from "@stores/ModalStore";
import { useNotificationStore } from "@stores/NotificationStore";
import { deleteUser } from "@services/userService";
import { getAuthenticatedUser } from "@services/userService";
import { onMounted, ref, computed } from "vue";

import BaseButton from "@components/BaseButton.vue";

const props = defineProps({
  user: Object,
});

const { closeModal } = useModalStore();
const { addNotification } = useNotificationStore();

const AuthenticatedUser = ref(null);

onMounted(async () => {
  const { data: getAuthenticatedUserData, error: getAuthenticatedUserError } =
    await getAuthenticatedUser();

  AuthenticatedUser.value = getAuthenticatedUserData;
  console.log(AuthenticatedUser.value.id);
});

const deleteActionMatchesAuthenticatedUser = computed(() => {
  return (props.user.id = AuthenticatedUser.value.id);
});

const handleDeleteUser = async (userId) => {
  const { error: deleteUserError } = await deleteUser(userId);

  if (!deleteUserError) {
    addNotification({
      title: "Succes!",
      message: "Deleted user succesfully",
      type: "succes",
      removeDelay: 2000,
    });
  } else {
    addNotification({
      title: "Error!",
      message: "Failed to delete user",
      type: "error",
      removeDelay: 2000,
    });
  }
};
</script>

<template>
  <div class="users-modal-confirm-delete">
    <p>
      Are you sure u want to delete {{ props.user.firstname }}
      {{ props.user.lastname }} ?
    </p>
    <div class="users-modal-confirm-delete__action-buttons">
      <BaseButton
        v-if="!deleteActionMatchesAuthenticatedUser"
        @click="handleDeleteUser(props.user.id)"
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
.users-modal-confirm-delete {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

  &__action-buttons {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-md);
  }
}
</style>
