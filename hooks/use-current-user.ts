// this hook is used to get the current user from the session so we dont have to write this
// code in every component that needs the current user

import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
    const session = useSession();
    return session.data?.user;
}