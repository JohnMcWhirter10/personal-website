'use client';

import { forwardRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { SectionType } from '@/lib/types';
import About from './sections/about';
import Experience from './sections/experience';
import Projects from './sections/projects';
import Education from './sections/education';

import { useTheme } from 'next-themes';
import Connect from './sections/connect';

export const Section = forwardRef<HTMLElement, SectionType>(({ id, title, content, backgroundImage, theme }, ref) => {
	const controls = useAnimation();
	const [inViewRef, inView] = useInView({
		triggerOnce: false,
		threshold: 0.3,
	});
	const [hasAnimated, setHasAnimated] = useState(false);

	const { setTheme } = useTheme();

	// Combine refs
	const setRefs = (element: HTMLElement | null) => {
		// @ts-ignore - forwardRef typing issue
		if (typeof ref === 'function') ref(element);
		else if (ref) ref.current = element;
		inViewRef(element);
	};

	useEffect(() => {
		if (inView && !hasAnimated) {
			controls.start('visible');
			setHasAnimated(true);
			setTheme(theme);
		} else if (!inView && hasAnimated) {
			controls.start('hidden');
			setHasAnimated(false);
		}
	}, [controls, inView, hasAnimated]);

	const backgroundVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	const contentVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				delay: 0.2,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	const renderSectionContent = () => {
		switch (id) {
			case 'about':
				return <About content={content} />;
			case 'experience':
				return <Experience content={content} />;
			case 'projects':
				return <Projects content={content} />;
			case 'education':
				return <Education content={content} />;
			case 'connect':
				return <Connect content={content} />;
			default:
				return <p className='text-lg'>{content}</p>;
		}
	};

	return (
		<section
			ref={setRefs}
			id={id}
			className='relative max-h-dvh h-fit md:h-dvh flex items-center justify-center p-8 overflow-hidden'
		>
			{backgroundImage && (
				<motion.div
					className='absolute inset-0 z-0'
					initial='hidden'
					animate={controls}
					variants={backgroundVariants}
				>
					<div className='absolute bg-cover bg-background h-full w-full' />
					<div className='relative h-full opacity-25'>
						<Image src={backgroundImage} fill className='object-contain p-4' alt={''} />
					</div>
				</motion.div>
			)}
			<motion.h1
				className='max-md:hidden absolute top-0 p-10 text-4xl text-left w-full'
				animate={controls}
				variants={contentVariants}
			>
				{title}
			</motion.h1>

			<motion.div
				className='z-10 max-w-6xl w-full'
				initial='hidden'
				animate={controls}
				variants={contentVariants}
			>
				{renderSectionContent()}
			</motion.div>
		</section>
	);
});

Section.displayName = 'Section';
