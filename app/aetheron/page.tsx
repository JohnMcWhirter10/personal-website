import Link from 'next/link';
import PrivacyPolicy from './privacy_policy.mdx';

export default function AetheronPage() {
	return (
		<div className='min-h-screen bg-background'>
			{/* Header with "My webpage" link */}
			<header className='p-4'>
				<Link
					href='/'
					className='inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium'
				>
					← My webpage
				</Link>
			</header>

			{/* Main content area */}
			<main className='container mx-auto px-4 py-8 max-w-4xl'>
				<div className='prose prose-lg max-w-none'>
					<PrivacyPolicy />
				</div>
			</main>
		</div>
	);
}
