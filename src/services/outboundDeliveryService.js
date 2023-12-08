import { supabase } from "@plugins/supabase";
import { getOldestMeals, updateMealsToPlanned } from "@services/mealService";

export const getAllOutboundDeliveries = async () => {
  const {
    data: getAllOutboundDeliveriesData,
    error: getAllOutboundDeliveriesError,
  } = await supabase.rpc("get_all_outbound_deliveries");

  if (getAllOutboundDeliveriesError)
    return { data: null, error: getAllOutboundDeliveriesError };

  return { data: getAllOutboundDeliveriesData, error: null };
};

export const getOutboundDeliveryById = async (outboundDeliveryId) => {
  const {
    data: getOutboundDeliveryByIdData,
    error: getOutboundDeliveryByIdError,
  } = await supabase.rpc("get_outbound_delivery_by_id", {
    id: outboundDeliveryId,
  });

  if (getOutboundDeliveryByIdError)
    return { data: null, error: getOutboundDeliveryByIdError };

  return { data: getOutboundDeliveryByIdData, error: null };
};

export const createOutboundDelivery = async ({
  outboundDeliveryTruckDriver,
  outboundDeliveryTruck,
  outboundDeliveryContents,
}) => {
  const {
    data: createOutboundDeliveryData,
    error: createOutboundDeliveryError,
  } = await supabase
    .from("deliveries")
    .insert({
      truck_id: outboundDeliveryTruck.id,
      driver_id: outboundDeliveryTruckDriver.truck_driver_id,
      status: "planned",
    })
    .select();

  if (createOutboundDeliveryError)
    return { data: null, error: createOutboundDeliveryError };

  if (createOutboundDeliveryData) {
    for (const machine of outboundDeliveryContents) {
      for (const dish of machine.inventoryRefillPlan) {
        if (dish.added_quantity) {
          const { data: getOldestMealsData, error: getOldestMealsError } =
            await getOldestMeals(dish.added_quantity, dish.dish_id);

          if (getOldestMealsError)
            return { data: null, error: getOldestMealsError };

          console.log(getOldestMealsData);

          const outboundDeliveryMeals = getOldestMealsData.map((meal) => ({
            meal_id: meal.id,
            delivery_id: createOutboundDeliveryData[0].id,
            machine_id: machine.machine.machine_id,
          }));

          const {
            data: assignOutboundDeliveryItemsData,
            error: assignOutboundDeliveryItemsError,
          } = await assignOutboundDeliveryItems(outboundDeliveryMeals);

          console.log(assignOutboundDeliveryItemsData);

          if (assignOutboundDeliveryItemsError)
            return { data: null, error: assignOutboundDeliveryItemsError };
        }
      }
    }

    const { data: updateMealsToPlannedData, error: updateMealsToPlannedError } =
      await updateMealsToPlanned(createOutboundDeliveryData[0].id);

    console.log(updateMealsToPlannedError);

    if (updateMealsToPlannedError)
      return { data: null, error: updateMealsToPlannedError };
  }

  return { data: createOutboundDeliveryData, error: null };
};

export const assignOutboundDeliveryItems = async (outboundDeliveryItems) => {
  const {
    data: assignOutboundDeliveryItemData,
    error: assignOutboundDeliveryItemError,
  } = await supabase
    .from("delivery_items")
    .insert(outboundDeliveryItems)
    .select();

  if (assignOutboundDeliveryItemError)
    return { data: null, error: assignOutboundDeliveryItemError };

  return { data: assignOutboundDeliveryItemData, error: null };
};

export const updateOutboundDeliveryStatus = async (
  outboundDeliveryStatus,
  outboundDeliveryId
) => {
  const {
    data: updateOutboundDeliveryStatusData,
    error: updateOutboundDeliveryStatusError,
  } = await supabase
    .from("deliveries")
    .update({
      status: outboundDeliveryStatus,
    })
    .eq("id", outboundDeliveryId)
    .select();

  if (updateOutboundDeliveryStatusError)
    return { data: null, error: updateOutboundDeliveryStatusError };

  return { data: updateOutboundDeliveryStatusData, error: null };
};

export const deleteOutboundDelivery = async (outboundDeliveryId) => {
  const { error: deleteOutboundDeliveryError } = await supabase
    .from("deliveries")
    .delete()
    .eq("id", outboundDeliveryId);

  if (deleteOutboundDeliveryError)
    return { data: null, error: deleteOutboundDeliveryError };

  return { data: "Outbound delivery succesfully deleted", error: null };
};
