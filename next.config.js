/** @type {import('next').NextConfig} */
const basePath = process.env.GITHUB_ACTIONS ? "/pitchmark" : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};
module.exports = nextConfig;
