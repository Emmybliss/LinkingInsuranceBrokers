"use client";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Links } from "./NavLinks";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileMenu: React.FC = () => {
  const path = usePathname();
  return (
    <div className="block md:hidden z-[50] justify-center items-center">
      <div className="flex justify-between p-4">
        <Link href="/">
          <Image
            src="/images/LIBL.png"
            alt="LIBL Logo"
            width={100}
            height={70}
            className=""
          />
        </Link>

        <Sheet>
          <SheetTrigger asChild className="z-10">
            <Button size="icon" variant="outline">
              <AlignJustify />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>

              <SheetDescription className="mt-10 flex flex-col space-y-4 px-2 font-medium">
                {Links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.id}
                    className={cn(
                      "group flex flex-col items-center justify-center rounded-md px-2 py-2",
                      path === link.href
                        ? "bg-primary text-white"
                        : "hover:bg-primary hover:text-white hover:opacity-50"
                    )}
                  >
                    {link.title}
                  </Link>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div></div>
    </div>
  );
};

export default MobileMenu;
