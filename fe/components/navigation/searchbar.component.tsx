"use client";

import { useRouter } from "next/navigation";
import { FunctionComponent, useState } from "react";

const SearchBar: FunctionComponent = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();

  return (
    <div className="relative mr-4">
      <input
        type="text"
        className="border-b-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        placeholder="Search"
        onChange={(e) => setSearchQuery(e.target.value)}
        // capture enter key
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            router.push(`/search?q=${searchQuery}`);
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
