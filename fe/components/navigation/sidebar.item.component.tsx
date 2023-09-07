import { FunctionComponent } from "react";
import Link from 'next/link';

type Item = {
    name: string;
    href: string;
    xmlns:string;
    height:string;
    viewBox:string;
    d:string
  };
  
  type Props = {
    params: {
      item: Item;
    };
  };
const SidebarItem = ({ params: { item } }: Props)=> {
    return (
        <li
            key={item.name}
            className={`flex my-2 w-[100%]`}
        >
            <div
            className={`flex items-center gap-2 p-3 rounded-md shadow-md bg-customHexColor5 hover:bg-gradient-to-br from-customHexColor2 to-customHexColor3 p-5 transition duration-300 hover:shadow-lg transform hover:-translate-y-1 mx-4`}
            >
            <svg
                xmlns={item.xmlns}
                height={item.height}
                viewBox="0 0 640 512"
                className={`w-6 h-6 text-red-300`}
            >
                <path d={item.d} />
            </svg>
            <Link
                href={item.href}
                className={`font-semibold text-customHexColor1`}
            >
                {item.name}
            </Link>
            <span className="ml-auto text-gray-500 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                </svg>
            </span>
            </div>
        </li>
        );
        
        
}

export default SidebarItem;