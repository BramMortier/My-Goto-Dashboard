<script setup>
import { Form } from "vee-validate";
import { uploadDishThumbnailToMain } from "@services/storageService";
import { createDish } from "@services/dishService";
import { foodCategories } from "@constants/index";
import * as yup from "yup";

import BaseFormFileUploader from "@components/BaseFormFileUploader.vue";
import BaseFormInput from "@components/BaseFormInput.vue";
import BaseFormFieldset from "@components/BaseFormFieldset.vue";
import BaseFormRow from "@components/BaseFormRow.vue";
import BaseButton from "@components/BaseButton.vue";
import BaseFormCheckbox from "@components/BaseFormCheckbox.vue";
import DishesModalCreateSuppliersList from "@components/DishesModalCreateSuppliersList.vue";

const dishesFormValidationSchema = yup.object({
  thumbnailFile: yup.mixed().required("Dish Thumbnail is required"),
  dishName: yup.string().required("Dish Name is required"),
  description: yup.string().required("Description is required"),
  sellPrice: yup
    .number("The sellPrice must be a number")
    .required("A sell price price is required"),
  purchasePrice: yup
    .number("The purchasePrice must be a number")
    .required("A purchase price is required"),
  points: yup
    .number("The points field must be a number")
    .required("Points value is required"),
  supplier: yup.string().required("You need to select a supplier"),
  foodCategory: yup
    .array()
    .of(yup.string().required())
    .required("You must select a food category"),
});

const handleDishesFormSubmit = async (values) => {
  const { data: uploadDishThumbnailData, error: uploadDishThumbnailError } =
    await uploadDishThumbnailToMain(values.thumbnailFile);

  console.log(uploadDishThumbnailData, uploadDishThumbnailError);

  const { data: createDishData, error: createDishError } = await createDish({
    dishName: values.dishName,
    description: values.description,
    calories: values.calories,
    protien: values.protien,
    fat: values.fat,
    carbohydrates: values.carbohydrates,
    purchasePrice: values.purchasePrice,
    sellPrice: values.sellPrice,
    points: values.points,
    foodCategoryId: values.foodCategory[0],
    supplierId: values.supplier,
    thumbnailPath: uploadDishThumbnailData.path,
  });

  console.log(createDishData, createDishError);
};
</script>

<template>
  <Form
    class="dishes-form-create"
    :validationSchema="dishesFormValidationSchema"
    @submit="handleDishesFormSubmit"
    v-slot="{ errors }"
  >
    <h3>Add a new Dish</h3>
    <BaseFormFieldset label="Dish thumbnail">
      <BaseFormFileUploader
        name="thumbnailFile"
        emptyMessage="Upload a dish thumbnail"
      />
    </BaseFormFieldset>
    <BaseFormFieldset label="General info">
      <BaseFormRow>
        <BaseFormInput
          name="dishName"
          label="Dish name"
          placeholder="type dish name"
        />
        <BaseFormInput
          name="points"
          label="Points per serving"
          placeholder="type an amount of points"
        />
      </BaseFormRow>
      <BaseFormRow>
        <BaseFormInput
          name="purchasePrice"
          label="Purchase price per serving"
          placeholder="type a purchase price per serving"
        />
        <BaseFormInput
          name="sellPrice"
          label="sell price per serving"
          placeholder="type a sell price per serving"
        />
      </BaseFormRow>
      <BaseFormInput
        name="description"
        label="Short Description"
        placeholder="type a description"
      />
    </BaseFormFieldset>
    <BaseFormFieldset label="Choose supplier">
      <DishesModalCreateSuppliersList name="supplier" />
    </BaseFormFieldset>
    <BaseFormFieldset label="Food category">
      <BaseFormRow :cols="3">
        <BaseFormCheckbox
          v-for="foodCategory in foodCategories"
          :key="foodCategory.id"
          name="foodCategory"
          :label="foodCategory.name"
          :value="foodCategory.id"
        />
        <p class="dishes-form-create__error-feedback">
          {{ errors.foodCategory }}
        </p>
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

  &__error-feedback {
    font-size: var(--fs-sm);
    color: var(--clr-red-400);
    line-height: var(--lh-xs);
  }

  & > h3 {
    font-size: var(--fs-lg);
    margin-bottom: var(--space-lg);
  }
}
</style>
