<script setup>
import BasePageSection from "@components/BasePageSection.vue";
import BasePageSectionGroup from "@components/BasePageSectionGroup.vue";
import BaseSearchbar from "@components/BaseSearchbar.vue";
import BaseButton from "@components/BaseButton.vue";
import MachinesStatusOverview from "@components/MachinesStatusOverview.vue";
import MachinesActiveList from "@components/MachinesActiveList.vue";
</script>

<template>
  <div class="overview-machines-page">
    <BasePageSection title="Machines status">
      <BasePageSectionGroup>
        <MachinesStatusOverview />
      </BasePageSectionGroup>
    </BasePageSection>
    <BasePageSection title="Active machines">
      <BasePageSectionGroup>
        <div class="overview-machines-page__filters">
          <BaseSearchbar />
          <BaseButton stretch="fit-content">Refill machines</BaseButton>
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
