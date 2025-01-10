import { ThemeProvider } from '@/components/theme-provider';

import { Open_Sans, Oswald, Work_Sans } from 'next/font/google';

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

import './globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${oswald.variable} ${openSans.variable} ${workSans.variable} overflow-hidden scroll-smooth select-none`}
        >
            <body>
                <ThemeProvider
                    attribute={'class'}
                    defaultTheme="light"
                    enableSystem
                    themes={['light', 'dark', 'aggie']}
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
