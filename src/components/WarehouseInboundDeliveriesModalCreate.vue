<script setup>
import { ref } from "vue";
import { Form } from "vee-validate";
import { useRouter } from "vue-router";
import { transformToFormattedDate } from "@helpers/index";
import { useModalStore } from "@stores/ModalStore";
import { useNotificationStore } from "@stores/NotificationStore";
import { createMeals } from "@services/mealService";
import * as yup from "yup";

import WarehouseInboundDeliveriesModalCreateDishesList from "@components/WarehouseInboundDeliveriesModalCreateDishesList.vue";
import BaseMultistepFormProgressBar from "@components/BaseMultistepFormProgressBar.vue";
import BaseFormFieldset from "@components/BaseFormFieldset.vue";
import BaseFormDatePicker from "@components/BaseFormDatePicker.vue";
import BaseFormInput from "@components/BaseFormInput.vue";
import BaseButton from "@components/BaseButton.vue";

const { closeModal } = useModalStore();
const { addNotification } = useNotificationStore();
const router = useRouter();

const inboundDeliveryFormActiveStep = ref(1);

const inboundDeliveryFormStepsInfo = [
  "Select dish",
  "Delivery info",
  "Verify data",
];

const inboundDeliveryFormValidationSchema = yup.object({
  inboundDish: yup.mixed().required("Dish is required"),
  inboundDishSupplierBatchNumber: yup
    .string()
    .required("Supplier Batch Number is required"),
  inboundDishBatchExpiryDate: yup
    .date()
    .typeError("Invalid date format")
    .required("Batch Expiry Date is required"),
  inboundDishAmountOfUnits: yup
    .number()
    .required("Amount of Units is required"),
});

const handleInboundDeliveryFormSubmit = async (values) => {
  closeModal();

  const { data: createMealData, error: createMealError } = await createMeals({
    inboundDishId: values.inboundDish.id,
    inboundDishSupplierBatchNumber: values.inboundDishSupplierBatchNumber,
    inboundDishBatchExpiryDate: values.inboundDishBatchExpiryDate.toISOString(),
    inboundDishAmountOfUnits: values.inboundDishAmountOfUnits,
  });

  if (createMealError) {
    addNotification({
      title: "Error!",
      message: "Failed to add inbound delivery",
      type: "error",
      removeDelay: 2000,
    });
  } else {
    addNotification({
      title: "Succes!",
      message: "Succesfully added inbound delivery",
      type: "succes",
      removeDelay: 2000,
    });

    setTimeout(() => router.go(0), 1200);
  }

  console.log(createMealData);
  console.log(createMealError);
};

const handleActiveStepChange = (stepIndex) => {
  inboundDeliveryFormActiveStep.value = stepIndex;
};
</script>

<template>
  <Form
    @submit="handleInboundDeliveryFormSubmit"
    class="inbound-deliveries-form-create"
    :validationSchema="inboundDeliveryFormValidationSchema"
    v-slot="{ values }"
  >
    <h3>Add an inbound delivery</h3>
    <BaseMultistepFormProgressBar
      :steps="inboundDeliveryFormStepsInfo"
      :activeStep="inboundDeliveryFormActiveStep"
      @activeStepChange="handleActiveStepChange"
    />
    <div
      v-show="inboundDeliveryFormActiveStep === 1"
      class="inbound-deliveries-form-create__select-dish"
    >
      <BaseFormFieldset label="Select dish">
        <WarehouseInboundDeliveriesModalCreateDishesList name="inboundDish" />
      </BaseFormFieldset>
      <div class="inbound-deliveries-form-create__select-dish-action-buttons">
        <BaseButton
          @click.prevent="handleActiveStepChange(2)"
          stretch="fit-content"
          >Continue</BaseButton
        >
      </div>
    </div>
    <div
      v-show="inboundDeliveryFormActiveStep === 2"
      class="inbound-deliveries-form-create__delivery-info"
    >
      <BaseFormFieldset label="Delivery info">
        <BaseFormInput
          name="inboundDishSupplierBatchNumber"
          label="Supplier batch number/id"
          placeholder="type a batch number"
        />
        <BaseFormDatePicker
          name="inboundDishBatchExpiryDate"
          label="Batch expiry date"
        />
        <BaseFormInput
          name="inboundDishAmountOfUnits"
          label="Amount of units"
          placeholder="type an amount of units"
        />
      </BaseFormFieldset>
      <div class="inbound-deliveries-form-create__delivery-info-action-buttons">
        <BaseButton
          @click.prevent="handleActiveStepChange(1)"
          stretch="fit-content"
          type="outlined"
          variant="tertiary"
          >Previous step</BaseButton
        >
        <BaseButton
          @click.prevent="handleActiveStepChange(3)"
          stretch="fit-content"
          >Continue</BaseButton
        >
      </div>
    </div>
    <div
      v-show="inboundDeliveryFormActiveStep === 3"
      class="inbound-deliveries-form-create__verify-info"
    >
      <BaseFormFieldset label="Verify data">
        <ul class="inbound-deliveries-form-create__verify-info-list">
          <li class="inbound-deliveries-form-create__verify-info-list-entry">
            <p>Dish:</p>
            <span>{{ values.inboundDish?.name || "Not specified" }}</span>
          </li>
          <li class="inbound-deliveries-form-create__verify-info-list-entry">
            <p>Amount of units:</p>
            <span>{{
              values.inboundDishAmountOfUnits || "Not specified"
            }}</span>
          </li>
          <li class="inbound-deliveries-form-create__verify-info-list-entry">
            <p>Supplier batch number/id:</p>
            <span>{{
              values.inboundDishSupplierBatchNumber || "Not specified"
            }}</span>
          </li>
          <li class="inbound-deliveries-form-create__verify-info-list-entry">
            <p>Batch expiry date:</p>
            <span>{{
              values.inboundDishBatchExpiryDate
                ? transformToFormattedDate(values.inboundDishBatchExpiryDate)
                : "Not specified"
            }}</span>
          </li>
        </ul>
      </BaseFormFieldset>
      <div class="inbound-deliveries-form-create__delivery-info-action-buttons">
        <BaseButton
          @click.prevent="handleActiveStepChange(2)"
          stretch="fit-content"
          type="outlined"
          variant="tertiary"
          >Previous step</BaseButton
        >
        <BaseButton type="submit" stretch="fit-content"
          >Finalize inbound delivery</BaseButton
        >
      </div>
    </div>
  </Form>
</template>

<style lang="scss" scoped>
.inbound-deliveries-form-create {
  display: flex;
  flex-direction: column;

  & > h3 {
    font-size: var(--fs-lg);
    margin-bottom: var(--space-lg);
  }

  &__verify-info-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    margin-bottom: var(--space-md);
  }

  &__verify-info-list-entry {
    display: flex;
    align-items: center;
    line-height: var(--lh-xs);
    justify-content: space-between;
    gap: var(--space-4xl);

    & > span {
      color: var(--clr-gray-700);
    }
  }

  &__select-dish-action-buttons,
  &__delivery-info-action-buttons,
  &__verify-info-action-buttons {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-md);
  }
}
</style>
