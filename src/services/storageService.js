import { supabase } from "@plugins/supabase";

export const uploadSupplierLogoToMain = async (file) => {
  const { data: uploadFileData, error: uploadFileError } =
    await supabase.storage
      .from("main_storage")
      .upload(`/supplier logos/${file.name}`, file, {
        upsert: true,
      });

  if (uploadFileError) return { data: null, error: uploadFileError };

  return { data: uploadFileData, error: null };
};
