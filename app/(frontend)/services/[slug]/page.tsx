import { servicesData } from "@/lib/constants";
import React from "react";
import Banner from "../../_components/Banner";
import Image from "next/image";
import CallToAction from "../../_components/CallToAction";
import ClientsSlider from "../../_components/Clients";

// Fetch the service by slug
const getServiceBySlug = async (slug: string) => {
  const service = servicesData.find((service) => service.slug === slug); // Search service by slug
  if (!service) {
    throw new Error("Service not found");
  }
  return service;
};

// Required function to generate static params for dynamic routes
export async function generateStaticParams() {
  // Map over the servicesData to generate static paths for each service
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Dynamic metadata generation based on the service
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getServiceBySlug(params.slug);
  return {
    title: `${service.title} | Linking Insurance Brokers`, // Dynamically setting the title
    description: service.description, // Dynamically setting the description
  };
}

const ServiceDetails = async ({ params }: { params: { slug: string } }) => {
  // Fetch the service using the slug from params
  const service = await getServiceBySlug(params.slug);

  return (
    <div className="flex min-h-screen flex-col justify-between overflow-hidden z-[40] md:mx-0 md:my-10">
      <Banner page_title={service.title} src="/images/banner.jpg" />
      <div className="flex flex-col mt-5 md:mt-10 mb-5 gap-5 mx-4 md:mx-36">
        <div className="h-[400px] w-full">
          <Image
            src={service.image}
            alt={service.title}
            width={500}
            height={400}
            className="rounded-lg w-[500px] h-[400px] object-cover"
          />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-semibold md:font-bold mb-4">
            {service.title}
          </h1>
          <p className="text-lg mt-3 mb-5 text-justify">
            {service.description}
          </p>
          <CallToAction />
        </div>
      </div>
      <ClientsSlider />
    </div>
  );
};

export default ServiceDetails;
