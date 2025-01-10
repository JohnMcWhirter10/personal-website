/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'www.python.org',
            'raw.githubusercontent.com',
            'cache.cloud.tamu.edu',
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
