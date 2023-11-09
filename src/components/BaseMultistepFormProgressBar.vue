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
  justify-content: center;
  gap: var(--space-4xl);
  margin-bottom: var(--space-lg);
  padding-inline: var(--space-2xl);

  &__step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);

    &:first-child .multistep-form-progress-bar__step-number::after {
      display: none;
    }

    &--active {
      .multistep-form-progress-bar {
        &__step-number {
          background-color: var(--clr-green-400);
          color: var(--clr-white);

          &::after {
            background-color: var(--clr-green-400);
          }
        }
      }
    }
  }

  &__step-label {
    line-height: var(--lh-xs);
    position: absolute;
  }

  &__step-number {
    position: relative;
    padding: var(--space-xs) var(--space-md);
    font-size: var(--fs-lg);
    line-height: var(--lh-xs);
    border-radius: var(--border-radius-md);
    background-color: var(--clr-gray-100);
    margin-top: var(--space-xl);

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -6rem;
      width: var(--space-4xl);
      height: 0.5rem;
      background-color: var(--clr-gray-100);
    }

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
