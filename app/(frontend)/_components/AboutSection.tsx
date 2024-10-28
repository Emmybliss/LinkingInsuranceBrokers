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
    <div className="md:flex md:flex-row md:justify-between md:items-center md:gap-8 md:mt-10 mt-5 flex flex-col justify-center items-center">
      <div className="flex-1 flex flex-col items-center justify-center mb-4 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-thin">Who We Are</h2>
        <p className="px-5 py-5 text-justify text-base text-foreground md:px-0 md:text-lg">
          At Linking Insurance Brokers, we specialize in connecting individuals
          and businesses with expert insurance brokers who offer personalized
          and comprehensive coverage. Whether you're looking for property,
          health, marine, aviation, or specialized insurance, our network of
          experienced brokers provides tailored solutions to meet your unique
          needs. Our mission is to simplify the insurance process by offering
          expert guidance, ensuring that you receive the best protection at the
          most competitive rates. With a focus on trust, transparency, and
          customer satisfaction, Linking Insurance Brokers is your go-to partner
          for all your insurance needs.
        </p>
        {button}
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Image
          src="/images/about-img.jpg"
          alt="About Image"
          width={600}
          height={400}
          className="w-auto h-auto rounded-md"
        />
      </div>
    </div>
  );
};

export default AboutSection;
