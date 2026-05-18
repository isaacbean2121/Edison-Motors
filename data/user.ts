import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findUnique({ where: { email } });
        return user;

    } catch {
        return null;
    }
};

export const getUserById = async (id: string) => {
    try {
        const user = await db.user.findUnique({ where: { id } });
        return user;
        
    } catch {
        return null;
    }
};

export const getAllUsers = async () => {
    try {
        return await db.user.findMany({
            orderBy: { email: "asc" },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                emailVerified: true,
                isTwoFactorEnabled: true,
            },
        });
    } catch {
        return [];
    }
};