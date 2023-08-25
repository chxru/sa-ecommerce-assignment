"use client";
import Link from "next/link";
import UserBox from "@/components/Userbox";
import Logo from "./Logo";

import links from "@/data/Navlinks";
import user from "@/data/userData";
import colors from "@/data/NavbarColors";
import { Button } from "@nextui-org/react";

export default function Nav() {
  return (
    <>
      <div
        className={`w-full h-20 bg-emerald-800 sticky top-0 transition duration-1000 ease-in-out bg-blue-500 sticky top-0 z-10`}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="mr-4">
              <Logo />
            </div>
            <ul className="hidden md:flex gap-x-6 text-white text-xl">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.to}>
                    {/* Add hover:underline class for underline effect */}
                    <div className="text-white-700 hover:text-gray-900 hover:underline">
                      <Button
                        radius="full"
                        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                      >
                        {link.label}
                      </Button>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <UserBox params={{ user }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
