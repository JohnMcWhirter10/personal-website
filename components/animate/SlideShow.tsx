'use client';
import clsx from 'clsx';
import { motion } from 'motion/react';

const SlideShow = ({
    width,
    objects,
    innerClass,
    outerClass,
    itemClass,
}: {
    width: string | number;
    objects: React.ReactNode[];
    innerClass?: string;
    outerClass?: string;
    itemClass?: string;
}) => {
    return (
        <motion.div
            style={{ width }}
            className={clsx(outerClass, 'overflow-hidden')}
        >
            <motion.div
                className={clsx(innerClass, 'inline-grid grid-cols-1 w-full')}
            >
                {objects.map((object, index) => {
                    const delay = (10 / objects.length) * index;

                    return (
                        <motion.div
                            key={'slideshow_item_' + index}
                            className={clsx(
                                itemClass,
                                'row-start-1 col-start-1 min-h-full min-w-[75%] origin-left'
                            )}
                            initial={{
                                x: '100%',
                            }}
                            animate={{
                                x: ['100%', '-100%'],
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: 10,
                                ease: 'linear',
                                delay:
                                    (10 / objects.length) *
                                    (objects.length - index),
                                restDelta: 0.001,
                            }}
                        >
                            {object}
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
};

export default SlideShow;
