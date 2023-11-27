<script setup>
import BaseRightClickMenuOption from "@components/BaseRightClickMenuOption.vue";

const props = defineProps({
  Allergy: Object,
});
</script>

<template>
  <div class="allergies-action-menu">
    <BaseRightClickMenuOption>
      <img
        class="allergies-action-menu__option-icon"
        src="@assets/icons/pen.svg"
        alt="edit icon"
      />
      <p>Edit allergy</p>
    </BaseRightClickMenuOption>
    <BaseRightClickMenuOption>
      <img
        class="allergies-action-menu__option-icon"
        src="@assets/icons/trash.svg"
        alt="delete icon"
      />
      <p>Delete allergy</p>
    </BaseRightClickMenuOption>
  </div>
</template>

<style lang="scss" scoped>
.allergies-action-menu {
  &__option-icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>
