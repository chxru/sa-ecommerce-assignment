import React, { useState } from "react";
import Link from "next/link";
import UserSvg from "@/../../public/user.svg";
import Image from "next/image";

type User = {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
};

type Props = {
  params: {
    user: User;
  };
};

export default function UserBox({ params: { user } }: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-2 flex items-center">
      <div className="rounded-full overflow-hidden w-8 h-8 mr-2">
        {/* <img src={user.imageUrl} alt="User Avatar" className="w-full h-full object-cover" /> */}
        <Image src={UserSvg} alt="user" width={"32"} height={"32"} />
      </div>
      <div>
        <h3 className="text-base font-semibold text-green-500">{user.name}</h3>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
    </div>
  );
}
