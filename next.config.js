/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            "firebasestorage.googleapis.com",
            "shandonblack.netlify.app",
            "netlify.app",
            "googleapis.com",
        ],
        formats: ["image/webp", "image/avif"],
    },
    target: "serverless",
};

module.exports = nextConfig;
