import { supabase } from "@plugins/supabase";
import { createUser } from "@services/userService";

export const register = async ({ firstname, lastname, email, password }) => {
  const { data: registerData, error: registerError } =
    await supabase.auth.signUp({
      email: email,
      password: password,
    });

  if (registerError) return { data: null, error: registerError };

  if (registerData.user) {
    const userId = registerData.user.id;

    const { data: createUserData, error: createUserError } = await createUser({
      userId,
      firstname,
      lastname,
      email,
    });

    if (createUserError) return { data: null, error: createUserError };

    return { data: createUserData, error: null };
  } else {
    return { data: null, error: "Failed to extract userId" };
  }
};

export const login = async ({ email, password }) => {
  const { data: loginData, error: loginError } =
    await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

  if (loginError) return { data: null, error: loginError };

  return { data: loginData, error: null };
};

export const logout = async () => {
  const { error: signOutError } = await supabase.auth.signOut();

  if (signOutError) return { data: null, error: signOutError };

  return { data: "logout succes", error: null };
};
