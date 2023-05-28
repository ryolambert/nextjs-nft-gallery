/** @type {import('next').NextConfig} */
const withImages = require('next-images');

module.exports = withImages({
  eslint: {
    dirs: ['.']
  },
  experimental: {
    // Resolves Next.js SSR bug for react-query prefetchInfiniteQuery
    // @see https://github.com/TanStack/query/issues/1458#issuecomment-1022396964
    swcPlugins: [['next-superjson-plugin', {}]]
  },
  images: {
    domains: ['nft-cdn.alchemy.com'],
    formats: ['image/webp'],
    minimumCacheTTL: 31556952, // 1yr in secs
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/alchemyapi/image/upload/thumbnail/**'
      },
      { protocol: 'https', hostname: 'ipfs.io', pathname: '/ipfs/**' }
    ]
  },
  poweredByHeader: false,
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true
});
