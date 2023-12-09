<script setup>
import { useRouter } from "vue-router";

import BasePageSection from "@components/BasePageSection.vue";
import BasePageSectionGroup from "@components/BasePageSectionGroup.vue";
import BaseSearchbar from "@components/BaseSearchbar.vue";
import BaseButton from "@components/BaseButton.vue";
import MachinesStatusOverview from "@components/MachinesStatusOverview.vue";
import MachinesActiveList from "@components/MachinesActiveList.vue";

const router = useRouter();
</script>

<template>
  <div class="overview-machines-page">
    <BasePageSection width="xl">
      <BasePageSectionGroup>
        <MachinesStatusOverview />
      </BasePageSectionGroup>
    </BasePageSection>
    <BasePageSection title="Active machines" width="xl">
      <BasePageSectionGroup>
        <div class="overview-machines-page__filters">
          <BaseSearchbar />
          <BaseButton
            @click="router.push({ name: 'OverviewOutboundDeliveriesPage' })"
            stretch="fit-content"
            >Refill machines</BaseButton
          >
        </div>
      </BasePageSectionGroup>
      <BasePageSectionGroup>
        <MachinesActiveList />
      </BasePageSectionGroup>
    </BasePageSection>
  </div>
</template>

<style lang="scss" scoped>
.overview-machines-page {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

  &__filters {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--space-md);
  }
}
</style>
