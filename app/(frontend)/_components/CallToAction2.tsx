import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";
import { ContactFormModal } from "./ContactFormModal";
import Link from "next/link";

const CallToAction2: React.FC = () => {
  return (
    <div className="md:mb-5 mb-3 md:mx-0  md:mt-10 mt-3 rounded-xl bg-blue-50 p-10 dark:bg-blue-950 z-[40]">
      <div className="md:flex md:flex-row flex flex-col items-center justify-start bg-white dark:bg-blue-400">
        <div className="flex flex-col items-start justify-start">
          <Image
            src="/images/team-3.jpg"
            alt="Agent Image"
            width={400}
            height={400}
            className="rounded-r-lg object-cove w-auto h-autor"
          />
        </div>
        <div className="flex flex-col items-start justify-center space-y-4 p-5">
          <h2 className="text-3xl font-semibold">Get In Touch</h2>
          <p className="font-medium">
            Feel free to reach out to us for any inquiries or to book an
            appointment. <br /> Our team is here to assist you with any
            questions you may have.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/tel:+234 806 608 0000">
              <Button className="flex gap-2 md:hidden">
                <PhoneCall className="animate-pulse" />
                Call us
              </Button>
            </Link>

            {/* Include DrawerDialogDemo here for dynamic rendering */}
            <ContactFormModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction2;
