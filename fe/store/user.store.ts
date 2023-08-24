import { IUser } from "@saecom/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  user: IUser | null;
  access_token: string;
};

type Actions = {
  updateUser: (data: IUser) => void;
  updateToken: (token: string) => void;
  signOut: () => void;
};

export const useUserStore = create<State & Actions>()(
  devtools((set) => ({
    user: null,
    access_token: "",
    updateUser: (data) => set(() => ({ user: data })),
    updateToken: (token) => set((state) => ({ ...state, access_token: token })),
    signOut: () => set((state) => ({ ...state, user: null, access_token: "" })),
  }))
);
