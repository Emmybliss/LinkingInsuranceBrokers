import React from "react";
import Banner from "../_components/Banner";
import ProductList from "../_components/ProductList";
import { productsData } from "@/lib/constants";

// Define the metadata for the page
export const metadata = {
  title: "Our Products | Linking Insurance Brokers",
  description:
    "Discover our tailored insurance products covering construction, fire, aviation, marine, and more for your protection needs.",
};

const ProductPage = () => {
  const data = productsData;
  return (
    <div className="flex min-h-screen  flex-col justify-between overflow-hidden z-[40] md:mx-0 md:my-10">
      <Banner page_title="OUR PRODUCTS" src="/images/banner.jpg" />
      <div className="md:mx-36 z-[40]">
        <ProductList products={data} />
      </div>
    </div>
  );
};

export default ProductPage;
