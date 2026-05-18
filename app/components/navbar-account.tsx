"use client";

import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";

export function NavBarAccount() {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="/settings"
        className="hidden px-3 py-2 text-sm hover:rounded custom-underline md:block"
      >
        Management
      </Link>
      <Link
        href="/settings"
        className="flex cursor-pointer items-center px-3 py-2 hover:rounded custom-underline"
      >
        <PersonIcon />
        <span className="ml-1">Account</span>
      </Link>
    </div>
  );
}
