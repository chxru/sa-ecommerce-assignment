import React, { useState } from 'react';
import Link from 'next/link';

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
    <div className="bg-white rounded-lg shadow p-4 flex items-center">
      <div className="rounded-full overflow-hidden w-12 h-12 mr-4">
        <img src={user.imageUrl} alt="User Avatar" className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{user.name}</h3>
        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
  );
}
