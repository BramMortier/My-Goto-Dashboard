<script setup>
import { Form } from "vee-validate";
import { createOutboundDelivery } from "@services/outboundDeliveryService";
import { useRouter } from "vue-router";
import { useNotificationStore } from "@stores/NotificationStore";
import { useModalStore } from "@stores/ModalStore";
import * as yup from "yup";

import BaseFormFieldset from "@components/BaseFormFieldset.vue";
import OutboundDeliveriesCreateTruckDriversList from "@components/OutboundDeliveriesCreateTruckDriversList.vue";
import OutboundDeliveriesCreateTrucksList from "@components/OutboundDeliveriesCreateTrucksList.vue";
import OutboundDeliveriesCreateMachinesList from "@components/OutboundDeliveriesCreateMachinesList.vue";
import OutboundDeliveriesCreateContentsOverview from "@components/OutboundDeliveriesCreateContentsOverview.vue";
import BaseSearchbar from "@components/BaseSearchbar.vue";
import BaseButton from "@components/BaseButton.vue";

const router = useRouter();
const { closeModal } = useModalStore();
const { addNotification } = useNotificationStore();

const outboundDeliveriesFormValidationSchema = yup.object({
  outboundDeliveryTruckDriver: yup
    .mixed()
    .required("A truck driver is required"),
  outboundDeliveryTruck: yup.mixed().required("A truck is required"),
  outboundDeliveryContents: yup.mixed().required("Contents are required"),
});

const handleOutboundDeliveriesFormSubmit = async (values) => {
  closeModal();

  const {
    data: createOutboundDeliveryData,
    error: createOutboundDeliveryError,
  } = await createOutboundDelivery({
    outboundDeliveryTruckDriver: values.outboundDeliveryTruckDriver,
    outboundDeliveryTruck: values.outboundDeliveryTruck,
    outboundDeliveryContents: values.outboundDeliveryContents,
  });

  if (createOutboundDeliveryError) {
    addNotification({
      title: "Error!",
      message: "Failed to create outbound delivery",
      type: "error",
      removeDelay: 2000,
    });
  } else {
    addNotification({
      title: "Succes!",
      message: "Succesfully created outbound delivery",
      type: "succes",
      removeDelay: 2000,
    });

    setTimeout(
      () => router.push({ name: "OverviewOutboundDeliveriesPage" }),
      1200
    );
  }
};
</script>

<template>
  <Form
    @submit="handleOutboundDeliveriesFormSubmit"
    :validationSchema="outboundDeliveriesFormValidationSchema"
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
    <BaseFormFieldset label="Delivery contents overview">
      <OutboundDeliveriesCreateContentsOverview
        :outboundDeliveryContents="values.outboundDeliveryContents"
      />
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
