import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  title: string;
  label: string;
  headerIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
export const Header = ({ label, title, headerIcon: Icon }: HeaderProps) => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <h1
        className={cn(
          "text-3xl font-semibold flex gap-2 items-center justify-center",
          font.className
        )}
      >
        {Icon && <Icon className="text-2xl w-8 h-8" />}
        {/* Render the icon if provided */}
        {title}
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
