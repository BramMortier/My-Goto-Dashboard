import { supabase } from "@plugins/supabase";

export const getAllAllergies = async () => {
  const { data: getAllAllergiesData, error: getAllAllergiesError } =
    await supabase.from("allergies").select("*");

  if (getAllAllergiesError) return { data: null, error: getAllAllergiesError };

  return { data: getAllAllergiesData, error: null };
};

export const getAllergyById = async (allergyId) => {
  const { data: getAllergyByIdData, error: getAllergyByIdError } =
    await supabase.from("allergies").select("*").eq("id", allergyId).single();

  if (getAllergyByIdError) return { data: null, error: getAllergyByIdError };

  return { data: getAllergyByIdData, error: null };
};

export const createAllergy = async ({ allergyName, iconPath }) => {
  const { data: createAllergyData, error: createAllergyError } = await supabase
    .from("allergies")
    .insert({ name: allergyName, icon_path: iconPath })
    .select();

  if (createAllergyError) return { data: null, error: createAllergyError };

  return { data: createAllergyData, error: null };
};

export const updateAllergy = async (allergyId) => {};

export const deleteAllergy = async (allergyId) => {
  const { error: deleteAllergyError } = await supabase
    .from("allergies")
    .delete()
    .eq("id", allergyId);

  if (deleteAllergyError) return { data: null, error: deleteAllergyError };

  return { data: "Allergy succesfully deleted", error: null };
};
