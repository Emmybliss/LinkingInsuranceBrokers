"use client";
import { Button } from "@/components/ui/button";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function FeaturedServices() {
  return (
    <div className="md:mx-36 mx-0 px-5 z-[40] md:-mt-80">
      <HoverEffect items={services} />
      <Link href="/products" className="mb-5 flex items-center justify-center">
        <Button variant="outline">
          View More Services <ChevronRight />
        </Button>
      </Link>
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
