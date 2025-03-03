import type { ProjectType } from './types';

import BPhotography from '@/assets/images/b-photography.png';
import VectorVetted from '@/assets/images/vectorVettedLogo.png';
import ULSWAPDAQ from '@/assets/images/ULSWAPDAQ.png';
import TexasInstruments from '@/assets/images/TexasInstruments.png';
import MondrianUI from '@/assets/images/mondrian-ui.png';
import Messages from '@/assets/images/messages-logo.png';

export const projects: ProjectType[] = [
    {
        title: 'B Photography',
        description:
            'A Static webpage built with NextJS and Vercel for a photographer',
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
