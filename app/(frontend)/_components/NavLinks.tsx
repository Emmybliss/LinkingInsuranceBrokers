"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Links = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Products",
    href: "/products",
  },
  {
    id: 3,
    title: "Services",
    href: "/services",
  },
  {
    id: 4,
    title: "About Us",
    href: "/about",
  },
  {
    id: 5,
    title: "Contact",
    href: "/contact",
  },
  {
    id: 6,
    title: "Career",
    href: "/career",
  },
  {
    id: 7,
    title: "Blog",
    href: "/blog",
  },
];

const NavLinks: React.FC = () => {
  const path = usePathname();

  return (
    <div className="flex items-center justify-center gap-4 font-medium uppercase">
      {Links.map((link) => (
        <Link
          href={link.href}
          key={link.id}
          className={cn(
            "group flex items-center justify-center rounded-md px-2 py-2",
            path === link.href
              ? "bg-gradient-to-r from-orange-500 to-blue-500 text-white hover:opacity-50"
              : "hover:bg-gradient-to-r from-orange-500 to-blue-500 hover:text-white hover:opacity-50"
          )}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
