export { auth as middleware } from "@/auth"

export const config = {
    matcher: "/:path*",
    runtime: "nodejs",
    unstable_allowDynamic: [
        // allows a single file
        "/models/test.ts",
        "/models/user.ts",
        // use a glob to allow anything in the function-bind 3rd party module
        "/node_modules/mongoose/dist/**",
    ],
};