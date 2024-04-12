import { createClient } from "@/lib/supabase/server";
import AuthForm from "./_components/auth-form";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function LoginPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className=" flex min-h-screen flex-col items-center justify-center">
      <AuthForm />
    </div>
  );
}
