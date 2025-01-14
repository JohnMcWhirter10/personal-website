import { useIsMobile } from '@/hooks/use-mobile';
import { NavbarLink } from '@/lib/types';
import { SidebarIcon } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { Button } from './ui/button';
import { useState } from 'react';

const Navbar = ({
    links,
    handleNavigation,
}: {
    links: NavbarLink[];
    handleNavigation: (id: string) => void;
}) => {
    const isMobile = useIsMobile();
    const [mobileLinksInView, setMobileLinksInView] = useState<boolean>(false);

    const linkStates = links.map((link) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const selectedSectionInView = useInView(link.ref, { amount: 0.5 });
        return { ...link, selectedSectionInView };
    });

    return (
        <>
            {isMobile ? (
                <div className="flex flex-col pt-2 px-2 bg-transparent h-fit z-10">
                    <Button
                        className="w-fit rounded-md"
                        onClick={() => {
                            setMobileLinksInView(
                                isMobile && !mobileLinksInView
                            );
                        }}
                    >
                        <SidebarIcon />
                    </Button>
                    <motion.div
                        variants={{
                            visible: {
                                scaleX: 1,
                                x: 0,
                            },
                            hidden: {
                                scaleX: 0,
                                x: '-100%',
                            },
                        }}
                        transition={{
                            type: 'spring',
                            duration: 0.3,
                            stiffness: 300,
                            damping: 10,
                        }}
                        animate={mobileLinksInView ? 'visible' : 'hidden'}
                        className="flex flex-col w-fit absolute top-16 space-y-2 rounded-xl"
                    >
                        {linkStates.map(
                            ({ id, label, selectedSectionInView }) => (
                                <motion.button
                                    key={id}
                                    onClick={() => handleNavigation(id)}
                                    className={`left-0 font-oswald tracking-wider font-semibold text-[2.8vh] px-[2vw] py-[1vh] h-fit w-full rounded-[0.8vw] ${
                                        selectedSectionInView
                                            ? 'text-primary-foreground bg-primary'
                                            : 'bg-primary-foreground text-primary'
                                    }`}
                                >
                                    {label}
                                </motion.button>
                            )
                        )}
                    </motion.div>
                </div>
            ) : (
                <div className="h-full w-[9vw] bg-foreground/5 fixed">
                    <div className="mt-[10vh] ml-[4vw] text-nowrap w-fit h-[75vh] flex flex-wrap">
                        {linkStates.map(
                            ({ id, label, selectedSectionInView }) => (
                                <motion.button
                                    key={id}
                                    onClick={() => handleNavigation(id)}
                                    whileHover={{ scale: 1.1 }}
                                    whileFocus={{ scale: 1.1 }}
                                    variants={{
                                        selected: {
                                            scale: 1.3,
                                            x: 25,
                                        },
                                        unselected: {
                                            scale: 1,
                                            x: 0,
                                        },
                                    }}
                                    animate={
                                        selectedSectionInView
                                            ? 'selected'
                                            : 'unselected'
                                    }
                                    className={`font-oswald tracking-wider font-semibold text-[2.8vh] relative px-[2vw] py-[1vh] h-fit w-full rounded-[0.8vw] ${
                                        selectedSectionInView
                                            ? 'text-primary-foreground bg-primary'
                                            : 'bg-primary-foreground text-primary'
                                    }`}
                                >
                                    {label}
                                </motion.button>
                            )
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
