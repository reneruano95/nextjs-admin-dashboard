import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import LogoutButton from "./_components/logout-button";

export default async function DashboardPage() {
  const supabase = createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/");
  }

  return (
    <div>
      <h1>Dashboard page</h1>
      <p>This is the dashboard page</p>
      <p>Hello {user.email}</p>

      <LogoutButton />
    </div>
  );
}
