<script setup>
import { getAllUsers } from "@services/userService";
import { ref, onMounted, computed } from "vue";

import UsersTableRow from "@components/UsersTableRow.vue";

const props = defineProps({
  searchTerm: String,
});

const users = ref(null);

onMounted(async () => {
  const { data: getAllUsersData, error: getAllUsersError } =
    await getAllUsers();

  users.value = getAllUsersData;
});

const filteredUsers = computed(() => {
  if (!users.value) return [];
  if (!props.searchTerm) return users.value;

  const searchTerm = props.searchTerm.toLowerCase();

  return users.value.filter((user) => {
    return (
      `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()}`.includes(
        searchTerm
      ) ||
      user.email.toLowerCase().includes(searchTerm) ||
      user.roles.some((role) => role.name.toLowerCase().includes(searchTerm))
    );
  });
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
      <UsersTableRow
        v-if="filteredUsers.length != 0"
        v-for="user in filteredUsers"
        :key="user.id"
        :user="user"
      />
      <div v-else class="users-table__empty-placeholder">
        <p>
          0 Search results for <span>"{{ props.searchTerm }}"</span>
        </p>
      </div>
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

  &__empty-placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 20rem;

    & > p {
      background-color: var(--clr-gray-100);
      border-radius: var(--border-radius-md);
      padding: var(--space-xs) var(--space-md);

      & > span {
        font-weight: var(--fw-semibold);
      }
    }
  }
}
</style>
