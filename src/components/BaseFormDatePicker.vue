<script setup>
import { ref } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
  name: String,
  label: String,
});

const dateInputs = ref({
  day: "",
  month: "",
  year: "",
});

const { value, errorMessage } = useField(() => props.name);

const handleDateChange = () => {
  const { day, month, year } = dateInputs.value;

  if (day && month && year) {
    value.value = new Date(`${year}-${month}-${day}`);
  } else {
    value.value = "";
  }
};
</script>

<template>
  <div class="date-picker">
    <label class="date-picker__label">{{ props.label }}</label>
    <div class="date-picker__inputs">
      <input
        type="text"
        placeholder="dd"
        v-model="dateInputs.day"
        @change="handleDateChange"
        :class="{ 'date-picker__error-feedback': errorMessage }"
      />
      <input
        type="text"
        placeholder="mm"
        v-model="dateInputs.month"
        @change="handleDateChange"
        :class="{ 'date-picker__error-feedback': errorMessage }"
      />
      <input
        type="text"
        placeholder="yyyy"
        v-model="dateInputs.year"
        @change="handleDateChange"
        :class="{ 'date-picker__error-feedback': errorMessage }"
      />
    </div>
    <p v-if="errorMessage" class="date-picker__error-message">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.date-picker {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
  width: var(--input-width-md);

  &__label {
    line-height: var(--lh-xs);
    font-size: var(--fs-sm);
    font-weight: var(--fw-medium);
  }

  &__inputs {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    gap: var(--space-xs);

    & > input {
      width: 100%;
      min-height: 44px;
      padding-inline: var(--space-md);
      font-size: var(--fs-sm);
      border: 1px solid transparent;
      border-radius: var(--border-radius-md);
      outline: none;
      background-color: var(--clr-gray-100);
      color: var(--clr-gray-900);

      &.date-picker__error-feedback {
        border: 1px solid var(--clr-red-400);
        color: var(--clr-red-400);
      }

      &::placeholder {
        color: var(--clr-gray-500);
      }
    }
  }

  &__error-message {
    font-size: var(--fs-sm);
    color: var(--clr-red-400);
    line-height: var(--lh-xs);
  }
}
</style>
