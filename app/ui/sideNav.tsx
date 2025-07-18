import {
  IoDocumentsOutline,
  IoHomeOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { MdPeople } from "react-icons/md";
import NavLinks from "./dashboard/nav-link";
import AcmeLogo from "./acme-logo";
import Link from "next/link";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function Sidenav() {
  return (
    <aside className=" flex h-full flex-col px-4 py-4 md:px-6">
      <Link
        href="/"
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-700 p-4 md:h-40"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className=" flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 ">
        <NavLinks />
        <div className="flex items-center gap-2"><PowerIcon className="w-6 text-sm font-medium "/>Sign Out</div>
      </div>
    </aside>
  );
}
