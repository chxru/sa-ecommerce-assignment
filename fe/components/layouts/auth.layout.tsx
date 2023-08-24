import { FunctionComponent, ReactNode, useEffect } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FunctionComponent<AuthLayoutProps> = ({ children }) => {
  useEffect(() => {
    // send a request to /me to check if the user is logged in
  }, []);

  return <>{children}</>;
};

export default AuthLayout;
