"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { AuthSchema } from "../types/schemas";

export async function login(data: AuthSchema): Promise<string> {
  const supabase = createClient();

  if (!supabase) {
    throw new Error("Client is null");
  }

  if (!data.email || !data.password) {
    throw new Error("Required form data missing");
  }

  let result;

  try {
    result = await supabase.auth.signInWithPassword(data);
  } catch (error) {
    throw new Error("Failed to sign in with password");
  }

  if (!result) {
    throw new Error("Authentication result is null");
  }

  return JSON.stringify(result);
}

export async function logout() {
  const client = createClient();
  if (!client) {
    throw new Error("client is null");
  }

  try {
    await client.auth.signOut();
  } catch (error) {
    throw error;
  }

  return redirect("/login");
}

export async function readUserSession() {
  const supabase = createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login");
  }

  if (user) {
    revalidatePath("/dashboard", "layout");
  }

  return user;
}
