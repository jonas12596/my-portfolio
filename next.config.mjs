// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// next.config.js
import withPlugins from "next-compose-plugins";
import withVideos from "next-videos";

const nextConfig = {
  webpack(config, options) {
    return config;
  },
};

export default withPlugins([withVideos], nextConfig);
