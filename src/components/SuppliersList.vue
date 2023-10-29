<script setup></script>

<template>
  <div class="suppliers-list">
    <h3>Suppliers</h3>
  </div>
</template>

<style lang="scss" scoped>
.suppliers-list {
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
</style>
