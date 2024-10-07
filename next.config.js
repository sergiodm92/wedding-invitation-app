/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
  },
  // Disable server-side rendering for static export
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;