<script setup>
const props = defineProps({
  type: { type: String, default: "primary" },
  variant: { type: String, default: "filled" },
  stretch: { type: String, default: "full-width" },
});
</script>

<template>
  <button
    class="button"
    :class="[
      `button--${props.type}`,
      `button--${props.variant}`,
      `button--${props.stretch}`,
    ]"
  >
    <slot>Button</slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  border: none;
  padding: var(--space-sm) var(--space-lg);
  min-height: 2.75rem;
  line-height: var(--lh-xs);
  font-weight: var(--fw-regular);
  border-radius: var(--border-radius-md);
  transition: var(--hover-transition);
  cursor: pointer;

  &--full-width {
    width: 100%;
  }

  &--fit-content {
    width: fit-content;
  }

  &--filled {
    background-color: var(--clr-green-400);
    color: var(--clr-white);

    &:hover {
      background-color: var(--clr-green-500);
    }

    &.button--secondary {
      background-color: var(--clr-yellow-500);

      &:hover {
        background-color: var(--clr-yellow-600);
      }
    }

    &.button--tertiary {
      background-color: var(--clr-gray-100);
      color: var(--clr-gray-900);

      &:hover {
        background-color: var(--clr-gray-300);
      }
    }
  }

  &--outlined {
    border: 1px solid var(--clr-green-400);
    color: var(--clr-green-400);
    background-color: transparent;

    &:hover {
      border-color: var(--clr-green-500);
      color: var(--clr-green-500);
    }

    &.button--secondary {
      color: var(--clr-yellow-500);
      border-color: var(--clr-yellow-500);

      &:hover {
        border-color: var(--clr-yellow-600);
        color: var(--clr-yellow-600);
      }
    }

    &.button--tertiary {
      color: var(--clr-gray-700);
      border-color: var(--clr-gray-700);

      &:hover {
        border-color: var(--clr-gray-900);
        color: var(--clr-gray-900);
      }
    }
  }
}
</style>
