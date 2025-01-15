'use client';

import Carousel from '@/components/animate/Carousel';
import Job from '@/components/job';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { jobs } from '@/lib/constants/jobs';

const Experience = () => {
    return (
        <Card className="border-none md:py-20 max-w-[95%]">
            <CardHeader>
                <CardTitle className="font-oswald text-5xl font-normal">
                    Experience
                </CardTitle>
            </CardHeader>
            <CardContent className="w-full">
                <Carousel
                    progressBar
                    objects={jobs.map((job, index) => (
                        <Job
                            key={`_${job.title.toLowerCase().replace(' ', '')}_${index}`}
                            job={job}
                        />
                    ))}
                />
            </CardContent>
        </Card>
    );
};

export default Experience;
