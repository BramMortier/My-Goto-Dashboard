<script setup>
const props = defineProps({
  outboundDelivery: Object,
});
</script>

<template>
  <div>
    {{ props.outboundDelivery.truck_name }}
    {{ props.outboundDelivery.truck_driver_firstname }}
    {{ props.outboundDelivery.truck_driver_lastname }}
    {{ props.outboundDelivery.status }}
  </div>
</template>

<style lang="scss" scoped></style>
