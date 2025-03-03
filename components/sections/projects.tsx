import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { projects } from '@/lib/projects';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { SectionContentProps } from '@/lib/types';

const Projects = ({ content }: SectionContentProps) => {
	return (
		<div className='flex flex-col gap-8'>
			<p className='text-lg'>{content}</p>
			<div className='w-full'>
				<Carousel>
					<CarouselContent>
						{projects.map((project, index) => (
							<CarouselItem key={index} className='sm:basis-[60%] lg:basis-2/5 flex-grow'>
								<Card className='h-full border-none'>
									<CardContent className='p-6'>
										<div className='aspect-video w-full mb-4 overflow-hidden rounded-md'>
											<Image
												src={project.image}
												alt={project.title}
												className='w-full h-full object-contain'
											/>
										</div>
										<h3 className='text-xl font-bold'>{project.title}</h3>
										<p className='text-sm line-clamp-3 mt-2 mb-4'>{project.description}</p>
										{project.link && (
											<a
												href={project.link}
												target='_blank'
												rel='noopener noreferrer'
												className='text-primary hover:underline text-sm'
											>
												View Project
											</a>
										)}
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

export default Projects;
