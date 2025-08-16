"use server";

import { auth } from "@/lib/auth";

export const signIn = async (email: string, password: string) => {
    await auth.api.signInEmail({
        body: {
            email: "test@test.com",
            password: "password123456",
        }
    })
}

export const signUp = async () => {
    await auth.api.signUpEmail({
        body: {
            email: "test@test.com",
            password: "password123456",
            name: "Test User",
        }
    })
}