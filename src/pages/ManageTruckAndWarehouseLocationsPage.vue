<script setup>
import BasePageSection from "@components/BasePageSection.vue";
import BasePageSectionGroup from "@components/BasePageSectionGroup.vue";
import BaseSearchbar from "@components/BaseSearchbar.vue";
import WarehousesList from "@components/WarehousesList.vue";
import TrucksList from "@components/TrucksList.vue";
</script>

<template>
  <div class="manage-truck-and-warehouse-locations-page">
    <BasePageSection title="Warehouses">
      <BasePageSectionGroup>
        <BaseSearchbar />
      </BasePageSectionGroup>
      <BasePageSectionGroup>
        <WarehousesList />
      </BasePageSectionGroup>
    </BasePageSection>
    <BasePageSection title="Trucks">
      <BasePageSectionGroup>
        <BaseSearchbar />
      </BasePageSectionGroup>
      <BasePageSectionGroup>
        <TrucksList />
      </BasePageSectionGroup>
    </BasePageSection>
  </div>
</template>

<style lang="scss" scoped>
.manage-truck-and-warehouse-locations-page {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);

  @media screen and (max-width: 1400px) {
    grid-template-columns: 1fr;
  }
}
</style>
