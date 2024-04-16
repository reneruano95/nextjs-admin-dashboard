"use client";

import { useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import ContentOrgSidebar from "./content-sidebar";

export default function Sidebar() {
  return (
    <>
      <aside
        className={cn(
          "hidden lg:flex lg:flex-col group/sidebar gap-4 bg-white p-6 shadow-lg w-3/4 sm:max-w-sm"
        )}
      >
        <ContentOrgSidebar />
      </aside>
      <MobileSidebar />
    </>
  );
}

export function MobileSidebar() {
  useEffect(() => {
    window.addEventListener("resize", (e: UIEvent) => {
      const w = e.target as Window;
      if (w.innerWidth >= 1024) {
        document.getElementById("sidebar-close")?.click();
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild id="toggle-sidebar">
        <span></span>
      </SheetTrigger>
      <SheetContent className="flex flex-col group/sidebar bg-neutral-100">
        <ContentOrgSidebar />
      </SheetContent>
    </Sheet>
  );
}
