'use client';

import Navbar from '@/components/navbar';
import AboutMe from '@/components/panels/AboutMe';
import { PanelType } from '@/lib/types';
import { useRef } from 'react';
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

export const CONTACT_ID = 'contact';

const panels: PanelType[] = [
    {
        id: 'about-me',
        label: 'About Me',
        component: <AboutMe />,
        backgroundImage: {
            src: '/images/AMCHeadshot.png',
            className: 'object-contain',
        },
    },
    {
        id: 'project',
        label: 'Projects',
        component: <div className="border-2 border-red-500"> Projects</div>,
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
            src: '/images/TAMU-LOGO.png',
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
    const panelRefs = panels.map(() => useRef(null));

    const links = panels.map((panel, index) => ({
        id: panel.id,
        label: panel.label,
        ref: panelRefs[index],
    }));

    const scrollToPanel = (id: string) => {
        const panel = panels.find((panel) => panel.id === id);
        if (!panel) throw Error('Invalid Panel Id');
        const element = document.getElementById(panel.id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ container: ref });

    const mainControls = useAnimation();

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        mainControls.set({
            scaleY: latest,
        });
    });

    return (
        <div className="flex h-screen w-screen overflow-hidden ">
            <div className="h-full w-[9vw] bg-foreground/5 fixed">
                <Navbar links={links} handleNavigation={scrollToPanel} />
            </div>

            <div
                ref={ref}
                className="ml-[18vw] w-[91vw] overflow-y-scroll flex flex-wrap gap-[25vh]"
            >
                {panels.map((panel, index) => {
                    return (
                        <Panel
                            ref={panelRefs[index]}
                            key={panel.id}
                            panel={panel}
                        />
                    );
                })}
            </div>

            <div className="flex flex-start flex-col bg-background w-[0.5vw] pr-[0.5vw]">
                <motion.div
                    className="absolute w-[0.5vw] h-full bottom-0 right-0 bg-accent-foreground rounded-sm origin-top"
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
