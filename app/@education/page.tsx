'use client';

import { motion, useAnimation, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';
import { ActivityType } from '@/lib/types';
import Carousel from '@/components/animate/Carousel';
import Activity from '@/components/activity';

const activities: ActivityType[] = [
    {
        title: 'Songfest',
        description:
            'Participated in the largest philanthropic event at Texas A&M, raising funds for local charities through a spirited dancing competition.',
        link: '',
    },
    {
        title: 'Big Event',
        description:
            'Volunteered in the largest one-day, student-run service project in the nation, contributing to community improvement projects.',
        link: '',
    },
    {
        title: "Aggie Men's Club",
        description:
            'Active member of a Christian-based social organization promoting leadership, service, and fellowship.',
        link: '',
    },
    {
        title: 'Texas Instruments Internship',
        description:
            'Gained hands-on experience in semiconductor technology and design, working on innovative projects and learning from industry leaders.',
        link: '',
    },
    {
        title: 'Senior Design Project',
        description:
            'Collaborated with Sandia National Laboratories to design and implement a cutting-edge engineering solution as part of a multidisciplinary team.',
        link: '',
    },
];

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [isInView, controls]);

    return (
        <div className="w-full h-full flex flex-wrap flex-col items-center justify-center md:mt-20 max-w-[95%]">
            <motion.div
                initial="hidden"
                ref={ref}
                variants={{
                    hidden: { opacity: 0, x: -200 },
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
                className="p-10 bg-card/90 text-card-foreground rounded-lg shadow-lg w-full"
            >
                <motion.h1
                    className="font-oswald text-6xl mb-10 text-primary text-left text-nowrap"
                    variants={{
                        hidden: { opacity: 0, x: -50, scale: 0.8 },
                        visible: { opacity: 1, x: 0, scale: 1 },
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    Education
                </motion.h1>

                <motion.div
                    className="font-georgia text-foreground text-xl leading-8 text-justify text-wrap max-w-[768px]"
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                >
                    I graduated from
                    <span className="text-primary font-semibold italic text-2xl ml-2 mr-2">
                        Texas A&amp;M University
                    </span>
                    in 2023 with a degree in{' '}
                    <span className="text-primary underline">
                        Computer and Electrical Engineering
                    </span>
                    . During my time at Texas A&amp;M, I honed my skills in
                    engineering principles, problem-solving, and innovative
                    thinking, preparing me to tackle complex challenges in the
                    tech industry.
                </motion.div>
                <Carousel
                    progressBar
                    objects={activities.map((activity, index) => (
                        <Activity
                            activity={activity}
                            key={activity.title + '_' + index}
                        />
                    ))}
                />
            </motion.div>
        </div>
    );
};

export default Education;
