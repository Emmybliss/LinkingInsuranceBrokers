"use client";

import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const TestimonialSection2 = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    id?: number;
    image?: string;
    name?: string;
    company?: string;
    designation?: string;
    testimony?: string;
    quote?: string;
    title?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0  border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.id}
          >
            <blockquote className="flex flex-col items-center justify-center">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <Image
                src={item.image}
                alt="Testimonial"
                width={100}
                height={70}
                className="h-auto w-auto rounded-full shadow-md"
              />
              <div className="mt-4 flex flex-col items-center justify-center">
                <h2 className="block text-lg font-bold text-gray-700">
                  {item.name}
                </h2>
                <h3 className="-mt-1 mb-1 block text-sm font-medium leading-loose text-muted-foreground">
                  {item.company}
                </h3>
                <div className="relative mt-5 text-center">
                  <Quote className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-full rotate-180 transform text-gray-500" />
                  <p className="text-lg italic text-gray-400 dark:text-white">
                    {item.testimony}
                  </p>
                  <Quote className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 translate-y-full transform text-gray-500" />
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
