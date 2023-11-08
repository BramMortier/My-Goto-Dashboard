<script setup>
const props = defineProps({
  steps: Array,
  activeStep: Number,
});

const emit = defineEmits(["activeStepChange"]);

const handleActiveStepChange = (stepIndex) => {
  emit("activeStepChange", stepIndex);
};
</script>

<template>
  <div class="multistep-form-progress-bar">
    <div
      v-for="(step, index) in props.steps"
      :key="index"
      class="multistep-form-progress-bar__step"
      :class="{
        'multistep-form-progress-bar__step--active':
          props.activeStep >= index + 1,
      }"
    >
      <p class="multistep-form-progress-bar__step-label">{{ step }}</p>
      <div
        class="multistep-form-progress-bar__step-number"
        @click="handleActiveStepChange(index + 1)"
      >
        {{ index + 1 }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.multistep-form-progress-bar {
  display: flex;
  align-items: center;
  gap: var(--space-4xl);
  margin-bottom: var(--space-lg);

  &__step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);

    &--active {
      .multistep-form-progress-bar {
        &__step-number {
          background-color: var(--clr-green-400);
          color: var(--clr-white);
        }
      }
    }
  }

  &__step-label {
    line-height: var(--lh-xs);
  }

  &__step-number {
    padding: var(--space-xs) var(--space-md);
    font-size: var(--fs-lg);
    line-height: var(--lh-xs);
    border-radius: var(--border-radius-md);
    background-color: var(--clr-gray-100);

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
