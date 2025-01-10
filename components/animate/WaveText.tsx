'use client';

import { motion } from 'motion/react';

const WaveText = ({ className, text }: { className: string; text: string }) => {
    if (className.includes('flex')) {
        console.error('className should not be flex');
    }
    return (
        <div className={className} style={{ display: 'flex' }}>
            {text.split('').map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ y: 0 }}
                    animate={{
                        y: [-1, 5, -1],
                    }}
                    transition={{
                        duration: 1.6,
                        delay: index * 0.01,
                        repeat: Infinity,
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </div>
    );
};

export default WaveText;
