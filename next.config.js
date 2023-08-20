/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    compress: true,
    experimental: {
        serverActions: true
    }
}

module.exports = nextConfig
