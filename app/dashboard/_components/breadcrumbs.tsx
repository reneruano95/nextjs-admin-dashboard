"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { lusitana } from "@/components/fonts";

export default function Breadcrumbs() {
  const path = usePathname();
  const pathname = path?.split("/").filter((path) => path !== "");

  const breadcrumbs = pathname.map((path, index) => {
    const href = `/${pathname.slice(0, index + 1).join("/")}`;
    const label = path.charAt(0).toUpperCase() + path.slice(1);

    return {
      href,
      label: label,
      active: index === pathname.length - 1,
    };
  });

  return (
    <nav aria-label="Breadcrumb" className="mb-4 block">
      <ol className={cn(lusitana.className, "flex text-xl md:text-2xl")}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={cn(
              breadcrumb.active ? "text-gray-900" : "text-gray-500"
            )}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
