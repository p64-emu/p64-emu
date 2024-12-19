import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "private-user-images.githubusercontent.com"
      },
      {
        hostname: "github.com"
      },
      {
        hostname:  "blogger.googleusercontent.com"
      }
    ]
  }
};

export default withMDX(config);
