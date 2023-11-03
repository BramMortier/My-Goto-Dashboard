import { supabase } from "@plugins/supabase";

export const publicStorageBucketUrl =
  "https://aenzrgiocxcasahgwkys.supabase.co/storage/v1/object/public/main_storage/";

export const getPublicUrl = async (path) => {
  const { data: getPublicUrlData, error: getPublicUrlError } =
    await supabase.storage.from("main_storage").getPublicUrl(path);

  if (getPublicUrlError) return { data: null, error: getPublicUrlError };

  return { data: getPublicUrlData, error: null };
};

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
