<script setup>
import BasePageSection from "@components/BasePageSection.vue";
import BasePageSectionGroup from "@components/BasePageSectionGroup.vue";
import OutboundDeliveriesCreate from "@components/OutboundDeliveriesCreate.vue";
import OutboundDeliveriesCreateWarehouseInventoryOverview from "@components/OutboundDeliveriesCreateWarehouseInventoryOverview.vue";
</script>

<template>
  <div class="plan-outbound-deliveries-page">
    <BasePageSection title="Plan an outbound delivery">
      <BasePageSectionGroup>
        <OutboundDeliveriesCreateWarehouseInventoryOverview />
      </BasePageSectionGroup>
      <BasePageSectionGroup>
        <OutboundDeliveriesCreate />
      </BasePageSectionGroup>
    </BasePageSection>
    <BasePageSection title="Delivery contents">
      <BasePageSectionGroup>
        <h4>DeliveryContentList</h4>
      </BasePageSectionGroup>
    </BasePageSection>
  </div>
</template>

<style lang="scss" scoped>
.plan-outbound-deliveries-page {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}
</style>
