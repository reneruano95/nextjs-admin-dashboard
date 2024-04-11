import { useUserStore } from "@/lib/store/user";
import LogoutButton from "./_components/logout-button";

export default async function DashboardPage() {
  const user = useUserStore.getState().user;

  return (
    <div>
      <h1>Dashboard page</h1>
      <p>This is the dashboard page</p>
      <p>Hello {user?.email}</p>

      <LogoutButton />
    </div>
  );
}
