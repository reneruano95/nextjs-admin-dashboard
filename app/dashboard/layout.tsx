import { ReactNode } from "react";

import Sidebar from "./_components/sidebar";
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
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex flex-1 flex-col">
          <Navbar />
          {children}
        </main>
      </div>
    </AppInitializer>
  );
}
