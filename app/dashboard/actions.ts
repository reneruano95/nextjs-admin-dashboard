"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function logout() {
  const client = createClient();

  const { error } = await client.auth.signOut();

  if (error) {
    console.error(error);
  }
  revalidatePath("/login", "page");
  redirect("/login");
}
