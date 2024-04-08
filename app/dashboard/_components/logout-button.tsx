"use client";

import { Button } from "@/components/ui/button";
import { logout } from "../actions";

export default function LogoutButton() {
  return (
    <div>
      <Button onClick={() => logout()} variant={"destructive"}>
        Logout
      </Button>
    </div>
  );
}
