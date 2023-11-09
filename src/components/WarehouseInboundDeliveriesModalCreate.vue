<script setup>
import { ref } from "vue";
import { Form } from "vee-validate";

import BaseMultistepFormProgressBar from "@components/BaseMultistepFormProgressBar.vue";
import BaseFormFieldset from "@components/BaseFormFieldset.vue";
import BaseFormInput from "@components/BaseFormInput.vue";
import BaseButton from "@components/BaseButton.vue";
import WarehouseInboundDeliveriesModalCreateDishesList from "@components/WarehouseInboundDeliveriesModalCreateDishesList.vue";

const inboundDeliveryFormActiveStep = ref(1);

const inboundDeliveryFormStepsInfo = [
  "Select dish",
  "Delivery info",
  "Verify data",
];

const handleInboundDeliveryFormSubmit = async (values) => {
  console.log(values);
};

const handleActiveStepChange = (stepIndex) => {
  inboundDeliveryFormActiveStep.value = stepIndex;
};
</script>

<template>
  <Form class="inbound-deliveries-form-create" v-slot="{ values }">
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
        <WarehouseInboundDeliveriesModalCreateDishesList />
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
          name="supplierBatchNumber"
          label="Supplier batch number/id"
          placeholder="type a batch number"
        />
        <BaseFormInput
          name="batchExpiryDate"
          label="Batch expiry data"
          placeholder="type an expiry date"
        />
        <BaseFormInput
          name="amountOfUnits"
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
            <span>{{ values.dish || "Not specified" }}</span>
          </li>
          <li class="inbound-deliveries-form-create__verify-info-list-entry">
            <p>Amount of units:</p>
            <span>{{ values.amountOfUnits || "Not specified" }}</span>
          </li>
          <li class="inbound-deliveries-form-create__verify-info-list-entry">
            <p>Supplier batch number/id:</p>
            <span>{{ values.supplierBatchNumber || "Not specified" }}</span>
          </li>
          <li class="inbound-deliveries-form-create__verify-info-list-entry">
            <p>Batch expiry date:</p>
            <span>{{ values.batchExpiryDate || "Not specified" }}</span>
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
        <BaseButton stretch="fit-content">Finalize inbound delivery</BaseButton>
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
