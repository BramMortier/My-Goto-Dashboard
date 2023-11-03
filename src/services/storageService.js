import { supabase } from "@plugins/supabase";

export const uploadFileToMain = async (file) => {
  const { data: uploadFileData, error: uploadFileError } = await supabase
    .from("main_storage")
    .upload("/", file);

  if (uploadFileError) return { data: null, error: uploadFileError };

  return { data: uploadFileData, error: null };
};
