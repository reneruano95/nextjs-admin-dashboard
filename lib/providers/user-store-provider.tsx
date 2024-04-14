"use client";

import { User } from "@supabase/supabase-js";
import { useUserStore } from "../store/user";

export default function AppInitializer({
  user,
  children,
}: {
  user: User | null;
  children: React.ReactNode;
}) {
  useUserStore.setState({
    user,
  });

  return children;
}
