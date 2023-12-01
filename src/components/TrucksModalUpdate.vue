<script setup>
import { Form } from "vee-validate";
import { useRouter } from "vue-router";
import { useNotificationStore } from "@stores/NotificationStore";
import { useModalStore } from "@stores/ModalStore";
import { updateLocation } from "@services/locationService";
import * as yup from "yup";

import BaseButton from "@components/BaseButton.vue";
import BaseFormInput from "@components/BaseFormInput.vue";
import BaseFormFieldset from "@components/BaseFormFieldset.vue";

const props = defineProps({
  truck: Object,
});

const router = useRouter();
const { closeModal } = useModalStore();
const { addNotification } = useNotificationStore();

const truckLocationUpdateValidationSchema = yup.object({
  locationName: yup.string().required("Truck name is required"),
  locationCapacity: yup.number().required("Truck capacity is required"),
});

const handleTruckLocationUpdateFormSubmit = async (values) => {
  closeModal();
  console.log("updating truck location...");

  const { data: updateLocationData, error: updateLocationError } =
    await updateLocation({
      locationId: props.truck.id,
      locationName: values.locationName,
      locationCapacity: values.locationCapacity,
    });
};
</script>

<template>
  <Form
    @submit="handleTruckLocationUpdateFormSubmit"
    :validation-schema="truckLocationUpdateValidationSchema"
    :initial-values="{
      locationName: props.truck.name,
      locationCapacity: props.truck.capacity,
    }"
    class="trucks-form-update"
  >
    <h3>Update truck</h3>
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
    <BaseButton>Update truck</BaseButton>
  </Form>
</template>

<style lang="scss" scoped>
.trucks-form-update {
  display: flex;
  flex-direction: column;

  & > h3 {
    font-size: var(--fs-lg);
    margin-bottom: var(--space-lg);
  }
}
</style>
