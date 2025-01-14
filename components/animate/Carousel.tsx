'use client';

import clsx from 'clsx';
import { motion, useMotionValue, useMotionValueEvent } from 'motion/react';
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
    const carousel = useRef(null);

    useEffect(() => {
        const updateWidth = () => {
            const { scrollWidth, offsetWidth } = carousel.current!;
            setWidth(scrollWidth - offsetWidth);
        };

        updateWidth();

        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    const scrollX = useMotionValue(0);

    useMotionValueEvent(scrollX, 'change', (latest) => {
        setProgress(Math.min(1, Math.max(0.01, -latest / width)));
    });

    return (
        <>
            <motion.div
                ref={carousel}
                className={clsx(
                    'cursor-grab overflow-hidden border-1 border-foreground p-1',
                    outerClass
                )}
                whileTap={{
                    cursor: 'grabbing',
                }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className={clsx('flex', innerClass)}
                    style={{ x: scrollX }}
                >
                    {objects.map((object, index) => {
                        return (
                            <motion.div
                                key={`${Math.random() * 1000}_carousel_item_${index}`}
                                className={clsx('p-8 min-h-full', itemClass)}
                            >
                                {object}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
            {progressBar && (
                <motion.div
                    className="bg-accent-foreground z-10 h-4 origin-left w-full"
                    initial={{ scaleX: 0.01 }}
                    style={{ scaleX: progress }}
                />
            )}
        </>
    );
};

export default Carousel;
