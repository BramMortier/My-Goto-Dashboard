<script setup>
import { ref } from "yup";

const props = defineProps({
  locationType: String,
});

const locationType = ref(props.locationType);
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
