import { JobType } from '@/lib/types';
import { Hexagon } from 'lucide-react';

const Job = ({ job }: { job: JobType }) => {
    return (
        <div className="p-6 border rounded-lg shadow-md bg-background grid gap-4 max-w-3xl mx-auto min-h-[25rem] min-w-[30rem]">
            <div className="flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-openSans text-xl text-primary leading-tight">
                        {job.companyTitle}
                    </h2>
                    <span className="text-sm text-muted-foreground font-light">
                        {job.startDate.trim()}
                        {job.endDate ? ` - ${job.endDate?.trim()}` : ' Present'}
                    </span>
                </div>
                <div className="text-base">
                    <span className="font-oswald text-xl text-accent font-semibold">
                        {job.title}
                    </span>
                    <br />
                    <i className="text-secondary-foreground">{job.location}</i>
                </div>
            </div>

            <ul className="list-none space-y-3">
                {job.bulletPoints.map((bullet, index) => (
                    <li
                        key={bullet
                            .slice(0, 5)
                            .replace(' ', '_')
                            .concat(`_${index}`)}
                        className="flex items-start gap-3 text-base text-foreground"
                    >
                        <Hexagon size={24} className="text-accent mt-1" />
                        <span>{bullet}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Job;
