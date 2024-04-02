import authConfig from "./auth.config";

import NextAuth from "next-auth";
import {
    DEFAULT_LOGIN_REDIRECT,
    publicRoutes,
    authRoutes,
    apiAuthPrefix,
} from "@/routes"

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return null;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
        return null;
    }

    if (!isLoggedIn && !isPublicRoute) {
        let callbackUrl = nextUrl.pathname;
        if (nextUrl.search) {
          callbackUrl += nextUrl.search;
        }
        
        const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    
        return Response.redirect(new URL(
          `/auth/login?callbackUrl=${encodedCallbackUrl}`,
          nextUrl
        ));
    }

    return null;
})

// All routes in the below matcher will not invoke the middleware,
// Everything else will invoke middleware and need to be authenticated
export const config = {
    // this regular expression from Clerk is much better than the default next auth one bc of better coverage
    // this will protect the entire app by default, and then we can open up specific routes to the public
    // this is better because there is usually more private routes than public ones
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}