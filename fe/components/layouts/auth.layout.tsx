"use client";

import { useUserStore } from "@/store/user.store";
import { IUser } from "@saecom/types";
import { usePathname } from "next/navigation";
import {
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import AuthBox from "../auth/auth.component";
import { Spinner } from "flowbite-react";

const PROTECTED_ROUTES = ["/verify"];

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FunctionComponent<AuthLayoutProps> = ({ children }) => {
  const [promptLogin, setPromptLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const firstRun = useRef(true);
  const store = useUserStore();
  const pathname = usePathname();

  useEffect(() => {
    setLoading(false);
  }, [store]);

  useEffect(() => {
    // run only in first render
    if (!firstRun.current) {
      return;
    }

    if (store.access_token && store.user) {
      setPromptLogin(false);
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

    if (store.access_token && store.user) {
      setPromptLogin(false);
    }
  }, [store, store.access_token, store.user]);

  useEffect(() => {
    if (PROTECTED_ROUTES.includes(pathname)) {
      if (store.access_token && store.user) {
        setPromptLogin(false);
        return;
      }

      setPromptLogin(true);
    }
  }, [pathname, promptLogin, store.access_token, store.user]);

  if (promptLogin) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
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
  }

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner aria-label="Loading" className="mt-4" />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthLayout;
