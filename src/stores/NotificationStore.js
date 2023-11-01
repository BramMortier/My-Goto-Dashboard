import { defineStore } from "pinia";
import { ref } from "vue";

export const useNotificationStore = defineStore("notification", () => {
  const notifications = ref([]);

  const addNotification = ({ title, message, type, removeDelay }) => {
    notifications.value.push({ title, message, type, removeDelay });

    setTimeout(() => {
      notifications.value.shift();
    }, removeDelay);
  };

  return { notifications, addNotification };
});
