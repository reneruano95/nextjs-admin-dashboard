"use client";

import { createClient } from "@/lib/supabase/client";
import { logout } from "./actions";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  return (
    <div>
      <h1>Dashboard page</h1>
      <p>This is the dashboard page</p>
      <p>Hello {data.user.email}</p>
      <button onClick={() => logout()} className="bg-red-500">
        Logout
      </button>
    </div>
  );
}
