/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/crash": ["./node_modules/@reown/"],
    },
  },
};

export default nextConfig;
