"use client";

import { Button, Dropdown, Navbar } from "flowbite-react";
import { FunctionComponent, useState } from "react";
import {
  HiCog,
  HiLogout,
  HiSearch,
  HiShoppingCart,
  HiViewGrid,
} from "react-icons/hi";
import SearchBar from "./searchbar.component";

interface TopbarProps {
  username?: string;
  onLogin: () => void;
  onSignOut: () => void;
}

const Topbar: FunctionComponent<TopbarProps> = (props) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="w-screen absolute">
      <Navbar fluid rounded className=" max-w-6xl w-full mx-auto z-50 bg-white">
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            SAECOM
          </span>
        </Navbar.Brand>

        <div className="flex flex-row items-center">
          <span className="hidden md:flex">{showSearch && <SearchBar />}</span>

          <Button.Group>
            <Button
              className=""
              onClick={() => {
                setShowSearch(!showSearch);
              }}
            >
              <HiSearch className="mr-2 h-5 w-5" />
            </Button>

            <Button>
              <HiShoppingCart className="mr-2 h-5 w-5" />
              <p>(0)</p>
            </Button>

            {props.username ? (
              <Dropdown label={"Hey " + props.username}>
                <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
                <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  icon={HiLogout}
                  onClick={() => {
                    props.onSignOut();
                  }}
                >
                  Sign out
                </Dropdown.Item>
              </Dropdown>
            ) : (
              <Button
                onClick={() => {
                  props.onLogin();
                }}
              >
                Login
              </Button>
            )}
          </Button.Group>
        </div>
      </Navbar>

      <span className="flex md:hidden mt-16 absolute w-full justify-center">
        {showSearch && <SearchBar />}
      </span>
    </div>
  );
};

export default Topbar;