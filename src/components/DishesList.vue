<script setup>
import { ref, onMounted } from "vue";
import { getAllDishes } from "@services/dishService";

import DishesListCard from "@components/DishesListCard.vue";

const dishes = ref(null);

onMounted(async () => {
  const { data: getAllDishesData, error: getAllDishesError } =
    await getAllDishes();

  dishes.value = getAllDishesData;

  console.log(dishes.value);
});
</script>

<template>
  <ul class="dishes-list">
    <DishesListCard v-for="dish in dishes" :key="dish.id" :dish="dish" />
  </ul>
</template>

<style lang="scss" scoped>
.dishes-list {
  display: flex;
  flex-direction: column;

  & > h3 {
    color: var(--clr-black);
    font-size: var(--fs-lg);
    margin-bottom: var(--space-lg);
  }
}
</style>
