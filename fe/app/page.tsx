"use client";

import { useUserStore } from "@/store/user.store";
import { FunctionComponent } from "react";

const HomePage: FunctionComponent = () => {
  const store = useUserStore();

  return (
    <main>
      <div className="flex h-screen w-full items-center justify-center">
        {store.user?.username ? (
          <h1>Hello {store.user.username}</h1>
        ) : (
          <h1>SAECOM</h1>
        )}
      </div>
    </main>
  );
};

export default HomePage;
