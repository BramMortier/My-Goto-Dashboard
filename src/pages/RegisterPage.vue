<script setup>
import RegisterForm from "@components/RegisterForm.vue";
</script>

<template>
  <div class="register-page">
    <div class="register-page__content">
      <section class="register-page__welcome-message">
        <img
          src="@assets/icons/logo-horizontal-color.svg"
          alt="horizontal logo colored version"
        />
        <p>Welcome to the My Go-to administration dashboard!</p>
      </section>
      <RegisterForm />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.register-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  &__content {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
  }

  &__welcome-message {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    & > img {
      width: var(--logo-width-md);
    }

    & > p {
      font-size: var(--fs-md);
      max-width: 22.75rem;
    }
  }
}
</style>
