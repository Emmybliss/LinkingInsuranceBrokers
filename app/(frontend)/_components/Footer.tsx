import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LandPlot, Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="overflow-hidden bg-primary">
      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col space-y-4 justify-center ">
          <Link
            href="/"
            className="flex flex-col items-center justify-center md:items-start"
          >
            <Image
              src="/images/LIBL.png"
              alt="LIBL logo"
              width={100}
              height={100}
              className="w-auto h-auto"
            />
          </Link>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <p className="text-white">No. 3, Kandi close, Wuse 2, Abuja</p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneCall className="h-5 w-5" />
            <p className="text-white">+234 810 000 000</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <p className="text-white">info@linkinginsurancebrokers.com</p>
          </div>
          <div className="flex gap-2 text-white">
            <Link href="https://instagram.com">
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com">
              <FaTwitter className="h-5 w-5" />
            </Link>
            <Link href="https://facebook.com">
              <FaFacebook className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://youtube.com">
              <FaYoutube className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4 text-white items-center md:items-start justify-center">
          <h2 className="text-xl font-bold underline">COMPANY</h2>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact">Partners</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>

        <div className="flex flex-col space-y-4 text-white md:items-start items-center justify-center">
          <h2 className="text-xl font-bold underline">SUPPORT</h2>
          <Link href="/support">Support</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </div>
        <div className="flex flex-col space-y-3 text-white z-[40] items-center md:items-start justify-center">
          <p className="italic">
            Enter your email address to subscribe to our newsletters!
          </p>
          <div className="md:flex md:flex-row flex flex-col w-full md:w-auto  items-center gap-1 z-[40]">
            <Input type="email" placeholder="Email" />
            <Button className="bg-orange-500 w-full md:w-auto hover:bg-white hover:text-primary hover:outline hover:outline-orange-500">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-5 bg-black p-4">
        <p className="text-center text-white">
          Copyright © Linking Insurance Brokers Ltd All Rights Reserved.
          <br />
          <Link href="#"> Developed by MindIntel Ltd.</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
