<script setup>
import { useModalStore } from "@stores/ModalStore";
import { useRightClickMenuStore } from "@stores/RightClickMenuStore";

import BaseRightClickMenuOption from "@components/BaseRightClickMenuOption.vue";
import AllergiesModalConfirmDelete from "@components/AllergiesModalConfirmDelete.vue";
import AllergiesModalUpdate from "@components/AllergiesModalUpdate.vue";

const props = defineProps({
  allergy: Object,
});

const { openModal } = useModalStore();
const { closeMenu } = useRightClickMenuStore();
</script>

<template>
  <div class="allergies-action-menu">
    <BaseRightClickMenuOption
      @click="
        openModal({
          component: AllergiesModalUpdate,
          props: { allergy: props.allergy },
        });
        closeMenu();
      "
    >
      <img
        class="allergies-action-menu__option-icon"
        src="@assets/icons/pen.svg"
        alt="edit icon"
      />
      <p>Edit allergy</p>
    </BaseRightClickMenuOption>
    <BaseRightClickMenuOption
      @click="
        openModal({
          component: AllergiesModalConfirmDelete,
          props: { allergy: props.allergy },
        });
        closeMenu();
      "
    >
      <img
        class="allergies-action-menu__option-icon"
        src="@assets/icons/trash.svg"
        alt="delete icon"
      />
      <p>Delete allergy</p>
    </BaseRightClickMenuOption>
  </div>
</template>

<style lang="scss" scoped>
.allergies-action-menu {
  &__option-icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>
