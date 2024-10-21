import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import { ModeToggle } from "@/app/_components/ModeToggle";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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

      <div className="flex items-center justify-center md:col-span-8">
        <NavLinks />
        <div className="flex items-center justify-center gap-4 px-4  md:col-span-3">
          <ModeToggle />
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 md:col-span-3">
        {/* <button className="animate-shimmer inline-flex h-10 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#3b82f6,#f97316)] bg-[length:200%_100%] hover:bg-transparent px-4 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Login
        </button> */}

        <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f97316_0%,#393BB2_50%,#f97316_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-primary backdrop-blur-3xl hover:bg-transparent hover:text-white">
            Get Free Quote!
          </span>
        </button>
        <Button variant="outline">Login</Button>
      </div>
    </div>
  );
};

export default DesktopMenu;
