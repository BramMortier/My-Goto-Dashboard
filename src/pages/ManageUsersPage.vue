<script setup>
import { useModalStore } from "@stores/ModalStore";
import { ref } from "vue";

import UsersTable from "@components/UsersTable.vue";
import BasePageSection from "@components/BasePageSection.vue";
import BasePageSectionGroup from "@components/BasePageSectionGroup.vue";
import BaseSearchbar from "@components/BaseSearchbar.vue";
import BaseButton from "@components/BaseButton.vue";
import UsersModalCreate from "@components/UsersModalCreate.vue";

const { openModal } = useModalStore();

const searchTerm = ref(null);
</script>

<template>
  <div class="manage-users-page">
    <BasePageSection title="Users">
      <BasePageSectionGroup>
        <div class="manage-users-page__filters">
          <BaseSearchbar
            :searchTerm="searchTerm"
            @update:searchTerm="(newValue) => (searchTerm = newValue)"
          />
          <BaseButton @click="openModal({ component: UsersModalCreate })"
            >Add a new user</BaseButton
          >
        </div>
      </BasePageSectionGroup>
      <BasePageSectionGroup>
        <UsersTable :searchTerm="searchTerm" />
      </BasePageSectionGroup>
    </BasePageSection>
  </div>
</template>

<style lang="scss" scoped>
.manage-users-page {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-4xl);

  &__filters {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--space-md);
  }
}
</style>
