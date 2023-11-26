<script setup>
import { useModalStore } from "@stores/ModalStore";
import { useRightClickMenuStore } from "@stores/RightClickMenuStore";
import { useRouter } from "vue-router";

import BaseRightClickMenuOption from "@components/BaseRightClickMenuOption.vue";
import UsersModalConfirmDelete from "@components/UsersModalConfirmDelete.vue";

const props = defineProps({
  user: Object,
});

const { openModal } = useModalStore();
const { closeMenu } = useRightClickMenuStore();

const router = useRouter();
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
    width: 1.25rem;
    height: 1.25rem;
  }
}
</style>
