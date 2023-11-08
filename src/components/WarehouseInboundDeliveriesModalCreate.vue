<script setup>
import { ref } from "vue";
import { Form } from "vee-validate";

import BaseMultistepFormProgressBar from "@components/BaseMultistepFormProgressBar.vue";
import BaseFormFieldset from "@components/BaseFormFieldset.vue";

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
  console.log(stepIndex);
  inboundDeliveryFormActiveStep.value = stepIndex;
};
</script>

<template>
  <Form class="inbound-deliveries-form-create">
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
      <BaseFormFieldset label="Select dish"> step 1 </BaseFormFieldset>
    </div>
    <div
      v-show="inboundDeliveryFormActiveStep === 2"
      class="inbound-deliveries-form-create__delivery-info"
    >
      <BaseFormFieldset label="Delivery info"> step 2 </BaseFormFieldset>
    </div>
    <div
      v-show="inboundDeliveryFormActiveStep === 3"
      class="inbound-deliveries-form-create__verify-info"
    >
      <BaseFormFieldset label="Verify Info"> step 3 </BaseFormFieldset>
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
}
</style>
