'use client';

import Carousel from '@/components/animate/Carousel';
import SlideShow from '@/components/animate/SlideShow';
import Certification from '@/components/certification';
import AWSIcon from '@/components/icons/AWS';
import DockerIcon from '@/components/icons/Docker';
import FirebaseIcon from '@/components/icons/Firebase';
import GitIcon from '@/components/icons/Git';
import GraphQLIcon from '@/components/icons/GraphQL';
import JiraIcon from '@/components/icons/Jira';
import MySQLIcon from '@/components/icons/MySQL';
import NextJSIcon from '@/components/icons/NextJs';
import NodeJSIcon from '@/components/icons/NodeJS';
import PythonIcon from '@/components/icons/Python';
import ReactIcon from '@/components/icons/React';
import TailwindCSSIcon from '@/components/icons/Tailwind';
import TypeScriptIcon from '@/components/icons/TypeScript';
import VercelIcon from '@/components/icons/Vercel';
import Project from '@/components/project';
import { certifications } from '@/lib/constants/certifications';
import { projects } from '@/lib/constants/projects';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const objects = [
    {
        label: 'AWS',
        icon: <AWSIcon size={32} />,
    },
    {
        label: 'Python',
        icon: <PythonIcon size={32} />,
    },
    {
        label: 'MySQL',
        icon: <MySQLIcon size={32} />,
    },
    {
        label: 'React',
        icon: <ReactIcon size={32} />,
    },
    {
        label: 'Node.js',
        icon: <NodeJSIcon size={32} />,
    },
    {
        label: 'Git',
        icon: <GitIcon size={32} />,
    },
    {
        label: 'Docker',
        icon: <DockerIcon size={32} />,
    },
    {
        label: 'TypeScript',
        icon: <TypeScriptIcon size={32} />,
    },
    {
        label: 'GraphQL',
        icon: <GraphQLIcon size={32} />,
    },
    {
        label: 'Vercel',
        icon: <VercelIcon size={32} />,
    },
    {
        label: 'NEXT.JS',
        icon: <NextJSIcon size={32} />,
    },
    {
        label: 'TailwindCSS',
        icon: <TailwindCSSIcon size={32} />,
    },
    {
        label: 'Jira',
        icon: <JiraIcon size={32} />,
    },
    {
        label: 'Firebase',
        icon: <FirebaseIcon size={24} />,
    },
];

const Projects = () => {
    const ref = useRef(null);

    const inView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className="min-h-full w-full px-10 pt-10 mt-12 md:mt-0"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
        >
            <h3 className="text-5xl font-oswald">Projects</h3> <br />
            <h3 className="text-2xl font-oswald">My Favorite Technologies</h3>
            <div className="border-t-2 border-b-2 py-2 mt-2">
                <SlideShow duration={32}>
                    {objects.map((object, index) => (
                        <div
                            key={'_tech_' + object.label + '_' + index}
                            className="flex flex-start text-center gap-4 text-foreground font-bold ml-96"
                        >
                            {object.icon}
                            <div className="text-2xl">{object.label}</div>
                        </div>
                    ))}
                </SlideShow>
            </div>
            <Carousel
                progressBar
                objects={projects.map((project, index) => (
                    <Project key={'project_' + index} project={project} />
                ))}
            />
            <div className="mt-20">
                <h3 className="text-3xl font-oswald">Certifications</h3>

                <Carousel
                    progressBar
                    objects={certifications.map((cert, index) => (
                        <Certification
                            key={'certification_' + index}
                            certification={cert}
                        />
                    ))}
                />
            </div>
        </motion.div>
    );
};

export default Projects;
