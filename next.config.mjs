/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'development' ? '' : '/',
};

export default nextConfig;
