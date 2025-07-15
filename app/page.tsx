import Image from "next/image";
import style from "@/app/ui/home.module.css";
import Sidenav from "./ui/sideNav";

import { ImSwitch } from "react-icons/im";
import Dashboard from "./dashboard/page";
export default function Home() {
  return (
    <main className="min-h-screen  flex flex-col w-full md:flex-row  px-4 py-2">
      <div className="flex  flex-col justify-between md:w-1/5 md:px-12 md:py-1">
      <div className="w-full">
         <div className="flex p-6 w-full md:w-20 h-8 rounded    bg-blue-700 text-white ">
          Acme
        </div>
        <Sidenav/>
      </div>
       
        <div className="hidden md:flex items-center gap-4 ">
          <ImSwitch className="w-6 h-6 " /> sign out
        </div>
      </div>
      <Dashboard/>
    </main>
  );
}
