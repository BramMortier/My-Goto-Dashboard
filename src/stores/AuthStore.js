import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "@plugins/supabase";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);

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
    if (error) return [error];
    return [null];
  };

  const isAuthenticated = () => {
    return user.value !== null;
  };

  return { user, isAuthenticated, register, login, logout };
});
