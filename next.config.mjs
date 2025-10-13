import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Allow .mdx extensions for files
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.python.org',
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'cache.cloud.tamu.edu',
			},
		],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	// Fix hot reload for WSL/Windows
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.watchOptions = {
				poll: 1000, // Check for changes every second
				aggregateTimeout: 300, // Delay before rebuilding
			};
		}
		return config;
	},
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
});

// Combine MDX and Next.js config
export default withMDX(nextConfig);
