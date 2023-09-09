"use client";

import { Button, Dropdown, Navbar } from "flowbite-react";
import { FunctionComponent, useState } from "react";
import {
  HiCog,
  HiHeart,
  HiLogout,
  HiSearch,
  HiShoppingCart,
  HiViewGrid,
} from "react-icons/hi";
import SearchBar from "./searchbar.component";
import { useFavouriteStore } from "@/store/favourite.store";
import { useCartStore } from "@/store/cart.store";
import { useRouter } from "next/navigation";

interface TopbarProps {
  username?: string;
  onLogin: () => void;
  onSignOut: () => void;
}

const Topbar: FunctionComponent<TopbarProps> = (props) => {
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false);
  const favourite = useFavouriteStore((state) => state.favourites);
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="w-screen absolute">
      <Navbar fluid rounded className=" max-w-6xl w-full mx-auto z-50 bg-white">
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white mb-2 md:mb-0">
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
              <HiHeart className="mr-2 h-5 w-5" />
              <p>{favourite.length}</p>
            </Button>

            <Button
              onClick={() => {
                router.push("/cart");
              }}
            >
              <HiShoppingCart className="mr-2 h-5 w-5" />
              <p>{cart.length}</p>
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
