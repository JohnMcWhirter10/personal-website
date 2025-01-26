'use client';

import { SectionDataType } from '@/lib/types';
import { useInView, motion } from 'motion/react';
import { useTheme } from 'next-themes';
import React, {
    createContext,
    ReactNode,
    useRef,
    useContext,
    useEffect,
    RefObject,
    useState,
} from 'react';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronDown, ChevronRight, Menu, MenuIcon, X } from 'lucide-react';

type SectionContextType = {
    addSection: (
        id: string,
        label: string,
        ref: React.RefObject<HTMLElement>
    ) => void;
    getSection: (id: string) => SectionType | undefined;
    getSections: () => { [key: string]: SectionType };
    newState: boolean;
};

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const useSections = () => {
    const context = useContext(SectionContext);
    if (!context) {
        throw new Error('useSections must be used within a SectionProvider');
    }
    return context;
};

type SectionType = {
    label: string;
    ref: React.RefObject<HTMLElement>;
};

export const SectionProvider = ({ children }: { children: ReactNode }) => {
    const [newState, setNewState] = useState<boolean>(false);
    const sections = useRef<{
        [key: string]: SectionType;
    }>({});

    const addSection = (
        id: string,
        label: string,
        ref: React.RefObject<HTMLElement>
    ): void => {
        if (!sections.current[id]) {
            sections.current[id] = { label, ref };
            setNewState(!newState);
        }
    };

    const getSection = (id: string): SectionType | undefined => {
        return sections.current[id];
    };

    const getSections = (): { [key: string]: SectionType } => {
        return sections.current;
    };

    return (
        <SectionContext.Provider
            value={{ addSection, getSection, getSections, newState }}
        >
            <SectionNavigation />
            {children}
        </SectionContext.Provider>
    );
};

const SectionNavigation = () => {
    const { getSections, newState } = useSections();
    const [menu, setMenu] = useState<boolean>(false);

    const isMobile = useIsMobile();

    const [sections, setSections] = useState<string[] | undefined>(undefined);

    useEffect(() => {
        setSections(Object.keys(getSections()));
    }, [newState]);

    const toggleMobileMenu = () => {
        setMenu(isMobile && !menu);
    };

    return (
        <>
            {isMobile ? (
                <div className="fixed p-4 left-0 top-0 z-30 flex flex-row justify-end items-center w-screen bg-primary-foreground">
                    <motion.button
                        onClick={toggleMobileMenu}
                        initial={false}
                        animate={{ rotate: menu ? 90 : 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 20,
                        }}
                    >
                        <motion.div
                            key={menu ? 'menu-open' : 'menu-closed'}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3 }}
                        >
                            {menu ? <X size={24} /> : <Menu size={24} />}
                        </motion.div>
                    </motion.button>
                    <motion.div
                        className="absolute right-0 top-14 w-fit z-10 flex flex-col text-nowrap origin-top"
                        initial={'hidden'}
                        variants={{
                            visible: {
                                scaleY: 1,
                            },
                            hidden: {
                                scaleY: 0,
                            },
                        }}
                        animate={menu ? 'visible' : 'hidden'}
                        transition={{
                            duration: 0.2,
                        }}
                    >
                        {sections &&
                            sections.map((id) => <SectionLink key={id} id={id} />)}
                    </motion.div>
                </div>
            ) : (
                <div className="h-full w-[10vw] bg-foreground/5 fixed z-10 flex flex-col gap-16 text-nowrap pt-[10vh] md:pl-[5vw]">
                    {sections && sections.map((id) => <SectionLink key={id} id={id} />)}
                </div>
            )}
        </>
    );
};

const SectionLink = ({ id }: { id: string }) => {
    if (!id) return null;

    const isMobile = useIsMobile();

    const { getSection } = useSections();

    const section = getSection(id);

    if (!section) return null;

    const inView = useInView(section.ref, { amount: 0.5 });

    return (
        <Link href={`#${id}`} key={'link_' + id}>
            {isMobile ? (
                <button
                    className={`${!inView ? 'text-primary bg-primary-foreground' : 'text-primary-foreground bg-primary'} font-oswald text-lg w-full origin-left p-2`}
                >
                    {section.label}
                </button>
            ) : (
                <motion.button
                    whileHover={{ x: 10 }}
                    whileFocus={{ x: 10 }}
                    variants={{
                        selected: { x: 5 },
                        unselected: { x: 0 },
                    }}
                    animate={inView ? 'selected' : 'unselected'}
                    className={`${!inView ? 'text-primary bg-primary-foreground' : 'text-primary-foreground bg-primary'} font-oswald font-semibold text-2xl relative px-[2vw] py-[1vh] h-fit w-fit rounded-[0.8vw] origin-left`}
                >
                    {section.label}
                </motion.button>
            )}
        </Link>
    );
};

export const Section = (data: SectionDataType) => {
    const { id, label, children, theme } = data;

    const sectionRef = useRef(null);

    const { addSection, getSection } = useSections();

    useEffect(() => {
        const section = getSection(id);
        if (!section) {
            addSection(id, label, sectionRef);
        }
    }, [id, label, addSection, getSection]);

    const { setTheme } = useTheme();

    const backgroundInView = useInView(
        sectionRef as RefObject<Element | null>,
        {
            amount: 0.5,
            once: false,
        }
    );

    useEffect(() => {
        if (backgroundInView) {
            setTheme(theme || 'system');
        }
    }, [backgroundInView, setTheme, theme]);

    return (
        <section
            ref={sectionRef}
            id={id}
            className="flex bg-transparent min-h-screen max-w-full md:pl-[18vw] overflow-hidden"
        >
            {children}
        </section>
    );
};

Section.displayName = 'Section';

export default SectionType;
