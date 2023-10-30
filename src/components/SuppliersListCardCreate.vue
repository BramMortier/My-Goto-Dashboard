<script setup></script>

<template>
  <li class="suppliers-list-card-create">
    <div class="suppliers-list-card-create__action-icon">
      <img src="@assets/icons/plus.svg" alt="action icon" />
    </div>
    <div class="suppliers-list-card-create__info">
      <h4>Add a supplier</h4>

      <div class="suppliers-list-card-create__contact-info">
        <div class="suppliers-list-card-create__contact-info-entry">
          <p>Phone number:</p>
          <span>+45 83 45 67 89</span>
        </div>
        <div class="suppliers-list-card-create__contact-info-entry">
          <p>E-mail address:</p>
          <span>orders@farmersfridge.com</span>
        </div>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.suppliers-list-card-create {
  display: grid;
  grid-template-columns: 7.5rem 1fr;
  gap: var(--space-md);
  width: 100%;
  padding-bottom: var(--space-md);
  border-bottom: 1px solid var(--clr-gray-500);
  transition: var(--hover-transition);
  cursor: pointer;

  &:hover {
    border-color: var(--clr-gray-700);

    .suppliers-list-card-create {
      &__action-icon {
        background-color: var(--clr-gray-300);
      }

      &__contact-info-entry p,
      &__contact-info-entry span {
        color: var(--clr-gray-300);
        background-color: var(--clr-gray-300);
      }
    }
  }

  &__action-icon {
    width: 100%;
    height: 6.25rem;
    background-color: var(--clr-gray-100);
    border-radius: var(--border-radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--hover-transition);

    & > img {
      height: 2rem;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    & > h4 {
      font-weight: var(--fw-semibold);
    }
  }

  &__contact-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  &__contact-info-entry {
    display: flex;
    justify-content: space-between;
    line-height: var(--lh-xs);

    & > p {
      background-color: var(--clr-gray-100);
      color: var(--clr-gray-100);
      border-radius: var(--border-radius-sm);
      transition: var(--hover-transition);
    }

    & > span {
      background-color: var(--clr-gray-100);
      color: var(--clr-gray-100);
      border-radius: var(--border-radius-sm);
      transition: var(--hover-transition);
    }
  }
}
</style>
