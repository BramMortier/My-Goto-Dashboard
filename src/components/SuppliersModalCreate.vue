<script setup>
import { Form } from "vee-validate";
import { uploadSupplierLogoToMain } from "@services/storageService";
import { createSupplier } from "@services/supplierService";
import * as yup from "yup";

import BaseFormFileUploader from "@components/BaseFormFileUploader.vue";
import BaseFormInput from "@components/BaseFormInput.vue";
import BaseFormFieldSet from "@components/BaseFormFieldset.vue";
import BaseButton from "@components/BaseButton.vue";

const suppliersFormValidationSchema = yup.object({
  supplierName: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  phoneNumber: yup.string().required("Phone number is required"),
  logoFile: yup.mixed().required("A logo file is required"),
});

const handleSuppliersFormSubmit = async (values) => {
  const {
    data: uploadSupplierLogoToMainData,
    error: uploadSupplierLogoToMainError,
  } = await uploadSupplierLogoToMain(values.logoFile);

  const { data: createSupplierData, error: createSupplierError } =
    await createSupplier({
      logoPath: uploadSupplierLogoToMainData.path,
      supplierName: values.supplierName,
      email: values.email,
      phoneNumber: values.phoneNumber,
    });
};
</script>

<template>
  <Form
    class="suppliers-form-create"
    :validation-schema="suppliersFormValidationSchema"
    @submit="handleSuppliersFormSubmit"
  >
    <h3>Add a new supplier</h3>
    <BaseFormFieldSet label="Supplier logo">
      <BaseFormFileUploader name="logoFile" />
    </BaseFormFieldSet>
    <BaseFormFieldSet label="Supplier information">
      <BaseFormInput
        label="Supplier name"
        name="supplierName"
        placeholder="type supplier name"
      />
      <BaseFormInput
        label="Supplier E-mail"
        name="email"
        placeholder="type supplier e-mail"
      />
      <BaseFormInput
        label="Supplier phone number"
        name="phoneNumber"
        placeholder="type supplier phone number"
      />
    </BaseFormFieldSet>
    <BaseButton>Add supplier</BaseButton>
  </Form>
</template>

<style lang="scss" scoped>
.suppliers-form-create {
  display: flex;
  flex-direction: column;

  & > h3 {
    font-size: var(--fs-lg);
    margin-bottom: var(--space-lg);
  }
}
</style>
