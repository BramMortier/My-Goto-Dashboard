import { supabase } from "@plugins/supabase";

export const getAllMeals = async () => {
  const { data: getAllMealsData, error: getAllMealsError } = await supabase
    .from("meals")
    .select("*");

  if (getAllMealsError) return { data: null, error: getAllMealsError };

  return { data: getAllMealsData, error: null };
};

export const getWarehouseInventory = async () => {
  const { data: getWarehouseInventoryData, error: getWarehouseInventoryError } =
    await supabase.rpc("get_warehouse_inventory");

  if (getWarehouseInventoryError)
    return { data: null, error: getWarehouseInventoryError };

  return { data: getWarehouseInventoryData, error: null };
};

export const getMealById = async (mealId) => {
  const { data: getMealByIdData, error: getMealByIdError } = await supabase
    .from("meals")
    .select("*")
    .eq("id", mealId)
    .single();

  if (getMealByIdError) return { data: null, error: getMealByIdError };

  return { data: getMealByIdData, error: null };
};

export const createMeals = async ({
  inboundDishId,
  inboundDishSupplierBatchNumber,
  inboundDishBatchExpiryDate,
  inboundDishAmountOfUnits,
}) => {
  const mealsData = Array.from({ length: inboundDishAmountOfUnits }, () => ({
    dish_id: inboundDishId,
    supplier_batch: inboundDishSupplierBatchNumber,
    expires_at: inboundDishBatchExpiryDate,
    warehouse_id: "8aa863b4-794f-4263-95dd-687cbdd0f083",
  }));

  console.log(mealsData);

  const { data: createMealData, error: createMealError } = await supabase
    .from("meals")
    .insert(mealsData)
    .select();

  if (createMealError) return { data: null, error: createMealError };

  return { data: createMealData, error: null };
};

export const updateMeal = async (mealId) => {
  // update meal
};

export const deleteMeal = async (mealId) => {
  const { error: deleteMealError } = await supabase
    .from("meals")
    .delete()
    .eq("id", mealId);

  if (deleteMealError) return { data: null, error: deleteMealError };

  return { data: "Meal succesfully deleted", error: null };
};
