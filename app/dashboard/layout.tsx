import { useUserStore } from "@/lib/store/user";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const supabase = createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login");
  }

  useUserStore.setState({ user: user });
  if (user) {
    revalidatePath("/dashboard");
  }

  return (
    <div className="w-full flex ">
      <div className="w-full">{children}</div>
    </div>
  );
}
