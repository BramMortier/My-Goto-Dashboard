import { supabase } from "@plugins/supabase";

export const getAllDishes = async () => {
  const { data: getAllDishesData, error: getAllDishesError } = await supabase
    .from("dishes")
    .select("*");

  if (getAllDishesError) return { data: null, error: getAllDishesError };

  return { data: getAllDishesData, error: getAllDishesError };
};

export const getDishById = async (dishId) => {
  const { data: getDishByIdData, error: getDishByIdError } = await supabase
    .from("dishes")
    .select("*")
    .eq("id", dishId)
    .single();

  if (getDishByIdError) return { data: null, error: getDishByIdError };

  return { data: getDishByIdData, error: null };
};

export const createDish = async ({
  name,
  description,
  calories,
  protien,
  fat,
  carbohydrates,
  points,
  food_category_id,
  supplier_id,
}) => {
  const { data: createDishData, error: createDishError } = await supabase
    .from("dishes")
    .insert({})
    .select();

  if (createDishError) return { data: createDishData, error: createDishError };

  return { data: createDishData, error: createDishError };
};

export const updateDish = async () => {};

export const deleteDish = async (dishId) => {
  const { error: deleteDishError } = await supabase
    .from("dishes")
    .delete()
    .eq("id", dishId);

  if (deleteDishError) return { data: null, error: deleteDishError };

  return { data: "Dish succesfully deleted", error: null };
};
