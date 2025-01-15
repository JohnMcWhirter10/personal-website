'use client';
import { useTheme } from 'next-themes';

const VercelIcon = ({ size }: { size: number }) => {
    const { resolvedTheme } = useTheme();
    return (
        <svg
            aria-label="Vercel logomark"
            height={size}
            role="img"
            viewBox="0 0 100 100"
        >
            <circle
                cx="50%"
                cy="50%"
                r="50%"
                fill={resolvedTheme === 'dark' ? 'black' : 'white'}
            />
            <path
                d="M 50 20 L 80 70 L 20 70 Z"
                fill={resolvedTheme === 'dark' ? 'white' : 'black'}
            />
        </svg>
    );
};

export default VercelIcon;
