## General info

#### Importing files & components

When importing files or components always use aliases to do so. We have defined an alias for each root directory within the src folder. This is a summary: **@, @assets, @components, @helpers, @layouts, @pages, @plugins, @router, @stores, @styles**.

#### Single file components structure and conventions

```vue
<script setup>
// always use the script setup syntax & composition API

// TODO add order for imports and other things such as: props, refs, computed values, lifecycle events etc...
</script>

<template>
  <div>components</div>
</template>

<style lang="scss" scoped>
// Always make use of scoped styles and SCSS for styling

// BEM syntax
</style>
```

## Dependencies

#### SCSS

The project uses SCSS for styling together with BEM syntax to make the stylesheets consistent and straightforward.

###### Example usage

```vue
<template>
  <section class="parent">
    <div class="parent__section">...</div>
    <div class="parent__section--inverted">...</div>
  </section>
</template>
```

```scss
.parent {
  // parent styling

  &__section {
    // parent child component styling

    &--inverted {
      // parent child variation styling
    }
  }
}
```

#### Vue Router

For routing with the `vue-router` package the project uses the following conventions

```js
[
  {
    path: "/",
    name: "OverviewDashboardPage",
    meta: { layout: SidebarLayout },
    component: () => import("@pages/OverviewDashboardPage.vue"),
  },
  {
    path: "/login", // lowercase using dashes for spaces
    name: "LoginPage", // PascalCasing
    meta: { layout: EmptyLayout }, // Define The layout component for this route
    component: () => import("@pages/LoginPage.vue"), // Use dynamic imports for importing route components
  },
];
```

#### Pinia

Global state management with stores

#### Vee Validate & Yup

In combination these packages provide easy and consistent form handling and validation.

#### Supabase

Backend As A Service where the project makes use of the following features:

- PostgreSQL database
- Authentication & Authorization
- Storage buckets
