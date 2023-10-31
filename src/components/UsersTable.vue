<script setup>
import { getAllUsers } from "@services/userService";
import { useModalStore } from "@stores/ModalStore";
import { ref, onMounted } from "vue";

import BaseButton from "@components/BaseButton.vue";
import UsersModalCreate from "@components/UsersModalCreate.vue";

const { openModal } = useModalStore();

const users = ref(null);

onMounted(async () => {
  const { data, error } = await getAllUsers();
  users.value = data;
});
</script>

<template>
  <div class="users-table__container">
    <h3>Users</h3>

    <BaseButton
      @click="openModal({ component: UsersModalCreate })"
      stretch="fit-content"
      >Add a new user</BaseButton
    >

    <div class="users-table">
      <div class="users-table__head">
        <div class="users-table__head-cell">Name</div>
        <div class="users-table__head-cell">E-mail address</div>
        <div class="users-table__head-cell">Role</div>
      </div>
      <div class="users-table__body">
        <div v-for="user in users" :key="user.id" class="users-table__body-row">
          <div class="users-table__body-cell">
            {{ user.firstname }} {{ user.lastname }}
          </div>
          <div class="users-table__body-cell">{{ user.email }}</div>
          <div class="users-table__body-cell">
            <div class="users-table__role-tag">ADMIN</div>
          </div>
        </div>
      </div>
    </div>
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
      margin-bottom: var(--space-lg);
    }
  }

  &__head {
    border: 1px solid var(--clr-gray-500);
    border-radius: var(--border-radius-md);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__head-cell {
    width: 100%;
    padding: var(--space-sm) var(--space-md);
    line-height: var(--lh-xs);
    font-weight: var(--fw-medium);
    color: var(--clr-black);

    &:not(:last-child) {
      border-right: 1px solid var(--clr-gray-500);
    }
  }

  &__body-row {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--clr-gray-500);
    transition: var(--hover-transition);

    &:hover {
      background-color: var(--clr-gray-100);
      cursor: pointer;
    }
  }

  &__body-cell {
    width: 100%;
    padding: var(--space-md) var(--space-md);
    line-height: var(--lh-xs);
    display: flex;
    align-items: center;
  }

  &__role-tag {
    background-color: var(--clr-yellow-400);
    color: var(--clr-yellow-800);
    border-radius: var(--border-radius-md);
    width: fit-content;
    padding: var(--space-xs) var(--space-sm);
    line-height: var(--lh-xs);
    font-size: var(--fs-sm);
  }
}
</style>
