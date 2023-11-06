<script setup>
import BasePageSection from "@components/BasePageSection.vue";
import BasePageSectionGroup from "@components/BasePageSectionGroup.vue";
import BaseSearchbar from "@components/BaseSearchbar.vue";
import SuppliersList from "@components/SuppliersList.vue";
</script>

<template>
  <div class="manage-suppliers-page">
    <BasePageSection title="Suppliers" width="lg">
      <BasePageSectionGroup>
        <BaseSearchbar />
      </BasePageSectionGroup>
      <BasePageSectionGroup>
        <SuppliersList />
      </BasePageSectionGroup>
    </BasePageSection>
  </div>
</template>

<style lang="scss" scoped>
.manage-suppliers-page {
  display: flex;
  flex-direction: column;
}
</style>
