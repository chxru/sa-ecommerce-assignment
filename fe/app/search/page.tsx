"use client";

import PaginatedViewer from "@/components/views/paginated.view";
import { useSearchParams } from "next/navigation";
import { FunctionComponent } from "react";

const SearchPage: FunctionComponent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const category = searchParams.get("category");

  if (!query) {
    return (
      <main>
        <div className="flex flex-col h-screen w-full  mt-24 ml-8">
          <h1 className="text-2xl font-bold">No search query provided</h1>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="flex flex-col h-screen w-full  mt-24 ml-8">
        <h1 className="text-2xl font-bold">Result for {query}</h1>

        <PaginatedViewer search={query} category={category || undefined} />
      </div>
    </main>
  );
};

export default SearchPage;
