"use server";

import { signOut } from "@/auth";

export const logout = async () => {
    // add some server stuff here that you want to happen before user is logged out

    await signOut();
};