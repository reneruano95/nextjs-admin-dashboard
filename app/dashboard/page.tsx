"use client";

import { useUserStore } from "@/lib/store/user";
import LogoutButton from "./_components/logout-button";

export default function DashboardPage() {
  const user = useUserStore.getState().user;

  return (
    <div className="h-full flex flex-1 flex-col items-center justify-center">
      <h1>Dashboard page</h1>
      <p>This is the dashboard page. This a protected page</p>
      <p>Hello {user?.email}</p>
      <LogoutButton />
    </div>
  );
}
