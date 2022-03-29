/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["i.ibb.co", "dummyimage.com"],
  },
}

module.exports = nextConfig
