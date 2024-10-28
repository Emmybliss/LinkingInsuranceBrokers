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
import { useState } from "react";
import { ModeToggle } from "@/app/_components/ModeToggle";

const MobileMenu: React.FC = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sheet when a link is clicked
  };

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

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="z-10">
            <Button
              size="icon"
              variant="outline"
              onClick={() => setIsOpen(true)}
            >
              <AlignJustify />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle className="flex flex-col items-start justify-start">
                <span>
                  <ModeToggle />
                </span>
              </SheetTitle>

              <SheetDescription className="mt-10 flex items-center justify-center flex-col space-y-4 px-2 font-medium">
                {Links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.id}
                    onClick={handleLinkClick} // Close the sheet when a link is clicked
                    className={cn(
                      "group flex items-center justify-center rounded-md px-2 py-2 w-auto", // Remove flex column and full width styles
                      path === link.href
                        ? "text-primary px-3 py-1" // Add padding only around the text when active
                        : "hover:bg-muted hover:opacity-50"
                    )}
                  >
                    <span className="inline-block">{link.title}</span>{" "}
                    {/* Ensure span handles text width */}
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
