"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { ChevronsRightIcon, Grid, List, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define the type for a blog post
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  image: string;
  intro: string;
  body: string;
  link: string;
}

// Component for rendering a grid post
const GridPost = ({ item, index }: { item: BlogPost; index: number }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  if (inView) {
    controls.start("visible");
  }

  return (
    <Link href={`/blog/${item.slug}`} key={item.slug}>
      <motion.div
        ref={ref}
        className="relative overflow-hidden rounded-lg shadow-lg group"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          delay: index * 0.1,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          layoutId="hoverBackground"
        />
        <Image
          className="object-cover w-full h-48"
          src={item.image}
          alt={item.title}
          width={400}
          height={250}
        />
        <div className="p-4">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            {item.title}
          </h2>
          <p className="text-sm">{item.intro.slice(0, 150)}...</p>
        </div>
      </motion.div>
    </Link>
  );
};

// Component for rendering a list post
const ListPost = ({ item, index }: { item: BlogPost; index: number }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  if (inView) {
    controls.start("visible");
  }

  return (
    <Link
      href={`/blog/${item.slug}`}
      key={item.id}
      className="cursor-pointer relative z-30 flex"
    >
      <motion.div
        ref={ref}
        className="relative overflow-hidden rounded-lg shadow-lg group w-full md:w-1/3"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          delay: index * 0.1,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          layoutId="hoverBackground"
        />
        <Image
          className="object-cover w-full h-full"
          src={item.image}
          alt={item.title}
          width={400}
          height={250}
        />
      </motion.div>

      <div className="p-4 relative z-20 items-center md:items-start justify-center flex flex-col">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">{item.title}</h2>
        <p className="text-lg">{item.intro.slice(0, 200)}...</p>
      </div>
    </Link>
  );
};

// Main component to render blog posts and animations
const BlogPosts = ({ posts }: { posts: BlogPost[] }) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="z-[40]">
      {/* Search and View Toggle */}
      <div className="md:flex md:flex-row flex flex-col justify-between mt-5 md:mt-10 px-4">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Search..." />
          <Button size="icon" variant="outline">
            <Search />
          </Button>
        </div>
        <div className="space-x-3 hidden md:block">
          <Button
            size="icon"
            onClick={() => setViewMode("list")}
            variant="outline"
          >
            <List />
          </Button>
          <Button
            size="icon"
            onClick={() => setViewMode("grid")}
            variant="outline"
          >
            <Grid />
          </Button>
        </div>
      </div>

      {/* Render Posts based on view mode */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 mb-5 px-3 md:mt-10 z-[40] md:mb-10">
          {posts.map((item: BlogPost, index) => (
            <GridPost key={item.id} item={item} index={index} />
          ))}
        </div>
      ) : (
        <div className="ListPostView flex flex-col gap-6 mt-5 mb-5 px-3 md:mt-10 z-[40] md:mb-10">
          {posts.map((item: BlogPost, index) => (
            <ListPost key={item.id} item={item} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPosts;
