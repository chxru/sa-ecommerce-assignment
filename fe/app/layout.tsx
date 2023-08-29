"use client";

import "./globals.css";
import AuthLayout from "@/components/layouts/auth.layout";
import Topbar from "@/components/navigation/topbar.component";
import { useUserStore } from "@/store/user.store";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";

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
        <Topbar
          username={userStore.user?.username}
          onLogin={() => router.push("/")}
          onSignOut={() => userStore.signOut()}
        />
        <AuthLayout>{children}</AuthLayout>
      </body>
    </html>
  );
}
