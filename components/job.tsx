import { JobType } from '@/lib/types';
import { Hexagon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Job = ({ job }: { job: JobType }) => {
    return (
        <Card className="min-w-[24rem] rounded-lg">
            <CardHeader>
                <CardTitle
                    className={`md:text-xl font-openSans text-primary font-semibold`}
                >
                    {job.companyTitle}
                </CardTitle>
                <span className="text-sm text-muted-foreground font-light">
                    {job.startDate.trim()}
                    {job.endDate ? ` - ${job.endDate?.trim()}` : ' Present'}
                </span>
            </CardHeader>
            <CardContent className="space-y-3">
                <span className="font-oswald text-xl text-accent font-semibold">
                    {job.title}
                </span>
                <br />
                <i className="text-secondary-foreground text-base">
                    {job.location}
                </i>

                <ul className="list-none space-y-4 pl-6">
                    {job.bulletPoints.map((bullet, index) => (
                        <li
                            key={bullet
                                .slice(0, 5)
                                .replace(' ', '_')
                                .concat(`_${index}`)}
                            className="flex items-start gap-3 text-base text-foreground"
                        >
                            <Hexagon size={24} className="text-accent mt-1" />
                            <span className={`sm:text-xs text-sm`}>
                                {bullet}
                            </span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default Job;
