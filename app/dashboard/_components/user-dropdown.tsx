import {
  ChevronsLeftRight,
  LogOut,
  Plus,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { logout } from "@/lib/actions/auth";
import { useUserStore } from "@/lib/store/user";

export default function UserDropdown() {
  const user = useUserStore.getState().user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex items-center justify-between text-sm gap-2 px-3 py-2 w-full hover:bg-neutral-200 dark:hover:bg-neutral-700"
        >
          <div className="gap-2 flex items-center max-w-[150px]">
            <Avatar className="w-8 h-8">
              <AvatarImage
                src={
                  user?.user_metadata?.avatar_url ||
                  "https://github.com/shadcn.png"
                }
                alt={user?.user_metadata?.full_name}
              />
              <AvatarFallback className="bg-neutral-100 dark:bg-neutral-700">
                {user?.user_metadata?.full_name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <span className="text-start font-medium line-clamp-1">
              {user?.user_metadata?.full_name || "John Doe"}
            </span>
          </div>

          <ChevronsLeftRight className="rotate-90 ml-2 h-4 w-4" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-80" align="center" forceMount>
        <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Organizations</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <UserPlus className="mr-2 h-4 w-4" />
            <span>New User</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>New Organization</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => logout()}>
          <LogOut className="mr-1 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
