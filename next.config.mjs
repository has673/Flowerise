/** @type {import('next').NextConfig} */
import nextPWA from "next-pwa";

const nextConfig = {
  // Add your Next.js configuration here
};

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
});

export default {
  ...nextConfig, // Merge with your existing Next.js config
  ...withPWA, // Add PWA configuration
};
