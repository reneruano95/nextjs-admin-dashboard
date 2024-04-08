"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function logout() {
  console.log("Logout function invoked");
  const client = createClient();

  console.log("Attempting to sign out...");
  await client.auth
    .signOut()
    .then(() => console.log("Successfully signed out"))
    .catch((error) => console.error("Error signing out", error));

  console.log("Revalidating login page...");
  revalidatePath("/login", "page");
  console.log("Redirecting to login page...");
  redirect("/login");
}
