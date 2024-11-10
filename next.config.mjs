
/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
                port: "",
                pathname: "/**"
            }
        ]
    },

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
