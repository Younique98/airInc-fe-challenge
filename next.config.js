/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    productionBrowserSourceMaps: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
            {
                protocol: 'https',
                hostname: 'air-prod.imgix.net',
            },
            {
                protocol: 'https',
                hostname: 'air-original.imgix.net',
            },
        ],
    },
    headers: async () => {
        return [
            {
                source: '/_next/image',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/docs/:file*.pdf',
                has: [
                    {
                        type: 'header',
                        key: 'accept',
                        value: 'application/pdf',
                    },
                ],
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig
