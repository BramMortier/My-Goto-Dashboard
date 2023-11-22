<script setup>
import { Form } from "vee-validate";
import * as yup from "yup";

import BaseFormFieldset from "@components/BaseFormFieldset.vue";
import OutboundDeliveriesCreateTruckDriversList from "@components/OutboundDeliveriesCreateTruckDriversList.vue";
import OutboundDeliveriesCreateTrucksList from "@components/OutboundDeliveriesCreateTrucksList.vue";
import OutboundDeliveriesCreateMachinesList from "./OutboundDeliveriesCreateMachinesList.vue";
import BaseSearchbar from "@components/BaseSearchbar.vue";
import BaseButton from "@components/BaseButton.vue";

const outboundDeliveriesFormValidationSchema = yup.object({
  outboundDeliveryTruckDriver: yup
    .mixed()
    .required("A truck driver is required"),
  outboundDeliveryTruck: yup.mixed().required("A truck is required"),
  outboundDeliveryContents: yup.mixed().required("Contents are required"),
});

const handleOutboundDeliveriesFormSubmit = async () => {};
</script>

<template>
  <Form
    @submit="handleOutboundDeliveriesFormSubmit"
    :validation-schema="outboundDeliveriesFormValidationSchema"
    class="outbound-deliveries-form-create"
    v-slot="{ values }"
  >
    <BaseFormFieldset label="Assign a driver">
      <OutboundDeliveriesCreateTruckDriversList
        name="outboundDeliveryTruckDriver"
      />
    </BaseFormFieldset>
    <BaseFormFieldset label="Choose a truck">
      <OutboundDeliveriesCreateTrucksList name="outboundDeliveryTruck" />
    </BaseFormFieldset>
    <BaseFormFieldset label="Choose machines to refill">
      <div class="outbound-deliveries-form-create__machine-list-filters">
        <BaseSearchbar />
      </div>
      <OutboundDeliveriesCreateMachinesList name="outboundDeliveryContents" />
    </BaseFormFieldset>
    <div class="outbound-deliveries-form-create__action-buttons">
      <BaseButton stretch="fit-content">Finalize outbound delivery</BaseButton>
    </div>
  </Form>
</template>

<style lang="scss" scoped>
.outbound-deliveries-form-create {
  &__machine-list-filters {
    margin-bottom: var(--space-md);
  }

  &__action-buttons {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
