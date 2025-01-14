import { StaticImageData } from 'next/image';
import { RefObject } from 'react';

export type PanelType = {
    id: string;
    label: string;
    theme?: ThemeType;
    component: React.ReactNode;
    backgroundImage?: {
        img: StaticImageData;
        className: string;
    };
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
