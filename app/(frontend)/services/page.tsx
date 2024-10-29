import React from "react";
import Banner from "../_components/Banner";
import ServiceList from "../_components/ServiceList";
import { servicesData } from "@/lib/constants";

// Define the metadata for the page
export const metadata = {
  title: "Our Services | Linking Insurance Brokers",
  description:
    "Tailored insurance solutions to protect your assets, including car, marine, contractors all risk, and life assurance from Linking Insurance Brokers.",
};

const ServicesPage = () => {
  const data = servicesData;
  return (
    <div className="flex min-h-screen  flex-col justify-between overflow-hidden z-[40] md:mx-0 md:my-10">
      <Banner page_title="OUR SERVICES" src="/images/banner.jpg" />
      <div className="mx-36 z-[40]">
        <ServiceList services={data} />
      </div>
    </div>
  );
};

export default ServicesPage;
