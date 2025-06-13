import { jobs } from '@/lib/jobs';
import { Card, CardContent } from '../ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import type { SectionContentProps } from '@/lib/types';
import { motion } from 'framer-motion';

const Experience = ({ content }: SectionContentProps) => {
	const jobItems = jobs.map((job, index) => (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			key={index}
			className='h-full'
			whileHover={{ y: -5, transition: { duration: 0.2 } }}
		>
			<Card className='h-full border-2 border-primary shadow-xs hover:shadow-md transition-all'>
				<CardContent className='p-6'>
					<div className='mb-4'>
						<h3 className='text-xl font-bold text-primary mb-1'>{job.title}</h3>
						<h4 className='text-lg font-medium text-foreground'>{job.companyTitle}</h4>
						<p className='text-sm text-muted-foreground'>
							{job.location} | {job.startDate} - {job.endDate || 'Present'}
						</p>
					</div>

					<Accordion type='single' collapsible className='w-full'>
						<AccordionItem value={`job-${index}`} className='border-b-0 border-t-2 border-primary'>
							<AccordionTrigger className='py-2 text-sm font-medium hover:no-underline'>
								View Responsibilities
							</AccordionTrigger>
							<AccordionContent>
								<ul className='list-disc pl-5 space-y-2'>
									{job.bulletPoints.map((point, i) => (
										<li key={i} className='text-sm text-muted-foreground'>
											{point}
										</li>
									))}
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</CardContent>
			</Card>
		</motion.div>
	));

	return (
		<div className='flex flex-col gap-8 w-full'>
			{content && <p className='text-lg text-center mb-6 max-w-3xl mx-auto'>{content}</p>}

			<motion.div layout className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{jobItems}
			</motion.div>
		</div>
	);
};

export default Experience;
