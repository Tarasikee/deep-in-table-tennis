/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // TODO: change when deployed
            {
                port: '',
                hostname: '*',
            },
        ],
    },
}

module.exports = nextConfig
