import React from "react";
import Banner from "../_components/Banner";

import Link from "next/link";
import Image from "next/image";

// Define the metadata for the page
export const metadata = {
  title: "Career | Linking Insurance Brokers",
  description:
    "Explore career opportunities with Linking Insurance Brokers. Join us to make a difference in the insurance industry.",
};

const CareerPage = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between overflow-hidden z-40 md:mx-0 md:my-10">
      <Banner page_title="CAREER OPPORTUNTIES" src="/images/banner.jpg" />

      <div className="md:mx-36 md:my-10 z-[40]">
        <div className="md:grid md:grid-cols-12 md:gap-5 grid grid-cols-1">
          {/* Introduction Section */}
          <div className="md:mb-10 col-span-6">
            <h2 className="text-2xl font-semibold mb-4">
              Join Our Team of Trusted Insurance Professionals
            </h2>
            <p className=" leading-relaxed">
              At Linking Insurance Brokers, we are dedicated to protecting our
              clients and empowering them with the peace of mind they deserve.
              We believe in providing our employees with opportunities to grow,
              learn, and make an impact. As an established insurance brokerage,
              we’re always looking for driven, client-focused individuals to
              join our team.
            </p>
            <div className="md:mt-10">
              <h2 className="text-2xl font-semibold mb-4">Why Work with Us?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Growth-Oriented Environment:</strong> Career
                  development through continuous training, certifications, and
                  mentorship, with a clear path to advancement.
                </li>
                <li>
                  <strong>Supportive Team Culture:</strong> A collaborative,
                  inclusive environment where individual contributions are
                  valued.
                </li>
                <li>
                  <strong>Competitive Compensation & Benefits:</strong> Health
                  and retirement plans, competitive salaries, bonuses, and other
                  incentives.
                </li>
                <li>
                  <strong>Work-Life Balance:</strong> Flexible schedules, remote
                  work options, and generous time-off policies.
                </li>
              </ul>
            </div>
            {/* Diversity and Inclusion Section */}
            <div className="md:mb-10 md:mt-10">
              <h2 className="text-2xl font-semibold mb-4">
                Our Commitment to Diversity and Inclusion
              </h2>
              <p className=" leading-relaxed">
                At Linking Insurance Brokers, we believe that diverse
                perspectives drive innovation and excellence. We’re proud to be
                an equal-opportunity employer, committed to providing an
                inclusive environment for all.
              </p>
            </div>
          </div>
          <div className="col-span-6">
            <Image
              src="/images/join-team.jpg"
              width={500}
              height={500}
              alt="Join Our Team"
              className="rounded-md object-cover"
            />
          </div>
          {/* Why Work with Us Section */}
        </div>
        <div className="md:flex md:flex-row flex flex-col md:gap-5">
          {/* Open Positions Section */}
          <section className="mb-10">
            <h2 className="text-2xl text-center font-semibold mb-4">
              Job Opportunities
            </h2>
            <div className="space-y-6 md:flex md:flex-row">
              <div>
                <h3 className="font-semibold text-lg">1. Insurance Broker</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Location: [Location or Remote]</li>
                  <li>
                    Responsibilities: Client consultation, policy
                    recommendation, claims support, and renewal management.
                  </li>
                  <li>
                    Requirements: Licensing in [specific insurance products or
                    regions], 2+ years of experience, strong communication
                    skills.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  2. Customer Service Representative
                </h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Location: [Location or Remote]</li>
                  <li>
                    Responsibilities: Assist clients with policy inquiries,
                    manage claims, and ensure seamless customer service.
                  </li>
                  <li>
                    Requirements: Strong communication skills, experience in
                    customer service, familiarity with insurance is a plus.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  3. Underwriting Specialist
                </h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Location: [Location or Remote]</li>
                  <li>
                    Responsibilities: Assess applications, determine coverage
                    eligibility, and work closely with brokers on risk
                    assessment.
                  </li>
                  <li>
                    Requirements: Degree in finance or related field, knowledge
                    of underwriting practices, detail-oriented.
                  </li>
                </ul>
              </div>
            </div>
            <p className=" text-center md:mt-10">
              Explore our
              <Link href="#" className="text-blue-500 underline mx-2">
                Job Portal
              </Link>
              to apply directly.
            </p>
          </section>
        </div>
        {/* Application Process Section */}
        <section className="mb-10 flex flex-col justify-center items-center space-y-4">
          <h2 className="text-2xl font-semibold mb-4 ">How to Apply</h2>
          <div className="md:grid md:grid-cols-12 md:gap-5 grid grid-cols-1">
            <ul className="list-decimal col-span-6 list-inside ml-4 md:space-y-5">
              <li>Browse our available positions.</li>
              <li>
                Click on your desired role to view details and application
                instructions.
              </li>
              <li>Submit your application and resume.</li>
              <li>
                Our HR team will reach out to qualified candidates for
                interviews.
              </li>
            </ul>
            <Image
              src="/images/apply.jpg"
              width={300}
              height={300}
              alt="apply"
              className="col-span-6"
            />
          </div>
          <p className="mt-4">
            Have questions? Reach out to our HR team at
            <a
              href="mailto:info@linkinginsurancebrokers.com"
              className="text-blue-500 underline"
            >
              info@linkinginsurancebrokers.com
            </a>
            .
          </p>
        </section>

        {/* Life at Linking Insurance Brokers Section */}
        <section className="mb-10 text-center flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold mb-4">
            Life at Linking Insurance Brokers
          </h2>
          <p className="italic text-gray-600 border-l-4 pl-4 border-blue-500">
            "I joined Linking Insurance Brokers because of the career growth
            potential and the team environment. I feel valued, supported, and
            challenged every day." – James Audu, Technical Manager
          </p>
          <p className="mt-4">
            Stay connected with us on
            <span className="text-blue-500 mx-2">LinkedIn</span>,
            <span className="text-blue-500">Twitter</span>,
            <span className="text-blue-500 mx-2">Facebook</span> to learn more
            about our team and upcoming career events.
          </p>
        </section>

        <p className="text-center text-lg font-semibold">
          Ready to Start Your Journey with Linking Insurance Brokers? Click
          <Link href="#" className="text-blue-500 underline mx-2">
            here
          </Link>
          to explore opportunities and begin your application process.
        </p>
      </div>
    </div>
  );
};

export default CareerPage;
