import { FunctionComponent } from "react";
import SidebarItem from "./sidebar.item.component";
import items from "@/temp/sidebar.data";



const Sidebar: FunctionComponent = () => {
    return(
        <nav className="bg-gray-800 rounded-lg w-1/4 bg-gray-300 p-5">
        <ul className="flex flex-col -mb-1">
            {items.map((item) => (
                <SidebarItem key={item.name} params={{ item }} />
            ))}
        </ul>
    </nav>
    )
}

export default Sidebar;