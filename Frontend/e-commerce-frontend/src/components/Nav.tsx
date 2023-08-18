'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import UserBox from '@/components/Userbox';
import Logo from './Logo';

import links from '@/data/Navlinks';
import user from '@/data/userData';
import colors from '@/data/NavbarColors';

export default function Nav() {


  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) =>
        (prevIndex + 1) % colors.length
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full h-20 ${colors[currentColorIndex]} sticky top-0 transition duration-1000 ease-in-out`}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="mr-4">
              <Logo/>
            </div>
            <ul className="hidden md:flex gap-x-6 text-white text-xl">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.to}>
                    {/* Add hover:underline class for underline effect */}
                    <div className="text-white-700 hover:text-gray-900 hover:underline">
                      {link.label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <UserBox params={{user}} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
