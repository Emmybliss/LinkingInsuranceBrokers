import React from "react";
import Banner from "../_components/Banner";
import AboutSection from "../_components/AboutSection";
import { BicepsFlexed, Check, Eye, Scale, Target, Trophy } from "lucide-react";
import CallToAction2 from "../_components/CallToAction2";
import TestimonialSection from "../_components/TestimonialSection";
import { TestimonialSection2 } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/lib/constants";
import ManagementTeam from "../_components/ManagementTeam";
import CallToAction from "../_components/CallToAction";
import ClientsSlider from "../_components/Clients";

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between overflow-hidden md:my-10 my-0 md:mx-36 mx-0 z-[40]">
      <Banner page_title="ABOUT US" src="/images/about-img.jpg" />
      <AboutSection />
      <div className="mt-6 items-center justify-between gap-5 bg-gray-100 p-12  dark:bg-blue-950 md:grid md:grid-cols-3">
        <div className="mb-4 flex flex-col items-center gap-4 text-justify">
          <h2 className="flex items-center justify-center gap-2 text-2xl font-semibold">
            <Target className="h-8 w-8" />
            Mission
          </h2>
          <p className="text-lg">
            At Linking Insurance Brokers, our mission is to provide tailored and
            transparent insurance solutions that safeguard our clients'
            interests and financial well-being. We strive to build long-lasting
            relationships through personalized services, expert advice, and a
            commitment to excellence.
          </p>
        </div>
        <div className="mb-4 flex flex-col items-center gap-4 text-justify">
          <h2 className="flex items-center justify-center gap-2 text-2xl font-semibold">
            <Eye className="h-8 w-8" />
            Vision
          </h2>
          <p className="text-lg">
            To be the leading insurance brokerage firm known for innovation,
            trust, and unparalleled customer service, empowering individuals and
            businesses to navigate risks with confidence and security.
          </p>
        </div>
        <div className="mb-4 flex flex-col items-center gap-4 text-justify">
          <h2 className="flex items-center justify-center gap-2 text-2xl font-semibold">
            <Trophy className="h-8 w-8" />
            Goals
          </h2>
          <ul className="flex flex-col text-left">
            <li className="flex items-center justify-start gap-2">
              <Check className="h-5 w-5 text-primary" />
              To offer comprehensive and customized insurance packages that meet
              the evolving needs of our clients.
            </li>
            <li className="flex items-center justify-start gap-2">
              <Check className="h-5 w-5 text-primary" />
              To enhance client education and awareness, helping them make
              informed decisions.
            </li>
            <li className="flex items-center justify-start gap-2">
              <Check className="h-5 w-5 text-primary" />
              To expand our network of trusted insurance providers and foster
              mutually beneficial partnerships.
            </li>
            <li className="flex items-center justify-start gap-2">
              <Check className="h-5 w-5 text-primary" />
              To continuously innovate our services, leveraging technology for
              seamless client experiences.
            </li>
          </ul>
        </div>

        <div className="mb-4 flex flex-col items-center gap-4 text-justify">
          <h2 className="flex items-center justify-center gap-2 text-2xl font-semibold">
            <BicepsFlexed className="h-8 w-8" />
            Strenght
          </h2>
          <ul className="flex flex-col text-left">
            <li className="flex items-center justify-start gap-2">
              <Check className="h-5 w-5 text-primary" />A team of experienced
              insurance professionals dedicated to understanding client needs.
            </li>
            <li className="flex items-center justify-start gap-2">
              <Check className="h-5 w-5 text-primary" />
              Strong relationships with leading insurance companies, allowing us
              to offer competitive policies.
            </li>
            <li className="flex items-center justify-start gap-2">
              <Check className="h-5 w-5 text-primary" />A focus on personalized
              service that places clients at the center of every decision.{" "}
            </li>
            <li className="flex items-center justify-start gap-2">
              <Check className="h-5 w-5 text-primary" />
              Commitment to transparency and ensuring clients fully understand
              their insurance options.
            </li>
          </ul>
        </div>
        <div className="col-span-2 mb-4 flex flex-col gap-4 text-lg">
          <h2 className="flex items-center justify-center gap-2 text-center text-2xl font-semibold">
            <Scale className="h-8 w-8" />
            Values
          </h2>
          <p className="">
            At Linking Insurance Brokers, we uphold a set of core values that
            guide our actions and decisions:
          </p>
          <ul className="flex flex-col text-left">
            <li className="flex items-center justify-start gap-2">
              <Check className="h-5 w-5 text-primary" />
              Integrity: Upholding honesty and ethical practices in all our
              dealings.
            </li>
            <li className="flex items-center justify-start gap-2">
              <Check className="h-5 w-5 text-primary" />
              Customer-Centricity: Placing the needs and satisfaction of our
              clients first.
            </li>
            <li className="flex items-center justify-start gap-2">
              <Check className="h-5 w-5 text-primary" />
              Innovation: Continuously seeking ways to improve our services and
              provide value.
            </li>
            <li className="flex items-center justify-start gap-2">
              <Check className="h-5 w-5 text-primary" />
              Accountability: Taking responsibility for our actions and
              delivering on our promises.
            </li>
            <li className="flex items-center justify-start gap-2">
              <Check className="h-5 w-5 text-primary" />
              Excellence: Striving for the highest standards in everything we
              do, from customer service to insurance solutions.
            </li>
          </ul>
        </div>
      </div>
      <ManagementTeam />

      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <TestimonialSection2
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <CallToAction2 />
      <CallToAction
        title="Get Expert Insurance Advice Today"
        desc="Secure the best insurance plan tailored to your needs with our experienced brokers. Whether it's for your business, health, or property, we're here to guide you every step of the way!"
        button="Get Free Quote!"
      />

      <ClientsSlider />
    </div>
  );
};

export default AboutPage;
