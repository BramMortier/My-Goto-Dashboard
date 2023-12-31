<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  name: String,
  type: { type: String, default: "text" },
  label: String,
  placeholder: String,
  optional: { type: Boolean, default: false },
});

const { value, errorMessage } = useField(() => props.name);
</script>

<template>
  <div class="form-input">
    <div class="form-input__label">
      <label>{{ props.label }}</label>
      <span v-if="optional">(optional)</span>
    </div>
    <input
      v-model="value"
      :type="props.type"
      :name="props.name"
      :placeholder="props.placeholder"
      :class="{ 'form-input__error-feedback': errorMessage }"
    />
    <p v-if="errorMessage" class="form-input__error-message">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.form-input {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);

  &__label {
    display: flex;
    align-items: center;
    gap: var(--space-xs);

    & > label {
      line-height: var(--lh-xs);
      font-size: var(--fs-sm);
      font-weight: var(--fw-medium);
    }

    & > span {
      line-height: var(--lh-xs);
      color: var(--clr-gray-700);
      font-size: var(--fs-sm);
    }
  }

  & > input {
    min-width: var(--input-width-md);
    width: 100%;
    min-height: 44px;
    padding-inline: var(--space-md);
    font-size: var(--fs-sm);
    border: 1px solid transparent;
    border-radius: var(--border-radius-md);
    outline: none;
    background-color: var(--clr-gray-100);
    color: var(--clr-gray-900);

    &.form-input__error-feedback {
      border: 1px solid var(--clr-red-400);
      color: var(--clr-red-400);
    }

    &::placeholder {
      color: var(--clr-gray-500);
    }
  }

  &__error-message {
    font-size: var(--fs-sm);
    color: var(--clr-red-400);
    line-height: var(--lh-xs);
  }
}
</style>
