<script setup>
import BasePageSection from "@components/BasePageSection.vue";
import BaseSearchbar from "@components/BaseSearchbar.vue";
import BasePageSectionGroup from "@components/BasePageSectionGroup.vue";
import OutboundDeliveriesList from "@components/OutboundDeliveriesList.vue";
</script>

<template>
  <div class="overview-outbound-deliveries-page">
    <BasePageSection title="Active deliveries">
      <BasePageSectionGroup>
        <BaseSearchbar />
      </BasePageSectionGroup>
      <BasePageSectionGroup>
        <OutboundDeliveriesList />
      </BasePageSectionGroup>
    </BasePageSection>
    <BasePageSection title="Delivery history">
      <BasePageSectionGroup>
        <BaseSearchbar />
      </BasePageSectionGroup>
      <BasePageSectionGroup>
        <OutboundDeliveriesList :showDeliveryHistory="true" />
      </BasePageSectionGroup>
    </BasePageSection>
  </div>
</template>

<style lang="scss" scoped>
.overview-outbound-deliveries-page {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}
</style>
