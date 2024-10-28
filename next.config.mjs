/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Use this for static site generation
  images: {
    domains: ["linkinginsurancebrokers.com"],
    loader: "default", // Use the default loader or set images to be unoptimized
    unoptimized: false, // Disable image optimization when using static exports by setting unoptimized to true
  },
};

export default nextConfig;
