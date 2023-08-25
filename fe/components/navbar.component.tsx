"use client";

import { useUserStore } from "@/store/user.store";
import { Button, Dropdown, Navbar } from "flowbite-react";
import { useRouter } from "next/navigation";
import { FunctionComponent, useState } from "react";
import {
  HiCog,
  HiLogout,
  HiSearch,
  HiShoppingCart,
  HiViewGrid,
} from "react-icons/hi";
import SearchBar from "./searchbar.component";

const Topbar: FunctionComponent = () => {
  const [showSearch, setShowSearch] = useState(false);

  const router = useRouter();
  const userStore = useUserStore();

  return (
    <>
      <Navbar fluid rounded className="absolute w-screen z-50 bg-white">
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

            {userStore.user ? (
              <Dropdown label={"Hey " + userStore.user.username}>
                <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
                <Dropdown.Item icon={HiCog}>Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  icon={HiLogout}
                  onClick={() => {
                    userStore.signOut();
                  }}
                >
                  Sign out
                </Dropdown.Item>
              </Dropdown>
            ) : (
              <Button
                onClick={() => {
                  router.push("/login");
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
    </>
  );
};

export default Topbar;
