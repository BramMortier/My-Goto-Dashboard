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
    const outboundDeliveryMeals = [];

    outboundDeliveryContents.forEach(async (machine) => {
      machine.inventoryRefillPlan.forEach(async (dish) => {
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
        }
      });
    });

    const {
      data: assignOutboundDeliveryItemsData,
      error: assignOutboundDeliveryItemsError,
    } = await assignOutboundDeliveryItems(outboundDeliveryMeals);

    if (assignOutboundDeliveryItemsError)
      return { data: null, error: assignOutboundDeliveryItemsError };
  }

  return { data: createOutboundDeliveryData, error: null };
};

export const assignOutboundDeliveryItems = async (outboundDeliveryItems) => {
  // console.log("assigning delivery items");
  // console.log(outboundDeliveryItems);

  const {
    data: assignOutboundDeliveryItemData,
    error: assignOutboundDeliveryItemError,
  } = await supabase
    .from("delivery_items")
    .insert([
      {
        meal_id: "3bc4b190-3ade-42a7-8720-f5a304360103",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "5333ef78-2a1c-407e-b275-016f5694409c",
      },
      {
        meal_id: "d5b26d7e-5bf8-4ea3-910c-3db41c1b53e1",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "5333ef78-2a1c-407e-b275-016f5694409c",
      },
      {
        meal_id: "e8ecbcfc-832f-41bd-a675-be9e92d35b60",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "5333ef78-2a1c-407e-b275-016f5694409c",
      },
      {
        meal_id: "ce97c3f7-d2f8-446c-96c9-9593b37262c0",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "5333ef78-2a1c-407e-b275-016f5694409c",
      },
      {
        meal_id: "f1816e5b-2605-47c2-9ce5-85582a41be39",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "5333ef78-2a1c-407e-b275-016f5694409c",
      },
      {
        meal_id: "e224719c-8f82-4f97-8411-802504972c0f",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "5333ef78-2a1c-407e-b275-016f5694409c",
      },
      {
        meal_id: "d6f4e7e1-748c-487d-8c4e-b5b53432c6dc",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "5333ef78-2a1c-407e-b275-016f5694409c",
      },
      {
        meal_id: "b2ab7b0a-751d-4aef-b6b0-d63e32270811",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "5333ef78-2a1c-407e-b275-016f5694409c",
      },
      {
        meal_id: "119627dd-619d-438f-afd6-2acca9fc58de",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "5333ef78-2a1c-407e-b275-016f5694409c",
      },
      {
        meal_id: "aedb7039-671f-4709-9d8b-aaa7b49ae692",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "5333ef78-2a1c-407e-b275-016f5694409c",
      },
      {
        meal_id: "9b2fc2cd-fc67-4392-9d9a-642acf167e15",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "5333ef78-2a1c-407e-b275-016f5694409c",
      },
      {
        meal_id: "02521cea-0721-4d66-a655-8c888d0a8940",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "5333ef78-2a1c-407e-b275-016f5694409c",
      },
      {
        meal_id: "ea1a5377-af5b-4f3e-b103-27b549ba04a8",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "5333ef78-2a1c-407e-b275-016f5694409c",
      },
      {
        meal_id: "370e27bc-f7cc-4c46-8237-9d0267353e5a",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "5333ef78-2a1c-407e-b275-016f5694409c",
      },
      {
        meal_id: "ba382431-90a4-4041-acba-fb0db5c86976",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "5333ef78-2a1c-407e-b275-016f5694409c",
      },
      {
        meal_id: "42d7a735-a3c1-4632-9ed6-8c3c0dee9c66",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "713b9564-8051-4c89-a461-61dd7d4ee019",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "caa278c1-e2a9-41ac-b397-8cd6bc712ea5",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "32cbdfb4-82e5-4330-8861-814d8e623b48",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "444ea5cc-7b9a-4164-852d-ed4329af49f5",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "d3b17683-6c11-4667-952d-07bf99e0ebd7",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "5cd572af-2789-4417-a775-0e52ffa27bcf",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "c556365a-d958-4e16-8a04-ecf54b577dc3",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "fdaba98c-b66e-494c-ad8c-8e332a4172ab",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "9841e4ec-75ad-48e9-9404-a58e90d2c82f",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "36fe74de-090a-499e-a0bc-76c15af0d4bb",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "6e24c88a-838e-4d5c-ba00-ba23bb9cdd3a",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "3d121e7e-9682-4b6f-a80b-8914df1da669",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "0de17693-47ee-47b6-a6db-9b8b0e86b751",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "51b37e59-aaa9-446d-8430-8d3b24fec2fe",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "ea8016c5-47c8-49e5-8a3b-765cae9ce4c4",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "45c1f38d-8217-4244-88fb-7bbd7a2a91c5",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "51da270f-ee3c-4a13-9cfe-f7099d45f56d",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "11f3b47a-1ad1-4893-a0f7-b62d7128badc",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
      {
        meal_id: "2a31b074-fc6c-4868-962d-36c25ce3422d",
        delivery_id: "fdd44f18-57ef-4cfa-a6d6-fc97a60518bb",
        machine_id: "173126c3-130d-4e61-9869-b2731321c19b",
      },
    ])
    .select();

  if (assignOutboundDeliveryItemError)
    return { data: null, error: assignOutboundDeliveryItemError };

  console.log("assign delivery items succes: ", assignOutboundDeliveryItemData);
  console.log("assign delivery items error: ", assignOutboundDeliveryItemError);

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
