'use client';

import { jobs } from '@/lib/constants/jobs';
import { Database } from 'lucide-react';
import Carousel from '../animate/Carousel';
import Job from '../job';
import SlideShow from '../animate/SlideShow';
import TypeScriptIcon from '../icons/TypeScript';
import PythonIcon from '../icons/Python';
import NextJSIcon from '../icons/NextJs';

const objects = [
    {
        label: 'TypeScript',
        icon: <TypeScriptIcon size={32} className="text-accent-foreground" />,
    },
    {
        label: 'Python',
        icon: <PythonIcon size={32} className={''} />,
    },
    {
        label: 'NEXT.JS',
        icon: <NextJSIcon size={32} className={''} />,
    },
    {
        label: 'MySQL',
        icon: <Database size={32} />,
    },
];

const Experience = () => {
    return (
        <div className="min-h-full w-full">
            <h1 className="font-oswald text-5xl mb-8">Experience</h1>
            <h3 className="text-2xl font-oswald">My Favorite Technologies</h3>

            <SlideShow
                width={'100%'}
                outerClass="mt-2 border-y-2 py-4"
                itemClass="flex flex-start text-center gap-4 text-accent font-bold"
                objects={objects.map((object) => (
                    <>
                        <div className="text-2xl">{object.label}</div>
                        {object.icon}
                    </>
                ))}
            />

            <Carousel
                progressBar
                objects={jobs.map((job, index) => (
                    <Job
                        key={`_${job.title.toLowerCase().replace(' ', '')}_${index}`}
                        job={job}
                    />
                ))}
            />
        </div>
    );
};

export default Experience;
