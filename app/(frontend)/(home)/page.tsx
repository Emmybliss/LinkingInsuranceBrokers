import { CarouselComponent } from "../_components/CarouselComponent";
import AboutSection from "../_components/AboutSection";
import { Button } from "@/components/ui/button";
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

interface HomeProps {
  button_text?: string;
  button?: React.ReactNode;
}
const Home: React.FC<HomeProps> = ({ button, button_text }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between overflow-hidden z-[40]">
      <CarouselComponent />
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
      <LampComponent lamp_heading="Our Products" />
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
  );
};
export default Home;
