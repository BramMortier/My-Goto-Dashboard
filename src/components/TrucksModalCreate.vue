<script setup>
import { Form } from "vee-validate";
import { createLocation } from "@services/locationService";
import * as yup from "yup";

import BaseButton from "@components/BaseButton.vue";
import BaseFormInput from "@components/BaseFormInput.vue";
import BaseFormFieldset from "@components/BaseFormFieldset.vue";

const truckLocationValidationSchema = yup.object({
  locationName: yup.string().required("Truck name is required"),
  locationCapacity: yup.number().required("Truck capacity is required"),
});

const handleTruckLocationFormSubmit = async (values) => {
  console.log(values);

  const { data: createLocationData, error: createLocationError } =
    await createLocation({
      locationType: "Truck",
      locationName: values.locationName,
      locationCapacity: values.locationCapacity,
    });

  console.log(createLocationData);
  console.log(createLocationError);
};
</script>

<template>
  <Form
    @submit="handleTruckLocationFormSubmit"
    :validation-schema="truckLocationValidationSchema"
    class="trucks-form-create"
  >
    <h3>Add a truck</h3>
    <BaseFormFieldset
      label="General info"
      description="Truck names should include their license place. Ex: Truck 1-DFF-586"
    >
      <BaseFormInput
        name="locationName"
        label="Name"
        placeholder="type truck name"
      />
      <BaseFormInput
        name="locationCapacity"
        label="Capacity"
        placeholder="type truck capacity"
      />
    </BaseFormFieldset>
    <BaseButton>Add truck</BaseButton>
  </Form>
</template>

<style lang="scss" scoped>
.trucks-form-create {
  display: flex;
  flex-direction: column;

  & > h3 {
    font-size: var(--fs-lg);
    margin-bottom: var(--space-lg);
  }
}
</style>
