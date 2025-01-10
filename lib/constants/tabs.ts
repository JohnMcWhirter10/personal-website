import React from 'react';
import Home from '@pages/Home';
import Certifications from '@pages/Certifications';
import Experience from '@pages/Experience';
import Honors from '@pages/Honors';
import Projects from '@pages/Projects';
import Education from '@pages/Education';

export interface TabDataProps {
    label: string;
    component: React.FC;
}

export const tabData: TabDataProps[] = [
    { label: 'Home', component: Home },
    { label: 'Experience', component: Experience },
    { label: 'Education', component: Education },
    { label: 'Certifications', component: Certifications },
    { label: 'Honors', component: Honors },
    { label: 'Projects', component: Projects },
];
