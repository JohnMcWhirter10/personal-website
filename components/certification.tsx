import { CertificationType } from '@/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';
import { useState } from 'react';

const Certification = ({
    certification,
}: {
    certification: CertificationType;
}) => {
    const [tooltip, setTooltip] = useState<boolean>(false);

    const triggerTooltip = () => {
        setTooltip(!tooltip);
    };

    return (
        <Card className="w-64 h-fit rounded-md border border-border bg-card text-card-foreground">
            <CardHeader className="p-3 bg-card border-b border-border">
                <CardTitle className="text-sm font-semibold text-center">
                    {certification.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-3 flex flex-col items-center space-y-8">
                <motion.div
                    className="relative w-24 rounded-md bg-muted"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    onHoverStart={triggerTooltip}
                    onHoverEnd={triggerTooltip}
                >
                    <Link
                        href={certification.credentialWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
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
                            className="absolute hover:bg-accent-foreground/80 top-full origin-left bg-accent-foreground p-2 rounded-xl z-10 text-xs z-100 text-nowrap text-accent italic"
                        >
                            Click To Navigate
                        </motion.span>
                        <Image
                            draggable={false}
                            src={certification.credentialImage}
                            alt={certification.title}
                            className="opacity-90 object-contain"
                        />
                    </Link>
                </motion.div>
                <p className="text-xs font-medium text-muted-foreground text-center">
                    {certification.credential}
                </p>
            </CardContent>
        </Card>
    );
};

export default Certification;
