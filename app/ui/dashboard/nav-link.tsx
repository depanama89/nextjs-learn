"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoDocumentsOutline,
  IoHomeOutline,
  IoPeopleOutline,
} from "react-icons/io5";
const links = [
  {
    icon: IoHomeOutline,
    name: "Home",
    href: "/",
  },
  {
    icon: IoDocumentsOutline,
    name: "Invoice",
    href: "/dashboard/invoices",
  },
  {
    icon: IoPeopleOutline,
    name: "Customer",
    href: "/dashboard/customers",
  },
];
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-3 mt-6">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                'bg-sky-100 text-blue-600':pathname==link.href,
            },
        )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
