<script setup>
import { sanitizeOutboundDeliveryContents } from "@helpers/index";
import { publicStorageBucketUrl } from "@services/storageService";

const props = defineProps({
  outboundDeliveryContents: Object,
});
</script>

<template>
  <ul class="outbound-deliveries-create-contents-overview">
    <li
      v-for="contentEntry in sanitizeOutboundDeliveryContents(
        props.outboundDeliveryContents
      )"
      class="outbound-deliveries-create-contents-overview__entry"
    >
      <h4>{{ contentEntry.machine.location_name }}</h4>
      <ul class="outbound-deliveries-create-contents-overview__entry-dishes">
        <li
          v-for="dish in contentEntry.inventoryRefillPlan"
          class="outbound-deliveries-create-contents-overview__entry-dish"
        >
          <div
            class="outbound-deliveries-create-contents-overview__entry-dish-thumbnail"
            :style="{
              backgroundImage: `url(${
                publicStorageBucketUrl +
                encodeURIComponent(dish.dish_thumbnail_path)
              })`,
            }"
          ></div>
          <div
            class="outbound-deliveries-create-contents-overview__entry-dish-info"
          >
            <p>{{ dish.dish_name }}</p>
            <span>{{ dish.added_quantity }}</span>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.outbound-deliveries-create-contents-overview {
  &__entry {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: var(--space-md);
    justify-content: space-between;
    padding-bottom: var(--space-md);
    margin-bottom: var(--space-md);
    border-bottom: 1px solid var(--clr-gray-700);

    & > h4 {
      font-weight: var(--fw-semibold);
      margin-bottom: var(--space-sm);
    }
  }

  &__entry-dishes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
  }

  &__entry-dish {
    display: flex;
    gap: var(--space-md);
  }

  &__entry-dish-thumbnail {
    width: 5rem;
    height: 3.5rem;
    border-radius: var(--border-radius-md);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &__entry-dish-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    & > p {
      line-height: var(--lh-xs);
      font-weight: var(--fw-semibold);
      color: var(--clr-black);
    }

    & > span {
      line-height: var(--lh-xs);
      font-size: var(--fs-xl);
      color: var(--clr-green-400);
    }
  }
}
</style>
