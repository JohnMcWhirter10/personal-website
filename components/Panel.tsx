'use client';

import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import FadeIn from './animate/FadeIn';
import { PanelType } from '@/lib/types';
import { forwardRef, RefObject, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Panel = forwardRef<HTMLDivElement, { panel: PanelType }>(
    ({ panel }, ref) => {
        const localRef = ref;
        const { setTheme } = useTheme();

        const inView = useInView(localRef as RefObject<Element | null>, {
            amount: 0.8,
            once: true,
        });

        const backgroundInView = useInView(
            localRef as RefObject<Element | null>,
            {
                amount: 0.5,
                once: false,
            }
        );

        useEffect(() => {
            if (backgroundInView) {
                setTheme(panel.theme || 'system');
            }
        }, [backgroundInView]);

        return (
            <div
                ref={localRef}
                id={panel.id}
                className="inherit min-h-screen w-full"
            >
                {panel.backgroundImage && (
                    <motion.div
                        className="absolute right-0 top-0 -z-10 w-full h-full mt-18"
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: 1000,
                                transition: {
                                    duration: 0.5,
                                },
                            },
                            visible: {
                                opacity: 0.5,
                                x: '25%',
                                transition: {
                                    duration: 1.6,
                                },
                            },
                        }}
                        initial="hidden"
                        animate={backgroundInView ? 'visible' : 'hidden'}
                    >
                        <Image
                            src={panel.backgroundImage.src}
                            fill
                            quality={100}
                            alt={''}
                            className={panel.backgroundImage.className}
                        />
                    </motion.div>
                )}
                <FadeIn
                    key={panel.id}
                    className="h-full w-full mb-12 px-20 py-10"
                    trigger={inView}
                >
                    {panel.component}
                </FadeIn>
            </div>
        );
    }
);

Panel.displayName = 'Panel';

export default Panel;
