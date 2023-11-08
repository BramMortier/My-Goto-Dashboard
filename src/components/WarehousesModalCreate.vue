<script setup>
import { Form } from "vee-validate";
import { createLocation } from "@services/locationService";
import * as yup from "yup";

import BaseButton from "@components/BaseButton.vue";
import BaseFormRow from "@components/BaseFormRow.vue";
import BaseFormInput from "@components/BaseFormInput.vue";
import BaseFormFieldset from "@components/BaseFormFieldset.vue";

const warehouseLocationValidationSchema = yup.object({
  locationName: yup.string().required("Warehouse name is required"),
  locationStreet: yup.string().required("A street is required"),
  locationStreetNumber: yup.number().required("A street number is required"),
  locationPostalCode: yup.number().required("A postal code is required"),
  locationCity: yup.string().required("A city is required"),
  locationCountry: yup.string().required("A country is required"),
  locationLatitude: yup.number().required("A latitude is required"),
  locationLongitude: yup.number().required("A longitude is required"),
});

const handleWarehouseLocationFormSubmit = async (values) => {
  console.log(values);

  const { data: createLocationData, error: createLocationError } =
    await createLocation({
      locationType: "Warehouse",
      locationName: values.locationName,
      locationStreet: values.locationStreet,
      locationStreetNumber: values.locationStreetNumber,
      locationPostalCode: values.locationPostalCode,
      locationCity: values.locationCity,
      locationCountry: values.locationCountry,
      locationLatitude: values.locationLatitude,
      locationLongitude: values.locationLongitude,
    });
};
</script>

<template>
  <Form
    @submit="handleWarehouseLocationFormSubmit"
    :validation-schema="warehouseLocationValidationSchema"
    class="warehouses-form-create"
  >
    <h3>Add a warehouse</h3>
    <BaseFormFieldset label="General info">
      <BaseFormInput
        name="locationName"
        label="Name"
        placeholder="type a warehouse name"
      />
    </BaseFormFieldset>
    <BaseFormFieldset label="Location info">
      <BaseFormRow>
        <BaseFormInput
          name="locationStreet"
          label="Street"
          placeholder="type the warehouse street"
        />
        <BaseFormInput
          name="locationStreetNumber"
          label="Street number"
          placeholder="type the warehouse street number"
        />
      </BaseFormRow>
      <BaseFormRow>
        <BaseFormInput
          name="locationPostalCode"
          label="Postal code"
          placeholder="type the warehouse postal code"
        />
        <BaseFormInput
          name="locationCity"
          label="City"
          placeholder="type the warehouse city"
        />
      </BaseFormRow>
      <BaseFormRow>
        <BaseFormInput
          name="locationCountry"
          label="Country"
          placeholder="type the warehouse country"
        />
      </BaseFormRow>
    </BaseFormFieldset>
    <BaseFormFieldset
      label="Geolocation info"
      description="To easily show locations on a map we need the latitude and longitude of the address. Type the address in to google maps and copy the coordinates into the fields below."
    >
      <BaseFormRow>
        <BaseFormInput
          name="locationLatitude"
          label="Latitude"
          placeholder="type the latitude"
        />
        <BaseFormInput
          name="locationLongitude"
          label="Longitude"
          placeholder="type the longitude"
        />
      </BaseFormRow>
    </BaseFormFieldset>
    <BaseButton>Add warehouse location</BaseButton>
  </Form>
</template>

<style lang="scss" scoped>
.warehouses-form-create {
  display: flex;
  flex-direction: column;

  & > h3 {
    font-size: var(--fs-lg);
    margin-bottom: var(--space-lg);
  }
}
</style>
