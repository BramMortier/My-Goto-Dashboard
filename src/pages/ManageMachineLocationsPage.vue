<script setup>
import BasePageSection from "@components/BasePageSection.vue";
import BasePageSectionGroup from "@components/BasePageSectionGroup.vue";
import MachinesList from "@components/MachinesList.vue";
</script>

<template>
  <div class="manage-machine-locations-page">
    <BasePageSection title="Machines" width="xl">
      <BasePageSectionGroup>
        <MachinesList />
      </BasePageSectionGroup>
    </BasePageSection>
  </div>
</template>

<style lang="scss" scoped></style>
