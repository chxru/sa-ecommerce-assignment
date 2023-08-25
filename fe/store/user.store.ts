import { IUser } from "@saecom/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  user: IUser | null;
  access_token: string;
};

type Actions = {
  updateUser: (data: IUser, skipPersist?: boolean) => void;
  updateToken: (token: string, skipPersist?: boolean) => void;
  signOut: () => void;
};

export const useUserStore = create<State & Actions>()(
  devtools((set) => ({
    user: null,
    access_token: "",
    updateUser: (data, skipPersist) =>
      set(() => {
        !skipPersist && localStorage.setItem("user", JSON.stringify(data));

        return { user: data };
      }),
    updateToken: (token, skipPersist) =>
      set(() => {
        !skipPersist && localStorage.setItem("access_token", token);

        return { access_token: token };
      }),
    signOut: () =>
      set((state) => {
        localStorage.removeItem("user");
        localStorage.removeItem("access_token");

        return { ...state, user: null, access_token: "" };
      }),
  })),
);
