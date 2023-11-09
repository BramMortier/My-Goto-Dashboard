<script setup>
import { ref, onMounted } from "vue";
import { publicStorageBucketUrl } from "@services/storageService";
import { getAllDishes } from "@services/dishService";

const dishes = ref(null);

onMounted(async () => {
  const { data: getAllDishesData, error: getAllDishesError } =
    await getAllDishes();

  dishes.value = getAllDishesData;

  console.log(dishes.value);
});
</script>

<template>
  <ul class="inbound-deliveries-create-dishes-list">
    <li
      v-for="dish in dishes"
      :key="dish.id"
      class="inbound-deliveries-create-dishes-list__card"
    >
      <div
        class="inbound-deliveries-create-dishes-list__card-thumbnail"
        :style="{
          backgroundImage: `url(${
            publicStorageBucketUrl + encodeURIComponent(dish.thumbnail_path)
          })`,
        }"
      ></div>
      <div class="inbound-deliveries-create-dishes-list__card-info">
        <h4>{{ dish.name }}</h4>
        <p>{{ dish.suppliers.name }}</p>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.inbound-deliveries-create-dishes-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);

  &__card {
    display: flex;
    gap: var(--space-md);
    padding-bottom: var(--space-sm);
    border-bottom: 1px solid var(--clr-gray-500);

    &:hover {
      cursor: pointer;
    }
  }

  &__card-thumbnail {
    width: 140px;
    height: 100px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: var(--border-radius-md);
  }

  &__card-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    & > h4 {
      font-weight: var(--fw-semibold);
      line-height: var(--lh-sm);
      max-width: 200px;
      overflow: hidden;
    }

    & > p {
      line-height: var(--lh-xs);
    }
  }
}
</style>
