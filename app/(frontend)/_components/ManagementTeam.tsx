import Image from "next/image";
import React from "react";

const ManagementTeam = () => {
  return (
    <div className="flex flex-col justify-center items-center md:mb-10 px-3">
      <h2 className="font-thin md:text-3xl text-2xl pt-5">Management Team</h2>
      <div className=" md:mt-10 mt-5 mx-0 grid grid-cols-1 md:gap-4 md:grid md:grid-cols-2 w-full">
        <div className="">
          <Image
            src="/images/management1.jpg"
            width={600}
            height={400}
            alt="Management"
            className="rounded-md md:w-[600px] h-auto"
          />
        </div>

        <div className=" ">
          <p className="py-5 text-justify text-base text-foreground md:text-lg">
            Our management team consists of dynamic and experienced insurance
            broking professionals, each bringing a wealth of expertise and
            professionalism to deliver innovative, tailored services to our
            valued clients. We are committed to maintaining the highest
            standards of quality, professionalism, and exceptional after-sales
            service at all times.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam;
