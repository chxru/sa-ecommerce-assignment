import Link from 'next/link';
import UserBox from '@/components/Userbox';
import Logo from './Logo';

interface NavbarProps {
  className?: string;
}

export default function Nav({ className }: NavbarProps) {
    const links = [
        {
          label: "Home",
          to: "/",
        },
        {
          label: "Products",
          to: "/products",
        },
        {
          label: "About",
          to: "/about",
        },
      ];

      const user = {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        imageUrl: '',
      };
    
      return (
        <>
          <div className="w-full h-20 bg-emerald-800 sticky top-0">
            <div className="container mx-auto px-4 h-full">
              <div className="flex justify-between items-center h-full">
                <div className="mr-4">
                  <Logo/>
                </div>
                <ul className="hidden md:flex gap-x-6 text-white">
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
