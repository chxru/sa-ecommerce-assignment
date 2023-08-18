import React from 'react';
import items from '@/data/sidebarData';
import SideBarComponent from './SidebarComponent';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {

    
  
    return (
      <nav className={className} >
        <ul>
          {items.map((item) => (
            <SideBarComponent params={{item}} />
          ))}
        </ul>
      </nav>
    );
}