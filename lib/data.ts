import type { SectionType } from './types';

import Headshot from '@/assets/images/AMCHeadshot.png';
import TAMU from '@/assets/images/TAMU-LOGO.png';

export const sections: SectionType[] = [
	{
		id: 'about',
		title: 'About',
		content:
			'I have a passion for inventing, solving tough problems, and driving projects across the finish line. For the past 3 years, I’ve been building, scaling, and maintaining cutting-edge web applications, constantly learning and evolving with new technologies. Need a hand with your next User Interface?',
		backgroundImage: Headshot,
		theme: 'system',
	},
	{
		id: 'experience',
		title: 'Experience',
		content: '',
		theme: 'system',
	},
	{
		id: 'projects',
		title: 'Projects',
		content:
			'Here are my favorite Technologies and projects I have worked on. Feel free to engage with them on Github using the View Project link.',
		theme: 'system',
	},
	{
		id: 'education',
		title: 'Education',
		content:
			'I graduated from Texas A&M University in 2023 with a degree in Computer and Electrical Engineering. During my time at Texas A&M, I honed my skills in engineering principles, problem-solving, and innovative thinking, preparing me to tackle complex challenges in the tech industry.',
		backgroundImage: TAMU,
		theme: 'aggie',
	},
	{
		id: 'connect',
		title: 'Connect',
		content: 'Feel free to reach out to me for any inquiries or collaboration opportunities.',
		theme: 'system',
	},
];
