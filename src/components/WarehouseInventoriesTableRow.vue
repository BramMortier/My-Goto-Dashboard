<script setup>
import { transformToFormattedDateShort } from "@helpers/index";
import { publicStorageBucketUrl } from "@services/storageService";
import { useRightClickMenuStore } from "@stores/RightClickMenuStore";

import WarehouseInboundDeliveriesActionMenu from "@components/WarehouseInboundDeliveriesActionMenu.vue";

const props = defineProps({
  inventoryEntry: Object,
});

const { openMenu } = useRightClickMenuStore();
</script>

<template>
  <div
    @click.right.prevent="
      openMenu({
        component: WarehouseInboundDeliveriesActionMenu,
        props: { inboundDelivery: props.inventoryEntry },
      })
    "
    class="warehouse-inventories-table-row"
  >
    <div class="warehouse-inventories-table-row__cell">
      {{ inventoryEntry.dish_name }}
    </div>
    <div class="warehouse-inventories-table-row__cell">
      <img
        :src="publicStorageBucketUrl + inventoryEntry.supplier_logo"
        alt="inventory entry supplier logo"
      />
    </div>
    <div class="warehouse-inventories-table-row__cell">
      {{ inventoryEntry.supplier_batch }}
    </div>
    <div class="warehouse-inventories-table-row__cell">
      {{ inventoryEntry.amount }} pcs.
    </div>
    <div class="warehouse-inventories-table-row__cell">
      {{ transformToFormattedDateShort(new Date(inventoryEntry.stored_at)) }}
    </div>
    <div class="warehouse-inventories-table-row__cell">
      {{ transformToFormattedDateShort(new Date(inventoryEntry.expires_at)) }}
    </div>
    <div
      class="warehouse-inventories-table-row__cell warehouse-inventories-table-row__cell--bold"
    >
      {{
        inventoryEntry.expires_in_days < 0
          ? `Expired ${Math.abs(inventoryEntry.expires_in_days)} day ago`
          : `${inventoryEntry.expires_in_days} days`
      }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.warehouse-inventories-table-row {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--clr-gray-500);
  transition: var(--hover-transition);

  &:hover {
    background-color: var(--clr-gray-100);
    cursor: pointer;
  }

  &__cell {
    width: 100%;
    padding: var(--space-md) var(--space-md);
    line-height: var(--lh-xs);
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    overflow: hidden;

    &--bold {
      font-weight: var(--fw-semibold);
    }

    img {
      width: 60%;
    }
  }
}
</style>
