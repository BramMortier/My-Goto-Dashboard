<script setup>
import BasePageSection from "@components/BasePageSection.vue";
import BasePageSectionGroup from "@components/BasePageSectionGroup.vue";
import OutboundDeliveriesCreate from "@components/OutboundDeliveriesCreate.vue";
</script>

<template>
  <div class="plan-outbound-deliveries-page">
    <BasePageSection title="Plan an outbound delivery">
      <BasePageSectionGroup>
        <OutboundDeliveriesCreate />
      </BasePageSectionGroup>
    </BasePageSection>
  </div>
</template>

<style lang="scss" scoped></style>
