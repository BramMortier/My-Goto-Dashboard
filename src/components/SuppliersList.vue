<script setup>
import { useModalStore } from "@stores/ModalStore";

import SuppliersListCardCreate from "@components/SuppliersListCardCreate.vue";
import SuppliersModalCreate from "@components/SuppliersModalCreate.vue";
import BaseButton from "@components/BaseButton.vue";

const { openModal } = useModalStore();
</script>

<template>
  <div class="suppliers-list__container">
    <h3>Suppliers</h3>
    <BaseButton
      @click="openModal({ component: SuppliersModalCreate })"
      stretch="fit-content"
      >Add a supplier</BaseButton
    >
    <ul class="suppliers-list">
      <SuppliersListCardCreate />
      <li class="suppliers-list-card">
        <div class="suppliers-list-card__supplier-logo">
          <img
            src="@assets/images/suppliers/farmers-fridge-logo.png"
            alt="supplier logo"
          />
        </div>
        <div class="suppliers-list-card__info">
          <h4>Farmer's Fridge</h4>

          <div class="suppliers-list-card__contact-info">
            <div class="suppliers-list-card__contact-info-entry">
              <p>Phone number:</p>
              <span>+45 83 45 67 89</span>
            </div>
            <div class="suppliers-list-card__contact-info-entry">
              <p>E-mail address:</p>
              <span>orders@farmersfridge.com</span>
            </div>
          </div>
        </div>
      </li>
      <li class="suppliers-list-card">
        <div class="suppliers-list-card__supplier-logo">
          <img
            src="@assets/images/suppliers/freshly-logo.png"
            alt="supplier logo"
          />
        </div>
        <div class="suppliers-list-card__info">
          <h4>Freshly</h4>

          <div class="suppliers-list-card__contact-info">
            <div class="suppliers-list-card__contact-info-entry">
              <p>Phone number:</p>
              <span>+45 50 12 34 56</span>
            </div>
            <div class="suppliers-list-card__contact-info-entry">
              <p>E-mail address:</p>
              <span>orders@freshly.com</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.suppliers-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);

  &__container {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    padding: var(--space-md);
    background-color: var(--clr-white);
    border-bottom: 2px solid var(--clr-green-400);
    max-width: var(--container-width-lg);

    & > h3 {
      margin-bottom: var(--space-lg);
      font-size: var(--fs-lg);
      color: var(--clr-black);
    }
  }
}

.suppliers-list-card {
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

    .suppliers-list-card {
      &__supplier-logo {
        background-color: var(--clr-gray-300);
      }
    }
  }

  &__supplier-logo {
    width: 100%;
    height: 6.25rem;
    background-color: var(--clr-gray-100);
    border-radius: var(--border-radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-xs);
    transition: var(--hover-transition);
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

    & > span {
      color: var(--clr-gray-700);
    }
  }
}
</style>
