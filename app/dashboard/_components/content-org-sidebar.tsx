import UserDropdown from "./user-dropdown";

export default function ContentOrgSidebar() {
  return (
    <div>
      <div className="flex items-center justify-between hover:bg-neutral-200">
        <UserDropdown />
      </div>

      <div>
        <p className="mt-4 px-3">Content</p>
      </div>

      <div className="opacity-0 group-hover/sidebar:opacity-100 transition  absolute h-full w-1  right-0 bg-neutral-900/10 top-0" />
    </div>
  );
}
