import { projects } from '@/lib/constants/projects';
import Project from '../project';
import Carousel from '../animate/Carousel';
import { certifications } from '@/lib/constants/certifications';
import Certification from '../certification';
import SlideShow from '../animate/SlideShow';
import AWSIcon from '../icons/AWS';
import DockerIcon from '../icons/Docker';
import FirebaseIcon from '../icons/Firebase';
import GitIcon from '../icons/Git';
import GraphQLIcon from '../icons/GraphQL';
import JiraIcon from '../icons/Jira';
import MySQLIcon from '../icons/MySQL';
import NextJSIcon from '../icons/NextJs';
import NodeJSIcon from '../icons/NodeJS';
import PythonIcon from '../icons/Python';
import ReactIcon from '../icons/React';
import TailwindCSSIcon from '../icons/Tailwind';
import TypeScriptIcon from '../icons/TypeScript';
import VercelIcon from '../icons/Vercel';

const objects = [
    {
        label: 'AWS',
        icon: <AWSIcon size={32} />,
    },
    {
        label: 'Python',
        icon: <PythonIcon size={32} />,
    },
    {
        label: 'MySQL',
        icon: <MySQLIcon size={32} />,
    },
    {
        label: 'React',
        icon: <ReactIcon size={32} />,
    },
    {
        label: 'Node.js',
        icon: <NodeJSIcon size={32} />,
    },
    {
        label: 'Git',
        icon: <GitIcon size={32} />,
    },
    {
        label: 'Docker',
        icon: <DockerIcon size={32} />,
    },
    {
        label: 'TypeScript',
        icon: <TypeScriptIcon size={32} />,
    },
    {
        label: 'GraphQL',
        icon: <GraphQLIcon size={32} />,
    },
    {
        label: 'Vercel',
        icon: <VercelIcon size={32} />,
    },
    {
        label: 'NEXT.JS',
        icon: <NextJSIcon size={32} />,
    },
    {
        label: 'TailwindCSS',
        icon: <TailwindCSSIcon size={32} />,
    },
    {
        label: 'Jira',
        icon: <JiraIcon size={32} />,
    },
    {
        label: 'Firebase',
        icon: <FirebaseIcon size={24} />,
    },
];

const Projects = () => {
    return (
        <div className="min-h-full w-full">
            <div className="py-2 mt-2"></div>
            <h3 className="text-5xl font-oswald">Projects</h3> <br />
            <h3 className="text-2xl font-oswald">My Favorite Technologies</h3>
            <div className="border-t-2 border-b-2 py-2 mt-2">
                <SlideShow duration={32}>
                    {objects.map((object, index) => (
                        <div
                            key={'_tech_' + object.label + '_' + index}
                            className="flex flex-start text-center gap-4 text-foreground font-bold ml-96"
                        >
                            {object.icon}
                            <div className="text-2xl">{object.label}</div>
                        </div>
                    ))}
                </SlideShow>
            </div>
            <Carousel
                progressBar
                objects={projects.map((project, index) => (
                    <Project key={'project_' + index} project={project} />
                ))}
            />
            <div className="mt-20">
                <h3 className="text-3xl font-oswald">Certifications</h3>

                <Carousel
                    progressBar
                    objects={certifications.map((cert, index) => (
                        <Certification
                            key={'certification_' + index}
                            certification={cert}
                        />
                    ))}
                />
            </div>
        </div>
    );
};

export default Projects;
