<script setup>
const props = defineProps({
  label: String,
  description: String,
});
</script>

<template>
  <fieldset class="form-fieldset">
    <div class="form-fieldset__fields-info">
      <legend>{{ props.label }}</legend>
      <p v-if="props.description" class="form-fieldset__description">
        {{ props.description }}
      </p>
    </div>
    <slot></slot>
  </fieldset>
</template>

<style lang="scss" scoped>
.form-fieldset {
  display: flex;
  border: none;
  flex-direction: column;
  margin-bottom: var(--space-lg);

  &__fields-info {
    margin-bottom: var(--space-lg);
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    & > legend {
      font-size: var(--fs-sm);
      text-transform: uppercase;
      color: var(--clr-gray-900);
      line-height: var(--lh-xs);
      width: 100%;
    }
  }

  &__description {
    font-size: var(--fs-sm);
    color: var(--clr-gray-700);
    max-width: 37.5rem;
  }
}
</style>
