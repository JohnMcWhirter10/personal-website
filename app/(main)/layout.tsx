import type React from 'react';
import type { Metadata, Viewport } from 'next';
import { Crimson_Text, Open_Sans, Oswald, Work_Sans } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/components/theme-provider';

// Primary fonts for Texas A&M Aggie UX
const oswald = Oswald({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-oswald',
	weight: ['200', '300', '400', '500', '600', '700'],
});

const workSans = Work_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-workSans',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

// Body fonts for Texas A&M Aggie UX
const openSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-openSans',
	weight: ['300', '400', '500', '600', '700', '800'],
});

const crimsonText = Crimson_Text({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-crimsonText',
	weight: ['400', '600', '700'],
});

// Add a separate viewport export for Next.js 13+
export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

export const metadata: Metadata = {
	title: 'John McWhirter | Software Engineer & Developer',
	description:
		'Portfolio showcasing my skills, projects, and experience as a software engineer specializing in web application development.',
	keywords: [
		'software engineer',
		'web developer',
		'react',
		'next.js',
		'portfolio',
		'projects',
		'front-end developer',
		'full-stack developer',
		'TypeScript developer',
		'UI/UX designer',
	],
	authors: [{ name: 'John McWhirter', url: 'https://github.com/JohnMcWhirter10' }],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://johnbreamcwhirter.com',
		title: 'John McWhirter | Software Engineer & Developer',
		description:
			'Portfolio showcasing my skills, projects, and experience as a software engineer specializing in web application development.',
		siteName: 'John McWhirter Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'John McWhirter Portfolio',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'John McWhirter | Software Engineer & Developer',
		description:
			'Portfolio showcasing my skills, projects, and experience as a software engineer specializing in web application development.',
		creator: '@johnmcwhirter',
		images: ['/og-image.jpg'],
	},
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://johnbreamcwhirter.com'),
	alternates: {
		canonical: '/',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${oswald.variable} ${openSans.variable} ${workSans.variable} ${crimsonText.variable} select-none font-sans antialiased transition-colors`}
			>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem themes={['light', 'dark', 'aggie']}>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
