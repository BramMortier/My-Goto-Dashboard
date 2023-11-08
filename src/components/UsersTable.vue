<script setup>
import { getAllUsers } from "@services/userService";
import { ref, onMounted } from "vue";

import UsersTableRow from "@components/UsersTableRow.vue";

const users = ref(null);

onMounted(async () => {
  const { data: getAllUsersData, error: getAllUsersError } =
    await getAllUsers();
  users.value = getAllUsersData;
});
</script>

<template>
  <div class="users-table">
    <div class="users-table__head">
      <div class="users-table__head-cell">Name</div>
      <div class="users-table__head-cell">E-mail address</div>
      <div class="users-table__head-cell">Role</div>
    </div>
    <div class="users-table__body">
      <UsersTableRow v-for="user in users" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.users-table {
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
}
</style>
