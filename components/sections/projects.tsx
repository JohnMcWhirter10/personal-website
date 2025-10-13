import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import type { ProjectType, SectionContentProps } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';

import BPhotography from '@/assets/images/b-photography.png';
import VectorVetted from '@/assets/images/vectorVettedLogo.png';
import ULSWAPDAQ from '@/assets/images/ULSWAPDAQ.png';
import TexasInstruments from '@/assets/images/TexasInstruments.png';
import MondrianUI from '@/assets/images/mondrian-ui.png';
import Avalon from '@/assets/images/Avalon.png';
import DCCapture from '@/assets/images/DC_Capture.png';

import AWSIcon from '@/components/icons/AWS';
import BashIcon from '@/components/icons/Bash';
import CSS3Icon from '@/components/icons/CSS3';
import DartIcon from '@/components/icons/Dart';
import DockerIcon from '@/components/icons/Docker';
import FirebaseIcon from '@/components/icons/Firebase';
import FlutterIcon from '@/components/icons/Flutter';
import GitIcon from '@/components/icons/Git';
import GitHubIcon from '@/components/icons/GitHub';
import GraphQLIcon from '@/components/icons/GraphQL';
import HTML5Icon from '@/components/icons/HTML5';
import JavaScriptIcon from '@/components/icons/JavaScript';
import JiraIcon from '@/components/icons/Jira';
import MySQLIcon from '@/components/icons/MySQL';
import NextJSIcon from '@/components/icons/NextJSIcon';
import NodeJSIcon from '@/components/icons/NodeJS';
import PHPIcon from '@/components/icons/PHP';
import PostgreSQLIcon from '@/components/icons/PostgreSQL';
import PythonIcon from '@/components/icons/Python';
import ReactIcon from '@/components/icons/React';
import TailwindCSSIcon from '@/components/icons/Tailwind';
import TypeScriptIcon from '@/components/icons/TypeScript';
import VercelIcon from '@/components/icons/Vercel';
import VSCodeIcon from '@/components/icons/VSCode';

export const technologies = [
	// Programming Languages
	{
		label: 'Python',
		icon: <PythonIcon size={32} />,
	},
	{
		label: 'JavaScript',
		icon: <JavaScriptIcon size={32} />,
	},
	{
		label: 'TypeScript',
		icon: <TypeScriptIcon size={32} />,
	},
	{
		label: 'PHP',
		icon: <PHPIcon size={32} />,
	},
	{
		label: 'SQL',
		icon: <MySQLIcon size={32} />,
	},
	// Web Frameworks & Technologies
	{
		label: 'React',
		icon: <ReactIcon size={32} />,
	},
	{
		label: 'HTML5',
		icon: <HTML5Icon size={32} />,
	},
	{
		label: 'CSS3',
		icon: <CSS3Icon size={32} />,
	},
	{
		label: 'Next.js',
		icon: <NextJSIcon size={32} />,
	},
	// Cloud & Tools
	{
		label: 'AWS',
		icon: <AWSIcon size={32} />,
	},
	{
		label: 'Vercel',
		icon: <VercelIcon size={32} />,
	},
	{
		label: 'Git',
		icon: <GitIcon size={32} />,
	},
];

const projects: ProjectType[] = [
	{
		title: 'Aggies Invent: Sandia',
		description:
			'Developed and pitched a Python Flask AI document declassification system for Sandia National Laboratories, automating secure content flagging for enhanced workplace security.',
		link: 'https://github.com/JohnMcWhirter10/aggies-invent-team-5',
		image: DCCapture,
		categories: ['Python', 'AI', 'Flask', 'Security'],
	},
	{
		title: 'Vector Vetted',
		description:
			'A web application that semantically analyzes and verifies the relevance of a resume against a specific job description. Uses vector embeddings and cosine similarity to determine resume-job compatibility with complete client-side operation for enhanced privacy.',
		link: 'https://github.com/JohnMcWhirter10/vector-vetted',
		image: VectorVetted,
		categories: ['Web Development', 'AI', 'NextJS', 'ReactJS'],
	},
	{
		title: 'B Photography',
		description:
			'Professional photo gallery website created for a photographer with responsive design and optimized image loading. Built with NextJS and deployed on Vercel.',
		link: 'https://b-photography.vercel.app/',
		image: BPhotography,
		categories: ['Web Development', 'NextJS', 'Vercel'],
	},
	{
		title: 'Avalon Game',
		image: Avalon,
		description:
			'Mobile implementation of the popular social deduction board game Avalon with a pass-and-play format. Features complex navigation handling multiple game phases and secure information hiding between player turns.',
		categories: ['Mobile Development', 'Flutter', 'Dart', 'Game Development'],
	},
	{
		title: 'UL-SWAP DAQ',
		link: 'https://github.com/jmcwhirter1608/ULSWAPDAQ',
		image: ULSWAPDAQ,
		description:
			'The Ultra Low Size Weight and Power Data Acquisition Unit (UL-SWaP DaQ) was a collaborative project undertaken at Texas A&M University, sponsored by Sandia National Laboratories. Led a 3-person team in designing a Data Acquisition Unit for rocket environment applications.',
		categories: ['Hardware', 'Engineering', 'Python'],
	},
	{
		title: 'ADC Configuration GUI',
		description:
			'Developed a Python-based graphical user interface for configuring High Speed Analog-to-Digital Converters (ADCs) at Texas Instruments. Simplified the testing and validation process for high-speed converters and integrated with hardware testing equipment.',
		image: TexasInstruments,
		categories: ['Python', 'GUI', 'Hardware'],
	},
	{
		title: 'Mondrian UI',
		description:
			'MondrianUI is a modern and minimalist UI library designed with simplicity and elegance in mind. It offers a set of flexible components that allow developers to create intuitive and aesthetically pleasing user interfaces with ease.',
		link: 'https://github.com/JohnMcWhirter10/mondrian-ui',
		image: MondrianUI,
		categories: ['UI/UX', 'Component Library', 'ReactJS'],
	},
];

const ProjectsSection = ({}: SectionContentProps) => {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: string]: boolean }>({});

	const toggleDescription = (projectTitle: string) => {
		setExpandedDescriptions((prev) => ({
			...prev,
			[projectTitle]: !prev[projectTitle],
		}));
	};

	const allCategories = Array.from(new Set(projects.flatMap((project) => project.categories))).sort();

	const filteredProjects = selectedCategory
		? projects.filter((project) => project.categories.includes(selectedCategory))
		: projects;

	const projectItems = filteredProjects.map((project, index) => (
		<motion.div
			whileHover={{ y: -5, transition: { duration: 0.2 } }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			key={project.title}
			layout
		>
			<Card className='h-full border-2 border-primary bg-card/50 backdrop-blur-xs hover:shadow-lg transition-all duration-300 overflow-hidden'>
				<CardContent className='p-6'>
					<div className='aspect-video w-full mb-4 overflow-hidden rounded-lg relative group'>
						<Image
							src={project.image || '/placeholder.svg'}
							alt={project.title}
							className='w-full h-full object-contain transition-transform duration-500 group-hover:scale-105'
						/>
						{project.link && (
							<div className='absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<a
									href={project.link}
									target='_blank'
									rel='noopener noreferrer'
									className='text-white bg-primary hover:bg-primary/80 transition-colors px-4 py-2 rounded-lg text-sm font-medium'
								>
									View Project
								</a>
							</div>
						)}
					</div>
					<h3 className='text-xl font-bold text-foreground'>{project.title}</h3>
					<div className='flex flex-wrap gap-1 mt-1 mb-2'>
						{project.categories.map((category) => (
							<span
								key={`${project.title}-${category}`}
								className='inline-block px-2 py-1 text-xs rounded-lg bg-primary/10 text-primary'
							>
								{category}
							</span>
						))}
					</div>
					<div className='mt-2 mb-4'>
						<p
							className={`text-sm text-muted-foreground ${
								!expandedDescriptions[project.title] ? 'line-clamp-1' : ''
							}`}
						>
							{project.description}
						</p>
						{project.description.length > 150 && (
							<button
								onClick={() => toggleDescription(project.title)}
								className='text-xs text-primary mt-1 hover:underline font-medium'
							>
								{expandedDescriptions[project.title] ? 'Show less' : 'Read more'}
							</button>
						)}
					</div>
				</CardContent>
			</Card>
		</motion.div>
	));

	return (
		<div className='w-full'>
			<div className='mb-10'>
				<h3 className='text-2xl font-bold mb-6 text-center'>Technologies</h3>
				<div className='flex flex-wrap justify-center md:gap-8 mb-12'>
					{technologies.map((tech, index) => (
						<motion.div
							key={index}
							className='flex flex-col items-center justify-end gap-2 p-3'
							whileHover={{ scale: 1.1 }}
							transition={{ type: 'spring', stiffness: 400, damping: 10 }}
						>
							<div className='p-3 rounded-lg bg-background border-2 border-primary shadow-xs'>
								{tech.icon}
							</div>
							<span className='text-sm font-medium'>{tech.label}</span>
						</motion.div>
					))}
				</div>
			</div>

			<div className='mb-8'>
				<div className='flex flex-col sm:flex-row items-center justify-between gap-4 mb-6'>
					<div className='flex flex-wrap justify-center gap-2'>
						<Button
							variant={selectedCategory === null ? 'default' : 'outline'}
							size='sm'
							onClick={() => setSelectedCategory(null)}
							className='rounded-lg'
						>
							All
						</Button>

						{allCategories.map((category) => (
							<Button
								key={category}
								variant={selectedCategory === category ? 'default' : 'outline'}
								size='sm'
								onClick={() => setSelectedCategory(category)}
								className='rounded-lg'
							>
								{category}
							</Button>
						))}
					</div>
				</div>

				<AnimatePresence>
					<motion.div layout className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative'>
						{projectItems.length > 0 ? (
							projectItems
						) : (
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className='col-span-full text-center text-muted-foreground py-12'
							>
								No projects found in this category.
							</motion.p>
						)}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default ProjectsSection;
