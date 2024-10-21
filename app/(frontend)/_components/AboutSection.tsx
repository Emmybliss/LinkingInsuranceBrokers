"use client";
import Image from "next/image";
import React from "react";

// Define types for props
interface AboutSectionProps {
  button_text?: string;
  button?: React.ReactNode;
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ button }) => {
  return (
    <div className="w-full md:mx-0 mx-0 z-[40]">
      <div className="px-3 md:grid md:grid-cols-2 z-[40] grid grid-cols-1 md:gap-4 md:mt-10 mt-5">
        <div className="flex flex-col items-center justify-center mb-4">
          <h2 className="text-2xl md:text-3xl font-thin">About Us</h2>
          <p className="px-5 py-5 text-justify text-base text-foreground md:px-0 md:text-lg">
            At Linking Insurance Brokers, we specialize in connecting
            individuals and businesses with expert insurance brokers who offer
            personalized and comprehensive coverage. Whether you're looking for
            property, health, marine, aviation, or specialized insurance, our
            network of experienced brokers provides tailored solutions to meet
            your unique needs. Our mission is to simplify the insurance process
            by offering expert guidance, ensuring that you receive the best
            protection at the most competitive rates. With a focus on trust,
            transparency, and customer satisfaction, Linking Insurance Brokers
            is your go-to partner for all your insurance needs.
          </p>
          {button}
        </div>
        <div className="">
          <Image
            src="/images/about-img.jpg"
            alt="About Image"
            width={600}
            height={400}
            className="w-auto h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
