import { supabase } from "@plugins/supabase";

export const getAllMeals = async () => {
  const { data: getAllMealsData, error: getAllMealsError } = await supabase
    .from("meals")
    .select("*");

  if (getAllMealsError) return { data: null, error: getAllMealsError };

  return { data: getAllMealsData, error: null };
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

export const createMeal = async () => {
  const { data: createMealData, error: createMealError } = await supabase
    .from("meals")
    .insert({})
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
