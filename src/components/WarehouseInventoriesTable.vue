<script setup>
import { ref, onMounted, computed } from "vue";
import { getWarehouseInventory } from "@services/mealService";

import WarehouseInventoriesTableRow from "@components/WarehouseInventoriesTableRow.vue";

const props = defineProps({
  searchTerm: String,
});

const warehouseInventory = ref(null);

onMounted(async () => {
  const { data: getWarehouseInventoryData, error: getWarehouseInventoryError } =
    await getWarehouseInventory();

  warehouseInventory.value = getWarehouseInventoryData;
  console.log(warehouseInventory.value);
});

const filteredWarehouseInventory = computed(() => {
  if (!warehouseInventory.value) return [];
  if (!props.searchTerm) return warehouseInventory.value;

  const searchTerm = props.searchTerm.toLowerCase();

  return warehouseInventory.value.filter((inventoryEntry) => {
    return (
      inventoryEntry.dish_name.toLowerCase().includes(searchTerm) ||
      inventoryEntry.supplier_name.toLowerCase().includes(searchTerm) ||
      inventoryEntry.amount < Number(searchTerm) ||
      Number(inventoryEntry.expires_in_days) < Number(searchTerm)
    );
  });
});
</script>

<template>
  <div class="warehouse-inventories-table">
    <div class="warehouse-inventories-table__head">
      <div class="warehouse-inventories-table__head-cell">Dish</div>
      <div class="warehouse-inventories-table__head-cell">Supplier</div>
      <div class="warehouse-inventories-table__head-cell">Supplier batch</div>
      <div class="warehouse-inventories-table__head-cell">Amount</div>
      <div class="warehouse-inventories-table__head-cell">Stored at</div>
      <div class="warehouse-inventories-table__head-cell">Expires at</div>
      <div class="warehouse-inventories-table__head-cell">Expires in</div>
    </div>
    <div class="warehouse-inventories-table__body">
      <WarehouseInventoriesTableRow
        v-for="inventoryEntry in filteredWarehouseInventory"
        :key="inventoryEntry.stored_at"
        :inventoryEntry="inventoryEntry"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.warehouse-inventories-table {
  &__head {
    border: 1px solid var(--clr-gray-500);
    border-radius: var(--border-radius-md);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__head-cell {
    width: 100%;
    padding: var(--space-sm) var(--space-md);
    line-height: var(--lh-xs);
    font-weight: var(--fw-medium);
    color: var(--clr-black);

    &:not(:last-child) {
      border-right: 1px solid var(--clr-gray-500);
    }
  }
}
</style>
