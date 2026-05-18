"use client";

import { useTransition } from "react";
import { UserRole, USER_ROLES } from "@/lib/roles";

import { updateUserRole } from "@/actions/update-user-role";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ManagedUser = {
  id: string;
  name: string | null;
  email: string | null;
  role: UserRole;
};

interface UserManagementProps {
  users: ManagedUser[];
  currentUserId: string;
  onRoleChange?: (userId: string, role: UserRole) => void;
}

const ROLES = USER_ROLES;

export function UserManagement({
  users,
  currentUserId,
  onRoleChange: onRoleChangeProp,
}: UserManagementProps) {
  const [isPending, startTransition] = useTransition();

  const onRoleChange = (userId: string, role: UserRole) => {
    if (onRoleChangeProp) {
      onRoleChangeProp(userId, role);
      return;
    }
    startTransition(async () => {
      await updateUserRole({ userId, role });
    });
  };

  return (
    <Card className="w-full max-w-3xl shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold">Employee management</p>
        <p className="text-sm text-muted-foreground">
          Assign roles for internal staff (Admin, Sales, Tech, User).
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex flex-col gap-2 rounded-lg border p-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-medium">{user.name || "Unnamed"}</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
            <Select
              defaultValue={user.role}
              disabled={isPending || user.id === currentUserId}
              onValueChange={(value) =>
                onRoleChange(user.id, value as UserRole)
              }
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ROLES.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
