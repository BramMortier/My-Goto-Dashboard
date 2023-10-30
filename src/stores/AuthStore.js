import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "@plugins/supabase";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);

  const register = async ({ firstname, lastname, email, password }) => {
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      { email, password }
    );

    if (signUpError) return [null, signUpError];

    if (signUpData.user) {
      const userUUID = signUpData.user.id;

      const { error: userProfilesInsertError } = await supabase
        .from("user_profiles")
        .insert({ id: userUUID, firstname, lastname, email });

      if (userProfilesInsertError) return [userProfilesInsertError];

      return [null];
    } else {
      return [null, "Failed to extract UUID"];
    }
  };

  const login = async ({ email, password }) => {
    const { data: loginData, error: loginError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });
    if (loginError) return [null, loginError];
    return [loginData, null];
  };

  const logout = async () => {
    const { error: signOutError } = await supabase.auth.signOut();
    if (signOutError) return [signOutError];
    return [null];
  };

  const isAuthenticated = () => {
    return user.value !== null;
  };

  return { user, isAuthenticated, register, login, logout };
});
