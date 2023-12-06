<script setup>
import { useRouter } from "vue-router";

import OutboundDeliveriesListCardStops from "@components/OutboundDeliveriesListCardStops.vue";

const props = defineProps({
  outboundDelivery: Object,
});

const router = useRouter();
</script>

<template>
  <li
    class="outbound-deliveries-list-card"
    @click="
      router.push({
        name: 'DetailsOutboundDeliveryPage',
        params: { id: props.outboundDelivery.delivery_id },
      })
    "
  >
    <div class="outbound-deliveries-list-card__truck-info">
      <div class="outbound-deliveries-list-card__truck-icon">
        <img src="@assets/icons/truck.svg" alt="truck icon" />
      </div>
      <div class="outbound-deliveries-list-card__truck-details">
        <h4>{{ props.outboundDelivery.truck_name }}</h4>
        <p>
          {{ props.outboundDelivery.truck_driver_firstname }}
          {{ props.outboundDelivery.truck_driver_lastname }}
        </p>
      </div>
    </div>
    <OutboundDeliveriesListCardStops
      :stops="props.outboundDelivery.delivery_contents"
    />
    <div class="outbound-deliveries-list-card__status">
      <div>
        {{ props.outboundDelivery.status }}
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.outbound-deliveries-list-card {
  display: flex;
  gap: var(--space-2xl);
  padding: 0 var(--space-md) var(--space-md) 0;
  margin-bottom: var(--space-md);
  border-bottom: 1px solid var(--clr-gray-500);
  transition: var(--hover-transition);

  &:hover {
    cursor: pointer;
    border-color: var(--clr-gray-700);

    .outbound-deliveries-list-card {
      &__truck-icon {
        background-color: var(--clr-gray-300);
      }
    }
  }

  &__truck-info {
    display: flex;
    gap: var(--space-md);
  }

  &__truck-icon {
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--clr-gray-100);
    border-radius: var(--border-radius-md);
    transition: var(--hover-transition);

    img {
      width: 2rem;
      height: 2rem;
    }
  }

  &__truck-details {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > h4 {
      font-weight: var(--fw-semibold);
      margin-bottom: var(--space-md);
    }
    & > p {
      line-height: var(--lh-xs);
    }
  }

  &__status {
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      background-color: var(--clr-green-400);
      color: var(--clr-white);
      border-radius: var(--border-radius-md);
      padding: var(--space-xs) var(--space-sm);
      line-height: var(--lh-xs);
    }
  }
}
</style>
