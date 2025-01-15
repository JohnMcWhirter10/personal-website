'use client';

import { motion, useAnimation, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';
import { VerticalTextSlider } from '@/components/animate/VerticalSliderText';
import WaveText from '@/components/animate/WaveText';
import { CONTACT_ID } from '@/lib/constants';
import Image from 'next/image';
import Headshot from '@/assets/images/AMCHeadshot.png';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutMe = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const isInViewForBackgroundImage = useInView(ref, {
        amount: 0.75,
        once: false,
    });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [isInView, controls]);

    return (
        <motion.div
            initial="hidden"
            ref={ref}
            variants={{
                hidden: { opacity: 0, x: -200 },
                visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                        type: 'spring',
                        stiffness: 50,
                        damping: 10,
                        delayChildren: 0.3,
                        staggerChildren: 0.2,
                    },
                },
            }}
            animate={controls}
            className="h-screen flex flex-col justify-center max-w-[768px] w-full"
        >
            <motion.h1
                className="font-oswald pt-4 px-4 md:px-10 text-3xl md:text-6xl mb-10 text-primary text-left text-nowrap"
                variants={{
                    hidden: { opacity: 0, x: -50, scale: 0.8 },
                    visible: { opacity: 1, x: 0, scale: 1 },
                }}
                transition={{
                    duration: 0.8,
                }}
            >
                Howdy, I&apos;m Brea.
            </motion.h1>

            <motion.div
                className={`font-georgia px-4 md:px-10 text-foreground w-full leading-8 text-justify ${useIsMobile() ? 'mt-[45%]' : 'text-xl'}`}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
                transition={{
                    duration: 0.8,
                }}
            >
                I’m a
                <span className="text-accent font-semibold italic text-2xl ">
                    <VerticalTextSlider
                        words={[
                            'Software Engineer',
                            'Software Developer',
                            'Code Wizard',
                            'Tech Enthusiast',
                            'UI/UX Designer',
                        ]}
                    />
                </span>
                with a passion for inventing, solving tough problems, and
                driving projects across the finish line. For the past 3 years,
                I’ve been building, scaling, and maintaining cutting-edge web
                applications, constantly learning and evolving with new
                technologies. Got a brilliant idea or an exciting process in
                mind?
                <br />
            </motion.div>
            <div className="flex justify-end">
                <button
                    onClick={() => {
                        const contactPanel =
                            document.getElementById(CONTACT_ID);
                        if (contactPanel) {
                            contactPanel.scrollIntoView();
                        }
                    }}
                    className="hover:underline bg-transparent text-foreground"
                >
                    <WaveText
                        className="w-fit font-semibold text-2xl pr-4 md:px-10"
                        text={'Let’s connect!'}
                    />
                </button>
            </div>
            <motion.div
                className="absolute -z-10 w-full h-full overflow-hidden"
                initial="hidden"
                variants={{
                    hidden: {
                        opacity: 0,
                    },
                    visible: {
                        opacity: 0.4,
                        transition: {
                            duration: 1.2,
                            delay: 1,
                        },
                    },
                }}
                animate={isInViewForBackgroundImage ? 'visible' : 'hidden'}
            >
                <Image
                    src={Headshot}
                    fill
                    className="object-contain overflow-hidden"
                    alt={'Headshot'}
                />
            </motion.div>
        </motion.div>
    );
};

export default AboutMe;
