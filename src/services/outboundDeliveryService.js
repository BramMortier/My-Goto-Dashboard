import { supabase } from "@plugins/supabase";

export const getAllOutboundDeliveries = async () => {
  const {
    data: getAllOutboundDeliveriesData,
    error: getAllOutboundDeliveriesError,
  } = await supabase.from("deliveries").select("*");

  if (getAllOutboundDeliveriesError)
    return { data: null, error: getAllOutboundDeliveriesError };

  return { data: getAllOutboundDeliveriesData, error: null };
};

export const createOutboundDelivery = async () => {
  const {
    data: createOutboundDeliveryData,
    error: createOutboundDeliveryError,
  } = await supabase.from("deliveries").insert({}).select();

  if (createOutboundDeliveryError)
    return { data: null, error: createOutboundDeliveryError };

  return { data: createOutboundDeliveryData, error: null };
};

export const assignOutboundDeliveryItem = async () => {
  const {
    data: assignOutboundDeliveryItemData,
    error: assignOutboundDeliveryItemError,
  } = await supabase.from("delivery_items").insert({}).select();

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
