'use client';

import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export default function Colors() {
    const [height, setHeight] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (ref.current) {
            const { scrollHeight } = ref.current;
            setHeight(scrollHeight);
        }
    }, []);

    return (
        <div ref={ref} className="relative overflow-auto h-screen">
            <motion.div drag="y" dragConstraints={{ top: -height, bottom: 0 }}>
                <div className="text-yellow-200 text-center text-3xl items-center font-openSans">
                    <div className={'bg-background w-full h-20'}>
                        background
                    </div>
                    <div className={'bg-foreground w-full h-20'}>
                        foreground
                    </div>
                    <div className={'bg-card w-full h-20'}>card</div>
                    <div className={'bg-card-foreground w-full h-20'}>
                        card-foreground
                    </div>
                    <div className={'bg-popover w-full h-20'}>popover</div>
                    <div className={'bg-popover-foreground w-full h-20'}>
                        popover-foreground
                    </div>
                    <div className={'bg-primary w-full h-20'}>primary</div>
                    <div className={'bg-primary-foreground w-full h-20'}>
                        primary-foreground
                    </div>
                    <div className={'bg-secondary w-full h-20'}>secondary</div>
                    <div className={'bg-secondary-foreground w-full h-20'}>
                        secondary-foreground
                    </div>
                    <div className={'bg-muted w-full h-20'}>muted</div>
                    <div className={'bg-muted-foreground w-full h-20'}>
                        muted-foreground
                    </div>
                    <div className={'bg-accent w-full h-20'}>accent</div>
                    <div className={'bg-accent-foreground w-full h-20'}>
                        accent-foreground
                    </div>
                    <div className={'bg-border w-full h-20'}>border</div>
                    <div className={'bg-input w-full h-20'}>input</div>
                    <div className={'bg-ring w-full h-20'}>ring</div>
                </div>

                <div className="bg-red-600 border-red-600 text-center">
                    TEXT BELOW
                </div>

                <div
                    className={
                        'text-2xl text-center h-fit text-background w-full'
                    }
                >
                    background
                </div>
                <div
                    className={
                        'text-2xl text-center h-fit text-foreground w-full'
                    }
                >
                    foreground
                </div>
                <div className={'text-2xl text-center h-fit text-card w-full'}>
                    card
                </div>
                <div
                    className={
                        'text-2xl text-center h-fit text-card-foreground w-full'
                    }
                >
                    card-foreground
                </div>
                <div
                    className={'text-2xl text-center h-fit text-popover w-full'}
                >
                    popover
                </div>
                <div
                    className={
                        'text-2xl text-center h-fit text-popover-foreground w-full'
                    }
                >
                    popover-foreground
                </div>
                <div
                    className={'text-2xl text-center h-fit text-primary w-full'}
                >
                    primary
                </div>
                <div
                    className={
                        'text-2xl text-center h-fit text-primary-foreground w-full'
                    }
                >
                    primary-foreground
                </div>
                <div
                    className={
                        'text-2xl text-center h-fit text-secondary w-full'
                    }
                >
                    secondary
                </div>
                <div
                    className={
                        'text-2xl text-center h-fit text-secondary-foreground w-full'
                    }
                >
                    secondary-foreground
                </div>
                <div className={'text-2xl text-center h-fit text-muted w-full'}>
                    muted
                </div>
                <div
                    className={
                        'text-2xl text-center h-fit text-muted-foreground w-full'
                    }
                >
                    muted-foreground
                </div>
                <div
                    className={'text-2xl text-center h-fit text-accent w-full'}
                >
                    accent
                </div>
                <div
                    className={
                        'text-2xl text-center h-fit text-accent-foreground w-full'
                    }
                >
                    accent-foreground
                </div>
                <div
                    className={'text-2xl text-center h-fit text-border w-full'}
                >
                    border
                </div>
                <div className={'text-2xl text-center h-fit text-input w-full'}>
                    input
                </div>
                <div className={'text-2xl text-center h-fit text-ring w-full'}>
                    ring
                </div>
            </motion.div>
        </div>
    );
}
