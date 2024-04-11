"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  if (!data.email || !data.password) {
    throw new Error("Required form data missing");
  }

  let result;
  try {
    result = await supabase.auth.signInWithPassword(data);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error("Unknown error");
    }
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
    console.error(error);
    throw error;
  }

  return redirect("/login");
}

// export async function readUserSession() {
//   const supabase = createClient();

//   return await supabase.auth.getUser();
// }
