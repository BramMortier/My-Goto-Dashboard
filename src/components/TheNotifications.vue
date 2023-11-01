<script setup>
import { useNotificationStore } from "@stores/NotificationStore";
import { storeToRefs } from "pinia";

import TheNotificationMessage from "@components/TheNotificationMessage.vue";

const { notifications } = storeToRefs(useNotificationStore());
</script>

<template>
  <Teleport to="#notifications">
    <ul class="notifications">
      <TransitionGroup name="notification-transition">
        <TheNotificationMessage
          v-for="(notificationConfig, index) in notifications"
          :key="index"
          :config="notificationConfig"
        />
      </TransitionGroup>
    </ul>
  </Teleport>
</template>

<style lang="scss" scoped>
.notifications {
  position: fixed;
  bottom: var(--space-xl);
  right: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  z-index: 999;
}

.notification-transition-enter-from,
.notification-transition-leave-to {
  transform: translate(200%);
  opacity: 0;
}

.notification-transition-enter-active,
.notification-transition-leave-active {
  transition: 0.25s ease all;
}
</style>
