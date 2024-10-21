import React from "react";
import Banner from "../_components/Banner";
import ProductList from "../_components/ProductList";
import { ProductsData } from "@/lib/constants";

// Define the metadata for the page
export const metadata = {
  title: "Products",
};

const ProductPage = () => {
  const data = ProductsData;
  return (
    <div className="flex min-h-screen  flex-col justify-between overflow-hidden z-[40] md:mx-36 md:my-10">
      <Banner page_title="PRODUCTS/SERVICES" src="/images/banner.jpg" />
      <ProductList products={data} />
    </div>
  );
};

export default ProductPage;
