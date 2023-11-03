import { supabase } from "@plugins/supabase";
import { useAuthStore } from "@stores/AuthStore";
import { storeToRefs } from "pinia";

export const getAllUsers = async () => {
  const { data: getAllUsersData, error: getAllUsersError } = await supabase
    .from("user_profiles")
    .select("*, roles ( name ) ");

  if (getAllUsersError) return { data: null, error: getAllUsersError };

  return { data: getAllUsersData, error: null };
};

export const getUserById = async (userId) => {
  const { data: getUserByIdData, error: getUserByIdError } = await supabase
    .from("user_profiles")
    .select(" *, roles ( name ) ")
    .eq("id", userId)
    .single();

  if (getUserByIdError) return { data: null, error: getUserByIdError };

  return { data: getUserByIdData, error: null };
};

export const getAuthenticatedUser = async () => {
  const { user } = storeToRefs(useAuthStore());

  const { data: getAuthenticatedUserData, error: getAuthenticatedUserError } =
    await getUserById(user.value.id);

  if (getAuthenticatedUserError)
    return { data: null, error: getAuthenticatedUserError };

  return { data: getAuthenticatedUserData, error: null };
};

export const createUser = async ({ userId, firstname, lastname, email }) => {
  const { data: createUserData, error: createUserError } = await supabase
    .from("user_profiles")
    .insert({
      id: userId,
      firstname: firstname,
      lastname: lastname,
      email: email,
    })
    .select();

  if (createUserError) return { data: null, error: createUserError };

  return { data: createUserData, error: null };
};

export const assignUserRole = async ({ userId, roleId }) => {
  const { data: assignUserRoleData, error: assignUserRoleError } =
    await supabase
      .from("user_roles")
      .insert({ user_id: userId, role_id: roleId });

  if (assignUserRoleError) return { data: null, error: assignUserRoleError };

  return { data: assignUserRoleData, error: null };
};

export const updateUser = async (userData) => {
  // ignore for now
};

export const deleteUser = async (userId) => {
  const { error: deleteUserError } = await supabase
    .from("user_profiles")
    .delete()
    .eq("id", userId);

  if (deleteUserError)
    return {
      data: { message: "User succesfully deleted" },
      error: deleteUserError,
    };
};
