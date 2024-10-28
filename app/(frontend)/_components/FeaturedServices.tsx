"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

export function FeaturedServices() {
  return (
    <div className="z-[40] md:-mt-80 md:mb-10">
      <HoverEffect items={services} />
    </div>
  );
}
export const services = [
  {
    title: "Risk Assessment:",
    description:
      "We assess the risks associated with clients' personal or business situations. This helps determine the appropriate type and level of coverage required to protect against potential losses",
    link: "#",
  },
  {
    title: "Policy Comparison",
    description:
      "We compare insurance policies from various providers, ensuring that clients get the best value in terms of coverage and premium costs. This eliminates the hassle of researching and evaluating different options individually",
    link: "#",
  },
  {
    title: "Claims Assistance",
    description:
      "Linking Insurance Brokers guide clients through the insurance claims process, helping them collect the necessary documentation and negotiate with insurers to ensure timely and fair payouts.",
    link: "#",
  },
  {
    title: "Policy Management",
    description:
      "We manage clients' insurance portfolios by regularly reviewing and updating policies to ensure they stay aligned with any changes in coverage needs, lifestyle, or business operations.",
    link: "#",
  },
];
