import AuthForm from "./_components/auth-form";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function LoginPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <AuthForm />
    </div>
  );
}
