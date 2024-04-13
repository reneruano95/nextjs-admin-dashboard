import { useUserStore } from "@/lib/store/user";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import OrgSidebar from "./_components/org-sidebar";
import Sidebar from "./_components/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
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
    revalidatePath("/dashboard", "layout");
  }

  return (
    <div className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex  h-full">
          <OrgSidebar />
          <main className="flex-1 h-full overflow-y-auto">
            {/* navbar */}
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
