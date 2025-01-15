import { StaticImageData } from 'next/image';
import { ReactNode, RefObject } from 'react';

export type SectionDataType = {
    id: string;
    label: string;
    theme?: ThemeType;
    children: ReactNode;
    backgroundImage?: StaticImageData;
};

export type ThemeType = 'light' | 'dark' | 'aggie' | 'system';

export type Direction =
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right';

export type Position = {
    x: number | string;
    y: number | string;
};

export type NavbarLink = {
    id: string;
    label: string;
    ref: RefObject<HTMLDivElement>;
};

export type JobType = {
    title: string;
    companyTitle: string;
    location: string;
    startDate: string;
    endDate: string | undefined;
    bulletPoints: string[];
};

export interface IIcon {
    size: number;
    className: string;
}

export type ProjectType = {
    title: string;
    description: string;
    image: StaticImageData;
    link?: string;
};

export type CertificationType = {
    title: string;
    credentialWebsite: string;
    credential: string;
    credentialImage: StaticImageData;
};

export type ActivityType = {
    title: string;
    description: string;
    link: string;
};
