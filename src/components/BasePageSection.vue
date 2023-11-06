<script setup>
const props = defineProps({
  title: String,
  width: { type: String, default: "md" },
});
</script>

<template>
  <section
    class="page-section"
    :style="{ maxWidth: `var(--container-width-${props.width})` }"
  >
    <h3>{{ title }}</h3>
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
.page-section {
  display: flex;
  flex-direction: column;
  background-color: var(--clr-white);
  border-bottom: 2px solid var(--clr-green-400);
  height: fit-content;

  & > h3 {
    padding: var(--space-md);
    color: var(--clr-black);
    font-size: var(--fs-lg);
  }
}
</style>
