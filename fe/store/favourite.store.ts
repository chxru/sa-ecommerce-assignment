import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  favourites: string[];
};

type Actions = {
  updateFavourites: (favourites: string[]) => void;
};

export const useFavouriteStore = create<State & Actions>()(
  devtools((set) => ({
    favourites: [],
    updateFavourites: (favourites) =>
      set((state) => ({ favourites: [...state.favourites, ...favourites] })),
  }))
);
