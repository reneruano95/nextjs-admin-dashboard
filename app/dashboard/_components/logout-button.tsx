"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/lib/actions/auth";

export default function LogoutButton() {
  return (
    <div>
      <Button onClick={async () => logout()} variant={"destructive"}>
        Logout
      </Button>
    </div>
  );
}
