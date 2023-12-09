<script setup>
import { ref } from "vue";
import { useModalStore } from "@stores/ModalStore";

import BasePageSection from "@components/BasePageSection.vue";
import BasePageSectionGroup from "@components/BasePageSectionGroup.vue";
import BaseSearchbar from "@components/BaseSearchbar.vue";
import BaseButton from "@components/BaseButton.vue";
import WarehouseInventoriesTable from "@components/WarehouseInventoriesTable.vue";
import WarehouseInboundDeliveriesModalCreate from "@components/WarehouseInboundDeliveriesModalCreate.vue";

const { openModal } = useModalStore();

const searchTerm = ref(null);
</script>

<template>
  <div class="overview-warehouse-page">
    <BasePageSection title="Inventory" width="xl">
      <BasePageSectionGroup>
        <div class="overview-warehouse-page__filters">
          <BaseSearchbar
            :searchTerm="searchTerm"
            @update:searchTerm="(newValue) => (searchTerm = newValue)"
          />
          <BaseButton
            @click="
              openModal({ component: WarehouseInboundDeliveriesModalCreate })
            "
            >Add inbound delivery</BaseButton
          >
        </div>
      </BasePageSectionGroup>
      <BasePageSectionGroup>
        <WarehouseInventoriesTable :searchTerm="searchTerm" />
      </BasePageSectionGroup>
    </BasePageSection>
  </div>
</template>

<style lang="scss" scoped>
.overview-warehouse-page {
  display: flex;
  flex-direction: column;

  &__filters {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--space-md);
  }
}
</style>
