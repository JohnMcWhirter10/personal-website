import type React from 'react';
import type { Metadata } from 'next';
import '../(main)/globals.css';

export const metadata: Metadata = {
	title: {
		default: 'ECEN758 Projects | John McWhirter',
		template: '%s | ECEN758 Projects',
	},
	description: 'Machine learning and deep learning projects from ECEN758 course at Texas A&M University',
};

export default function ECEN758Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
            <body>
                {children}
            </body>
        </html>
    );
}

