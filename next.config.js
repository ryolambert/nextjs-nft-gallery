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
	poweredByHeader: false,
	trailingSlash: true,
	reactStrictMode: true,
	swcMinify: true
});
