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
      <div className="flex flex-col md:flex-row ">
        <div>
          <p>Welcome to Acme</p>
          <Link href="/login">Login</Link>
        </div>
        <div>
          <img
            src="/hero-mobile.png"
            alt="Screenshots of the dashboard"
            width={1000}
            height={760}
            className="block md:hidden"
          />
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
