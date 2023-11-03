<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  label: { type: String, default: "checkbox label" },
  value: String,
  name: String,
});

const { checked, errorMessage, handleChange } = useField(
  props.name,
  undefined,
  {
    type: "checkbox",
    checkedValue: props.value,
  }
);
</script>

<template>
  <div class="checkbox__container">
    <div
      @click="handleChange(value)"
      class="checkbox"
      :class="{
        'checkbox--active': checked,
        'checkbox--error-feedback': errorMessage,
      }"
    >
      <img src="@assets/icons/checkmark.svg" alt="checkbox checkmark icon" />
    </div>
    <label>{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
.checkbox {
  height: 24px;
  width: 24px;
  border-radius: var(--border-radius-md);
  background-color: var(--clr-gray-100);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--hover-transition);
  border: 1px solid transparent;

  &:hover {
    background-color: var(--clr-gray-300);
    cursor: pointer;
  }

  & > img {
    opacity: 0;
    filter: invert(100%) sepia(81%) saturate(0%) hue-rotate(145deg)
      brightness(110%) contrast(101%);
    width: 16px;
    height: fit-content;
  }

  &--active {
    background-color: var(--clr-green-400);

    &:hover {
      background-color: var(--clr-green-500);
    }

    & > img {
      opacity: 1;
    }
  }

  &--error-feedback {
    border-color: var(--clr-red-400);
  }

  &__container {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }
}
</style>
