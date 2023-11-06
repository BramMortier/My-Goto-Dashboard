<script setup>
import { Form } from "vee-validate";
import * as yup from "yup";

import BaseFormFileUploader from "@components/BaseFormFileUploader.vue";
import BaseFormFieldset from "@components/BaseFormFieldset.vue";
import BaseFormInput from "@components/BaseFormInput.vue";
import BaseButton from "@components/BaseButton.vue";

const allergyFormValidationSchema = yup.object({
  iconFile: yup.mixed().required("Icon file is required"),
  allergyName: yup.string().required("Allergy name is required"),
});

const handleAllergyFormSubmit = async (values) => {
  console.log(values);
};
</script>

<template>
  <Form
    class="allergies-form-create"
    @submit="handleAllergyFormSubmit"
    :validation-schema="allergyFormValidationSchema"
  >
    <h3>Add a new Allergy</h3>
    <BaseFormFieldset label="Allergy icon">
      <BaseFormFileUploader
        name="iconFile"
        emptyMessage="Upload an allergy icon"
      />
    </BaseFormFieldset>
    <BaseFormFieldset label="General info">
      <BaseFormInput
        name="allergyName"
        placeholder="type an allergy name"
        label="Allergy name"
      />
    </BaseFormFieldset>
    <BaseButton>Add allergy</BaseButton>
  </Form>
</template>

<style lang="scss" scoped>
.allergies-form-create {
  display: flex;
  flex-direction: column;

  & > h3 {
    font-size: var(--fs-lg);
    margin-bottom: var(--space-lg);
  }
}
</style>
