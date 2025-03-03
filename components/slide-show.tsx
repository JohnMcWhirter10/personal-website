'use client';

import type React from 'react';

import { motion, useCycle } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const SlideShow = ({
    duration,
    children,
}: {
    duration: number;
    children: React.ReactNode[];
}) => {
    const parent = useRef<HTMLDivElement>(null);
    const child = useRef<HTMLUListElement>(null);

    const [scrollLength, setScrollLength] = useState(0);
    const [offset, setOffset] = useState(0);
    const [rendered, setRendered] = useState<boolean>(false);

    const [slideState, cycleSlideState] = useCycle('ready', 'sliding');

    useEffect(() => {
        if (parent.current) {
            setScrollLength(parent.current.scrollWidth);
            setOffset(parent.current.offsetWidth);

            cycleSlideState(1);
            setRendered(true);
        }
    }, [cycleSlideState]);

    const slides = children.map((child, index) => (
        <Slide key={index}>{child}</Slide>
    ));

    return (
        <motion.div
            ref={parent}
            id="parent"
            className="relative overflow-hidden"
            initial={'hidden'}
            variants={{
                visible: {
                    opacity: 1,
                },
                hidden: {
                    opacity: 0,
                },
            }}
            animate={rendered ? 'visible' : 'hidden'}
        >
            <motion.ul
                ref={child}
                id="child"
                className="flex overflow-hidden w-fit items-center m-0 p-0 list-none"
                variants={{
                    sliding: {
                        x: -scrollLength,
                        transition: {
                            duration: duration,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: 'linear',
                        },
                    },
                    ready: {
                        x: offset,
                    },
                }}
                animate={slideState}
                onAnimationComplete={() => {
                    cycleSlideState();
                }}
            >
                {slides}
            </motion.ul>
        </motion.div>
    );
};

const Slide = ({ children }: { children: React.ReactNode }) => {
    return <li className="will-change-transform">{children}</li>;
};

export default SlideShow;
