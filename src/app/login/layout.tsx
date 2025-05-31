import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
  keywords: ["login", "authentication", "user account"],
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">{children}</section>
  );
}
