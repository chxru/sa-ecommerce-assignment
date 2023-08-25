"use client";

import { useUserStore } from "@/store/user.store";
import { IUser } from "@saecom/types";
import { FunctionComponent, ReactNode, useEffect, useRef } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FunctionComponent<AuthLayoutProps> = ({ children }) => {
  const firstRun = useRef(true);
  const store = useUserStore();

  useEffect(() => {
    // run only in first render
    if (!firstRun.current) {
      return;
    }

    // look for user and access token in local storage
    const userStorage = localStorage.getItem("user");
    if (userStorage) {
      const user = JSON.parse(userStorage) as IUser;
      store.updateUser(user, true);
    }

    const accessTokenStorage = localStorage.getItem("access_token");
    if (accessTokenStorage) {
      store.updateToken(accessTokenStorage, true);
    }

    // set firstRun to false
    firstRun.current = false;
  }, []);

  return <>{children}</>;
};

export default AuthLayout;
