"use server";

import * as z from "zod";
import { revalidatePath } from "next/cache";
import { UserRole } from "@/lib/roles";

import { db } from "@/lib/db";
import { currentRole } from "@/lib/auth";

const UpdateRoleSchema = z.object({
  userId: z.string().min(1),
  role: z.nativeEnum(UserRole),
});

export const updateUserRole = async (
  values: z.infer<typeof UpdateRoleSchema>
) => {
  const role = await currentRole();
  if (role !== UserRole.ADMIN) {
    return { error: "Forbidden" };
  }

  const validated = UpdateRoleSchema.safeParse(values);
  if (!validated.success) {
    return { error: "Invalid fields" };
  }

  const { userId, role: newRole } = validated.data;

  await db.user.update({
    where: { id: userId },
    data: { role: newRole },
  });

  revalidatePath("/settings");
  return { success: "Role updated" };
};
