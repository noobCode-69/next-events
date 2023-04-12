/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wallpaperaccess.com',
      },
      {
        protocol : "https",
        hostname : "img.freepik.com"
      },
      {
        protocol : "https",
        hostname : 'wallpapercave.com'
      }
    ],
  },
}

module.exports = nextConfig
