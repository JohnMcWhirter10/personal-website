import { MutableRefObject } from 'react';

export type PanelType = {
    id: string;
    label: string;
    theme?: ThemeType;
    component: React.ReactNode;
    backgroundImage?: {
        src: string;
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
    ref: MutableRefObject<null>;
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
