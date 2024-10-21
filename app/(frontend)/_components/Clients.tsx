"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Define the props for the arrow components
interface ArrowProps {
  onClick?: () => void;
}

// Arrow components for the slider
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer bg-black bg-opacity-50 p-2 text-white"
      onClick={onClick}
    >
      <ArrowRight />
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer bg-black bg-opacity-50 p-2 text-white"
      onClick={onClick}
    >
      <ArrowLeft />
    </div>
  );
};

// Define the shape of the Partners data
interface Partners {
  id: number;
  image: string;
  name: string;
}

// Sample Partners data
const partners: Partners[] = [
  {
    id: 1,
    image: "/images/partners/naicom.png",
    name: "naicom",
  },
  {
    id: 2,
    image: "/images/partners/prestige.png",
    name: "prestige",
  },
  {
    id: 3,
    image: "/images/partners/NEM-Insurance-Plc.jpg",
    name: "NEM Insurance Plc",
  },
  {
    id: 4,
    image: "/images/partners/heirs.jpg",
    name: "Heirs",
  },
  {
    id: 5,
    image: "/images/partners/NCRIB.png",
    name: "NCRIB",
  },
  {
    id: 6,
    image: "/images/partners/veritas.png",
    name: "veritas",
  },
];

const ClientsSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-8 z-[40]">
      <Slider {...settings}>
        {partners.map((test) => (
          <div key={test.id}>
            <div className="flex flex-col items-center justify-center p-6">
              <Image
                src={test.image}
                alt="Partners"
                width={150}
                height={150}
                className="h-auto w-auto  shadow-md"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientsSlider;
