import { NextApiRequest, NextApiResponse } from "next";
import { signIn } from "next-auth/react";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // const { email, password } = req.body;
        // await signIn("credentials", {
        //     email,
        //     password,})

        res.status(200).json({ sucess: true, message: "Login successful" });
    } catch (error) {
        if (typeof error === "object" && error !== null && "type" in error && (error as any).type === "CredentialsSignin") {
            res.status(401).json({ success: false, message: "Invalid email or password" });
        } else {
            console.error("Login error:", error);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
    }
}