<script setup>
import { Form } from "vee-validate";
import * as yup from "yup";

import BaseButton from "@components/BaseButton.vue";
import BaseFormRow from "@components/BaseFormRow.vue";
import BaseFormInput from "@components/BaseFormInput.vue";
import BaseFormFieldset from "@components/BaseFormFieldset.vue";

const machineLocationValidationSchema = yup.object({});

const handleMachineLocationFormSubmit = async () => {};
</script>

<template>
  <Form
    @submit="handleMachineLocationFormSubmit"
    :validation-schema="machineLocationValidationSchema"
    class="machines-form-create"
  >
    <h3>Add a machine</h3>
  </Form>
</template>

<style lang="scss" scoped>
.machines-form-create {
  display: flex;
  flex-direction: column;

  & > h3 {
    font-size: var(--fs-lg);
    margin-bottom: var(--space-lg);
  }
}
</style>
