/**
 * All routes are protected by default, we only tell the middleware which routes are public
 */

/**
 * An array of routes that are accessible to the public
 * These routes will not invoke the middleware and thus do not require authentication
 * @type {string[]}
 */

export const publicRoutes = [
    "/", // landing page
    "/auth/new-verification", // email verification page
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect loggedin users to / settings
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password",
];

/**
 * The prefix for the api authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after a user logs in
 * Saved as a constant here so that it can be easily changed to another page in the future
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"