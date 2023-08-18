import Link from 'next/link';
import UserBox from '@/components/Userbox';

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
        <nav className={`flex items-center justify-between ${className}`}>
          <div className="flex items-center ml-5"> {/* Centered vertically */}
            <ul className="flex space-x-4 ml-5 mr-5"> {/* Centered horizontally */}
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.to}>
                    <div className="text-gray-700 hover:text-gray-900">{link.label}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-auto">
            <UserBox params={{ user }} />
          </div>
        </nav>
      );
}
