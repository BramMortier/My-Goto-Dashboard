<script setup>
import { ref, onMounted, computed } from "vue";
import { getAllOutboundDeliveries } from "@services/outboundDeliveryService";

import OutboundDeliveriesListCardCreate from "@components/OutboundDeliveriesListCardCreate.vue";
import OutboundDeliveriesListCard from "@components/OutboundDeliveriesListCard.vue";

const props = defineProps({
  showDeliveryHistory: Boolean,
});

const outboundDeliveries = ref(null);

onMounted(async () => {
  const {
    data: getAllOutboundDeliveriesData,
    error: getAllOutboundDeliveriesError,
  } = await getAllOutboundDeliveries();

  outboundDeliveries.value = getAllOutboundDeliveriesData;
  console.log(outboundDeliveries.value);
});

const ActiveOutboundDeliveries = computed(() => {
  if (!outboundDeliveries.value) return [];

  return outboundDeliveries.value.filter(
    (outboundDelivery) => outboundDelivery.status != "delivered"
  );
});

const OutboundDeliveriesHistory = computed(() => {
  if (!outboundDeliveries.value) return [];

  return outboundDeliveries.value.filter(
    (outboundDelivery) => outboundDelivery.status === "delivered"
  );
});
</script>

<template>
  <ul v-if="showDeliveryHistory" class="outbound-deliveries-list">
    <OutboundDeliveriesListCard
      v-for="outboundDelivery in OutboundDeliveriesHistory"
      :key="outboundDelivery.delivery_id"
      :outboundDelivery="outboundDelivery"
    />
  </ul>
  <ul v-else class="outbound-deliveries-list">
    <OutboundDeliveriesListCardCreate />
    <OutboundDeliveriesListCard
      v-for="outboundDelivery in ActiveOutboundDeliveries"
      :key="outboundDelivery.delivery_id"
      :outboundDelivery="outboundDelivery"
    />
  </ul>
</template>

<style lang="scss" scoped>
.outbound-deliveries-list {
  display: flex;
  flex-direction: column;
}
</style>
