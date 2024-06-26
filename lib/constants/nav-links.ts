import {
  BadgeDollarSign,
  Building2,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";

export const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    name: "Payments",
    href: "/dashboard/payments",
    icon: BadgeDollarSign,
  },
  {
    name: "Users",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    name: "Organizations",
    href: "/dashboard/organizations",
    icon: Building2,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
