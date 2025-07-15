import { IoDocumentsOutline, IoHomeOutline, IoPeopleOutline } from "react-icons/io5";
import { MdPeople } from "react-icons/md";
import NavLinks from "./dashboard/nav-link";

export default function Sidenav(){
    return(
        <aside className=" hidden md:flex md:flex-col">
            
         <NavLinks/>
        </aside>
    )
}