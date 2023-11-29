<script setup>
import { computed } from "vue";
import { useModalStore } from "@stores/ModalStore";
import { useRightClickMenuStore } from "@stores/RightClickMenuStore";

import BaseRightClickMenuOption from "@components/BaseRightClickMenuOption.vue";
import MachinesModalUpdatePlanStructure from "@components/MachinesModalUpdatePlanStructure.vue";
import MachinesModalUpdate from "@components/MachinesModalUpdate.vue";
import WarehousesModalUpdate from "@components/WarehousesModalUpdate.vue";
import TrucksModalUpdate from "@components/TrucksModalUpdate.vue";
import LocationsModalConfirmDelete from "@components/LocationsModalConfirmDelete.vue";

const props = defineProps({
  location: Object,
});

const { openModal } = useModalStore();
const { closeMenu } = useRightClickMenuStore();

const locationUpdateModal = computed(() => {
  switch (props.location.type) {
    case "Machine":
      return MachinesModalUpdate;
    case "Warehouse":
      return WarehousesModalUpdate;
    case "Truck":
      return TrucksModalUpdate;
  }
});
</script>

<template>
  <div class="locations-action-menu">
    <BaseRightClickMenuOption
      @click="
        openModal({
          component: locationUpdateModal,
          props: { location: props.location },
        });
        closeMenu();
      "
    >
      <img
        class="locations-action-menu__option-icon"
        src="@assets/icons/pen.svg"
        alt="edit icon"
      />
      <p>Edit {{ props.location.type.toLowerCase() }}</p>
    </BaseRightClickMenuOption>
    <BaseRightClickMenuOption
      @click="
        openModal({
          component: MachinesModalUpdatePlanStructure,
          props: { location: props.location },
        });
        closeMenu();
      "
      v-if="props.location.type === 'Machine'"
    >
      <img
        class="locations-action-menu__option-icon"
        src="@assets/icons/pen.svg"
        alt="edit icon"
      />
      <p>Update {{ props.location.type.toLowerCase() }} plan</p>
    </BaseRightClickMenuOption>
    <BaseRightClickMenuOption
      @click="
        openModal({
          component: LocationsModalConfirmDelete,
          props: { location: props.location },
        });
        closeMenu();
      "
    >
      <img
        class="locations-action-menu__option-icon"
        src="@assets/icons/trash.svg"
        alt="delete icon"
      />
      <p>Delete {{ props.location.type.toLowerCase() }}</p>
    </BaseRightClickMenuOption>
  </div>
</template>

<style lang="scss" scoped>
.locations-action-menu {
  &__option-icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>
