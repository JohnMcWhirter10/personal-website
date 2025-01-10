import { NavbarLink } from '@/lib/types';

import { motion, useInView } from 'motion/react';

const Navbar = ({
    links,
    handleNavigation,
}: {
    links: NavbarLink[];
    handleNavigation: (id: string) => void;
}) => {
    return (
        <div className="mt-[10vh] ml-[4vw] text-nowrap w-fit h-[75vh] flex flex-wrap">
            {links.map((link) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const selectedSectionInView = useInView(link.ref, {
                    amount: 0.5,
                });
                return (
                    <motion.button
                        key={link.id}
                        onClick={() => handleNavigation(link.id)}
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
                            selectedSectionInView ? 'selected' : 'unselected'
                        }
                        className={`font-oswald tracking-wider font-semibold text-[2.8vh] relative px-[2vw] py-[1vh] h-fit w-full rounded-[0.8vw] ${selectedSectionInView ? 'text-primary-foreground bg-primary' : 'bg-primary-foreground text-primary'}`}
                    >
                        {link.label}
                    </motion.button>
                );
            })}
        </div>
    );
};

export default Navbar;
