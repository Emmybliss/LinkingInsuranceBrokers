import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// import { postData } from "@/lib/constants";

// Function to fetch post by ID
// export async function getPostById(id: string) {
//   const post = postData.find((post) => post.id === id); // Search for the post by ID
//   if (!post) {
//     throw new Error("Post not found");
//   }
//   return post;
// }
