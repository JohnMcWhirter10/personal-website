import type { ActivityType, SectionContentProps } from '@/lib/types';
import Link from 'next/link';
import { Card, CardContent, CardDescription } from '../ui/card';
import { ReusableCarousel } from '../ui/reusable-carousel';

const activities: ActivityType[] = [
	{
		title: 'Songfest',
		description:
			'Participated in the largest philanthropic event at Texas A&M, raising funds for local charities through a spirited dancing competition.',
		link: 'https://www.chiomegasongfest.com/',
	},
	{
		title: 'Big Event',
		description:
			'Volunteered in the largest one-day, student-run service project in the nation, contributing to community improvement projects.',
		link: 'https://bigevent.tamu.edu/',
	},
	{
		title: "Aggie Men's Club",
		description:
			'Active member of a Christian-based social organization promoting leadership, service, and fellowship.',
		link: 'https://www.aggiemensclub.com/',
	},
	{
		title: 'Texas Instruments Internship',
		description:
			'Gained hands-on experience in semiconductor technology and design, working on innovative projects and learning from industry leaders.',
		link: 'https://www.ti.com/',
	},
	{
		title: 'Senior Design Project',
		description:
			'Collaborated with Sandia National Laboratories to design and implement a cutting-edge engineering solution as part of a multidisciplinary team.',
		link: 'https://www.sandia.gov/',
	},
];

const Education = ({ content }: SectionContentProps) => {
	const activityItems = activities.map((activity, index) => (
		<Card key={index} className='p-6 shadow-sm hover:shadow-lg'>
			<CardContent className='space-y-3'>
				<h3 className='text-xl font-bold'>
					<Link href={activity.link} className='hover:underline'>
						{activity.title}
					</Link>
				</h3>
				<CardDescription className='text-sm leading-relaxed'>{activity.description}</CardDescription>
			</CardContent>
		</Card>
	));

	return (
		<div className='flex flex-col gap-8'>
			<Card>
				<CardContent className='p-8'>{content}</CardContent>
			</Card>
			<ReusableCarousel items={activityItems} carouselClassName='cursor-grab select-none' itemClassName='px-4' />
		</div>
	);
};

export default Education;
