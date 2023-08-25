import React from "react";
import items from "@/data/sidebarData";
import SideBarComponent from "./SidebarComponent";

interface SidebarProps {
  className?: string;
}

export default function Sidebar() {
  return (
    <nav className="bg-gray-800 rounded-lg w-1/4 bg-gray-300 overflow-y-auto p-5">
      <ul className="flex flex-col -mb-1">
        {items.map((item) => (
          <SideBarComponent key={item.name} params={{ item }} />
        ))}
      </ul>
    </nav>
  );
}
