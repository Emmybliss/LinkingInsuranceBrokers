import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import { ModeToggle } from "@/app/_components/ModeToggle";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "./QuoteModal";

const DesktopMenu = () => {
  return (
    <div className="fixed shadow-[0_10px_20px_rgba(0,0,0,0.25)] left-0 top-0 z-50 mx-auto hidden h-24 w-full items-center bg-white p-4 dark:bg-[#010314] md:grid md:grid-cols-12">
      <div className="cursor-pointer md:col-span-1 md:flex md:items-center md:justify-center">
        <Link href="/">
          <Image
            src="/images/LIBL.png"
            alt="LIBL Logo"
            width={100}
            height={100}
            className=""
          />
        </Link>
      </div>

      <div className="flex items-center justify-center md:col-span-9">
        <NavLinks />
        <div className="flex items-center justify-center gap-4 px-4  md:col-span-3">
          <ModeToggle />
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 md:col-span-2">
        <QuoteModal />
        {/* <Button variant="outline">Login</Button> */}
      </div>
    </div>
  );
};

export default DesktopMenu;
