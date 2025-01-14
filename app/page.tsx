'use client';

import Navbar from '@/components/navbar';
import AboutMe from '@/components/panels/AboutMe';
import { PanelType } from '@/lib/types';
import { createRef, useRef } from 'react';
import {
    motion,
    useAnimation,
    useMotionValueEvent,
    useScroll,
} from 'motion/react';
import Panel from '@/components/Panel';
import Experience from '@/components/panels/Experience';
import Education from '@/components/panels/Education';
import Connect from '@/components/panels/Connect';

import AMCHeadshot from '@/assets/images/AMCHeadshot.png';
import TAMULOGO from '@/assets/images/TAMU-LOGO.png';
import Projects from '@/components/panels/Projects';
import { useIsMobile } from '@/hooks/use-mobile';

export const CONTACT_ID = 'contact';

const panels: PanelType[] = [
    {
        id: 'about-me',
        label: 'About Me',
        component: <AboutMe />,
        backgroundImage: {
            img: AMCHeadshot,
            className: 'object-contain',
        },
    },
    {
        id: 'project',
        label: 'Projects',
        component: <Projects />,
    },
    {
        id: 'experience',
        label: 'Experience',
        component: <Experience />,
    },
    {
        id: 'education',
        label: 'Education',
        theme: 'aggie',
        component: <Education />,
        backgroundImage: {
            img: TAMULOGO,
            className: 'object-contain',
        },
    },
    {
        id: CONTACT_ID,
        label: 'Connect',
        component: <Connect />,
    },
];

export default function Home() {
    const panelRefs = useRef(panels.map(() => createRef<HTMLDivElement>()));

    const isMobile = useIsMobile();

    const links = panels.map((panel, index) => ({
        id: panel.id,
        label: panel.label,
        ref: panelRefs.current[index],
    }));

    const scrollToPanel = (id: string) => {
        const panel = panels.find((panel) => panel.id === id);
        if (!panel) throw new Error('Invalid Panel Id');
        const element = document.getElementById(panel.id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ container: ref });

    const mainControls = useAnimation();

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        mainControls.set({
            scaleY: latest,
        });
    });

    return (
        <div className="flex h-screen w-screen overflow-hidden">
            <Navbar links={links} handleNavigation={scrollToPanel} />

            <div
                ref={ref}
                className={`${!isMobile ? 'ml-[18vw] w-[91vw]' : 'w-full'} overflow-y-scroll flex flex-wrap gap-[25vh]`}
            >
                {panels.map((panel, index) => (
                    <Panel
                        ref={panelRefs.current[index]}
                        key={panel.id}
                        panel={panel}
                    />
                ))}
            </div>

            <div className="flex flex-start flex-col bg-background w-[0.5vw] pr-[0.5vw]">
                <motion.div
                    className="absolute w-[0.5vw] min-w-1 h-full bottom-0 right-0 bg-accent-foreground rounded-sm origin-top"
                    initial={{ scaleY: 0 }}
                    transition={{
                        duration: 2,
                    }}
                    animate={mainControls}
                />
            </div>
        </div>
    );
}
