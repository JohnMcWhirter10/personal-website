'use client';

import clsx from 'clsx';
import { motion, useMotionValue, useMotionValueEvent } from 'framer-motion'; // Corrected import
import { useEffect, useRef, useState } from 'react';

const Carousel = ({
    outerClass,
    innerClass,
    itemClass,
    objects,
    progressBar,
}: {
    outerClass?: string;
    innerClass?: string;
    itemClass?: string;
    objects: React.ReactNode[];
    progressBar?: boolean;
}) => {
    const [width, setWidth] = useState(0);
    const [progress, setProgress] = useState(1);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateWidth = () => {
            if (carousel.current) {
                const { scrollWidth, offsetWidth } = carousel.current;
                setWidth(scrollWidth - offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const positionX = useMotionValue(0);

    useMotionValueEvent(positionX, 'change', (latest) => {
        setProgress(Math.min(1, Math.max(0.01, -latest / width)));
    });

    const handleScroll = () => {
        if (carousel.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carousel.current;
            setProgress(scrollLeft / (scrollWidth - clientWidth));
        }
    };

    return (
        <>
            <motion.div
                ref={carousel}
                className={clsx('cursor-grab overflow-x-auto p-1', outerClass)}
                whileTap={{ cursor: 'grabbing' }}
                onScroll={handleScroll}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className={clsx('flex', innerClass)}
                    style={{ x: positionX }}
                >
                    {objects.map((object, index) => (
                        <motion.div
                            key={`carousel_item_${index}`}
                            className={clsx('p-8 min-h-full', itemClass)}
                        >
                            {object}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            {progressBar && (
                <motion.div
                    className="bg-accent-foreground z-10 h-2 origin-left w-full"
                    initial={{ scaleX: 0.01 }}
                    style={{ scaleX: progress }}
                />
            )}
        </>
    );
};

export default Carousel;
