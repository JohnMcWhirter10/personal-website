'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const VerticalTextSlider = ({ words }: { words: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const intervalDuration = 3000;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, intervalDuration);

        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className="w-fit inline-grid grid-cols-1 text-center mr-3 ml-3">
            {words.map((word, index) => (
                <motion.p
                    key={word.trim().replace(' ', '_').toLowerCase()}
                    className={`row-start-1 col-start-1`}
                    variants={{
                        top: { y: 35 },
                        center: { y: 0, opacity: 1 },
                        bottom: { y: -35 },
                        hidden: { opacity: 0 },
                    }}
                    initial="hidden"
                    animate={
                        currentIndex === index
                            ? 'center'
                            : currentIndex ===
                                (index - 1 + words.length) % words.length
                              ? 'bottom'
                              : 'top'
                    }
                    exit="hidden"
                    transition={{
                        duration: 1.5,
                        ease: 'easeOut',
                    }}
                >
                    {word}
                </motion.p>
            ))}
        </div>
    );
};
