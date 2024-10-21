"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

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

// Define the shape of the testimonial data
interface Testimonial {
  id: number;
  image: string;
  name: string;
  company: string;
  designation: string;
  testimony: string;
}

// Sample testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/images/testi_01.png",
    name: "John Doe",
    company: "Dreamland Corp",
    designation: "CEO",
    testimony:
      "Linking Insurance Brokers made finding the perfect coverage for our business incredibly easy. Their network of brokers provided us with personalized options and the guidance we needed. I highly recommend them for anyone seeking reliable and expert insurance services!",
  },
  {
    id: 2,
    image: "/images/testi_02.png",
    name: "Jane Smith",
    company: "FlexPay Ltd",
    designation: "Financial Advisor",
    testimony:
      "As a financial advisor, I often need to find the best insurance solutions for my clients. Linking Insurance Brokers connected me with top-notch brokers who simplified the process and secured great deals. Their platform is a game-changer for busy professionals!",
  },
  {
    id: 3,
    image: "/images/testi_03.png",
    name: "Alice Johnson",
    company: "Future Secure",
    designation: "Investment Analyst",
    testimony:
      "Linking Insurance Brokers helped us compare multiple policies effortlessly. Their brokers’ expertise and tailored recommendations ensured that we got the right coverage for our unique needs. I couldn’t be happier with the service!",
  },
  {
    id: 4,
    image: "/images/test6.jpg",
    name: "Robert Brown",
    company: "Secure Shield Inc.",
    designation: "Risk Manager",
    testimony:
      "The team at Linking Insurance Brokers goes above and beyond. They connected me with experienced brokers who provided competitive insurance quotes in no time. Their professional service saved us both time and money.",
  },
  {
    id: 5,
    image: "/images/test4.jpg",
    name: "Emily Davis",
    company: "LandMark Solutions",
    designation: "Marketing Manager",
    testimony:
      "Working with Linking Insurance Brokers was an absolute breeze. Their platform allowed us to reach out to expert brokers who offered excellent coverage options, giving us peace of mind. A must-try for anyone seeking insurance solutions!",
  },
  {
    id: 6,
    image: "/images/test5.jpg",
    name: "Michael Wilson",
    company: "AgentNet",
    designation: "Sales Director",
    testimony:
      "Joining forces with Linking Insurance Brokers was one of the best decisions we made. Their platform opened doors to trusted insurance brokers who provided customized coverage for our growing needs. Exceptional service all around!",
  },
];

const TestimonialSection: React.FC = () => {
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
    <div className="py-10 z-[40]">
      <Slider {...settings}>
        {testimonials.map((test) => (
          <div key={test.id}>
            <div className="flex flex-col items-center justify-center p-6">
              <Image
                src={test.image}
                alt="Testimonial"
                width={100}
                height={70}
                className="h-auto w-auto rounded-full shadow-md"
              />
              <div className="mt-4 flex flex-col items-center justify-center">
                <h2 className="block text-lg font-bold text-foreground">
                  {test.name}
                </h2>
                <h3 className="-mt-1 mb-1 block text-sm font-medium leading-loose text-muted-foreground">
                  {test.company}
                </h3>
                <div className="relative mt-5 text-center">
                  <Quote className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-full rotate-180 transform text-gray-500" />
                  <p className="text-lg italic text-gray-700 dark:text-white">
                    {test.testimony}
                  </p>
                  <Quote className="absolute bottom-0 left-1/2 h-4 w-4 -translate-x-1/2 translate-y-full transform text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSection;
