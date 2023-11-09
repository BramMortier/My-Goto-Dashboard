<script setup>
import { ref, onMounted } from "vue";
import { useField } from "vee-validate";
import { publicStorageBucketUrl } from "@services/storageService";
import { getAllDishes } from "@services/dishService";

const props = defineProps({
  name: String,
});

const dishes = ref(null);

const { value, errorMessage } = useField(() => props.name);

onMounted(async () => {
  const { data: getAllDishesData, error: getAllDishesError } =
    await getAllDishes();

  dishes.value = getAllDishesData;
});

const handleDishChange = (dish) => {
  value.value = dish;
};
</script>

<template>
  <ul class="inbound-deliveries-create-dishes-list">
    <li
      v-for="dish in dishes"
      :key="dish.id"
      class="inbound-deliveries-create-dishes-list__card"
      :class="{
        'inbound-deliveries-create-dishes-list__card--selected':
          value?.id === dish.id,
      }"
      @click="handleDishChange(dish)"
    >
      <div
        class="inbound-deliveries-create-dishes-list__card-thumbnail"
        :style="{
          backgroundImage: `url(${
            publicStorageBucketUrl + encodeURIComponent(dish.thumbnail_path)
          })`,
        }"
      >
        <div class="inbound-deliveries-create-dishes-list__selected-icon">
          <img
            src="@assets/icons/checkmark.svg"
            alt="dishes list selected icon"
          />
        </div>
      </div>
      <div class="inbound-deliveries-create-dishes-list__card-info">
        <h4>{{ dish.name }}</h4>
        <p>{{ dish.suppliers.name }}</p>
      </div>
    </li>
    <input :name="props.name" type="hidden" />
    <p
      v-if="errorMessage"
      class="inbound-deliveries-create-dishes-list__error-message"
    >
      {{ errorMessage }}
    </p>
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
    transition: var(--hover-transition);

    &:not(&--selected):hover {
      cursor: pointer;
      border-color: var(--clr-gray-700);

      .inbound-deliveries-create-dishes-list {
        &__card-thumbnail {
          filter: brightness(85%);
        }
      }
    }

    &--selected {
      border-color: var(--clr-green-400);

      .inbound-deliveries-create-dishes-list {
        &__card-thumbnail {
          border-color: var(--clr-green-400);
        }

        &__selected-icon {
          opacity: 1;
        }
      }
    }
  }

  &__card-thumbnail {
    width: 140px;
    height: 100px;
    display: flex;
    border: 1px solid transparent;
    justify-content: flex-end;
    align-items: flex-end;
    padding: var(--space-xs);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: var(--border-radius-md);
    transition: var(--hover-transition);
  }

  &__selected-icon {
    width: 2rem;
    height: 2rem;
    padding: var(--space-xs);
    border-radius: 100%;
    background-color: var(--clr-green-400);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: var(--hover-transition);

    img {
      filter: invert(99%) sepia(0%) saturate(4196%) hue-rotate(150deg)
        brightness(111%) contrast(101%);
    }
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

  &__error-message {
    font-size: var(--fs-sm);
    color: var(--clr-red-400);
    line-height: var(--lh-xs);
  }
}
</style>
