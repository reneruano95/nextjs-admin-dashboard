import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { links } from "@/lib/constants/nav-links";
import UserDropdown from "./user-dropdown";

export default function ContentOrgSidebar() {
  const pathname = usePathname();

  return (
    <div>
      <div className="flex items-center justify-between hover:bg-neutral-200">
        <UserDropdown />
      </div>

      <div className="mt-4">
        {links.map((link) => (
          <Link
            onClick={() => {
              document.getElementById("sidebar-close")?.click();
            }}
            key={link.name}
            href={link.href}
            className={cn(
              "flex items-center px-3 py-2 hover:bg-neutral-200",
              pathname === link.href ? "bg-neutral-200" : ""
            )}
          >
            <link.icon className="h-4 w-4 mr-2" />
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
