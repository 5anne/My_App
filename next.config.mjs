
/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/contact',
                destination: '/posts',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
