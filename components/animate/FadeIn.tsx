import { motion } from 'motion/react';

const FadeIn = ({
    children,
    className,
    trigger,
}: {
    children: React.ReactNode;
    className?: string;
    trigger: boolean;
}) => {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial="hidden"
            animate={trigger ? 'visible' : 'hidden'}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
