"use client";

import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

export default function Navbar() {
  return (
    <nav
      className={cn(
        "w-full bg-neutral-100 flex px-3 py-2 align-middle items-center"
      )}
    >
      <MenuIcon
        role="button"
        className="block lg:hidden h-6 w-6 rounded-sm hover:bg-neutral-200"
        onClick={() => {
          document.getElementById("toggle-sidebar")?.click();
        }}
      />

      <div className="flex-1 flex justify-end">
        <p className="">Navbar</p>
      </div>
    </nav>
  );
}
