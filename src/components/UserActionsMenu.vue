<script setup>
import { deleteUser } from "@services/userService";
import { useNotificationStore } from "@stores/NotificationStore";
import { useRouter } from "vue-router";

import BaseRightClickMenuOption from "@components/BaseRightClickMenuOption.vue";

const props = defineProps({
  user: Object,
});

const { addNotification } = useNotificationStore();
const router = useRouter();

const handleDeleteUser = async (userId) => {
  const { error: deleteUserError } = await deleteUser(userId);

  if (deleteUserError) {
    addNotification({
      title: "Error!",
      message: "Failed to delete user",
      type: "error",
      removeDelay: 2000,
    });
  } else {
    addNotification({
      title: "Succes!",
      message: "Deleted user succesfully",
      type: "succes",
      removeDelay: 2000,
    });
  }
};

console.log(props.user);
</script>

<template>
  <div class="user-actions-menu">
    <BaseRightClickMenuOption>
      <img
        class="user-actions-menu__option-icon"
        src="@assets/icons/pen.svg"
        alt="edit icon"
      />
      <p>Edit user</p>
    </BaseRightClickMenuOption>
    <BaseRightClickMenuOption @click="handleDeleteUser(props.user.id)">
      <img
        class="user-actions-menu__option-icon"
        src="@assets/icons/trash.svg"
        alt="delete icon"
      />
      <p>Delete user</p>
    </BaseRightClickMenuOption>
  </div>
</template>

<style lang="scss" scoped>
.user-actions-menu {
  &__option-icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>
