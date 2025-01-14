'use client';

import Carousel from '@/components/animate/Carousel';
import NextJSIcon from '@/components/icons/NextJs';
import PythonIcon from '@/components/icons/Python';
import TypeScriptIcon from '@/components/icons/TypeScript';
import VercelIcon from '@/components/icons/Vercel';
import MySQLIcon from '@/components/icons/MySQL';
import { useState } from 'react';
import JiraIcon from '@/components/icons/Jira';
import AWSIcon from '@/components/icons/AWS';
import DockerIcon from '@/components/icons/Docker';
import GraphQLIcon from '@/components/icons/GraphQL';
import ReactIcon from '@/components/icons/React';
import GitIcon from '@/components/icons/Git';
import FirebaseIcon from '@/components/icons/Firebase';
import NodeJSIcon from '@/components/icons/NodeJS';
import TailwindCSSIcon from '@/components/icons/Tailwind';

export default function Fonts() {
    const [width, setWidth] = useState<number | string>(25);

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen gap-8 bg-background text-foreground">
            <h1 className="text-3xl font-bold">Control Icon Size</h1>
            <div className="text-lg">
                Slide to control size of icons. Current: {width}px
            </div>
            <input
                type="range"
                defaultValue={width}
                max={200}
                min={10}
                step={1}
                onChange={(e) => setWidth(e.target.value)}
                className="w-3/4 md:w-1/2 accent-primary"
            />
            <div className="w-full max-w-[800px] p-4 border-2 border-secondary rounded-lg shadow-md bg-secondary/10">
                <Carousel
                    progressBar
                    objects={[
                        <PythonIcon
                            key={'python_icon'}
                            size={width as number}
                        />,
                        <TypeScriptIcon
                            key={'typescript_icon'}
                            size={width as number}
                        />,
                        <NextJSIcon
                            key={'nextjs_icon'}
                            size={width as number}
                        />,
                        <VercelIcon
                            key={'vercel_icon'}
                            size={width as number}
                        />,
                        <MySQLIcon key={'mysql_icon'} size={width as number} />,
                        <JiraIcon key={'jira_icon'} size={width as number} />,
                        <AWSIcon key={'aws_icon'} size={width as number} />,
                        <DockerIcon
                            key={'dockewr_icon'}
                            size={width as number}
                        />,
                        <GraphQLIcon
                            key={'graphql_icon'}
                            size={width as number}
                        />,
                        <ReactIcon key={'react_icon'} size={width as number} />,
                        <GitIcon key={'git_icon'} size={width as number} />,
                        <FirebaseIcon
                            key={'firebase_icon'}
                            size={width as number}
                        />,
                        <NodeJSIcon
                            key={'nodejs_icon'}
                            size={width as number}
                        />,
                        <TailwindCSSIcon
                            key={'tailwindcss_icon'}
                            size={width as number}
                        />,
                    ]}
                />
            </div>
        </div>
    );
}
