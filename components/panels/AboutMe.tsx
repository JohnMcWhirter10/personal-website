'use client';

import { motion, useAnimation, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';
import WaveText from '../animate/WaveText';
import { VerticalTextSlider } from '../animate/VerticalSliderText';
import { CONTACT_ID } from '@/app/page';

const AboutMe = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [isInView, controls]);

    return (
        <>
            <div className="flex flex-wrap items-center justify-center min-h-full">
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
                    className="max-w-3xl p-10 bg-transparent text-card-foreground rounded-lg shadow-lg"
                >
                    <motion.h1
                        className="font-oswald  text-6xl mb-10 text-primary text-left text-nowrap"
                        variants={{
                            hidden: { opacity: 0, x: -50, scale: 0.8 },
                            visible: { opacity: 1, x: 0, scale: 1 },
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                    >
                        Howdy, I'm Brea.
                    </motion.h1>

                    <motion.div
                        className="font-georgia text-foreground text-xl w-full leading-8 text-justify"
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
                        with a passion for inventing, solving tough problems,
                        and driving projects across the finish line. For the
                        past 3 years, I’ve been building, scaling, and
                        maintaining cutting-edge web applications, constantly
                        learning and evolving with new technologies. Got a
                        brilliant idea or an exciting process in mind?
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
                                className="w-fit font-semibold text-2xl"
                                text={'Let’s connect!'}
                            />
                        </button>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default AboutMe;
