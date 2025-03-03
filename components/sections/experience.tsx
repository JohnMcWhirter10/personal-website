import { jobs } from '@/lib/jobs';
import { Card, CardContent } from '../ui/card';
import { technologies } from '@/lib/technologies';
import SlideShow from '../slide-show';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { SectionContentProps } from '@/lib/types';

const Experience = ({ content }: SectionContentProps) => {
	return (
		<div className='flex flex-col gap-8'>
			<SlideShow duration={32}>
				{technologies.map((tech, index) => (
					<div
						key={`_tech_${tech.label}_${index}`}
						className='flex flex-start text-center gap-4 text-foreground font-bold ml-96'
					>
						{tech.icon}
						<div className='text-2xl'>{tech.label}</div>
					</div>
				))}
			</SlideShow>
			<div className='w-full'>
				<Carousel>
					<CarouselContent>
						{jobs.map((job, index) => (
							<CarouselItem key={index} className='sm:basis-[60%] lg:basis-2/5 flex-grow'>
								<Card className='h-full border-none'>
									<CardContent className='p-6'>
										<Accordion type='single' collapsible>
											<AccordionItem value={`job-${index}`}>
												<AccordionTrigger className='block hover:no-underline'>
													<h3 className='text-xl font-bold'>{job.title}</h3>
													<h4 className='text-lg font-medium text-muted-foreground'>
														{job.companyTitle}
													</h4>
													<p className='text-sm text-muted-foreground mb-4'>
														{job.location} | {job.startDate} - {job.endDate || 'Present'}
													</p>
													<AccordionContent>
														<ul className='list-disc pl-5 space-y-2'>
															{job.bulletPoints.map((point, i) => (
																<li key={i} className='text-sm'>
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
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	);
};

export default Experience;
