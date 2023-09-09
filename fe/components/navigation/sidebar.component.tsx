"use client";

import { Button, ListGroup, Modal } from "flowbite-react";
import { FunctionComponent, useState } from "react";
import { HiMenu } from "react-icons/hi";

interface SidebarProps {
  data: { name: string; path: string }[];
  isLoading: boolean;
}

const Sidebar: FunctionComponent<SidebarProps> = (props) => {
  const [openModal, setOpenModal] = useState<string | undefined>();

  const Content = () => (
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

  return (
    <>
      <Button
        className="block md:hidden ml-4"
        onClick={() => {
          setOpenModal("default");
        }}
      >
        <HiMenu className="mr-2 h-5 w-5" />
      </Button>

      <div className="hidden md:block">
        <Content />
      </div>

      <Modal
        show={openModal === "default"}
        onClose={() => setOpenModal(undefined)}
      >
        <Modal.Header>Select Category to browse</Modal.Header>
        <Modal.Body>
          <Content />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Sidebar;
