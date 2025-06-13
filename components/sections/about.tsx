import type { SectionContentProps } from '@/lib/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { VerticalTextSlider } from '../vertical-text-slider';
import Headshot from '@/assets/images/AMCHeadshot.png';

const About = ({ content }: SectionContentProps) => {
	return (
		<div className='flex flex-col items-center gap-8 w-full max-w-4xl mx-auto'>
			<div className='flex flex-col md:flex-row w-full gap-8 items-center justify-between'>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className='md:w-[38%] w-full flex justify-center'
				>
					<div className='relative w-full max-w-[380px] flex justify-center md:justify-start'>
						<div className='relative w-64 md:w-full aspect-3/4 rounded-lg overflow-hidden border-2 border-primary'>
							<Image
								src={Headshot}
								alt='John McWhirter'
								fill
								className='object-cover'
								priority
								sizes='(max-width: 768px) 256px, (max-width: 1024px) 320px, 480px'
							/>
						</div>
					</div>
				</motion.div>

				<motion.div
					className='md:w-[58%] w-full flex flex-col gap-6'
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div className='flex items-center justify-center md:justify-start text-xl md:text-3xl font-bold'>
						<span className='mr-2'>I&apos;m a</span>
						<VerticalTextSlider
							words={[
								'Software Engineer',
								'Web Developer',
								'UI/UX Designer',
								'Front-End Developer',
								'Tech Enthusiast',
							]}
						/>
					</div>

					<Card className='border-2 border-primary shadow-xs bg-card/80 backdrop-blur-xs'>
						<CardContent className='p-6'>
							<p className='text-lg leading-relaxed'>{content}</p>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
