import Link from 'next/link';

export default function Nav() {
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
    
      return (
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <Link href={'/'}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      );
}
