<script setup>
const props = defineProps({
  machine: Object,
});

console.log(props.machine.machine_plan);
</script>

<template>
  <div class="outbound-deliveries-create-refill-machine">
    <h3>Configure refill</h3>
    <h4>Machine inventory overview</h4>
    <div class="outbound-deliveries-create-refill-machine__capacity-bar">
      <div
        class="outbound-deliveries-create-refill-machine__capacity-bar-value"
      ></div>
    </div>
    <ul class="outbound-deliveries-create-refill-machine__inventory-overview">
      <li
        v-for="(entry, index) in machine.machine_plan"
        :key="index"
        class="outbound-deliveries-create-refill-machine__inventory-overview-entry"
      >
        {{ entry.dish_name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.outbound-deliveries-create-refill-machine {
  & > h3 {
    font-size: var(--fs-lg);
    margin-bottom: var(--space-lg);
  }

  & > h4 {
    font-size: var(--fs-sm);
    text-transform: uppercase;
    color: var(--clr-gray-900);
    margin-bottom: var(--space-lg);
  }

  &__capacity-bar {
    display: flex;
    height: 2rem;
    min-width: 560px;
    width: 100%;
    border-radius: var(--border-radius-md);
    background-color: var(--clr-gray-100);
    margin-bottom: var(--space-lg);
  }

  &__capacity-bar-value {
    height: 2rem;
    border-top-left-radius: var(--border-radius-md);
    border-bottom-left-radius: var(--border-radius-md);
    width: 37%;
    background-color: var(--clr-green-400);
  }
}
</style>
