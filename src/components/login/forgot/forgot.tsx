import { Paths } from "@/routes/paths"
import Link from "next/link"


export const ForgotPassword = () => {
    return (
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-sm">
            <h2 className="text-lg font-montserrat font-bold mb-6">Forgot Password</h2>
            <form className="space-y-4">
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
                <button type="submit" className="w-full p-2 bg-[#1e40af] text-white rounded hover:bg-blue-600 text-sm font-montserrat font-bold h-[40px] w-full">
                    Send Email
                </button>
            </form>
            <div className="mt-4 text-center space-between flex justify-between">
                <Link href={Paths.login} className="font-roboto text-xs text-[#6B7280]">Sing In</Link>
            </div>
        </div>
    )
}