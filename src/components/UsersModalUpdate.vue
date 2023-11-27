<script setup>
import { Form } from "vee-validate";
import { updateUser } from "@services/userService.js";
import { useRouter } from "vue-router";
import { useNotificationStore } from "@stores/NotificationStore";
import { useModalStore } from "@stores/ModalStore";
import { userRoles } from "@constants/index";

import BaseButton from "@components/BaseButton.vue";
import BaseFormCheckbox from "@components/BaseFormCheckbox.vue";
import BaseFormInput from "@components/BaseFormInput.vue";
import BaseFormRow from "@components/BaseFormRow.vue";
import BaseFormFieldset from "@components/BaseFormFieldset.vue";

import * as yup from "yup";

const props = defineProps({
  user: Object,
});
console.log(props.user);

const router = useRouter();
const { closeModal } = useModalStore();
const { addNotification } = useNotificationStore();

const userUpdateFormValidationSchema = yup.object({
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

const handleUserUpdateFormSubmit = async () => {};
</script>

<template>
  <Form
    class="user-update-form"
    @submit="handleUserUpdateFormSubmit"
    :validation-schema="userUpdateFormValidationSchema"
    :initial-values="{
      firstname: props.user.firstname,
      lastname: props.user.lastname,
      email: props.user.email,
      roles: props.user.roles.map((role) => role.name),
    }"
    v-slot="{ errors }"
  >
    <h3>Update a user</h3>

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
          :key="role.id"
          name="roles"
          :label="role.name"
          :value="role.id"
        />
        <p class="register-form__error-feedback">{{ errors.roles }}</p>
      </BaseFormRow>
    </BaseFormFieldset>
    <BaseButton>Add user</BaseButton>
  </Form>
</template>

<style lang="scss" scoped>
.user-update-form {
  display: flex;
  flex-direction: column;

  & > h3 {
    font-size: var(--fs-lg);
    margin-bottom: var(--space-lg);
  }
}
</style>
