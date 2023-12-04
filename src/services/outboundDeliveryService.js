import { supabase } from "@plugins/supabase";

export const getAllOutboundDeliveries = async () => {
  const {
    data: getAllOutboundDeliveriesData,
    error: getAllOutboundDeliveriesError,
  } = await supabase.rpc("get_all_outbound_deliveries");

  if (getAllOutboundDeliveriesError)
    return { data: null, error: getAllOutboundDeliveriesError };

  return { data: getAllOutboundDeliveriesData, error: null };
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

  console.log("created record: ", createOutboundDeliveryData[0]);

  if (createOutboundDeliveryData) {
    console.log("delivery ID: ", createOutboundDeliveryData[0].id);

    console.log("delivery contents: ", outboundDeliveryContents);

    outboundDeliveryContents.forEach((machine) => {
      console.log("machine refill plan: ", machine.inventoryRefillPlan);

      machine.inventoryRefillPlan.forEach((dish) => {
        if (dish.added_quantity)
          console.log("amount of records to fetch: ", dish.added_quantity);
      });
    });
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

export const deleteOutboundDelivery = async (outboundDeliveryId) => {
  const { error: deleteOutboundDeliveryError } = await supabase
    .from("deliveries")
    .delete()
    .eq("id", outboundDeliveryId);

  if (deleteOutboundDeliveryError)
    return { data: null, error: deleteOutboundDeliveryError };

  return { data: "Outbound delivery succesfully deleted", error: null };
};
