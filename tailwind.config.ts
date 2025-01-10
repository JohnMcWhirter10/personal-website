import type { Config } from 'tailwindcss';

const generateColorConfig = (keys: string[]) =>
    keys.reduce(
        (acc, key) => {
            acc[key] = `hsl(var(--${key}))`;
            acc[`${key}-foreground`] = `hsl(var(--${key}-foreground))`;
            return acc;
        },
        {} as Record<string, string>
    );

const generateTextShadowConfig = (keys: string[]) =>
    keys.reduce(
        (acc, key) => {
            acc[key] =
                `0 0 2px hsl(var(--${key})), 0 0 2px hsl(var(--${key})), 0 0 5px hsl(var(--${key}))`;
            acc[`${key}-foreground`] =
                `0 0 2px hsl(var(--${key}-foreground)), 0 0 2px hsl(var(--${key}-foreground)), 0 0 5px hsl(var(--${key}-foreground))`;
            return acc;
        },
        {} as Record<string, string>
    );

const colorKeys = [
    'background',
    'foreground',
    'card',
    'popover',
    'primary',
    'secondary',
    'muted',
    'accent',
    'destructive',
    'border',
    'input',
    'ring',
    'chart-1',
    'chart-2',
    'chart-3',
    'chart-4',
    'chart-5',
];

const config: Config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                georgia: ['Georgia', 'Times New Roman', 'serif'],
                oswald: ['var(--font-oswald)'],
                openSans: ['var(--font-openSans)'],
                workSans: ['var(--font-workSans)'],
            },
            colors: generateColorConfig(colorKeys),
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            textShadow: generateTextShadowConfig(colorKeys),
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        function ({
            addUtilities,
            theme,
        }: {
            addUtilities: (utilities: Record<string, any>) => void;
            theme: (key: string) => any;
        }) {
            const textShadow = theme('textShadow') as Record<string, string>;
            const newUtilities = Object.keys(textShadow).reduce(
                (acc, key) => {
                    acc[`.text-glow-${key}`] = { textShadow: textShadow[key] };
                    return acc;
                },
                {} as Record<string, { textShadow: string }>
            );
            addUtilities(newUtilities);
        },
    ],
};

export default config;
