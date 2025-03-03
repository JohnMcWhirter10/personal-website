import type React from 'react';
import type { Metadata } from 'next';
import { Open_Sans, Oswald, Work_Sans } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/components/theme-provider';

const oswald = Oswald({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-oswald',
});

const openSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-openSans',
});

const workSans = Work_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-workSans',
});

export const metadata: Metadata = {
	title: 'Personal Portfolio',
	description: 'A showcase of my work and skills',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${oswald.className} ${openSans.className} ${workSans.className} transition-colors`}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem themes={['light', 'dark', 'aggie']}>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
