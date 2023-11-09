<script setup>
import { ref, onMounted } from "vue";
import { useField } from "vee-validate";
import { getAllSuppliers } from "@services/supplierService";
import { publicStorageBucketUrl } from "@services/storageService";

const props = defineProps({
  name: String,
});

const suppliers = ref(null);

const { value, errorMessage } = useField(() => props.name);

onMounted(async () => {
  const { data: getAllSuppliersData, error: getAllSuppliersError } =
    await getAllSuppliers();

  suppliers.value = getAllSuppliersData;
});

const handleSupplierChange = (supplier) => {
  value.value = supplier.id;
};
</script>

<template>
  <ul class="dishes-create-suppliers-list">
    <li
      v-for="supplier in suppliers"
      :key="supplier.id"
      class="dishes-create-suppliers-list__card"
      :class="{
        'dishes-create-suppliers-list__card--selected': value === supplier.id,
      }"
      @click="handleSupplierChange(supplier)"
    >
      <img
        :src="publicStorageBucketUrl + supplier.logo_path"
        alt="supplier logo"
      />
    </li>
    <input :name="props.name" type="hidden" />
    <p v-if="errorMessage" class="dishes-create-suppliers-list__error-message">
      {{ errorMessage }}
    </p>
  </ul>
</template>

<style lang="scss" scoped>
.dishes-create-suppliers-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);

  &__card {
    border-radius: var(--border-radius-md);
    background-color: var(--clr-gray-100);
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--hover-transition);

    &:hover {
      cursor: pointer;
      background-color: var(--clr-gray-300);
    }

    &--selected {
      border-color: var(--clr-green-400);
    }

    & > img {
      max-height: 5.25rem;
      max-width: 9.5rem;
    }
  }

  &__error-message {
    font-size: var(--fs-sm);
    color: var(--clr-red-400);
    line-height: var(--lh-xs);
  }
}
</style>
