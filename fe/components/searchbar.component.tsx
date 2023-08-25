"use client";

import { FunctionComponent } from "react";

interface SearchBarProps {}

const SearchBar: FunctionComponent<SearchBarProps> = () => {
  return (
    <div className="relative mr-4">
      <input
        type="text"
        className="border-b-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
