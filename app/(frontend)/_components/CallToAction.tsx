import React from "react";
import { QuoteModal } from "./QuoteModal";

interface CallToActionProps {
  title?: string;
  desc?: string;
  button?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, desc, button }) => {
  return (
    <div className="mb-5 z-[40] space-y-4 rounded-md md:grid md:grid-cols-12 gap-4 justify-center items-center md:justify-normal md:items-start bg-primary p-12 text-white">
      <div className="col-span-8">
        <h2 className="text-3xl font-semibold text-center md:text-start md:items-start">
          {title || "Get Expert Insurance Advice Today"}
        </h2>
        <p className="mt-4">
          {desc ||
            "Secure the best insurance plan tailored to your needs with our experienced brokers. Whether it's for your business, health, or property, we're here to guide your every step of the way!"}
        </p>
      </div>
      <div className="col-span-4 z-[40]">
        <QuoteModal />
      </div>
    </div>
  );
};

export default CallToAction;
