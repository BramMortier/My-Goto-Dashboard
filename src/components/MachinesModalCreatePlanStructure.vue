<script setup>
import { ref, onMounted } from "vue";
import { useField } from "vee-validate";
import { getAllDishes } from "@services/dishService";
import { publicStorageBucketUrl } from "@services/storageService";

const props = defineProps({
  name: String,
});

const dishes = ref(null);
const searchTerm = ref(null);
const isInputFocused = ref(false);

const { value } = useField(() => props.name);

onMounted(async () => {
  const { data: getAllDishesData, error: getAllDishesError } =
    await getAllDishes();

  dishes.value = getAllDishesData;
});

const handleAddDishToMachineStructurePlan = (dish) => {
  console.log(dish);
};
</script>

<template>
  <div class="machines-create-plan-structure">
    <div class="machines-create-plan-structure__search-dishes">
      <input
        type="text"
        v-model="searchTerm"
        @focus="isInputFocused = true"
        @blur="isInputFocused = false"
        placeholder="Search all dishes"
      />
      <ul
        v-show="isInputFocused"
        class="machines-create-plan-structure__dishes-list"
      >
        <li
          v-for="dish in dishes"
          :key="dish.id"
          @click="handleAddDishToMachineStructurePlan(dish)"
          class="machines-create-plan-structure__dishes-list-card"
        >
          <div
            class="machines-create-plan-structure__dish-thumbnail"
            :style="{
              backgroundImage: `url(${
                publicStorageBucketUrl + encodeURIComponent(dish.thumbnail_path)
              })`,
            }"
          ></div>
          <div class="machines-create-plan-structure__dish-info">
            <h4>{{ dish.name }}</h4>
            <span>{{ dish.suppliers.name }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="machines-create-plan-structure__overview"></div>
  </div>
</template>

<style lang="scss" scoped>
.machines-create-plan-structure {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);

  &__search-dishes {
    input {
      position: relative;
      margin-bottom: var(--space-xs);
      min-width: var(--input-width-md);
      width: 100%;
      min-height: 44px;
      padding-inline: var(--space-md);
      font-size: var(--fs-sm);
      border: 1px solid transparent;
      border-radius: var(--border-radius-md);
      outline: none;
      background-color: var(--clr-gray-100);
      color: var(--clr-gray-900);

      &::placeholder {
        color: var(--clr-gray-500);
      }
    }
  }

  &__dishes-list {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    background-color: var(--clr-white);
    border-bottom: 2px solid var(--clr-green-400);
    padding: var(--space-xs);
  }

  &__dishes-list-card {
    display: flex;
    gap: var(--space-sm);
    align-items: center;
    padding-bottom: var(--space-xs);
    border-bottom: 1px solid var(--clr-gray-500);

    &:hover {
      cursor: pointer;
    }
  }

  &__dish-thumbnail {
    width: 6rem;
    height: 4.25rem;
    border-radius: var(--border-radius-md);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &__dish-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    h4 {
      font-weight: var(--fw-semibold);
    }
  }
}
</style>
