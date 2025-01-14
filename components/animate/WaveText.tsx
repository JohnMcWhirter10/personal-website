'use client';

import clsx from 'clsx';
import { motion } from 'motion/react';

const WaveText = ({ className, text }: { className: string; text: string }) => {
    if (className.includes('flex')) {
        console.error('className should not be flex');
    }
    return (
        <div className={clsx('flex', className)}>
            {text.split('').map((char, index) => (
                <motion.span
                    key={index}
                    initial={{
                        y: 0,
                        backgroundColor: '#1c1847',
                        color: '#eee7e6',
                    }}
                    animate={{
                        y: [-1, 5, -1],
                        backgroundColor: ['#1c1847', '#ec2322'],
                    }}
                    transition={{
                        y: {
                            duration: 3,
                            delay: index * 0.05,
                            repeat: Infinity,
                        },
                        backgroundColor: {
                            duration: 7,
                            delay: index * 0.25,
                            repeat: Infinity,
                            repeatType: 'mirror',
                        },
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </div>
    );
};

export default WaveText;
