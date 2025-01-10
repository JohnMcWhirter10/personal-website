'use client';

import Carousel from '@/components/animate/Carousel';
import NextJSIcon from '@/components/icons/NextJs';
import PythonIcon from '@/components/icons/Python';
import TypeScriptIcon from '@/components/icons/TypeScript';
import { useState } from 'react';

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
                    ]}
                />
            </div>
        </div>
    );
}
