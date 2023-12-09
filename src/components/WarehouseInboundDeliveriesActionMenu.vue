<script setup>
import { useModalStore } from "@stores/ModalStore";
import { useRightClickMenuStore } from "@stores/RightClickMenuStore";

import BaseRightClickMenuOption from "@components/BaseRightClickMenuOption.vue";
import WarehouseInboundDeliveriesModalConfirmDelete from "@components/WarehouseInboundDeliveriesModalConfirmDelete.vue";

const props = defineProps({
  inboundDelivery: Object,
});

const { openModal } = useModalStore();
const { closeMenu } = useRightClickMenuStore();
</script>

<template>
  <div class="warehouse-inbound-deliveries-action-menu">
    <BaseRightClickMenuOption
      @click="
        () => {
          openModal({
            component: WarehouseInboundDeliveriesModalConfirmDelete,
            props: { inboundDelivery: props.inboundDelivery },
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
      <p>Delete inbound delivery</p>
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
