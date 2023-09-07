"use client";

import "./globals.css";
import AuthLayout from "@/components/layouts/auth.layout";
import Topbar from "@/components/navigation/topbar.component";
import { useUserStore } from "@/store/user.store";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/navigation/sidebar.component";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const userStore = useUserStore();

  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="fixed top-0 left-0 w-full h-16 bg-gray-800">
          {/* Topbar */}
          <Topbar
            username={userStore.user?.username}
            onLogin={() => router.push("/")}
            onSignOut={() => userStore.signOut()}
          />
        </div>
        
        <div className="absolute top-16 left-0 w-full h-full flex">
          {/* Sidebar */}
          <div className="w-[40%] h-full bg-gray-300">
            <Sidebar />
          </div>
          
          {/* Main Content */}
          <div className="flex-grow p-4">
            <AuthLayout>{children}</AuthLayout>
          </div>
        </div>
      </body>
    </html>
  );
}
