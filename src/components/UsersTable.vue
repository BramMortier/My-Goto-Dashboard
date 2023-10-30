<script setup>
import { useModalStore } from "@stores/ModalStore";

import BaseButton from "@components/BaseButton.vue";
import UsersModalCreate from "@components/UsersModalCreate.vue";

const { openModal } = useModalStore();
</script>

<template>
  <div class="users-table__container">
    <h3>Users</h3>
    <BaseButton @click="openModal({ component: UsersModalCreate })"
      >Open modal
    </BaseButton>
  </div>
</template>

<style lang="scss" scoped>
.users-table {
  &__container {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    padding: var(--space-md);
    background-color: var(--clr-white);
    border-bottom: 2px solid var(--clr-green-400);
    max-width: var(--container-width-md);

    & > h3 {
      color: var(--clr-black);
      font-size: var(--fs-lg);
    }
  }
}
</style>
