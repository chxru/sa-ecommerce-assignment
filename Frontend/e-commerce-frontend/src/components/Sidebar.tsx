import React, { useState } from 'react';
import Link from 'next/link';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {

    const items = [
      {
        name: 'Home',
        href: '/',
      },
      {
        name: 'About',
        href: '/about',
      },
      {
        name: 'Blog',
        href: '/blog',
      },
      {
        name: 'Contact',
        href: '/contact',
      },
    ];
  
    return (
      <nav className={className} >
        <ul>
          {items.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
}