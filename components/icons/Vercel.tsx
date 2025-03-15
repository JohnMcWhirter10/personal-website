'use client';

const VercelIcon = ({ size }: { size: number }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 128 128'>
			<circle cx='64' cy='64' r='64' fill='black' />
			<path d='M64 36L102 100H26L64 36Z' fill='white' />
		</svg>
	);
};

export default VercelIcon;
