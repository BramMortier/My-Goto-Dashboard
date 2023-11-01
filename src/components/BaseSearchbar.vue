<script setup></script>

<template>
  <div class="searchbar">
    <div class="searchbar__icon">
      <img src="@assets/icons/search.svg" alt="searchbar icon" />
    </div>
    <input type="text" placeholder="Search all users" />
  </div>
</template>

<style lang="scss" scoped>
.searchbar {
  display: flex;

  &__icon {
    background-color: var(--clr-yellow-400);
    border-top-left-radius: var(--border-radius-md);
    border-bottom-left-radius: var(--border-radius-md);
    height: 2.75rem;
    width: 2.75rem;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
      height: 1.25rem;
      width: fit-content;
      filter: invert(33%) sepia(84%) saturate(402%) hue-rotate(355deg)
        brightness(98%) contrast(92%);
    }
  }

  & > input {
    border: none;
    outline: none;
    width: 100%;
    font-size: var(--fs-sm);
    border-top-right-radius: var(--border-radius-md);
    border-bottom-right-radius: var(--border-radius-md);

    padding-inline: var(--space-md);
    background-color: var(--clr-gray-100);

    &::placeholder {
      color: var(--clr-gray-500);
    }
  }
}
</style>
