import { supabase } from "@plugins/supabase";

export const publicStorageBucketUrl =
  "https://aenzrgiocxcasahgwkys.supabase.co/storage/v1/object/public/main_storage/";

export const uploadSupplierLogoToMain = async (file) => {
  const {
    data: uploadSupplierLogoToMainData,
    error: uploadSupplierLogoToMainError,
  } = await supabase.storage
    .from("main_storage")
    .upload(`/supplier-logos/${file.name}`, file, {
      upsert: true,
    });

  if (uploadSupplierLogoToMainError)
    return { data: null, error: uploadSupplierLogoToMainError };

  return { data: uploadSupplierLogoToMainData, error: null };
};

export const uploadDishThumbnailToMain = async (file) => {
  const {
    data: uploadDishThumbnailToMainData,
    error: uploadDishThumbnailToMainError,
  } = await supabase.storage
    .from("main_storage")
    .upload(`/dish-thumbnails/${file.name}`, file, {
      upsert: true,
    });

  if (uploadDishThumbnailToMainError)
    return { data: null, error: uploadDishThumbnailToMainError };

  return { data: uploadDishThumbnailToMainData, error: null };
};

export const uploadAllergyIconToMain = async (file) => {
  const {
    data: uploadAllergyIconToMainData,
    error: uploadAllergyIconToMainError,
  } = await supabase.storage
    .from("main_storage")
    .upload(`/allergy-icons/${file.name}`, file, {
      upsert: true,
    });

  if (uploadAllergyIconToMainError)
    return { data: null, error: uploadAllergyIconToMainError };

  return { data: uploadAllergyIconToMainData, error: null };
};
