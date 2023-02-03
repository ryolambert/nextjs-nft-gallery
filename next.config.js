/** @type {import('next').NextConfig} */
const withImages = require('next-images');

module.exports = withImages({
	eslint: {
		dirs: ['.']
	},
	poweredByHeader: false,
	trailingSlash: true,
	reactStrictMode: true,
	swcMinify: true
});
