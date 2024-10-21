"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

// Define type for slider items
interface FeaturedProductDataType {
  id: number;
  image: string;
  title: string;
  desc: string;
}

// Featured Insurance Services
// Featured Insurance Services
export const FeaturedProductsData: FeaturedProductDataType[] = [
  {
    id: 1,
    image: "/images/contractors.jpg",
    title: "CONTRACTORS ALL RISK INSURANCE",
    desc: "Ensure your construction projects are covered from start to finish with our Contractors All Risk Insurance. We provide tailored solutions to safeguard against unforeseen losses and damages.",
  },
  {
    id: 2,
    image: "/images/firerisk.jpg",
    title: "FIRE AND SPECIAL PERILS / PUBLIC BUILDING & STRUCTURES",
    desc: "Protect your properties from fire and other specified perils with our comprehensive coverage. Secure your public buildings and structures against potential risks and damages.",
  },
  {
    id: 3,
    image: "/images/aviation.jpg",
    title: "AVIATION INSURANCE COVER",
    desc: "Get the best aviation insurance that offers extensive coverage for aircraft, personnel, and liabilities. Our expert brokers provide top-notch protection tailored to your aviation needs.",
  },
  {
    id: 4,
    image: "/images/marine.jpg",
    title: "MARINE INSURANCE",
    desc: "From cargo to ships, our Marine Insurance offers complete protection for goods in transit by sea. Keep your marine assets safe with tailored solutions that meet international standards.",
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="md:mx-36 z-[40] md:mt-5 lg:-mt-80 flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {FeaturedProductsData.map((item) => (
          <div key={item.id}>
            <Card className="transition-transform duration-300 ease-in-out hover:scale-105 dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 hover:bg-gradient-to-tr from-blue-500 to-orange-500 hover:bg-opacity-50 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group ">
              <CardHeader>
                <CardTitle></CardTitle>
              </CardHeader>
              <CardContent>
                <Link href="/product/{$id}">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full transform rounded-t-lg object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                </Link>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-sm">{item.desc}</p>

                  <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                      Learn More
                    </div>
                  </button>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>

      <Link href="/products" className="mt-5 flex items-center justify-center">
        <Button variant="outline">
          View More Products <ChevronRight />
        </Button>
      </Link>
    </div>
  );
};

export default FeaturedProducts;