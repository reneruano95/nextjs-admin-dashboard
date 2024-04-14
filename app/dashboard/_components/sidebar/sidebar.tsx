"use client";

import { cn } from "@/lib/utils";
import NewButton from "./new-button";

export default function Sidebar() {
  return (
    <aside
      className={cn(
        "bg-blue-950 w-[60px] p-3 hidden lg:flex flex-col gap-y-4 text-white"
      )}
    >
      <NewButton />
    </aside>
  );
}
