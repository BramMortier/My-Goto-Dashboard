import { supabase } from "@plugins/supabase";
import { getOldestMeals } from "@services/mealService";

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
      status: "in progress",
    })
    .select();

  if (createOutboundDeliveryError)
    return { data: null, error: createOutboundDeliveryError };

  if (createOutboundDeliveryData) {
    outboundDeliveryContents.forEach(async (machine) => {
      machine.inventoryRefillPlan.forEach(async (dish) => {
        const outboundDeliveryMeals = [];

        if (dish.added_quantity) {
          const { data: getOldestMealsData, error: getOldestMealsError } =
            await getOldestMeals(dish.added_quantity, dish.dish_id);

          if (getOldestMealsError)
            return { data: null, error: getOldestMealsError };

          getOldestMealsData.forEach((meal) => {
            outboundDeliveryMeals.push({
              ...meal,
              delivery_id: createOutboundDeliveryData[0].id,
              machine_id: machine.machine.machine_id,
            });
          });

          const {
            data: assignOutboundDeliveryItemsData,
            error: assignOutboundDeliveryItemsError,
          } = await assignOutboundDeliveryItems(outboundDeliveryMeals);

          if (assignOutboundDeliveryItemsError)
            return { data: null, error: assignOutboundDeliveryItemsError };
        }
      });
    });
  }

  return { data: createOutboundDeliveryData, error: null };
};

export const assignOutboundDeliveryItems = async (outboundDeliveryItems) => {
  console.log("assigning delivery items");
  console.log("items to insert: ", outboundDeliveryItems);

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

export const deleteOutboundDelivery = async (outboundDeliveryId) => {
  const { error: deleteOutboundDeliveryError } = await supabase
    .from("deliveries")
    .delete()
    .eq("id", outboundDeliveryId);

  if (deleteOutboundDeliveryError)
    return { data: null, error: deleteOutboundDeliveryError };

  return { data: "Outbound delivery succesfully deleted", error: null };
};
