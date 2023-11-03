<script setup>
import { Form, Field } from "vee-validate";
import * as yup from "yup";

import BaseFormFileUploader from "@components/BaseFormFileUploader.vue";
import BaseButton from "@components/BaseButton.vue";

const suppliersFormValidationSchema = yup.object({
  supplierName: yup.string().required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  phoneNumber: yup.string().required("Phone number is required"),
});

const handleSuppliersFormSubmit = (values) => {
  console.log(values);
};
</script>

<template>
  <Form
    class="suppliers-form-create"
    @submit="handleSuppliersFormSubmit"
    v-slot="{ errors }"
  >
    <h3>Add a new supplier</h3>
    <div class="suppliers-form-create__fields">
      <div class="suppliers-form-create__group">
        <BaseFormFileUploader />
      </div>
    </div>
    <div class="suppliers-form-create__group">
      <label>Supplier name</label>
      <Field
        name="name"
        type="text"
        placeholder="type supplier name"
        class="suppliers-form-create__field"
        :class="{ 'suppliers-form-create__field-error-feedback': errors.name }"
      />
      <p class="suppliers-form-create__error-feedback">{{ errors.name }}</p>
    </div>
    <div class="suppliers-form-create__row">
      <div class="suppliers-form-create__group">
        <label>Supplier E-mail</label>
        <Field
          name="email"
          type="text"
          placeholder="type supplier email"
          class="suppliers-form-create__field"
          :class="{
            'suppliers-form-create__field-error-feedback': errors.email,
          }"
        />
        <p class="suppliers-form-create__error-feedback">{{ errors.email }}</p>
      </div>
      <div class="suppliers-form-create__group">
        <label>Supplier Phone Number</label>
        <Field
          name="phoneNumber"
          type="text"
          placeholder="type supplier phone number"
          class="suppliers-form-create__field"
          :class="{
            'suppliers-form-create__field-error-feedback': errors.phoneNumber,
          }"
        />
        <p class="suppliers-form-create__error-feedback">
          {{ errors.phoneNumber }}
        </p>
      </div>
    </div>
    <div class="suppliers-form-create__group">
      <BaseButton>Add supplier</BaseButton>
    </div>
  </Form>
</template>

<style lang="scss" scoped>
.suppliers-form-create {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  & > h3 {
    font-size: var(--fs-lg);
  }

  &__fields {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);

    & > h4 {
      font-weight: var(--fw-medium);
      margin-bottom: var(--space-sm);
    }

    & > p {
      color: var(--clr-gray-700);
      max-width: 37.5rem;
    }
  }

  &__row {
    display: flex;
    gap: var(--space-md);
  }

  &__group {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    &--2-col-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    & > label {
      line-height: var(--lh-xs);
      font-size: var(--fs-sm);
      font-weight: var(--fw-medium);
    }
  }

  &__field {
    min-width: var(--input-width-md);
    width: 100%;
    min-height: 44px;
    padding-inline: var(--space-md);
    font-size: var(--fs-sm);
    border: 1px solid transparent;
    border-radius: var(--border-radius-md);
    outline: none;
    background-color: var(--clr-gray-100);
    color: var(--clr-gray-900);

    &.register-form__field-error-feedback {
      border: 1px solid var(--clr-red-400);
      color: var(--clr-red-400);
    }

    &::placeholder {
      color: var(--clr-gray-500);
    }
  }

  &__error-feedback {
    font-size: var(--fs-sm);
    color: var(--clr-red-400);
    line-height: var(--lh-xs);
  }
}
</style>
