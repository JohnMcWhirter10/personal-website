import { ProjectType } from '@/lib/types';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from './ui/card';
import { motion } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';

const Project = ({ project }: { project: ProjectType }) => {
    const [tooltip, setTooltip] = useState<boolean>(false);

    const triggerTooltip = () => {
        setTooltip(!tooltip);
    };

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{
                type: 'spring',
                stiffness: 300,
                dampgin: 10,
                duration: 0.2,
            }}
            onHoverStart={triggerTooltip}
            onHoverEnd={triggerTooltip}
        >
            {project.link && (
                <Link href={project.link} target="_blank">
                    <motion.span
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={
                            tooltip
                                ? { opacity: 1, scaleX: 1 }
                                : { opacity: 0, scaleX: 0 }
                        }
                        transition={{
                            type: 'spring',
                            duration: 0.3,
                            stiffness: 200,
                            damping: 10,
                        }}
                        className="absolute hover:bg-accent-foreground/80 right-0 bottom-2/3 origin-left bg-accent-foreground p-2 rounded-xl z-10 text-xs text-nowrap text-accent italic cursor-pointer"
                    >
                        Click To Open
                    </motion.span>
                </Link>
            )}

            <Card className="w-64 h-fit rounded-md overflow-hidden border border-border bg-card text-card-foreground">
                <CardHeader className="p-3 bg-card border-b border-border">
                    <CardTitle className="text-lg font-semibold text-center">
                        {project.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-3 h-full flex flex-col items-center space-y-2">
                    <Image
                        draggable={false}
                        src={project.image}
                        alt={project.title}
                        width={300}
                        height={300}
                        className="opacity-90 object-contain"
                    />
                    <CardDescription className="line-clamp-3 overflow-hidden text-ellipsis">
                        {project.description}
                    </CardDescription>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default Project;
