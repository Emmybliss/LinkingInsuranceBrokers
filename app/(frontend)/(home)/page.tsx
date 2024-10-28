import { CarouselComponent } from "../_components/CarouselComponent";
import AboutSection from "../_components/AboutSection";
import Link from "next/link";
import AchievementSection from "../_components/Counter";
import CallToAction2 from "../_components/CallToAction2";
import CallToAction from "../_components/CallToAction";
import ClientsSlider from "../_components/Clients";
import { LampComponent } from "@/components/ui/lamp";
import { TestimonialSection2 } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/lib/constants";
import { FeaturedServices } from "@/app/(frontend)/_components/FeaturedServices";
import FeaturedProducts from "../_components/FeaturedProducts";

export const metadata = {
  title: "Home | Linking Insurance Brokers",
  description:
    "Your trusted partner in comprehensive insurance solutions. Discover tailored coverage for all your personal and business needs.",
};

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between overflow-hidden z-[40]">
      <CarouselComponent />
      <div className="md:mx-36 mx-1 z-[40]">
        <AboutSection
          button={
            <Link href="/about">
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Learn More
                </div>
              </button>
            </Link>
          }
        />
        <AchievementSection />

        <FeaturedProducts />

        <div className="bg-slate-950">
          <LampComponent lamp_heading="Our Services" />
          <FeaturedServices />
        </div>

        <CallToAction />
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <TestimonialSection2
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <CallToAction2 />

        <ClientsSlider />
      </div>
    </div>
  );
};
export default Home;
