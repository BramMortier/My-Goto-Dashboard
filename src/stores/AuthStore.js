import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "@plugins/supabase";
import { computed } from "vue";

const user = ref(null);

export const useAuthStore = defineStore("auth", () => {
  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, user.value);
    user.value = session?.user ?? null;
  });

  const isAuthenticated = computed(() => user.value !== null);

  const register = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return [null, error];
    return [data, null];
  };

  const login = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return [null, error];
    return [data, null];
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) return [null, error];
  };

  return { user, isAuthenticated, register, login, logout };
});
