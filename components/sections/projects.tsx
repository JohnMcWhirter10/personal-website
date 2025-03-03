import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { projects } from '@/lib/projects';
import { ReusableCarousel } from '../ui/reusable-carousel';
import type { SectionContentProps } from '@/lib/types';
import { technologies } from '@/lib/technologies';
import SlideShow from '../slide-show';

const Projects = ({ content }: SectionContentProps) => {
	const projectItems = projects.map((project, index) => (
		<Card key={index} className='h-full border-none'>
			<CardContent className='p-6'>
				<div className='aspect-video w-full mb-4 overflow-hidden rounded-md'>
					<Image
						src={project.image || '/placeholder.svg'}
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
	));

	return (
		<div className='flex flex-col gap-8'>
			<p className='text-lg'>{content}</p>

			<SlideShow duration={32}>
				{technologies.map((tech, index) => (
					<div
						key={`_tech_${tech.label}_${index}`}
						className='flex flex-start text-center gap-2 md:gap-4 text-foreground font-bold ml-96'
					>
						{tech.icon}
						<div className='text-lg md:text-2xl'>{tech.label}</div>
					</div>
				))}
			</SlideShow>
			<ReusableCarousel items={projectItems} />
		</div>
	);
};

export default Projects;
