<script setup>
const props = defineProps({
  config: Object,
});
</script>

<template>
  <li class="notification" :class="[`notification--${props.config.type}`]">
    <div class="notification__symbol">
      <img
        v-if="props.config.type === 'error'"
        src="@assets/icons/circle-exclamation-mark.svg"
        alt="notification symbol"
      />
      <img
        v-if="props.config.type === 'succes'"
        src="@assets/icons/circle-check-mark.svg"
        alt="notification symbol"
      />
    </div>
    <div class="notification__main">
      <h4>{{ props.config.title }}</h4>
      <p>{{ props.config.message }}</p>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.notification {
  display: flex;
  gap: var(--space-md);
  padding: var(--space-sm);
  background-color: var(--clr-white);
  border-bottom: 2px solid var(--clr-green-400);
  min-width: 12.5rem;

  &__symbol {
    background-color: var(--clr-green-100);
    border-radius: var(--border-radius-md);
    height: 48px;
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 32px;
      width: fit-content;
      filter: invert(55%) sepia(15%) saturate(829%) hue-rotate(65deg)
        brightness(93%) contrast(94%);
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--space-sm);
    line-height: var(--lh-xs);

    & > h4 {
      font-weight: var(--fw-medium);
    }
  }

  &--error {
    border-color: var(--clr-red-400);

    .notification {
      &__symbol {
        background-color: var(--clr-red-100);

        img {
          filter: invert(41%) sepia(23%) saturate(927%) hue-rotate(295deg)
            brightness(93%) contrast(87%);
        }
      }
    }
  }
}
</style>
