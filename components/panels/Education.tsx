'use client';

import { motion, useAnimation, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';
import Carousel from '../animate/Carousel';

const carouselObjects: React.ReactNode[] = [
    <div className="p-4 text-center" key="songfest">
        <h3 className="text-xl font-semibold text-primary">Songfest</h3>
        <p className="text-foreground">
            Participated in the largest philanthropic event at Texas A&M,
            raising funds for local charities through a spirited singing and
            dancing competition.
        </p>
    </div>,
    <div className="p-4 text-center" key="big-event">
        <h3 className="text-xl font-semibold text-primary">Big Event</h3>
        <p className="text-foreground">
            Volunteered in the largest one-day, student-run service project in
            the nation, contributing to community improvement projects.
        </p>
    </div>,
    <div className="p-4 text-center" key="aggie-mens-club">
        <h3 className="text-xl font-semibold text-primary">Aggie Men's Club</h3>
        <p className="text-foreground">
            Active member of a Christian-based social organization promoting
            leadership, service, and fellowship.
        </p>
    </div>,
    <div className="p-4 text-center" key="texas-instruments-internship">
        <h3 className="text-xl font-semibold text-primary">
            Texas Instruments Internship
        </h3>
        <p className="text-foreground">
            Gained hands-on experience in semiconductor technology and design,
            working on innovative projects and learning from industry leaders.
        </p>
    </div>,
    <div className="p-4 text-center" key="senior-design-project">
        <h3 className="text-xl font-semibold text-primary">
            Senior Design Project
        </h3>
        <p className="text-foreground">
            Collaborated with Sandia National Laboratories to design and
            implement a cutting-edge engineering solution as part of a
            multidisciplinary team.
        </p>
    </div>,
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
        <div className="flex flex-wrap items-center justify-center min-h-full">
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
                className="max-w-3xl p-10 bg-card/90 text-card-foreground rounded-lg shadow-lg"
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
                    className="font-georgia text-foreground text-xl w-full leading-8 text-justify"
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
                <Carousel progressBar objects={carouselObjects} />
            </motion.div>
        </div>
    );
};

export default Education;
