/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'http',
        hostname: 'uhdtv.io',
      },

      {
        protocol: 'https',
        hostname: '*.blender.org',
      },
    ],
  },
}

export default nextConfig
