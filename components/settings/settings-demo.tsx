"use client";

import { useState } from "react";
import { UserRole } from "@/lib/roles";
import type { ExtendedUser } from "@/next-auth";
import { UserInfo } from "@/components/user-info";
import { UserManagement } from "@/components/settings/user-management";

const initialUser: ExtendedUser = {
  id: "demo-admin",
  name: "Demo Admin",
  email: "admin@edison.local",
  role: UserRole.ADMIN,
  isTwoFactorEnabled: false,
};

const initialUsers = [
  {
    id: "demo-admin",
    name: "Demo Admin",
    email: "admin@edison.local",
    role: UserRole.ADMIN,
  },
  {
    id: "demo-sales",
    name: "Demo Sales",
    email: "sales@edison.local",
    role: UserRole.SALES,
  },
  {
    id: "demo-tech",
    name: "Demo Tech",
    email: "tech@edison.local",
    role: UserRole.TECH,
  },
];

export function SettingsDemo() {
  const [users, setUsers] = useState(initialUsers);

  const handleRoleChange = (userId: string, role: UserRole) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === userId ? { ...u, role } : u))
    );
  };

  return (
    <main className="min-h-screen bg-neutral-100 pt-24 pb-12 px-4">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Management</h1>
          <p className="mt-1 text-gray-600">
            Demo UI — browse employee roles (changes are local only)
          </p>
        </div>

        <UserInfo user={initialUser} label="Your account" />
        <UserManagement
          users={users}
          currentUserId={initialUser.id}
          onRoleChange={handleRoleChange}
        />
      </div>
    </main>
  );
}
