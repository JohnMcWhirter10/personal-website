'use client';

import { jobs } from '@/lib/constants/jobs';
import Carousel from '../animate/Carousel';
import Job from '../job';

const Experience = () => {
    return (
        <div className="min-h-full w-full ">
            <h1 className="font-oswald text-5xl">Experience</h1>

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
