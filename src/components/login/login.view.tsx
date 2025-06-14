'use client'
import { Paths } from "@/routes/paths"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"


export default function Login(){
    const router = useRouter()

    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get("email")
        const password = formData.get("password")

        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })

        if (response.ok) {
            router.push(Paths.home)
        } else {
            const errorData = await response.json()
            console.error("Login failed:", errorData.message)
        }
    }
    return (
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-sm">
            <h2 className="text-lg font-montserrat font-bold mb-6">LOGIN</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="text-base font-montserrat font-medium" htmlFor="email">
                        Email address
                    </label>
                    <input
                        className="mt-1 block p-2 border rounded-md h-[40px] w-full"
                        type="email"
                        id="email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="text-base font-montserrat font-medium" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="mt-1 block p-2 border rounded-md h-[40px] w-full"
                        type="password"
                        id="password"
                        required
                    />
                </div>
                <button type="submit" className="w-full p-2 bg-[#1e40af] text-white rounded hover:bg-blue-600 text-sm font-montserrat font-bold h-[40px] w-full">
                    Sing In
                </button>
            </form>
            <div className="mt-4 text-center space-between flex justify-between">
                <Link href={Paths.register} className="font-roboto text-xs text-[#6B7280]">Register</Link>
                <Link href={Paths.forgotPassword} className="font-roboto text-xs text-[#6B7280]">Forgot password?</Link>
            </div>
        </div>
    )
}