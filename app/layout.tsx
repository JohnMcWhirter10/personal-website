import { ThemeProvider } from '@/components/theme-provider';
import { Open_Sans, Oswald, Work_Sans } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

import AMCHeadshot from '@/assets/images/AMCHeadshot.png';
import TAMULOGO from '@/assets/images/TAMU-LOGO.png';
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
            className={`${oswald.variable} ${openSans.variable} ${workSans.variable} overflow-x-hidden scroll-smooth select-none`}
        >
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    themes={['light', 'dark', 'aggie']}
                >
                    <SectionProvider>
                        <div
                            id="sections"
                            className="w-screen flex flex-col pl-[12vw] gap-48"
                        >
                            <Section
                                id="about-me"
                                label="About Me"
                                backgroundImage={AMCHeadshot}
                            >
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
                                backgroundImage={TAMULOGO}
                            >
                                {education}
                            </Section>

                            <Section id={CONTACT_ID} label="Connect">
                                {connect}
                            </Section>
                        </div>
                    </SectionProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
