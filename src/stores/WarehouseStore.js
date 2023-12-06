import { defineStore } from "pinia";
import { getAllMealsCount } from "@services/mealService";
import { ref } from "vue";

export const useWarehouseStore = defineStore("warehouse", () => {
  const warehouseState = ref(null);

  const refreshWarehouseState = async () => {
    const { data: getAllMealsCountData, error: getAllMealsCountError } =
      await getAllMealsCount();

    if (getAllMealsCountError)
      return { data: null, error: getAllMealsCountError };

    warehouseState.value = getAllMealsCountData;

    return { data: getAllMealsCountData, error: null };
  };

  const updateWarehouseState = (dishId, quantity) => {
    console.log(dish, quantity);
  };

  return { warehouseState, refreshWarehouseState };
});
