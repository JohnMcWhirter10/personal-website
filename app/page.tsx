'use client';

import { useRef, useState } from 'react';
import { MainSidebar } from '@/components/main-sidebar';
import { Section } from '@/components/section';
import { sections } from '@/lib/data';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function Home() {
	const sectionRefs = useRef<(HTMLElement | null)[]>([]);
	const [activeSection, setActiveSection] = useState<string>('');

	return (
		<SidebarProvider>
			<MainSidebar
				sections={sections}
				sectionRefs={sectionRefs}
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>
			<div className='md:hidden w-full h-fit z-20 p-4 fixed top-0 bg-background inline-flex justify-between'>
				<h1 className='text-2xl'>
					{activeSection.slice(0, 1).toUpperCase() + activeSection.slice(1).toLocaleLowerCase()}
				</h1>
				<SidebarTrigger size={'lg'} variant={'ghost'} />
			</div>
			<main className='w-full overflow-hidden mt-16'>
				{sections.map((section, index) => (
					<Section
						key={section.id}
						ref={(el) => {
							sectionRefs.current[index] = el;
						}}
						id={section.id}
						title={section.title}
						content={section.content}
						backgroundImage={section.backgroundImage}
						theme={section.theme}
					/>
				))}
			</main>
		</SidebarProvider>
	);
}
