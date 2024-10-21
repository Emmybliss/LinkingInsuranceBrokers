"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Define types for arrow component props
interface ArrowProps {
  onClick?: () => void;
}

// Next Arrow component
const NextArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer bg-black bg-opacity-50 p-2 text-white"
      onClick={onClick}
    >
      <ArrowRight />
    </div>
  );
};

// Previous Arrow component
const PrevArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer bg-black bg-opacity-50 p-2 text-white"
      onClick={onClick}
    >
      <ArrowLeft />
    </div>
  );
};

// Define type for slider items
interface SliderItem {
  id: number;
  image: string;
  title: string;
  desc: string;
}

// Slider items
export const sliders: SliderItem[] = [
  {
    id: 1,
    image: "/images/sliders/slider-01.jpg",
    title: "Your Trusted Insurance Experts",
    desc: "Finding the right insurance doesn’t have to be complicated. Our network of expert brokers ensures that you get personalized coverage tailored to your needs. Protect what matters most with ease!",
  },
  {
    id: 2,
    image: "/images/sliders/slider-02.jpg",
    title: "Seamless Insurance Solutions",
    desc: " Compare, choose, and secure the perfect insurance plan with our top-rated brokers. From health to auto to home, our brokers are here to simplify your journey toward the right protection.",
  },
  {
    id: 3,
    image: "/images/sliders/slider-03.jpg",
    title: "Get the Best Deal on Insurance Today",
    desc: "Don’t overpay for insurance. Connect with experienced brokers who can help you compare quotes and find the best coverage for your budget. Safe, secure, and hassle-free!",
  },
  {
    id: 4,
    image: "/images/sliders/full-slider-3.jpg",
    title: "Tailored Coverage at Your Fingertips",
    desc: "Whether it’s personal or business insurance, our brokers work for you. Get customized policies that match your exact needs, ensuring you’re fully covered when it matters most.",
  },
  {
    id: 5,
    image: "/images/sliders/full-slider-2.jpg",
    title: "Expert Guidance for All Your Insurance Needs",
    desc: "Unsure which insurance plan is right for you? Our trusted brokers offer expert advice and will guide you through the process step by step, ensuring peace of mind with the right coverage",
  },
];

// Carousel Component
export const CarouselComponent: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div className="relative max-w-full overflow-hidden z-[40]">
      <Slider {...settings} className="">
        {sliders.map((slide) => (
          <div key={slide.id} className="relative text-center text-white">
            <Image
              src={slide.image}
              alt={slide.title}
              layout="responsive"
              width={1920}
              height={1080}
              className="h-[90vh] w-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-black bg-opacity-30">
              <h2 className="z-10 text-center text-3xl font-semibold md:font-extrabold md:w-[900px] md:text-5xl">
                {slide.title}
              </h2>
              <p className="z-10 text-justify hidden md:block px-4 font-semibold md:w-[900px] md:text-2xl">
                {slide.desc}
              </p>

              <div className="flex gap-4">
                <Link href="#">
                  <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f97316_0%,#393BB2_50%,#f97316_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-primary backdrop-blur-3xl hover:bg-transparent hover:text-white">
                      Get Free Quote!
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* <SearchBar /> */}
    </div>
  );
};
