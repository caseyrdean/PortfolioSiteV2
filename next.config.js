/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "drive.google.com",
    //   },
    // ],
  },

  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
