/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Since you are using a custom domain, basePath should be empty.
  // `images.unoptimized = true` is required for static exports.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
