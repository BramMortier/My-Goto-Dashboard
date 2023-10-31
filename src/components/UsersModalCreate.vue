<script setup>
import { Form, Field } from "vee-validate";
import { register } from "@services/authService.js";
import { userRoles } from "@constants/index";
import * as yup from "yup";

import BaseButton from "@components/BaseButton.vue";
import BaseCheckbox from "@components/BaseCheckbox.vue";

const registerFormValidationSchema = yup.object({
  firstname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup.string().required("Password is required"),
  role: yup
    .array()
    .of(yup.string().required())
    .required("You must select at least one role"),
});

const handleRegisterFormSubmit = async (values) => {
  const { data: registerData, error: registerError } = await register(values);
  if (registerError) {
    console.log("register error!", registerError);
  } else {
    console.log("register succes!", registerData);
  }
};
</script>

<template>
  <Form
    class="register-form"
    @submit="handleRegisterFormSubmit"
    :validation-schema="registerFormValidationSchema"
    v-slot="{ errors }"
  >
    <h2>Add a new user</h2>
    <div class="register-form__fields">
      <div class="register-form__group">
        <label>Firstname</label>
        <Field
          name="firstname"
          type="text"
          placeholder="type your firstname"
          class="register-form__field"
          :class="{ 'register-form__field-error-feedback': errors.firstname }"
        ></Field>
        <p class="register-form__error-feedback">{{ errors.firstname }}</p>
      </div>
      <div class="register-form__group">
        <label>Lastname</label>
        <Field
          name="lastname"
          type="text"
          placeholder="type your lastname"
          class="register-form__field"
          :class="{ 'register-form__field-error-feedback': errors.lastname }"
        ></Field>
        <p class="register-form__error-feedback">{{ errors.lastname }}</p>
      </div>
      <div class="register-form__group">
        <label>E-mail</label>
        <Field
          name="email"
          type="text"
          placeholder="type your e-mail"
          class="register-form__field"
          :class="{ 'register-form__field-error-feedback': errors.email }"
        ></Field>
        <p class="register-form__error-feedback">{{ errors.email }}</p>
      </div>
      <div class="register-form__group">
        <label>Password</label>
        <Field
          name="password"
          type="password"
          placeholder="type your password"
          class="register-form__field"
          :class="{ 'register-form__field-error-feedback': errors.password }"
        ></Field>
        <p class="register-form__error-feedback">{{ errors.password }}</p>
      </div>
      <div class="register-form__group">
        <BaseCheckbox
          v-for="role in userRoles"
          :label="role.name"
          name="role"
          :value="role.id"
        />
        <p class="register-form__error-feedback">{{ errors.role }}</p>
      </div>
    </div>
    <div class="register-form__group">
      <BaseButton>Add user</BaseButton>
    </div>
  </Form>
</template>

<style lang="scss" scoped>
.register-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);

  & > h3 {
    font-size: var(--fs-lg);
  }

  &__fields {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
  }

  &__group {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

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
