import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Aetheron - Privacy Policy',
	description: 'Privacy Policy for Aetheron mobile application',
};

export default function AetheronLayout({ children }: { children: React.ReactNode }) {
	return <div className='min-h-screen bg-background text-foreground'>{children}</div>;
}
