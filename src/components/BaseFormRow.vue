<script setup>
const props = defineProps({
  cols: Number,
});
</script>

<template>
  <div class="form-row" :class="[`form-row__cols-${props.cols}`]">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.form-row {
  display: grid;
  gap: var(--space-md);
  grid-template-columns: repeat(2, 1fr);

  &__cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
