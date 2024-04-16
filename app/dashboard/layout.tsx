import { ReactNode } from "react";

import AppInitializer from "@/lib/providers/user-store-provider";
import { readUserSession } from "@/lib/actions/auth";
import Breadcrumbs from "./_components/breadcrumbs";
import SideNav from "./_components/sidenav";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await readUserSession();

  return (
    <AppInitializer user={user}>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          <Breadcrumbs />
          {children}
        </div>
      </div>
    </AppInitializer>
  );
}
