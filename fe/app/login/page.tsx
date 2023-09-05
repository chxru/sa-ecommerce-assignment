"use client";

import AuthBox from "@/components/auth/auth.component";
import { useUserStore } from "@/store/user.store";
import { useRouter } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";

const LoginPage: FunctionComponent = () => {
  const [loading, setLoading] = useState(true);
  const store = useUserStore();
  const router = useRouter();

  useEffect(() => {
    // redirect to home page if user is already logged in
    if (!loading && store.access_token) {
      router.push("/");
    }

    setLoading(false);
  }, [loading, router, store.access_token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 items-center h-screen">
      <AuthBox
        initialInstance="login"
        handleUserChange={(user) => {
          store.updateUser(user);
        }}
        handleTokenChange={(token) => {
          store.updateToken(token);
        }}
      />
    </div>
  );
};

export default LoginPage;
