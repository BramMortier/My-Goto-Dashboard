import { supabase } from "@plugins/supabase";

export const getAllSuppliers = async () => {
  const { data: getAllSupplierData, error: getAllSupplierError } =
    await supabase.from("suppliers").select("*");

  if (getAllSupplierError) return { data: null, error: getAllSupplierError };

  return { data: getAllSupplierData, error: getAllSupplierError };
};

export const getSupplierById = async (supplierId) => {
  const { data: getSupplierByIdData, error: getSupplierByIdError } =
    await supabase.from("suppliers").select("*").eq("id", supplierId).single();

  if (getSupplierByIdError) return { data: null, error: getSupplierByIdError };

  return { data: getSupplierByIdData, error: getSupplierByIdError };
};

export const createSupplier = async ({
  logoPath,
  supplierName,
  email,
  phoneNumber,
}) => {
  console.log(logoURL, supplierName, email, phoneNumber);

  const { data: createSupplierData, error: createSupplierError } =
    await supabase
      .from("suppliers")
      .insert({
        name: supplierName,
        email: email,
        phone_number: phoneNumber,
        logo_path: logoPath,
      })
      .select();

  if (createSupplierError) return { data: null, error: createSupplierError };

  return { data: createSupplierData, error: null };
};

export const updateSupplier = async () => {};

export const deleteSupplier = async (supplierId) => {
  const { error: deleteSupplierError } = await supabase
    .from("suppliers")
    .delete()
    .eq("id", supplierId);

  if (deleteSupplierError) return { data: null, error: deleteSupplierError };

  return { data: { message: "Supplier succesfully deleted" }, error: null };
};
