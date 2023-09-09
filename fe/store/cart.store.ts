import { IProduct } from "@saecom/types";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type State = {
  cart: IProduct[];
};

type Actions = {
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        addToCart: (product) =>
          set((state) => ({ cart: [...state.cart, product] })),
        removeFromCart: (productId) =>
          set((state) => ({
            cart: state.cart.filter((p) => p._id !== productId),
          })),
        clearCart: () => set(() => ({ cart: [] })),
      }),
      {
        name: "cart",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
