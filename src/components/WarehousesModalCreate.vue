<script setup>
import { Form } from "vee-validate";
import * as yup from "yup";

import BaseButton from "@components/BaseButton.vue";
import BaseFormRow from "@components/BaseFormRow.vue";
import BaseFormInput from "@components/BaseFormInput.vue";
import BaseFormFieldset from "@components/BaseFormFieldset.vue";

const warehouseLocationValidationSchema = yup.object({
  warehouseName: yup.string().required("Warehouse name is required"),
  street: yup.string().required("A street is required"),
  streetNumber: yup.number().required("A street number is required"),
  postalCode: yup.number().required("A postal code is required"),
  city: yup.string().required("A city is required"),
  country: yup.string().required("A country is required"),
  latitude: yup.number().required("A latitude is required"),
  longitude: yup.number().required("A longitude is required"),
});

const handleWarehouseLocationFormSubmit = async (values) => {
  console.log(values);

  // transform address to coords
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
        name="warehouseName"
        label="Name"
        placeholder="type a warehouse name"
      />
    </BaseFormFieldset>
    <BaseFormFieldset label="Location info">
      <BaseFormRow>
        <BaseFormInput
          name="street"
          label="Street"
          placeholder="type the warehouse street"
        />
        <BaseFormInput
          name="streetNumber"
          label="Street number"
          placeholder="type the warehouse street number"
        />
      </BaseFormRow>
      <BaseFormRow>
        <BaseFormInput
          name="postalCode"
          label="Postal code"
          placeholder="type the warehouse postal code"
        />
        <BaseFormInput
          name="city"
          label="City"
          placeholder="type the warehouse city"
        />
      </BaseFormRow>
      <BaseFormRow>
        <BaseFormInput
          name="country"
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
          name="latitude"
          label="Latitude"
          placeholder="type the latitude"
        />
        <BaseFormInput
          name="longitude"
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
