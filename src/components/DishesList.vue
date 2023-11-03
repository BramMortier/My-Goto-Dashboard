<script setup>
import { ref, onMounted } from "vue";
import { getAllDishes } from "@services/dishService";
import { useModalStore } from "@stores/ModalStore";

import DishesListCardCreate from "@components/DishesListCardCreate.vue";
import DishesListCard from "@components/DishesListCard.vue";
import DishesModalCreate from "@components/DishesModalCreate.vue";
import BaseSearchBar from "@components/BaseSearchBar.vue";
import BaseButton from "@components/BaseButton.vue";

const { openModal } = useModalStore();

const dishes = ref(null);

onMounted(async () => {
  const { data: getAllDishesData, error: getAllDishesError } =
    await getAllDishes();

  dishes.value = getAllDishesData;

  console.log(dishes.value);
});
</script>

<template>
  <div class="dishes-list__container">
    <h3>Current assortment of dishes</h3>

    <div class="dishes-list__filters">
      <BaseSearchBar />
      <BaseButton @click="openModal({ component: DishesModalCreate })"
        >Add a dish</BaseButton
      >
    </div>

    <ul class="dishes-list">
      <DishesListCardCreate />
      <DishesListCard v-for="dish in dishes" :key="dish.id" :dish="dish" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.dishes-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: var(--space-lg);
  row-gap: var(--space-xl);

  &__filters {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--space-md);
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    padding: var(--space-md);
    background-color: var(--clr-white);
    border-bottom: 2px solid var(--clr-green-400);
    max-width: var(--container-width-md);

    & > h3 {
      color: var(--clr-black);
      font-size: var(--fs-lg);
      margin-bottom: var(--space-lg);
    }
  }
}
</style>
