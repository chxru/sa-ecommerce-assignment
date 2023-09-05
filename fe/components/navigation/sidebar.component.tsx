"use client";

import { ListGroup } from "flowbite-react";
import { FunctionComponent } from "react";

interface SidebarProps {
  data: { name: string; path: string }[];
  isLoading: boolean;
}

const Sidebar: FunctionComponent<SidebarProps> = (props) => {
  return (
    <ListGroup className="max-w-sm">
      {props.isLoading ? (
        <>
          {Array.from({ length: 5 }).map((_, index) => (
            <ListGroup.Item key={index}>
              <div role="status" className="max-w-sm animate-pulse">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 my-1"></div>
              </div>
            </ListGroup.Item>
          ))}
        </>
      ) : (
        <>
          {props.data.map((item, index) => (
            <ListGroup.Item key={index} href={item.path}>
              {item.name}
            </ListGroup.Item>
          ))}
        </>
      )}
    </ListGroup>
  );
};

export default Sidebar;
