import type { SectionType } from './types';

import Headshot from '@/assets/images/AMCHeadshot.png';
import TAMU from '@/assets/images/TAMU-LOGO.png';

export const sections: SectionType[] = [
    {
        id: 'about',
        title: 'About',
        content:
            'I am a passionate software developer with expertise in building modern web applications. I love creating intuitive user interfaces and solving complex problems.',
        backgroundImage: Headshot,
        theme: 'system',
    },
    {
        id: 'experience',
        title: 'Experience',
        content: 'I have worked on various projects ranging from e-commerce platforms to content management systems. My experience includes both frontend and backend development.',
        theme: 'system',
    },
    {
        id: 'projects',
        title: 'Projects',
        content:
            'Here are some of the projects I have worked on. Each project demonstrates my ability to create elegant solutions to complex problems.',
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
        content:
            'Feel free to reach out to me for any inquiries or collaboration opportunities.',
        theme: 'system',
    },
];
