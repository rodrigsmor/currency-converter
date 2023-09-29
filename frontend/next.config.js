/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: false,
      ssr: true,
    },
  }
};

module.exports = nextConfig