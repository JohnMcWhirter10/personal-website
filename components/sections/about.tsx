import type { SectionContentProps } from '@/lib/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Headshot from '@/assets/images/AMCHeadshot.jpg';
import { ArrowDown } from 'lucide-react';

const About = ({ content }: SectionContentProps) => {
	const roles = ['Software Engineer', 'Full-Stack Developer', 'Problem Solver'];
	const skills = ['React', 'TypeScript', 'Next.js', 'UI/UX', 'Performance', 'Python', 'SQL'];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	};

	const photoVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
		},
	};

	return (
		<motion.div
			className='flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20'
			variants={containerVariants}
			initial='hidden'
			animate='visible'
		>
			{/* Hero Portrait */}
			<motion.div className='relative mb-6 sm:mb-8 md:mb-12' variants={photoVariants}>
				<div className='relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96'>
					{/* Gradient Ring Animation */}
					<motion.div
						className='absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-primary/60 to-primary/30'
						animate={{
							rotate: 360,
							scale: [1, 1.05, 1],
						}}
						transition={{
							rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
							scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
						}}
					/>
					<div className='absolute inset-2 rounded-full overflow-hidden bg-background'>
						<Image
							src={Headshot}
							alt='John McWhirter'
							fill
							className='object-cover object-top scale-110'
							priority
							sizes='(max-width: 640px) 224px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px'
						/>
					</div>
				</div>
			</motion.div>

			{/* Name & Title */}
			<motion.div className='text-center mb-4 sm:mb-6 md:mb-8 px-2' variants={itemVariants}>
				<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent leading-tight'>
					John McWhirter
				</h1>
				<div className='flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground'>
					{roles.map((role, index) => (
						<span key={role} className='flex items-center whitespace-nowrap'>
							{role}
							{index < roles.length - 1 && (
								<span className='mx-1.5 sm:mx-2 text-primary'>•</span>
							)}
						</span>
					))}
				</div>
			</motion.div>

			{/* Bio Content */}
			<motion.div
				className='max-w-3xl text-center mb-6 sm:mb-8 md:mb-10 px-2'
				variants={itemVariants}
			>
				<p className='text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground'>
					{content}
				</p>
			</motion.div>

			{/* Skill Badges */}
			<motion.div
				className='flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3 mb-8 sm:mb-10 md:mb-12 px-2'
				variants={itemVariants}
			>
				{skills.map((skill, index) => (
					<motion.span
						key={skill}
						className='px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-primary/10 text-primary border border-primary/20 active:bg-primary/20 md:hover:bg-primary/20 transition-colors touch-manipulation'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 + index * 0.1 }}
					>
						{skill}
					</motion.span>
				))}
			</motion.div>

			{/* Scroll Indicator - Hidden on mobile, shown on tablet+ */}
			<motion.div
				className='hidden sm:flex flex-col items-center gap-2 text-muted-foreground/60'
				variants={itemVariants}
				animate={{
					y: [0, 8, 0],
				}}
				transition={{
					y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
				}}
			>
				<span className='text-xs uppercase tracking-wider'>Scroll to explore</span>
				<ArrowDown className='w-4 h-4' />
			</motion.div>
		</motion.div>
	);
};

export default About;
