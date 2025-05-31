import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "../globals.css";

export const metadata: Metadata = {
  title: "Register",
  description: "Create to your account",
  keywords: ["create", "authentication", "user account"],
};

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">{children}</section>
  );
}
