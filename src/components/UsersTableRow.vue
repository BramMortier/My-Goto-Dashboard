<script setup>
const props = defineProps({
  user: Object,
});
</script>

<template>
  <div class="users-table-row">
    <div class="users-table-row__cell">
      {{ user.firstname }} {{ user.lastname }}
    </div>
    <div class="users-table-row__cell">{{ user.email }}</div>
    <div class="users-table-row__cell">
      <div v-for="role in user.roles" class="users-table-row__role-tag">
        {{ role.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.users-table-row {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--clr-gray-500);
  transition: var(--hover-transition);

  &:hover {
    background-color: var(--clr-gray-100);
    cursor: pointer;
  }

  &__cell {
    width: 100%;
    padding: var(--space-md) var(--space-md);
    line-height: var(--lh-xs);
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    overflow: hidden;
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
