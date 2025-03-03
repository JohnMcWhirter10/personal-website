import { SectionContentProps } from '@/lib/types';
import { VerticalTextSlider } from '../vertical-text-slider';

const About = ({ content }: SectionContentProps) => {
	return (
		<div className=' flex flex-col items-center gap-4'>
			<div className='flex items-center justify-center text-3xl font-bold'>
				<VerticalTextSlider
					words={[
						'Software Engineer',
						'Software Developer',
						'Code Wizard',
						'Tech Enthusiast',
						'UI/UX Designer',
					]}
				/>
			</div>
			<p className='text-lg'>{content}</p>
		</div>
	);
};

export default About;
