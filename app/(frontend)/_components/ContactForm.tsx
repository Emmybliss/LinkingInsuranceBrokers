import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <div className="z-[40]">
      <form action="">
        <div className="mb-3">
          <Input type="text" placeholder="Full Name" />
        </div>
        <div className="mb-3">
          <Input type="text" placeholder="Phone Number" />
        </div>
        <div className="mb-3">
          <Input type="text" placeholder="Email Address" />
        </div>
        <div>
          <Textarea
            placeholder="Type your message here."
            id="message"
            className="h-40 w-full border bg-transparent p-4"
          />
        </div>

        <button className="p-[3px] relative mt-4 w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg" />
          <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            Send
          </div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
