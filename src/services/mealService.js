import { supabase } from "@plugins/supabase";

export const getAllMeals = async () => {
  const { data: getAllMealsData, error: getAllMealsError } = await supabase
    .from("meals")
    .select("*");

  if (getAllMealsError) return { data: null, error: getAllMealsError };

  return { data: getAllMealsData, error: null };
};

export const getAllMealsCount = async () => {
  const { data: getAllMealsCountData, error: getAllMealsCountError } =
    await supabase.rpc("get_all_meals_count");

  if (getAllMealsCountError)
    return { data: null, error: getAllMealsCountError };

  return { data: getAllMealsCountData, error: null };
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
    warehouse_id: "fe4847d7-0578-47dc-9228-e347bba24d61",
  }));

  console.log(mealsData);

  const { data: createMealData, error: createMealError } = await supabase
    .from("meals")
    .insert(mealsData)
    .select();

  if (createMealError) return { data: null, error: createMealError };

  return { data: createMealData, error: null };
};

export const updateMeals = async (mealsData) => {
  const { data: updateMealsData, error: updateMealsError } = await supabase
    .from("meals")
    .upsert(mealsData)
    .select();

  if (updateMealsError) return { data: null, error: updateMealsError };

  return { data: updateMealsData, error: null };
};

export const getOldestMeals = async (quantity, dishId) => {
  const { data: getOldestMealsData, error: getOldestMealsError } =
    await supabase.rpc("get_oldest_meals", {
      amount: quantity,
      dish_id: dishId,
    });

  if (getOldestMealsError) return { data: null, error: getOldestMealsError };

  return { data: getOldestMealsData, error: null };
};

export const updateMealsToPlanned = async (deliveryId) => {
  const { data: updateMealsToPlannedData, error: updateMealsToPlannedError } =
    await supabase.rpc("update_meals_to_planned", {
      delivery_id: deliveryId,
    });

  if (updateMealsToPlannedError)
    return { data: null, error: updateMealsToPlannedError };

  return { data: updateMealsToPlannedData, error: null };
};

export const updateMealsToInTransport = async (deliveryId) => {
  const {
    data: updateMealsToInTransportData,
    error: updateMealsToInTransportError,
  } = await supabase.rpc("update_meals_to_in_transport", {
    delivery_id: deliveryId,
  });

  if (updateMealsToInTransportError)
    return { data: null, error: updateMealsToInTransportError };

  return { data: updateMealsToInTransportData, error: null };
};

export const updateMealsToFilled = async (deliveryId) => {
  const { data: updateMealsToFilledData, error: updateMealsToFilledError } =
    await supabase.rpc("update_meals_to_filled", {
      delivery_id: deliveryId,
    });

  if (updateMealsToFilledError)
    return { data: null, error: updateMealsToFilledError };

  return { data: updateMealsToFilledData, error: null };
};

export const deleteMeals = async (supplierBatch) => {
  const { error: deleteMealError } = await supabase.rpc(
    "delete_warehouse_inventory_items",
    {
      supplier_batch: supplierBatch,
    }
  );

  if (deleteMealError) return { data: null, error: deleteMealError };

  return { data: "Meals succesfully deleted", error: null };
};
