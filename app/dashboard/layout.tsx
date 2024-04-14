import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import OrgSidebar from "./_components/org-sidebar";
import Sidebar from "./_components/sidebar/sidebar";
import Navbar from "./_components/navbar";
import AppInitializer from "@/lib/providers/user-store-provider";
import { readUserSession } from "@/lib/actions/auth";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await readUserSession();

  return (
    <AppInitializer user={user}>
      <div className="h-full flex">
        <Sidebar />
        <div className="flex-1 h-full flex">
          <OrgSidebar />
          <main className="flex flex-1 flex-col h-full ">
            <Navbar />
            {children}
          </main>
        </div>
      </div>
    </AppInitializer>
  );
}
