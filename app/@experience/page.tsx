'use client';

import Carousel from '@/components/animate/Carousel';
import Job from '@/components/job';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { jobs } from '@/lib/constants/jobs';
import { motion, useAnimation, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [isInView, controls]);

    return (
        <Card ref={ref} className="border-none mt-12 md:py-20 max-w-[95%]">
            <CardHeader>
                <CardTitle>
                    <motion.h1
                        className="font-oswald text-5xl text-primary text-left text-nowrap font-normal"
                        variants={{
                            hidden: { opacity: 0, x: -50, scale: 0.8 },
                            visible: { opacity: 1, x: 0, scale: 1 },
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        animate={controls}
                    >
                        Experience
                    </motion.h1>
                </CardTitle>
            </CardHeader>
            <CardContent className="w-full">
                <motion.div
                    initial="hidden"
                    variants={{
                        hidden: { opacity: 0 },
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
                    className="md:p-10"
                >
                    <Carousel
                        progressBar
                        objects={jobs.map((job, index) => (
                            <Job
                                key={`_${job.title.toLowerCase().replace(' ', '')}_${index}`}
                                job={job}
                            />
                        ))}
                    />
                </motion.div>
            </CardContent>
        </Card>
    );
};

export default Experience;
