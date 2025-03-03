import { jobs } from '@/lib/jobs';
import { Card, CardContent } from '../ui/card';
import { ReusableCarousel } from '../ui/reusable-carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import type { SectionContentProps } from '@/lib/types';

const Experience = ({ content }: SectionContentProps) => {
	const jobItems = jobs.map((job, index) => (
		<Card key={index} className='h-full border-none'>
			<CardContent className='p-4 md:p-6'>
				<Accordion type='single' collapsible>
					<AccordionItem value={`job-${index}`}>
						<AccordionTrigger className='block hover:no-underline'>
							<h3 className='text-lg md:text-xl font-bold'>{job.title}</h3>
							<h4 className='text-base md:text-lg font-medium text-muted-foreground'>
								{job.companyTitle}
							</h4>
							<p className='text-xs md:text-sm text-muted-foreground mb-2 md:mb-4'>
								{job.location} | {job.startDate} - {job.endDate || 'Present'}
							</p>
							<AccordionContent>
								<ul className='list-disc pl-5 space-y-1 md:space-y-2'>
									{job.bulletPoints.map((point, i) => (
										<li key={i} className='text-xs md:text-sm'>
											{point}
										</li>
									))}
								</ul>
							</AccordionContent>
						</AccordionTrigger>
					</AccordionItem>
				</Accordion>
			</CardContent>
		</Card>
	));

	return (
		<div className='flex flex-col gap-4 md:gap-8'>
			<ReusableCarousel items={jobItems} itemClassName='sm:basis-[80%] md:basis-[60%] lg:basis-2/5 flex-grow' />
		</div>
	);
};

export default Experience;
