import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import React from "react";

interface CallToActionProps {
  title?: string;
  desc?: string;
  button?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, desc, button }) => {
  return (
    <div className="mb-5 z-[40] space-y-4 rounded-md md:grid md:grid-cols-12 gap-4 justify-center items-center md:justify-normal md:items-start bg-primary p-12 text-white">
      <div className="col-span-9">
        <h2 className="text-3xl font-semibold text-center md:text-start md:items-start">
          {title || "Get Expert Insurance Advice Today"}
        </h2>
        <p className="mt-4">
          {desc ||
            "Secure the best insurance plan tailored to your needs with our experienced brokers. Whether it's for your business, health, or property, we're here to guide your every step of the way!"}
        </p>
      </div>
      <div className="col-span-3 ">
        <button className="relative w-full md:w-auto inline-flex h-12 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f97316_0%,#393BB2_50%,#f97316_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-primary backdrop-blur-3xl hover:bg-transparent hover:text-white">
            {button || "Get Free Quote!"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
