import React from "react";
import Banner from "../_components/Banner";
import { Clock, Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import ContactForm from "../_components/ContactForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Contact Us | Linking Insurance Brokers",
  description:
    "Get in touch with Linking Insurance Brokers for expert guidance, policy support, and answers to all your insurance-related questions.",
};

const ContactPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between overflow-hidden z-[40] md:mx-0 mx-0 my-0 md:my-10">
      <Banner page_title="CONTACT US" src="/images/contact1.jpg" />
      <div className="gap-5 md:grid md:grid-cols-2 z-[40] grid grid-cols-1 md:mx-36 mt-5 px-3">
        <div className="flex flex-col">
          {/* <h2 className="mb-4 text-2xl font-semibold">Send us a Message</h2>
          <div className="w-full z-[40]"> */}
          <Card className="z-[40] shadow-md">
            <CardHeader>
              <CardTitle>Send Us A Message</CardTitle>
              <CardDescription>
                Fill the form below and we will get back to you as soon as
                possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
          {/* </div> */}
        </div>
        <div className="flex flex-col space-y-3 z-[40] mb-5">
          <h2 className="mb-3 text-2xl font-semibold">Contact Details</h2>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <p className="t">
              No. 1 Kandi Close, off Aminu Kano Crescent, Wuse 2, Abuja
            </p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneCall className="h-5 w-5" />
            <p className="">+234 806 608 0000</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <p className="">info@linkinginsurancebrokers.com</p>
            <br />
            <p className="">linkinginsurancebroker@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <p className="">Monday - Friday: 9:00 AM to 5:00 PM</p>
          </div>
          <div className="mt-5">
            <h2 className="mb-3 text-2xl font-semibold">Follow Us On:</h2>
            <div className="flex gap-2">
              <Link href="https://instagram.com">
                <FaInstagram className="h-5 w-5 text-red-500 hover:animate-spin" />
              </Link>
              <Link href="https://twitter.com">
                <FaTwitter className="h-5 w-5 text-blue-600 hover:animate-spin" />
              </Link>
              <Link href="https://facebook.com">
                <FaFacebook className="h-5 w-5 text-blue-500 hover:animate-spin" />
              </Link>
              <Link href="https://linkedin.com">
                <Linkedin className="h-5 w-5 text-blue-700 hover:animate-spin" />
              </Link>
              <Link href="https://youtube.com">
                <FaYoutube className="h-5 w-5 text-red-600 hover:animate-spin" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
