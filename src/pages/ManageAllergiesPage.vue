<script setup>
import { useModalStore } from "@stores/ModalStore";

import BasePageSection from "@components/BasePageSection.vue";
import BasePageSectionGroup from "@components/BasePageSectionGroup.vue";
import BaseSearchbar from "@components/BaseSearchbar.vue";
import BaseButton from "@components/BaseButton.vue";
import AllergiesList from "@components/AllergiesList.vue";
import AllergiesModalCreate from "@components/AllergiesModalCreate.vue";

const { openModal } = useModalStore();
</script>

<template>
  <div class="manage-allergies-page">
    <BasePageSection title="Allergies">
      <BasePageSectionGroup>
        <div class="manage-allergies-page__filters">
          <BaseSearchbar />
          <BaseButton @click="openModal({ component: AllergiesModalCreate })"
            >Add Allergy</BaseButton
          >
        </div>
      </BasePageSectionGroup>
      <BasePageSectionGroup>
        <AllergiesList />
      </BasePageSectionGroup>
    </BasePageSection>
  </div>
</template>

<style lang="scss" scoped>
.manage-allergies-page {
  &__filters {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: var(--space-md);
  }
}
</style>
