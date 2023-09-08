import PaginatedViewer from "@/components/views/paginated.view";
import { FunctionComponent } from "react";

const HomePage: FunctionComponent = () => {
  return (
    <main>
      <div className="flex flex-col h-screen w-full  mt-24 ml-8">
        <h1 className="text-2xl font-bold">Latest Arrivals</h1>

        <PaginatedViewer random />
      </div>
    </main>
  );
};

export default HomePage;
