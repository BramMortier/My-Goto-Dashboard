<script setup>
import { useModalStore } from "@stores/ModalStore";
import { useRightClickMenuStore } from "@stores/RightClickMenuStore";

import BaseRightClickMenuOption from "@components/BaseRightClickMenuOption.vue";
import TrucksModalUpdate from "@components/TrucksModalUpdate.vue";
import TrucksModalConfirmDelete from "@components/TrucksModalConfirmDelete.vue";

const props = defineProps({
  truck: Object,
});

console.log(props.truck);

const { openModal } = useModalStore();
const { closeMenu } = useRightClickMenuStore();
</script>

<template>
  <div class="trucks-action-menu">
    <BaseRightClickMenuOption
      @click="
        openModal({
          component: TrucksModalUpdate,
          props: { truck: props.truck },
        });
        closeMenu();
      "
    >
      <img
        class="trucks-action-menu__option-icon"
        src="@assets/icons/pen.svg"
        alt="edit icon"
      />
      <p>Edit truck</p>
    </BaseRightClickMenuOption>
    <BaseRightClickMenuOption
      @click="
        openModal({
          component: TrucksModalConfirmDelete,
          props: { truck: props.truck },
        });
        closeMenu();
      "
    >
      <img
        class="trucks-action-menu__option-icon"
        src="@assets/icons/trash.svg"
        alt="trash icon"
      />
      <p>Delete truck</p>
    </BaseRightClickMenuOption>
  </div>
</template>

<style lang="scss" scoped>
.trucks-action-menu {
  &__option-icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>
