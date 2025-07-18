import Image from "next/image";
import style from "@/app/ui/home.module.css";
import Sidenav from "./ui/sideNav";

import { ImSwitch } from "react-icons/im";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import AcmeLogo from "./ui/acme-logo";

export default function Home() {
  return (
    <main className="min-h-screen  flex flex-col w-full p-6 ">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo/>
      </div>
      <div className="flex flex-col gap-4 md:flex-row mt-4 ">
        <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:px-2 md:w-2/5">
          <p>Welcome to Acme</p>
          <Link href="/login" className="flex gap-4 bg-blue-600 self-start rounded-lg  px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base duration-300 ">Login <ArrowRightIcon className="w-5 md:w-6"/></Link>
        </div>
        <div>
          
          <Image
            src="/hero-desktop.png"
            alt="Screenshots of the dashboard"
            width={1000}
            height={760}
            className="hidden md:block"
          />
          <Image
            src="/hero-mobile.png"
            alt="Screenshots of the dashboard"
            width={560}
            height={620}
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
}
