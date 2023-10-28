<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="sidebar-navigation">
    <h4>Dashboard Shortcuts</h4>
    <h5>Overviews</h5>
    <ul class="sidebar-navigation__links-list">
      <li
        class="sidebar-navigation__link-list-item sidebar-navigation__link-list-item--active"
      >
        <RouterLink to="#" class="sidebar-navigation__link">
          <img
            src="@assets/icons/vending-machine-v3.svg"
            alt="navigation link icon (vending machine)"
          />
          <p>Machines</p>
        </RouterLink>
      </li>
      <li class="sidebar-navigation__link-list-item">
        <RouterLink to="#" class="sidebar-navigation__link">
          <img
            src="@assets/icons/warehouse.svg"
            alt="navigation link icon (warehouse)"
          />
          <p>Warehouse</p>
        </RouterLink>
      </li>
      <li class="sidebar-navigation__link-list-item">
        <RouterLink to="#" class="sidebar-navigation__link">
          <img
            src="@assets/icons/truck.svg"
            alt="navigation link icon (truck)"
          />
          <p>Outbound deliveries</p>
        </RouterLink>
      </li>
    </ul>
    <h5>Master data</h5>
    <ul class="sidebar-navigation__links-list">
      <li class="sidebar-navigation__link-list-item">
        <RouterLink to="#" class="sidebar-navigation__link">
          <img
            src="@assets/icons/crate.svg"
            alt="navigation link icon (crate)"
          />
          <p>Dishes & suppliers</p>
        </RouterLink>
      </li>
      <li class="sidebar-navigation__link-list-item">
        <RouterLink to="#" class="sidebar-navigation__link">
          <img
            src="@assets/icons/pin.svg"
            alt="navigation link icon (map pin)"
          />
          <p>Locations</p>
        </RouterLink>
      </li>
      <li class="sidebar-navigation__link-list-item">
        <RouterLink to="#" class="sidebar-navigation__link">
          <img
            src="@assets/icons/allergies.svg"
            alt="navigation link icon (allergies)"
          />
          <p>Allergies</p>
        </RouterLink>
      </li>
      <li class="sidebar-navigation__link-list-item">
        <RouterLink to="#" class="sidebar-navigation__link">
          <img
            src="@assets/icons/users.svg"
            alt="navigation link icon (users)"
          />
          <p>Users</p>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.sidebar-navigation {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);

  & > h5 {
    text-transform: uppercase;
    color: var(--clr-gray-700);
    font-weight: var(--fw-regular);
    font-size: var(--fs-sm);
  }

  & > h4 {
    text-decoration: underline;
    font-weight: var(--fs-regular);
  }

  &__links-list {
    display: flex;
    flex-direction: column;
  }

  &__link-list-item {
    transition: all ease 0.15s;
    border-radius: var(--border-radius-md);

    &:not(&--active):hover {
      background-color: var(--clr-gray-100);
    }

    &--active {
      background-color: var(--clr-green-400);

      p {
        color: var(--clr-white);
      }

      & a > img {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(1deg)
          brightness(105%) contrast(101%);
      }
    }
  }

  &__link {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding-inline: var(--space-md);
    min-height: 2.75rem;
    border: var(--border-radius-md);

    & > img {
      height: 1.5rem;
      width: 1.5rem;
      filter: invert(30%) sepia(0%) saturate(121%) hue-rotate(167deg)
        brightness(102%) contrast(90%);
    }
  }
}
</style>
