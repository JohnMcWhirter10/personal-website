import { ThemeProvider } from '@/components/theme-provider';
import { Open_Sans, Oswald, Work_Sans } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

import { Section, SectionProvider } from '@/context/SectionProvider';
import { CONTACT_ID } from '@/lib/constants';

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

type RootLayoutRoutes = {
    children: ReactNode;
    aboutMe: ReactNode;
    education: ReactNode;
    experience: ReactNode;
    projects: ReactNode;
    connect: ReactNode;
};

export default function RootLayout({
    children,
    aboutMe,
    education,
    experience,
    projects,
    connect,
}: Readonly<RootLayoutRoutes>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${oswald.variable} ${openSans.variable} ${workSans.variable} overflow-hidden  select-none`}
        >
            <body className="max-h-screen h-screen overflow-y-scroll scroll-smooth">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    themes={['light', 'dark', 'aggie']}
                >
                    <SectionProvider>
                        <div
                            id="sections"
                            className="w-screen flex flex-col gap-48"
                        >
                            <Section id="about-me" label="About Me">
                                {aboutMe}
                            </Section>
                            <Section id="projects" label="Projects">
                                {projects}
                            </Section>
                            <Section id="experience" label="Experience">
                                {experience}
                            </Section>
                            <Section
                                id="education"
                                label="Education"
                                theme="aggie"
                            >
                                {education}
                            </Section>
                            <Section id={CONTACT_ID} label="Connect">
                                {connect}
                            </Section>
                            <p className="p-4 font-workSans text-xs bg-primary-foreground text-primary flex flex-col gap-2">
                                <span className="font-semibold">
                                    © 2025 Brea McWhirter. All Rights Reserved.
                                </span>
                                <span>
                                    All logos, trademarks, and brand names
                                    displayed on this website are the property
                                    of their respective owners, including but
                                    not limited to companies and universities.
                                </span>
                                <span>
                                    This website is intended for personal use
                                    only and is not endorsed by, affiliated
                                    with, or sponsored by any of the companies
                                    or universities whose logos appear herein.
                                    The use of these logos is strictly for the
                                    purpose of identifying the organizations
                                    where I have gained professional experience
                                    or educational credentials.
                                </span>
                            </p>
                        </div>
                        {children}
                    </SectionProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
