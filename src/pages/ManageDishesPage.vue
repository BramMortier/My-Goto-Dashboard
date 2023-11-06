<script setup>
import { useModalStore } from "@stores/ModalStore";

import DishesModalCreate from "@components/DishesModalCreate.vue";
import BasePageSection from "@components/BasePageSection.vue";
import BasePageSectionGroup from "@components/BasePageSectionGroup.vue";
import BaseSearchbar from "@components/BaseSearchbar.vue";
import BaseButton from "@components/BaseButton.vue";
import DishesList from "@components/DishesList.vue";

const { openModal } = useModalStore();
</script>

<template>
  <div class="manage-dishes-page">
    <BasePageSection title="Current assortment of dishes">
      <BasePageSectionGroup>
        <div class="manage-dishes-page__filters">
          <BaseSearchbar />
          <BaseButton @click="openModal({ component: DishesModalCreate })"
            >Add dish</BaseButton
          >
        </div>
      </BasePageSectionGroup>
      <BasePageSectionGroup>
        <DishesList />
      </BasePageSectionGroup>
    </BasePageSection>
  </div>
</template>

<style lang="scss" scoped>
.manage-dishes-page {
  display: flex;
  flex-direction: column;

  &__filters {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--space-md);
  }
}
</style>
