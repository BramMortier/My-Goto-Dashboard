<script setup>
import { computed } from "vue";

const props = defineProps({
  machine: Object,
});

const capacityFilledPercentage = computed(
  () => (props.machine.stocked_capacity / props.machine.capacity) * 100
);

const statusText = computed(() => {
  const percentage = capacityFilledPercentage.value;

  if (percentage >= 95) {
    return "Full";
  } else if (percentage > 50) {
    return "Optional refill";
  } else if (percentage > 10) {
    return "Urgent refill";
  } else {
    return "Empty";
  }
});
</script>

<template>
  <div
    class="machine-refill-status"
    :class="{
      'machine-refill-status--full': capacityFilledPercentage >= 95,
      'machine-refill-status--optional-refill':
        capacityFilledPercentage > 50 && capacityFilledPercentage < 95,
      'machine-refill-status--urgent-refill':
        capacityFilledPercentage > 10 && capacityFilledPercentage <= 50,
      'machine-refill-status--empty': capacityFilledPercentage <= 10,
    }"
  >
    {{ statusText }}
  </div>
</template>

<style lang="scss" scoped>
.machine-refill-status {
  background-color: var(--clr-green-400);
  color: var(--clr-white);
  border-radius: var(--border-radius-md);
  padding: var(--space-xs) var(--space-sm);
  line-height: var(--lh-xs);
  width: fit-content;

  &--full {
    background-color: var(--clr-green-500);
  }
  &--optional-refill {
    background-color: var(--clr-green-400);
  }
  &--urgent-refill {
    background-color: var(--clr-yellow-400);
  }
  &--empty {
    background-color: var(--clr-red-400);
  }
}
</style>
