<script setup>
import { useRouter } from "vue-router";

import BasePageSection from "@components/BasePageSection.vue";
import BasePageSectionGroup from "@components/BasePageSectionGroup.vue";
import BaseButton from "@components/BaseButton.vue";
import OutboundDeliveriesList from "@components/OutboundDeliveriesList.vue";

const router = useRouter();
</script>

<template>
  <div class="overview-outbound-deliveries-page">
    <BasePageSection title="Active deliveries">
      <BasePageSectionGroup>
        <BaseButton
          stretch="fit-content"
          @click="router.push({ name: 'PlanOutboundDeliveriesPage' })"
          >Plan an outbound delivery</BaseButton
        >
        <OutboundDeliveriesList />
      </BasePageSectionGroup>
    </BasePageSection>
    <BasePageSection title="Delivery history">
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
