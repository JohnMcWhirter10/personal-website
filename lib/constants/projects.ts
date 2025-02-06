import { ProjectType } from '../types';

import VectorVettedLogo from '@/assets/images/vectorVettedLogo.png';
import ULSWAPDAQ from '@/assets/images/ULSWAPDAQ.png';
import PythonGuiFramework from '@/assets/images/TexasInstruments.png';
import MondrianUI from '@/assets/images/mondrian-ui.png';
import MessageApp from '@/assets/images/messages-logo.png';
import BPhotography from '@/assets/images/b-photography.png';

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
            'Vector Vetted is a web application designed to match resumes with job descriptions using text embeddings and the cosine similarity function. It leverages the Next.js framework for efficient server-side rendering and static site generation, along with a responsive user interface powered by ReactJS and TailwindCSS. The key features of the application include the Next.js framework for server-side rendering and static site generation, TailwindCSS for styled components that ensure a responsive and aesthetic design, ReactJS for modern and declarative UI development, a REST API for seamless data handling, the Ollama API for local text analysis, the use of cosine similarity to determine matching, and a PDF viewer powered by PDF.js. The tech stack consists of Next.js for the backend, and ReactJS and TailwindCSS for the frontend.',
        link: 'https://github.com/JohnMcWhirter10/vector-vetted',
        image: VectorVettedLogo,
    },
    {
        title: 'UL-SWAP DAQ',
        link: 'https://github.com/jmcwhirter1608/ULSWAPDAQ',
        image: ULSWAPDAQ,
        description:
            "The Ultra Low Size Weight and Power Data Acquisition Unit (UL-SWaP DaQ) was a collaborative project undertaken at Texas A&M University, sponsored by Sandia National Laboratories. The project aimed to design a compact, lightweight, and low-power circuit capable of withstanding rocket test flights, processing various signals, and transmitting data. The project team consisted of two electrical engineers and one computer engineer, each bringing their expertise to ensure the project's success. The system was structured into three subsystems: Power, Signal Processing, and Interface. My role specifically focused on the interface subsystem, where I was responsible for selecting components such as the Analog-to-Digital Converter, Microcontroller, LVDS transmitter, and developing the necessary firmware. The technical implementation involved utilizing Altium for PCB design and MPLAB IDE in C for firmware development, integrating the microcontroller with the Analog-to-Digital Converter via SPI bus, and implementing power layers in the four-layer board while programming multiple programmable gain amplifiers (PGA). Additionally, an industry-standard workflow was established with bi-weekly meetings and monthly check-ins, and Doxygen was used to generate HTML output and documentation for the firmware. The purpose of the ULSWaP DaQ unit was to optimize data acquisition during rocket flights, supporting Sandia National Laboratories' mission to enhance national and global security efforts. Additional information includes the creation of several key documents, such as the Concept of Operations, Functional System Requirements, Interface Control Document, Subsystem Reports, and System Reports. Git Version Control was integrated for managing Altium designs and firmware updates. Design iterations involved testing and troubleshooting multiple subsystems, resulting in significant improvements and a fully functioning system. The iterative design process facilitated incremental improvements, ultimately leading to a more robust and optimized data acquisition unit capable of meeting the demands of rocket test flight operations effectively. The design process underwent two iterations: the first demonstrated the concept and identified areas for improvement, while the second iteration addressed those issues, resulting in a fully functioning and integrated system. For further insight into the technical specifications of this project, please explore my repository through the link located at the bottom of the screen!",
    },
    {
        title: 'Python GUI Framework',
        description:
            "During my internship at Texas Instruments, I had the opportunity to collaborate with the High-Speed Converter group and other interns, while also being entrusted with a solo project to design a Python GUI Framework. The Framework functions like an engine: users simply need to provide it with a JSON-formatted file containing details such as page number, input/output type, labels for text, graphs, or images, and optional parameters like range, dropdown, or alpha characters. Alongside developing the engine, I worked closely with a Solution Architect to streamline the process of writing the JSON file so it could work directly with a proprietary Verilog package provided to Texas Instruments customers. This allows customers to use Vivado's built-in configuration settings, export it, and run our script to deconstruct the exported configuration, which is then processed through the engine to create a custom Graphical User Interface. This GUI typically performs calculations, displays estimated signals, and exports configurations back to Vivado with calculated values based on the client's data.",
        image: PythonGuiFramework,
    },
    {
        title: 'Mondrian UI',
        description:
            'MondrianUI is a modern and minimalist UI library designed with simplicity and elegance in mind. It offers a set of flexible components that allow developers to create intuitive and aesthetically pleasing user interfaces with ease. Key features of MondrianUI include a minimalist design with clean and simple components for a modern look, customizable themes that allow users to easily set and switch themes with context-based theming, responsive components designed to be accessible and adaptable across devices, and integration with Storybook for previewing and testing components in isolation.',
        link: 'https://github.com/JohnMcWhirter10/mondrian-ui',
        image: MondrianUI,
    },
    {
        title: 'Message App',
        description:
            "The Message App is a web application I developed using Ruby on Rails, designed to manage and store videos with metadata such as title, description, thumbnail, and tags. I utilized AWS S3 for video storage, ensuring that each video is efficiently managed in the cloud. Additionally, I leveraged AWS RDS MySQL for storing metadata and managing the application's database, allowing for scalable and reliable data handling. The app allows for filtering videos on the Home screen based on tags, making content management streamlined and efficient.",
        image: MessageApp,
        link: 'https://github.com/JohnMcWhirter10/messages',
    },
];
