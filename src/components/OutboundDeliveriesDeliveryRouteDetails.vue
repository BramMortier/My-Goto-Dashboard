<script setup>
const props = defineProps({
  deliveryContents: Array,
});
</script>

<template>
  <ul class="outbound-deliveries-delivery-route-details">
    <li
      v-for="route in props.deliveryContents"
      class="outbound-deliveries-delivery-route-details__entry"
    >
      {{ route.machine_name }}
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
