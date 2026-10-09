import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Allow .mdx extensions for files
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	turbopack: {
		root: import.meta.dirname,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.credly.com',
			},
			{
				protocol: 'https',
				hostname: 'app.engineers.texas.gov',
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
			},
		],
	},
	async headers() {
		return [
			{
				source: '/resume.pdf',
				headers: [
					{ key: 'Content-Type', value: 'application/pdf' },
					{
						key: 'Content-Disposition',
						value: 'attachment; filename="JohnMcWhirter-Resume.pdf"',
					},
				],
			},
			{
				source: '/:path*',
				headers: [
					{ key: 'X-Content-Type-Options', value: 'nosniff' },
					{ key: 'X-Frame-Options', value: 'DENY' },
					{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=(), payment=()',
					},
					{
						key: 'Content-Security-Policy',
						value: [
							"default-src 'self'",
							"script-src 'self' 'unsafe-inline' 'unsafe-eval'",
							"style-src 'self' 'unsafe-inline'",
							"img-src 'self' data: blob: https://raw.githubusercontent.com https://images.credly.com https://app.engineers.texas.gov",
							"font-src 'self'",
							"connect-src 'self'",
							"frame-ancestors 'none'",
							"base-uri 'self'",
							"form-action 'self'",
						].join('; '),
					},
				],
			},
		];
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
