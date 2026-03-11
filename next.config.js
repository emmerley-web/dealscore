/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // basePath for GitHub Pages project site (username.github.io/dealscore)
  basePath: process.env.GITHUB_ACTIONS ? "/dealscore" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/dealscore/" : "",
};
module.exports = nextConfig;
