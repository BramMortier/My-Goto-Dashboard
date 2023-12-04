<script setup>
import { ref, onMounted } from "vue";
import { getAllOutboundDeliveries } from "@services/outboundDeliveryService";

import OutboundDeliveriesListCardCreate from "@components/OutboundDeliveriesListCardCreate.vue";
import OutboundDeliveriesListCard from "@components/OutboundDeliveriesListCard.vue";

const props = defineProps({
  showDeliveryHistory: Boolean,
});

const outboundDeliveries = ref(null);
const ActiveOutboundDeliveries = ref(null);
const OutboundDeliveriesHistory = ref(null);

onMounted(async () => {
  const {
    data: getAllOutboundDeliveriesData,
    error: getAllOutboundDeliveriesError,
  } = await getAllOutboundDeliveries();

  outboundDeliveries.value = getAllOutboundDeliveriesData;
});
</script>

<template>
  <ul v-if="showDeliveryHistory" class="outbound-deliveries-list">
    <OutboundDeliveriesListCard
      v-for="outboundDelivery in outboundDeliveries"
      :outboundDelivery="outboundDelivery"
    />
  </ul>
  <ul v-else class="outbound-deliveries-list">
    <OutboundDeliveriesListCard
      v-for="outboundDelivery in outboundDeliveries"
      :outboundDelivery="outboundDelivery"
    />
  </ul>
</template>

<style lang="scss" scoped>
.outbound-deliveries-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}
</style>
