<script setup>
import { Form } from "vee-validate";
import * as yup from "yup";

import BaseFormFileUploader from "@components/BaseFormFileUploader.vue";
import BaseFormInput from "@components/BaseFormInput.vue";
import BaseFormFieldset from "@components/BaseFormFieldset.vue";
import BaseFormRow from "@components/BaseFormRow.vue";
import BaseButton from "@components/BaseButton.vue";
import BaseFormCheckbox from "@components/BaseFormCheckbox.vue";

const dishesFormValidationSchema = yup.object({
  dishThumbnail: yup.string().required("Dish Thumbnail is required"),
  dishName: yup.string().required("Dish Name is required"),
  description: yup.string().required("Description is required"),
  foodCategory: yup.string().required("Food Category is required"),
});

const handleDishesFormSubmit = async (values) => {
  console.log(values);
};
</script>

<template>
  <Form
    class="dishes-form-create"
    :validationSchema="dishesFormValidationSchema"
    @submit="handleDishesFormSubmit"
  >
    <h3>Add a new Dish</h3>
    <BaseFormFieldset label="Dish thumbnail">
      <BaseFormFileUploader
        name="dishThumbnail"
        emptyMessage="Upload a dish thumbnail"
      />
    </BaseFormFieldset>

    <BaseFormFieldset label="General info">
      <BaseFormInput
        name="dishName"
        label="Dish name"
        placeholder="type dish name"
      />
      <BaseFormInput
        name="description"
        label="Short Description"
        placeholder="type a description"
      />
    </BaseFormFieldset>
    <BaseFormFieldset label="Food category">
      <BaseFormRow :cols="3">
        <BaseFormCheckbox name="foodCategory" label="All" value="All" />
        <BaseFormCheckbox
          name="foodCategory"
          label="Vegetarian"
          value="Vegetarian"
        />
        <BaseFormCheckbox name="foodCategory" label="Vegan" value="Vegan" />
      </BaseFormRow>
    </BaseFormFieldset>
    <BaseFormFieldset label="Nutrition info">
      <BaseFormRow>
        <BaseFormInput
          name="calories"
          label="Calories"
          placeholder="type calorie amount"
          :optional="true"
        />
        <BaseFormInput
          name="fat"
          label="Fat"
          placeholder="type fat amount"
          :optional="true"
        />
      </BaseFormRow>
      <BaseFormRow>
        <BaseFormInput
          name="protien"
          label="Protien"
          placeholder="type protien amount"
          :optional="true"
        />
        <BaseFormInput
          name="carbohydrates"
          label="Carbohydrates"
          placeholder="type carbohydrates mount"
          :optional="true"
        />
      </BaseFormRow>
    </BaseFormFieldset>
    <BaseButton>Add dish</BaseButton>
  </Form>
</template>

<style lang="scss" scoped>
.dishes-form-create {
  display: flex;
  flex-direction: column;

  & > h3 {
    font-size: var(--fs-lg);
    margin-bottom: var(--space-lg);
  }
}
</style>
