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
import { ProductDataType } from "@/lib/constants";

const ProductList = ({ products }: { products: ProductDataType[] }) => {
  return (
    <div className="md:mt-10 mt-5 md:mb-10 mb-5 z-[40]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-3">
        {products.map((item) => (
          <Link href={`/products/${item.id}`} key={item.id}>
            <Card className="transition-transform mx-4 md:mx-0 duration-300 ease-in-out hover:scale-105 dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 hover:bg-gradient-to-tr from-blue-500 to-orange-500 hover:bg-opacity-50 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group">
              <CardHeader>
                <CardTitle></CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-auto transform rounded-t-lg object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col gap-2">
                  <h2 className="text-[18px] md:text-24px font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-sm flex flex-col text-justify md:justify-start">
                    {item.desc.slice(0, 200)}
                  </p>
                  <button className="p-[3px] relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg" />
                    <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                      Learn More
                    </div>
                  </button>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
