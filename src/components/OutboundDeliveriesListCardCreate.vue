<script setup>
import { useRouter } from "vue-router";

import OutboundDeliveriesListCardStops from "@components/OutboundDeliveriesListCardStops.vue";

const router = useRouter();
</script>

<template>
  <li
    class="outbound-deliveries-list-card-create"
    @click="router.push({ name: 'PlanOutboundDeliveriesPage' })"
  >
    <div class="outbound-deliveries-list-card-create__truck-info">
      <div class="outbound-deliveries-list-card-create__truck-icon">
        <img src="@assets/icons/plus.svg" alt="truck icon" />
      </div>
      <div class="outbound-deliveries-list-card-create__truck-details">
        <h4>Plan an outbound delivery</h4>
        <p>Driver name</p>
      </div>
    </div>

    <div class="outbound-deliveries-list-card-create__status">
      <div>Delivery Status</div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.outbound-deliveries-list-card-create {
  display: flex;
  justify-content: space-between;
  gap: var(--space-2xl);
  padding: 0 var(--space-md) var(--space-md) 0;
  margin-bottom: var(--space-md);
  border-bottom: 1px solid var(--clr-gray-500);
  transition: var(--hover-transition);

  &:hover {
    cursor: pointer;
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
      width: 1.5rem;
      height: 1.5rem;
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
      background-color: var(--clr-gray-100);
      color: var(--clr-gray-100);
      border-radius: var(--border-radius-md);
      width: fit-content;
    }
  }

  &__status {
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      background-color: var(--clr-gray-100);
      color: var(--clr-gray-100);
      border-radius: var(--border-radius-md);
      padding: var(--space-xs) var(--space-sm);
      line-height: var(--lh-xs);
    }
  }
}
</style>
