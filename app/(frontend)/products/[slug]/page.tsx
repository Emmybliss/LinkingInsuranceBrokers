import { productsData } from "@/lib/constants";
import React from "react";
import Banner from "../../_components/Banner";
import Image from "next/image";
import CallToAction from "../../_components/CallToAction";
import ClientsSlider from "../../_components/Clients";

// Fetch the product by ID
const getProductById = async (slug: string) => {
  const product = productsData.find((product) => product.slug === slug); // Search product by ID
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

// Required function to generate static params for dynamic routes
export async function generateStaticParams() {
  // Map over the productsData to generate static paths for each product
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

// Dynamic metadata generation based on the product
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductById(params.slug);
  return {
    title: product.title, // Dynamically setting the title
    description: product.desc, // Dynamically setting the description
  };
}

const ProductDetails = async ({ params }: { params: { slug: string } }) => {
  // Fetch the product using the ID from params
  const product = await getProductById(params.slug);
  return (
    <div className="flex min-h-screen flex-col justify-between overflow-hidden z-[40] md:mx-36 md:my-10">
      <Banner page_title={product.title} src="/images/banner.jpg" />
      <div className="md:flex flex md:flex-row flex-col mt-5 md:mt-10 mb-5 gap-5 mx-4 md:mx-0">
        <div className="h-full">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={800}
            className="rounded-lg md:h-[800px] md:w-full object-fill"
          />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-semibold md:font-bold mb-4">
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
