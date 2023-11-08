<script setup>
import { useModalStore } from "@stores/ModalStore";

import UsersTable from "@components/UsersTable.vue";
import BasePageSection from "@components/BasePageSection.vue";
import BasePageSectionGroup from "@components/BasePageSectionGroup.vue";
import BaseSearchbar from "@components/BaseSearchbar.vue";
import BaseButton from "@components/BaseButton.vue";
import UsersModalCreate from "@components/UsersModalCreate.vue";

const { openModal } = useModalStore();
</script>

<template>
  <div class="manage-users-page">
    <BasePageSection title="Users">
      <BasePageSectionGroup>
        <div class="manage-users-page__filters">
          <BaseSearchbar />
          <BaseButton @click="openModal({ component: UsersModalCreate })"
            >Add a new user</BaseButton
          >
        </div>
      </BasePageSectionGroup>
      <BasePageSectionGroup>
        <UsersTable />
      </BasePageSectionGroup>
    </BasePageSection>
  </div>
</template>

<style lang="scss" scoped>
.manage-users-page {
  display: flex;
  flex-direction: column;

  &__filters {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--space-md);
  }
}
</style>
