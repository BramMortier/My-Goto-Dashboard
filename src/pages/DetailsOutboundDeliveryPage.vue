<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getOutboundDeliveryById } from "@services/outboundDeliveryService";

import BasePageSection from "@components/BasePageSection.vue";
import BasePageSectionGroup from "@components/BasePageSectionGroup.vue";
import OutboundDeliveriesDeliveryRouteDetails from "@components/OutboundDeliveriesDeliveryRouteDetails.vue";
import OutboundDeliveriesManageDelivery from "@components/OutboundDeliveriesManageDelivery.vue";

const route = useRoute();

const deliveryDetails = ref(null);

onMounted(async () => {
  const {
    data: getOutboundDeliveryByIdData,
    error: getOutboundDeliveryByIdError,
  } = await getOutboundDeliveryById(route.params.id);

  deliveryDetails.value = getOutboundDeliveryByIdData[0];
  console.log(deliveryDetails.value);
});
</script>

<template>
  <div class="details-outbound-delivery-page">
    <BasePageSection title="Manage delivery status">
      <BasePageSectionGroup>
        <OutboundDeliveriesManageDelivery />
      </BasePageSectionGroup>
    </BasePageSection>
    <BasePageSection title="Delivery details">
      <BasePageSectionGroup>
        <OutboundDeliveriesDeliveryRouteDetails
          :deliveryContents="deliveryDetails?.delivery_contents"
        />
      </BasePageSectionGroup>
    </BasePageSection>
  </div>
</template>

<style lang="scss" scoped>
.details-outbound-delivery-page {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}
</style>
