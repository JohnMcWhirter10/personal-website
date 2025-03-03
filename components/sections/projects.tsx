import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { ReusableCarousel } from '../ui/reusable-carousel';
import type { ProjectType, SectionContentProps } from '@/lib/types';
import SlideShow from '../slide-show';

import BPhotography from '@/assets/images/b-photography.png';
import VectorVetted from '@/assets/images/vectorVettedLogo.png';
import ULSWAPDAQ from '@/assets/images/ULSWAPDAQ.png';
import TexasInstruments from '@/assets/images/TexasInstruments.png';
import MondrianUI from '@/assets/images/mondrian-ui.png';
import Messages from '@/assets/images/messages-logo.png';

import AWSIcon from '@/components/icons/AWS';
import DockerIcon from '@/components/icons/Docker';
import FirebaseIcon from '@/components/icons/Firebase';
import GitIcon from '@/components/icons/Git';
import GraphQLIcon from '@/components/icons/GraphQL';
import JiraIcon from '@/components/icons/Jira';
import MySQLIcon from '@/components/icons/MySQL';
import NextJSIcon from '@/components/icons/NextJS';
import NodeJSIcon from '@/components/icons/NodeJS';
import PythonIcon from '@/components/icons/Python';
import ReactIcon from '@/components/icons/React';
import TailwindCSSIcon from '@/components/icons/Tailwind';
import TypeScriptIcon from '@/components/icons/TypeScript';
import VercelIcon from '@/components/icons/Vercel';

export const technologies = [
	{
		label: 'AWS',
		icon: <AWSIcon size={32} />,
	},
	{
		label: 'Python',
		icon: <PythonIcon size={32} />,
	},
	{
		label: 'MySQL',
		icon: <MySQLIcon size={32} />,
	},
	{
		label: 'React',
		icon: <ReactIcon size={32} />,
	},
	{
		label: 'Node.js',
		icon: <NodeJSIcon size={32} />,
	},
	{
		label: 'Git',
		icon: <GitIcon size={32} />,
	},
	{
		label: 'Docker',
		icon: <DockerIcon size={32} />,
	},
	{
		label: 'TypeScript',
		icon: <TypeScriptIcon size={32} />,
	},
	{
		label: 'GraphQL',
		icon: <GraphQLIcon size={32} />,
	},
	{
		label: 'Vercel',
		icon: <VercelIcon size={32} />,
	},
	{
		label: 'NEXT.JS',
		icon: <NextJSIcon size={32} />,
	},
	{
		label: 'TailwindCSS',
		icon: <TailwindCSSIcon size={32} />,
	},
	{
		label: 'Jira',
		icon: <JiraIcon size={32} />,
	},
	{
		label: 'Firebase',
		icon: <FirebaseIcon size={24} />,
	},
];

const projects: ProjectType[] = [
	{
		title: 'B Photography',
		description: 'A Static webpage built with NextJS and Vercel for a photographer',
		link: 'https://b-photography.vercel.app/',
		image: BPhotography,
	},
	{
		title: 'Vector Vetted',
		description:
			'Vector Vetted is a web application designed to match resumes with job descriptions using text embeddings and the cosine similarity function. It leverages the Next.js framework for efficient server-side rendering and static site generation, along with a responsive user interface powered by ReactJS and TailwindCSS.',
		link: 'https://github.com/JohnMcWhirter10/vector-vetted',
		image: VectorVetted,
	},
	{
		title: 'UL-SWAP DAQ',
		link: 'https://github.com/jmcwhirter1608/ULSWAPDAQ',
		image: ULSWAPDAQ,
		description:
			'The Ultra Low Size Weight and Power Data Acquisition Unit (UL-SWaP DaQ) was a collaborative project undertaken at Texas A&M University, sponsored by Sandia National Laboratories. The project aimed to design a compact, lightweight, and low-power circuit capable of withstanding rocket test flights.',
	},
	{
		title: 'Python GUI Framework',
		description:
			'During my internship at Texas Instruments, I had the opportunity to collaborate with the High-Speed Converter group and other interns, while also being entrusted with a solo project to design a Python GUI Framework.',
		image: TexasInstruments,
	},
	{
		title: 'Mondrian UI',
		description:
			'MondrianUI is a modern and minimalist UI library designed with simplicity and elegance in mind. It offers a set of flexible components that allow developers to create intuitive and aesthetically pleasing user interfaces with ease.',
		link: 'https://github.com/JohnMcWhirter10/mondrian-ui',
		image: MondrianUI,
	},
	{
		title: 'Message App',
		description:
			'The Message App is a web application I developed using Ruby on Rails, designed to manage and store videos with metadata such as title, description, thumbnail, and tags.',
		image: Messages,
		link: 'https://github.com/JohnMcWhirter10/messages',
	},
];

const ProjectsSection = ({ content }: SectionContentProps) => {
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

export default ProjectsSection;
