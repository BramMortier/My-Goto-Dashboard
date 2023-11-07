import { supabase } from "@plugins/supabase";

export const getAllLocations = async () => {
  const { data: getAllLocationsData, error: getAllLocationsError } =
    await supabase.from("locations").select("*");

  if (getAllLocationsError) return { data: null, error: getAllLocationsError };

  return { data: getAllLocationsData, error: null };
};

export const getLocationById = async (locationId) => {
  const { data: getLocationByIdData, error: getLocationByIdError } =
    await supabase.from("locations").select("*").eq("id", locationId).single();

  if (getLocationByIdError) return { data: null, getLocationByIdError };

  return { data: getLocationByIdData, error: null };
};

export const createLocation = async () => {
  const { data: createLocationData, error: createLocationError } =
    await supabase.from("locations").insert({}).select();

  if (createLocationError) return { data: null, error: createLocationError };

  return { data: createLocationData, error: null };
};

export const updateLocation = async (locationId) => {};

export const deleteLocation = async (locationId) => {
  const { error: deleteLocationError } = await supabase
    .from("locations")
    .delete()
    .eq("id", locationId);

  if (deleteLocationError) return { data: null, error: deleteLocationError };

  return { data: "Location succesfully deleted", error: null };
};
