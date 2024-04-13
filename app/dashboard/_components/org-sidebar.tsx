"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import UserItem from "./user-item";

export default function OrgSidebar() {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"nav">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    if (isMobile) {
      collapseSidebar();
    } else {
      resetWidth();
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapseSidebar();
    }
  }, [pathname, isMobile]);

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "100%" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : " 240px");
    }

    setTimeout(() => {
      setIsResetting(false);
    }, 300);
  };

  const collapseSidebar = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "60px");

      setTimeout(() => {
        setIsResetting(false);
      }, 300);
    }
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar bg-neutral-100 overflow-y-auto relative flex w-64 flex-col",
          isResetting && "transition-all duration-300 ease-in-out",
          isMobile && "w-[calc(100%-60px)]"
        )}
      >
        <div className="flex items-center justify-between hover:bg-neutral-200">
          <UserItem />
          <div
            onClick={collapseSidebar}
            role="button"
            className={cn(
              "h-6 w-6 me-3 rounded-sm hover:bg-neutral-300 opacity-0 group-hover/sidebar:opacity-100 transition",
              isMobile && "opacity-100"
            )}
          >
            <ChevronLeft className="h-6 w-6" />
          </div>
        </div>

        <div>
          <p className="mt-4">Content</p>
        </div>

        <div className="opacity-0 group-hover/sidebar:opacity-100 transition  absolute h-full w-1  right-0 bg-neutral-900/10 top-0" />
      </aside>

      <nav
        ref={navbarRef}
        className={cn(
          "absolute top-0  left-[60px] w-[calc(100%-240px)] ",
          isResetting && "transition-all duration-300 ease-in-out",
          isMobile && "w-full left-0"
        )}
      >
        <div className="bg-transparent px-3 py-2 w-full">
          {isCollapsed && (
            <MenuIcon
              role="button"
              onClick={resetWidth}
              className="h-6 w-6 rounded-sm hover:bg-neutral-200"
            />
          )}
        </div>
      </nav>
    </>
  );
}
