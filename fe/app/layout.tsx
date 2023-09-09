"use client";

import "./globals.css";
import SidebarLayout from "@/components/layouts/siderbar.layout";
import AuthLayout from "@/components/layouts/auth.layout";
import Topbar from "@/components/navigation/topbar.component";
import { useUserStore } from "@/store/user.store";
import { Inter } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const userStore = useUserStore();
  const path = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthLayout>
          <Topbar
            username={userStore.user?.username}
            onLogin={() => router.push("/")}
            onSignOut={() => userStore.signOut()}
          />

          {["/login", "/register"].includes(path) ? (
            children
          ) : (
            <SidebarLayout>{children}</SidebarLayout>
          )}
        </AuthLayout>
      </body>
    </html>
  );
}
