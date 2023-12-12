<script setup>
import { onMounted } from "vue";
import { publicStorageBucketUrl } from "@services/storageService";
import { useWarehouseStore } from "@stores/WarehouseStore";
import { storeToRefs } from "pinia";

const { warehouseState } = storeToRefs(useWarehouseStore());
const { refreshWarehouseState } = useWarehouseStore();

onMounted(async () => {
  await refreshWarehouseState();
});
</script>

<template>
  <div class="warehouse-inventory-overview">
    <ul class="warehouse-inventory-overview__list">
      <li
        v-for="dish in warehouseState"
        :key="dish.dish_id"
        class="warehouse-inventory-overview__list-card"
      >
        <div
          class="warehouse-inventory-overview__list-card-thumbnail"
          :style="{
            backgroundImage: `url(${
              publicStorageBucketUrl + encodeURIComponent(dish.dish_thumbnail)
            })`,
          }"
        ></div>
        <div class="warehouse-inventory-overview__list-card-info">
          <p>{{ dish.dish_name }}</p>
          <span>{{ dish.available_amount }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.warehouse-inventory-overview {
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-md);
  }

  &__list-card {
    display: flex;
    gap: var(--space-md);
  }

  &__list-card-thumbnail {
    width: 6rem;
    height: 4.25rem;
    border-radius: var(--border-radius-md);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &__list-card-info {
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
      font-size: var(--fs-2xl);
      color: var(--clr-green-400);
    }
  }
}

@media screen and (max-width: 1600px) {
  .warehouse-inventory-overview {
    &__list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
