<script setup>
import { Form } from "vee-validate";
import { register } from "@services/authService.js";
import { useRouter } from "vue-router";
import { useNotificationStore } from "@stores/NotificationStore";
import { useModalStore } from "@stores/ModalStore";
import { userRoles } from "@constants/index";
import * as yup from "yup";

import BaseButton from "@components/BaseButton.vue";
import BaseFormCheckbox from "@components/BaseFormCheckbox.vue";
import BaseFormInput from "@components/BaseFormInput.vue";
import BaseFormRow from "@components/BaseFormRow.vue";
import BaseFormFieldset from "@components/BaseFormFieldset.vue";

const router = useRouter();
const { closeModal } = useModalStore();
const { addNotification } = useNotificationStore();

const registerFormValidationSchema = yup.object({
  firstname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup.string().required("Password is required"),
  roles: yup
    .array()
    .of(yup.string().required())
    .required("You must select at least one role"),
});

const handleRegisterFormSubmit = async (values) => {
  closeModal();

  const { data: registerData, error: registerError } = await register(values);
  if (registerError) {
    console.log("register error!", registerError);
  } else {
    console.log("register succes!", registerData);
  }

  addNotification({
    title: "Succes!",
    message: "Added new user succesfully",
    type: "succes",
    removeDelay: 2000,
  });

  setTimeout(() => router.go(), 1000);
};
</script>

<template>
  <Form
    class="register-form"
    @submit="handleRegisterFormSubmit"
    :validation-schema="registerFormValidationSchema"
    v-slot="{ errors }"
  >
    <h3>Add a new user</h3>

    <BaseFormFieldset label="General info">
      <BaseFormRow>
        <BaseFormInput
          name="firstname"
          label="Firstname"
          placeholder="type your firstname"
        />
        <BaseFormInput
          name="lastname"
          label="Lastname"
          placeholder="type your lastname"
        />
      </BaseFormRow>
      <BaseFormInput
        name="email"
        label="E-mail"
        placeholder="type your e-mail"
      />
      <BaseFormInput
        name="password"
        type="password"
        label="Password"
        placeholder="type your password"
      />
    </BaseFormFieldset>
    <BaseFormFieldset
      label="Assign user roles"
      description="A single user can have multiple different roles assigned to their profile.
      The Admin role shouldn't be combined with other roles as it has full
      access to everything."
    >
      <BaseFormRow>
        <BaseFormCheckbox
          v-for="role in userRoles"
          :label="role.name"
          name="roles"
          :value="role.id"
        />
        <p class="register-form__error-feedback">{{ errors.roles }}</p>
      </BaseFormRow>
    </BaseFormFieldset>
    <BaseButton>Add user</BaseButton>
  </Form>
</template>

<style lang="scss" scoped>
.register-form {
  display: flex;
  flex-direction: column;

  & > h3 {
    font-size: var(--fs-lg);
    margin-bottom: var(--space-lg);
  }

  &__error-feedback {
    font-size: var(--fs-sm);
    color: var(--clr-red-400);
    line-height: var(--lh-xs);
  }
}
</style>
