'use client';

import { forwardRef, useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import type { SectionType } from '@/lib/types';
import About from './sections/about';
import Experience from './sections/experience';
import ProjectsSection from './sections/projects';
import Education from './sections/education';
import Connect from './sections/connect';
import { useTheme } from 'next-themes';

export const Section = forwardRef<HTMLElement, SectionType>(({ id, title, content, backgroundImage, theme }, ref) => {
	const controls = useAnimation();
	const [hasAnimated, setHasAnimated] = useState(false);
	const { setTheme } = useTheme();

	const sectionRef = useRef<HTMLElement>(null);
	const [inViewRef, inView] = useInView({
		threshold: 0,
		triggerOnce: false,
	});

	// Combine refs
	const setRefs = (element: HTMLElement | null) => {
		// @ts-ignore - forwardRef typing issue
		if (typeof ref === 'function') ref(element);
		else if (ref) ref.current = element;
		sectionRef.current = element;
		inViewRef(element);
	};

	useEffect(() => {
		const checkVisibility = () => {
			if (sectionRef.current) {
				const rect = sectionRef.current.getBoundingClientRect();
				const windowHeight = window.innerHeight;
				const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
				const visibleRatio = visibleHeight / rect.height;

				if (visibleRatio >= 0.3 && !hasAnimated) {
					controls.start('visible');
					setHasAnimated(true);
					setTheme(theme);
				} else if (visibleRatio < 0.3 && hasAnimated) {
					controls.start('hidden');
					setHasAnimated(false);
				}
			}
		};

		if (inView) {
			checkVisibility();
			window.addEventListener('scroll', checkVisibility);
			window.addEventListener('resize', checkVisibility);
		}

		return () => {
			window.removeEventListener('scroll', checkVisibility);
			window.removeEventListener('resize', checkVisibility);
		};
	}, [controls, inView, hasAnimated, setTheme, theme]);

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
				return <ProjectsSection content={content} />;
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
			className='relative min-h-dvh flex flex-col items-start justify-center p-4 md:p-8 overflow-hidden'
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

			<motion.div
				className='z-10 w-full max-w-6xl'
				initial='hidden'
				animate={controls}
				variants={contentVariants}
			>
				<h1 className='text-4xl text-left w-full mb-4 max-md:hidden'>{title}</h1>
				{renderSectionContent()}
			</motion.div>
		</section>
	);
});

Section.displayName = 'Section';
