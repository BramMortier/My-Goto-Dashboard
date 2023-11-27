<script setup>
import { useModalStore } from "@stores/ModalStore";
import { useRightClickMenuStore } from "@stores/RightClickMenuStore";
import { useRouter } from "vue-router";

import BaseRightClickMenuOption from "@components/BaseRightClickMenuOption.vue";
import UsersModalConfirmDelete from "@components/UsersModalConfirmDelete.vue";
import UsersModalUpdate from "@components/UsersModalUpdate.vue";

const props = defineProps({
  user: Object,
});

const { openModal } = useModalStore();
const { closeMenu } = useRightClickMenuStore();

const router = useRouter();
</script>

<template>
  <div class="user-actions-menu">
    <BaseRightClickMenuOption
      @click="
        openModal({
          component: UsersModalUpdate,
          props: { user: props.user },
        });
        closeMenu();
      "
    >
      <img
        class="user-actions-menu__option-icon"
        src="@assets/icons/pen.svg"
        alt="edit icon"
      />
      <p>Edit user</p>
    </BaseRightClickMenuOption>
    <BaseRightClickMenuOption
      @click="
        () => {
          openModal({
            component: UsersModalConfirmDelete,
            props: { user: props.user },
          });
          closeMenu();
        }
      "
    >
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
