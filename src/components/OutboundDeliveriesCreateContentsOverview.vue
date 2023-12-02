<script setup>
const props = defineProps({
  outboundDeliveryContents: Object,
});
</script>

<template>
  <ul class="outbound-deliveries-create-contents-overview">
    <li
      v-for="contentEntry in props.outboundDeliveryContents"
      class="outbound-deliveries-create-contents-overview__entry"
    >
      <h4>{{ contentEntry.machine.location_name }}</h4>
      <ul class="outbound-deliveries-create-contents-overview__entry-dishes">
        <li
          v-for="dish in contentEntry.inventoryRefillPlan"
          class="outbound-deliveries-create-contents-overview__entry-dish"
        >
          {{ dish.dish_name }}
          {{ dish.added_quantity }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.outbound-deliveries-create-contents-overview {
  &__entry {
    & > h4 {
      font-weight: var(--fw-semibold);
      margin-bottom: var(--space-sm);
    }
  }
}
</style>
