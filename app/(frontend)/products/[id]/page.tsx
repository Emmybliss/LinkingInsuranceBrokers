import { ProductsData } from "@/lib/constants";
import React from "react";
import Banner from "../../_components/Banner";
import Image from "next/image";
import CallToAction from "../../_components/CallToAction";
import ClientsSlider from "../../_components/Clients";

const getProductById = async (id: string) => {
  const product = ProductsData.find((product) => product.id === id); // Search post by ID
  if (!product) {
    throw new Error("Post not found");
  }
  return product;
};

// Dynamic metadata generation based on the product
export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);
  return {
    title: product.title, // Dynamically setting the title
    description: product.desc, // Dynamically setting the description
  };
}

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  // Fetch the product using the ID from params
  const product = await getProductById(params.id);
  return (
    <div className="flex min-h-screen  flex-col justify-between overflow-hidden z-[40] md:mx-36 md:my-10 ">
      <Banner page_title={product.title} src="/images/banner.jpg" />
      <div className=" md:flex flex md:flex-row flex-col mt-5 md:mt-10 mb-5 gap-5 mx-4 md:mx-0">
        <div className="h-full">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={800}
            className="rounded-lg md:h-[800px]  md:w-full object-fill"
          />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-semibold md:font-bold  mb-4">
            {product.title}
          </h1>
          <p className="text-lg mt-3 mb-5 text-justify">{product.desc}</p>
          <CallToAction />
        </div>
      </div>
      <ClientsSlider />
    </div>
  );
};

export default ProductDetails;
