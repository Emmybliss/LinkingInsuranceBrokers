import Image from "next/image";
import React from "react";
import Banner from "../../_components/Banner";
import { postData } from "@/lib/constants"; // Assuming this fetches data
import CallToAction from "../../_components/CallToAction";
import CallToAction2 from "../../_components/CallToAction2";
import ClientsSlider from "../../_components/Clients";

// Fetch the post data by ID
const getPostById = async (id: string) => {
  const post = postData.find((post) => post.id === id); // Search post by ID
  if (!post) {
    throw new Error("Post not found");
  }
  return post;
};

// Dynamic metadata generation based on the post
export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);
  return {
    title: post.title, // Dynamically setting the title
    intro: post.intro, // Dynamically setting the intro
  };
}

const BlogDetails = async ({ params }: { params: { id: string } }) => {
  // Fetch the post using the ID from params
  const post = await getPostById(params.id as string);

  return (
    <div className="md:mx-36 mx-0 md:my-10 my-0 flex min-h-screen flex-col justify-between overflow-hidden z-[40]">
      <Banner page_title={post.title} src="/images/blog.jpg" />

      <div className="md:flex md:flex-row flex flex-col md:gap-5 gap-3 px-3 text-foreground mt-10">
        <div className="flex-1 flex flex-col gap-3">
          {/* Dynamically display the post title */}
          <h1 className="md:text-3xl text-xl md:text-start font-semibold underline text-center">
            {post.title}
          </h1>
          <p className="md:text-[20px] text-[16px]">
            {/* Display the post intro */}
            {post.intro}
          </p>

          <div className="md:flex md:flex-row gap-[10px]  hidden">
            <Image
              src="/images/author.jpg"
              alt="Author Image"
              width={40}
              height={40}
              className="object-cover rounded-lg h-auto w-auto"
            />
            <div className="flex flex-col justify-center items-center">
              <span className="text-[18px] font-semibold">
                Dr. Justina Anaetoh
              </span>
              <span className="text-sm">Chief Operating Officer (C.O.O)</span>
              <span className="text-sm bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                Linkage Insurance Brokers Limited
              </span>
            </div>
          </div>
        </div>

        <div className="md:flex-1 md:h-[400px] h-[200px] w-auto relative">
          <Image
            src={post.image} // Replace with post image if available
            alt={post.title} // Dynamically use post title as alt text
            fill={true}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-[8px] w-auto h-auto"
          />
        </div>
      </div>

      <div className="md:mt-[50px] px-3 md:mb-10 mt-4 mb-5">
        <p className="md:text-[20px] text-[16px]">{post.body}</p>
      </div>
      <div className="flex flex-row gap-[5px] items-start md:hidden p-5 justify-start">
        <Image
          src="/images/author.jpg"
          alt="Author Image"
          width={40}
          height={40}
          className="object-cover rounded-[50%] w-auto h-auto"
        />
        <div className="flex flex-col justify-center items-center">
          <span className="text-[18px] font-semibold">Dr. Justina Anaetoh</span>
          <span className="text-sm">Chief Operating Officer (C.O.O)</span>
          <span className="text-sm bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
            Linkage Insurance Brokers Limited
          </span>
        </div>
      </div>
      <CallToAction
        title="Get Expert Insurance Advice Today"
        desc="Secure the best insurance plan tailored to your needs with our experienced brokers. Whether it's for your business, health, or property, we're here to guide you every step of the way!"
        button="Get Free Quote!"
      />
      <CallToAction2 />
      <ClientsSlider />
    </div>
  );
};

export default BlogDetails;
