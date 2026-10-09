import type { SectionContentProps } from '@/lib/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Headshot from '@/assets/images/Headshot.jpg';

const certifications: {
	name: string;
	detail?: string;
	href: string;
	image: string;
}[] = [
	{
		name: 'Engineer in Training',
		detail: 'EIT #81675',
		href: 'https://pels.texas.gov/roster/eitsearch.html',
		image: 'https://app.engineers.texas.gov/images/tbpels-seal-color.png',
	},
	{
		name: 'AWS AI Practitioner',
		href: 'https://www.credly.com/badges/e54a145b-b424-40d2-b5f2-20d55241587c/public_url',
		image:
			'https://images.credly.com/size/680x680/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png',
	},
	{
		name: 'AWS Solutions Architect Associate',
		href: 'https://www.credly.com/badges/762edb35-ead9-4d4d-8bd3-7aab453fce88/public_url',
		image:
			'https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
	},
];

const skills = ['React', 'Angular', 'TypeScript', 'Golang', 'Next.js', 'Python', 'SQL', 'AWS'];

const About = ({ content }: SectionContentProps) => {
	return (
		<motion.div
			className='w-full flex flex-col items-center md:grid md:grid-cols-[auto_1fr] md:items-center gap-6 md:gap-10 lg:gap-12'
			initial={{ opacity: 0, y: 16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
		>
			{/* LOOK */}
			<div className='relative w-40 sm:w-48 md:w-52 lg:w-60 aspect-[3/4] shrink-0 rounded-lg overflow-hidden border-2 border-primary'>
				<Image
					src={Headshot}
					alt='John McWhirter'
					fill
					className='object-cover object-top'
					priority
					sizes='(max-width: 640px) 160px, (max-width: 768px) 192px, 240px'
				/>
			</div>

			{/* DO + QUALIFY */}
			<div className='text-center md:text-left min-w-0 flex flex-col gap-4 md:gap-5 w-full'>
				<div className='space-y-1.5'>
					<p className='text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-medium'>
						Application Engineer
					</p>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight leading-none'>
						John McWhirter
					</h1>
					<p className='text-muted-foreground text-base md:text-lg leading-snug max-w-xl'>
						{content}
					</p>
				</div>

				<div className='flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 justify-center md:justify-start'>
					{certifications.map((cert) => (
						<a
							key={cert.name}
							href={cert.href}
							target='_blank'
							rel='noopener noreferrer'
							className='group inline-flex items-center gap-2.5 rounded-lg border-2 border-primary px-2.5 py-2 hover:bg-primary/5 transition-colors'
						>
							<Image
								src={cert.image}
								alt=''
								width={36}
								height={36}
								className='w-9 h-9 object-contain shrink-0'
							/>
							<span className='text-left min-w-0'>
								<span className='block text-sm font-semibold leading-tight group-hover:text-primary transition-colors'>
									{cert.name}
								</span>
								{cert.detail ? (
									<span className='block text-xs text-muted-foreground'>{cert.detail}</span>
								) : null}
							</span>
						</a>
					))}
				</div>

				<p className='text-sm text-muted-foreground font-medium tracking-wide'>
					{skills.join(' · ')}
				</p>
			</div>
		</motion.div>
	);
};

export default About;
