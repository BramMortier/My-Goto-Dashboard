<script setup>
import { RouterView } from "vue-router";
import { supabase } from "@plugins/supabase";
import { useAuthStore } from "@stores/AuthStore";
import { storeToRefs } from "pinia";

import TheModalWindow from "@components/TheModalWindow.vue";

const { user } = storeToRefs(useAuthStore());

supabase.auth.onAuthStateChange((event, session) => {
  user.value = session?.user || null;
});

import "@styles/index.scss";
</script>

<template>
  <TheModalWindow />
  <component :is="$route.meta.layout || 'div'">
    <RouterView />
  </component>
</template>

<style lang="scss" scoped></style>
