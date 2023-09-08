import { FunctionComponent, ReactNode } from "react";
import useSWR from "swr";
import Sidebar from "../navigation/sidebar.component";
import { Fetcher } from "@/util/axios";
import { ProductCategoriesResponse } from "@saecom/types";

interface SidebarLayoutProps {
  children: ReactNode;
}

const SidebarLayout: FunctionComponent<SidebarLayoutProps> = (props) => {
  const { data: res, isLoading } = useSWR<ProductCategoriesResponse>(
    "/products/categories",
    Fetcher.get
  );

  return (
    <div className="flex flex-row max-w-6xl mx-auto">
      <div className="w-1/5 mt-24">
        <Sidebar
          isLoading={isLoading}
          data={
            res?.data.map((item) => ({
              name: item.replaceAll("-", " "),
              path: `/category/${item}`,
            })) || []
          }
        />
      </div>
      <div className="w-4/5">{props.children}</div>
    </div>
  );
};

export default SidebarLayout;
