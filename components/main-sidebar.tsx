'use client';

import type React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import type { SectionType } from '@/lib/types';

interface MainSidebarProps {
	sections: SectionType[];
	sectionRefs: React.RefObject<(HTMLElement | null)[] | null>;
	activeSection: string;
	setActiveSection: (section: string) => void;
}

export function MainSidebar({ sections, sectionRefs, activeSection, setActiveSection }: MainSidebarProps) {
	useEffect(() => {
		const handleScroll = () => {
			const pageYOffset = window.scrollY;
			let newActiveSection = '';

			sectionRefs.current!.forEach((ref, index) => {
				if (!ref) return;

				const offsetTop = ref.offsetTop - 100;
				const offsetBottom = offsetTop + ref.offsetHeight;

				if (pageYOffset >= offsetTop && pageYOffset < offsetBottom) {
					newActiveSection = sections[index].id;
				}
			});

			setActiveSection(newActiveSection);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [sections, sectionRefs]);

	const scrollToSection = (id: string) => {
		const index = sections.findIndex((section) => section.id === id);
		const ref = sectionRefs.current![index];

		if (ref) {
			window.scrollTo({
				top: ref.offsetTop,
				behavior: 'smooth',
			});
		}
	};

	return (
		<Sidebar className='border-r'>
			<SidebarContent>
				<SidebarMenu className='flex flex-col gap-8 p-4 h-full justify-center'>
					{sections.map((section) => (
						<SidebarMenuItem key={section.id} className='overflow-hidden'>
							<motion.div
								whileHover={{
									scale: 1.05,
									y: -2,
								}}
								whileTap={{ scale: 0.95 }}
								transition={{
									type: 'spring',
									stiffness: 200,
									damping: 10,
								}}
							>
								<SidebarMenuButton
									onClick={() => scrollToSection(section.id)}
									isActive={activeSection === section.id}
									className='relative w-full py-3 px-5 transition-all text-xl'
								>
									{section.title}
								</SidebarMenuButton>
							</motion.div>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarContent>
		</Sidebar>
	);
}
