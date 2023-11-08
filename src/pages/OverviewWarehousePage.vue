<script setup>
import BasePageSection from "@components/BasePageSection.vue";
import BasePageSectionGroup from "@components/BasePageSectionGroup.vue";
import BaseSearchbar from "@components/BaseSearchbar.vue";
import BaseButton from "@components/BaseButton.vue";
import WarehouseInventoriesTable from "@components/WarehouseInventoriesTable.vue";
</script>

<template>
  <div class="overview-warehouse-page">
    <BasePageSection title="Inventory" width="xl">
      <BasePageSectionGroup>
        <div class="overview-warehouse-page__filters">
          <BaseSearchbar />
          <BaseButton>Add inbound delivery</BaseButton>
        </div>
      </BasePageSectionGroup>
      <BasePageSectionGroup>
        <WarehouseInventoriesTable />
      </BasePageSectionGroup>
    </BasePageSection>
  </div>
</template>

<style lang="scss" scoped>
.overview-warehouse-page {
  display: flex;
  flex-direction: column;

  &__filters {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--space-md);
  }
}
</style>
