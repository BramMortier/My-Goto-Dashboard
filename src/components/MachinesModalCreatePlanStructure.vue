<script setup>
import { ref, onMounted } from "vue";
import { useField } from "vee-validate";
import { getAllDishes } from "@services/dishService";
import { publicStorageBucketUrl } from "@services/storageService";

import BaseButton from "@components/BaseButton.vue";

const props = defineProps({
  name: String,
});

const dishes = ref(null);
const searchTerm = ref(null);
const searchInput = ref(null);
const isSearchInputFocused = ref(false);

const { value: machinePlan } = useField(() => props.name);

onMounted(async () => {
  const { data: getAllDishesData, error: getAllDishesError } =
    await getAllDishes();

  dishes.value = getAllDishesData;
  machinePlan.value = [];
});

const handleAddDishToMachineStructurePlan = (dish, quantity) => {
  machinePlan.value = [
    ...machinePlan.value,
    {
      dishName: dish.name,
      dishId: dish.id,
      dishQuantity: quantity || 1,
    },
  ];
  console.log(machinePlan.value);
};
</script>

<template>
  <div class="machines-create-plan-structure">
    <div class="machines-create-plan-structure__search-dishes">
      <input
        type="text"
        ref="searchInput"
        v-model="searchTerm"
        @focus="isSearchInputFocused = true"
        @blur="isSearchInputFocused = false"
        placeholder="Search all dishes"
      />
      <Transition name="dishes-list-transition">
        <ul
          v-show="isSearchInputFocused"
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
                  publicStorageBucketUrl +
                  encodeURIComponent(dish.thumbnail_path)
                })`,
              }"
            ></div>
            <div class="machines-create-plan-structure__dish-info">
              <h4>{{ dish.name }}</h4>
              <span>{{ dish.suppliers.name }}</span>
            </div>
          </li>
        </ul>
      </Transition>
    </div>
    <div class="machines-create-plan-structure__overview">
      <div class="machines-create-plan-structure__overview-empty">
        <p>
          This machine plan is empty. Add dishes to the plan by searching for
          them above.
        </p>
        <BaseButton
          @click="searchInput.focus()"
          type="secondary"
          stretch="fit-content"
          >Plan a dish</BaseButton
        >
      </div>
      <ul
        v-if="machinePlan"
        class="machines-create-plan-structure__overview-list"
      >
        <li
          v-for="entry in machinePlan"
          :key="entry.dishId"
          class="machines-create-plan-structure__overview-list-card"
        ></li>
      </ul>
    </div>
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
    max-height: 18.75rem;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    background-color: var(--clr-white);
    border-bottom: 2px solid var(--clr-green-400);
    padding: var(--space-xs);

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--clr-gray-500);
    }
  }

  &__dishes-list-card {
    display: flex;
    width: 25rem;
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
    gap: var(--space-sm);

    h4 {
      font-weight: var(--fw-semibold);
    }

    span {
      line-height: var(--lh-xs);
    }
  }

  &__overview-empty {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: var(--border-radius-md);
    background-color: var(--clr-gray-100);
    min-height: 18.75rem;

    & > p {
      max-width: 25rem;
      text-align: center;
    }
  }
}

.dishes-list-transition-enter-from,
.dishes-list-transition-leave-to {
  opacity: 0;
}

.dishes-list-transition-enter-active,
.dishes-list-transition-leave-active {
  transition: 0.25s ease all;
}
</style>