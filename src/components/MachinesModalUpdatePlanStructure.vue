<script setup>
import { ref } from "vue";
import { Form } from "vee-validate";
import * as yup from "yup";

import BaseFormFieldset from "@components/BaseFormFieldset.vue";
import MachinesModalCreatePlanStructure from "@components/MachinesModalCreatePlanStructure.vue";
import BaseButton from "@components/BaseButton.vue";

const props = defineProps({
  machine: Object,
});

console.log(props.machine);

const machinePlanUpdateValidationSchema = yup.object({
  locationPlan: yup.array().of(
    yup.object().shape({
      dishName: yup.string().required(),
      dishId: yup.string().required(),
      dishQuantity: yup.number().required().integer().positive(),
    })
  ),
});

const handleMachinePlanUpdateFormSubmit = async (values) => {};
</script>

<template>
  <Form
    @submit="handleMachinePlanUpdateFormSubmit"
    :validationSchema="machinePlanUpdateValidationSchema"
    class="machines-modal-update-plan-structure"
  >
    <h3>Update machine plan</h3>
    <BaseFormFieldset
      label="Update the machines inventory structure"
      description="When you update the machine plan current stocked meals will stay in the machine until they are sold. New meals will be added following this plan instead"
    >
      <MachinesModalCreatePlanStructure
        :machineCapacity="props.machine.capacity"
        name="locationPlan"
      />
    </BaseFormFieldset>
    <BaseButton>Update machine plan</BaseButton>
  </Form>
</template>

<style lang="scss" scoped>
.machines-modal-update-plan-structure {
  display: flex;
  flex-direction: column;

  & > h3 {
    font-size: var(--fs-lg);
    margin-bottom: var(--space-lg);
  }
}
</style>
