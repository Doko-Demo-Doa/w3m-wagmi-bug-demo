/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/crash": ["./node_modules/@reown/appkit/dist/esm/src/client.js"],
    },
  },
};

export default nextConfig;
