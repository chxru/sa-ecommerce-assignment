import { FunctionComponent, ReactNode, useEffect } from "react";
import useSWR from "swr";
import Sidebar from "../navigation/sidebar.component";
import { Fetcher } from "@/util/axios";
import { ProductCategoriesResponse } from "@saecom/types";
import { useFavouriteStore } from "@/store/favourite.store";

interface SidebarLayoutProps {
  children: ReactNode;
}

const SidebarLayout: FunctionComponent<SidebarLayoutProps> = (props) => {
  const updateFavourites = useFavouriteStore((state) => state.updateFavourites);

  const { data: categories, isLoading } = useSWR<ProductCategoriesResponse>(
    "/products/categories",
    Fetcher.get,
    {
      revalidateOnFocus: false,
    }
  );

  const { data: favourites } = useSWR<{ data: string[] }>(
    "/favourites",
    Fetcher.get,
    {
      revalidateOnFocus: false,
    }
  );

  useEffect(() => {
    if (!updateFavourites) return;

    if (!favourites) return;
    if (!favourites.data) return;
    if (!Array.isArray(favourites.data)) return;

    if (favourites) updateFavourites(favourites.data);
  }, [favourites, updateFavourites]);

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
      <div className="w-full md:w-1/5 mt-24">
        <Sidebar
          isLoading={isLoading}
          data={
            categories?.data.map((item) => ({
              name: item.replaceAll("-", " "),
              path: `/category/${item}`,
            })) || []
          }
        />
      </div>
      <div className="w-full md:w-4/5 -mt-16">{props.children}</div>
    </div>
  );
};

export default SidebarLayout;
