import React from "react";
import Banner from "../_components/Banner";
import BlogPosts from "../_components/BlogPosts";
import { postData, testimonials } from "@/lib/constants";
import CallToAction from "../_components/CallToAction";
import { TestimonialSection2 } from "@/components/ui/infinite-moving-cards";
import CallToAction2 from "../_components/CallToAction2";
import ClientsSlider from "../_components/Clients";

// Define the metadata for the page
export const metadata = {
  title: "Blog Posts",
};

// Define the BlogPage component
const BlogPage: React.FC = () => {
  const data = postData;
  return (
    <div className="md:mx-36 mx-0  md:my-10 my-0 flex min-h-screen flex-col justify-between overflow-hidden z-[40]">
      <Banner page_title="BLOG POSTS" src="/images/blog.jpg" />

      <BlogPosts posts={data} />
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

export default BlogPage;
