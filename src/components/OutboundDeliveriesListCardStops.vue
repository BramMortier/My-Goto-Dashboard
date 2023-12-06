<script setup>
const props = defineProps({
  stops: Array,
});
</script>

<template>
  <div class="outbound-deliveries-list-card-stops">
    <div
      v-for="stop in stops"
      :key="stop.machine_name"
      class="outbound-deliveries-list-card-stops__stop"
    >
      <div class="outbound-deliveries-list-card-stops__stop-label">
        {{ stop.machine_name }}
      </div>
      <div class="outbound-deliveries-list-card-stops__stop-circle"></div>
      <div class="outbound-deliveries-list-card-stops__stop-connector"></div>
    </div>
    <div class="outbound-deliveries-list-card-stops__stop">
      <div class="outbound-deliveries-list-card-stops__stop-label">
        Warehouse Fredericksberg
      </div>
      <div class="outbound-deliveries-list-card-stops__stop-circle"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.outbound-deliveries-list-card-stops {
  display: flex;
  align-items: center;
  flex: 1;

  &__stop {
    display: flex;
    align-items: center;
    position: relative;

    &:hover {
      .outbound-deliveries-list-card-stops__stop-label {
        opacity: 1;
        transform: translateY(0);
      }

      .outbound-deliveries-list-card-stops__stop-circle {
        border-color: var(--clr-gray-900);
      }

      .outbound-deliveries-list-card-stops__stop-connector {
        background-color: var(--clr-gray-900);
      }
    }
  }

  &__stop-label {
    position: absolute;
    width: 400px;
    top: -2rem;
    left: 0;
    opacity: 0;
    transform: translateY(1rem);
    pointer-events: none;
    transition: var(--hover-transition);
  }

  &__stop-circle {
    width: 1rem;
    height: 1rem;
    border-radius: var(--border-radius-infinite);
    border: 3px solid var(--clr-gray-700);
    transition: var(--hover-transition);
  }

  &__stop-connector {
    height: 2px;
    width: 100px;
    background-color: var(--clr-gray-700);
    transition: var(--hover-transition);
  }
}
</style>
