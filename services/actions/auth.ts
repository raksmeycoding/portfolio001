"use server"


import {signIn} from "@/auth";

export const socialLogin = async () => {
    return await signIn("google", {redirectTo: "/"})
}