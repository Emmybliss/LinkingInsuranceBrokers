import Image from "next/image";
import React from "react";

// Define the types for the props
interface BannerProps {
  src: string; // Source URL for the banner image
  page_title: string; // Title to display on the banner
}

const Banner: React.FC<BannerProps> = ({ src, page_title }) => {
  return (
    <div>
      <div className="relative flex md:h-[400px] h-[200px] w-full items-center justify-center overflow-hidden">
        <Image
          src={src}
          fill={true}
          alt="Banner Image"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center"
        />
        <h2 className="absolute py-4 px-6 md:p-5 inset-0 text-center flex flex-col items-center justify-center bg-black bg-opacity-50 md:text-5xl text-2xl font-bold text-white">
          {page_title}
        </h2>
      </div>
    </div>
  );
};

export default Banner;
