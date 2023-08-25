import AuthLayout from "@/components/layouts/auth.layout";
import { NextUIProvider } from "@nextui-org/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <AuthLayout>
            <div className="flex flex-col h-screen overflow-hidden">
              <Nav />
              <div className="flex flex-1 overflow-y-auto p-5">
                <Sidebar />
                <main className="w-3/4 p-4">{children}</main>
              </div>
            </div>
          </AuthLayout>
        </NextUIProvider>
      </body>
    </html>
  );
}
