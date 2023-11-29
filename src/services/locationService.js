import { supabase } from "@plugins/supabase";
import { getAllDishes } from "@services/dishService";

export const getAllLocations = async () => {
  const { data: getAllLocationsData, error: getAllLocationsError } =
    await supabase.from("locations").select("*");

  if (getAllLocationsError) return { data: null, error: getAllLocationsError };

  return { data: getAllLocationsData, error: null };
};

export const getAllMachinesWithPlan = async () => {
  const {
    data: getAllMachinesWithPlanData,
    error: getAllMachinesWithPlanError,
  } = await supabase.rpc("get_all_machine_overviews");

  if (getAllMachinesWithPlanError)
    return { data: null, error: getAllMachinesWithPlanError };

  return { data: getAllMachinesWithPlanData, error: null };
};

export const getAllLocationsByType = async (locationType) => {
  const { data: getAllLocationsByTypeData, error: getAllLocationsByTypeError } =
    await supabase.from("locations").select("*").eq("type", locationType);

  if (getAllLocationsByTypeError)
    return { data: null, error: getAllLocationsByTypeError };

  return { data: getAllLocationsByTypeData, error: null };
};

export const getLocationById = async (locationId) => {
  const { data: getLocationByIdData, error: getLocationByIdError } =
    await supabase.from("locations").select("*").eq("id", locationId).single();

  if (getLocationByIdError) return { data: null, getLocationByIdError };

  return { data: getLocationByIdData, error: null };
};

export const createLocation = async ({
  locationType,
  locationName,
  locationCapacity,
  locationStreet,
  locationStreetNumber,
  locationPostalCode,
  locationCity,
  locationCountry,
  locationLatitude,
  locationLongitude,
  locationPlan,
}) => {
  const { data: createLocationData, error: createLocationError } =
    await supabase
      .from("locations")
      .insert({
        type: locationType,
        name: locationName,
        capacity: locationCapacity,
        street: locationStreet,
        street_number: locationStreetNumber,
        postal_code: locationPostalCode,
        city: locationCity,
        country: locationCountry,
        geolocation: locationLongitude
          ? `POINT(${locationLongitude} ${locationLatitude})`
          : null,
      })
      .select();

  if (createLocationError) return { data: null, error: createLocationError };

  console.log("created location record: ", createLocationData[0]);

  if (createLocationData && createLocationData[0].type === "Machine") {
    const { data: getAllDishesData, error: getAllDishesError } =
      await getAllDishes();

    if (getAllDishesError) return { data: null, error: getAllDishesError };

    console.log("dishes: ", getAllDishesData);

    const locationBaseDishes = getAllDishesData.map((entry) => ({
      location_id: createLocationData[0].id,
      dish_id: entry.id,
      suggested_quantity: 0,
    }));

    console.log("base dishes array: ", locationBaseDishes);

    const { data: assignLocationDishesData, error: assignLocationDishesError } =
      await assignLocationDishes(locationBaseDishes);

    if (assignLocationDishesError)
      return { data: null, error: assignLocationDishesError };

    if (locationPlan) {
      const locationAssignedDishes = locationPlan.map((entry) => ({
        location_id: createLocationData[0].id,
        dish_id: entry.dishId,
        suggested_quantity: entry.dishQuantity,
      }));

      console.log("assigned dishes array: ", locationAssignedDishes);

      const {
        data: assignLocationDishesData,
        error: assignLocationDishesError,
      } = await assignLocationDishes(locationAssignedDishes);

      if (assignLocationDishesError)
        return { data: null, error: assignLocationDishesError };
    }
  }

  return { data: createLocationData, error: null };
};

export const assignLocationDishes = async (locationDishes) => {
  const { data: assignLocationDishesData, error: assignLocationDishesError } =
    await supabase.from("location_dishes").upsert(locationDishes).select();

  if (assignLocationDishesError)
    return { data: null, error: assignLocationDishesError };

  return { data: assignLocationDishesData, error: null };
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
