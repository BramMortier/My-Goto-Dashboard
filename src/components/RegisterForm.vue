<script setup>
import { Form, Field } from "vee-validate";
import { useAuthStore } from "@stores/AuthStore";
import { router } from "@router/index.js";
import * as yup from "yup";

import BaseButton from "@components/BaseButton.vue";

const { register } = useAuthStore();

const registerFormValidationSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup.string().required("Password is required"),
});

const handleRegisterFormSubmit = async (values) => {
  const [data, error] = await register(values);

  if (error) console.log("register error!", error);
  if (data) {
    console.log("register succes!", data);
    await router.push("/");
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
    <h2>Register</h2>
    <div class="register-form__fields">
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
    </div>
    <div class="register-form__group">
      <BaseButton>Register</BaseButton>
    </div>
  </Form>
</template>

<style lang="scss" scoped>
.register-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  background-color: var(--clr-white);
  padding: var(--space-xl);
  border-bottom: 2px solid var(--clr-green-400);

  & > h2 {
    font-size: var(--fs-2xl);
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
