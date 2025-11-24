import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import Report from './report.mdx';

export default function DBpediaProjectPage() {
	return (
		<div className='min-h-screen bg-background'>
			{/* Header with navigation */}
			<header className='border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10'>
				<div className='container mx-auto px-4 py-4 max-w-4xl'>
					<Link
						href='/'
						className='inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium'
					>
						← Back to Portfolio
					</Link>
				</div>
			</header>

			{/* Main content area with blog post styling */}
			<main className='container mx-auto px-4 py-12 max-w-4xl'>
				{/* Project header */}
				<div className='mb-8'>
					<h1 className='text-4xl md:text-5xl font-bold mb-4 text-foreground font-heading'>
						DBpedia Text Classification with Transformers
					</h1>
					<div className='flex flex-wrap gap-4 text-sm text-muted-foreground mb-6'>
						<span>ECEN758 Final Project</span>
						<span>•</span>
						<span>Fall 2025</span>
						<span>•</span>
						<span>Data Mining and Analysis</span>
					</div>

					{/* Project links */}
					<div className='flex flex-wrap gap-3 mb-8'>
						<a
							href='https://github.com/jmcwhirter1608/ecen-758-project'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium'
						>
							<Github size={18} />
							View on GitHub
						</a>
						<a
							href='/ecen-758-dbpedia/report.pdf'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors font-medium'
						>
							<ExternalLink size={18} />
							Full Report (PDF)
						</a>
					</div>

					{/* Team members */}
					<div className='text-sm text-muted-foreground'>
						<ul className='mt-2 space-y-1 list-none pl-0'>
							<li>
								<span className='text-foreground'>Durgesh Bhirud</span>{' '}
								<a href='mailto:durgeshbhirud@tamu.edu' className='text-primary hover:underline'>
									durgeshbhirud@tamu.edu
								</a>
							</li>
							<li>
								<span className='text-foreground'>Debmalya Chatterjee</span>{' '}
								<a href='mailto:debmalya0132@tamu.edu' className='text-primary hover:underline'>
									debmalya0132@tamu.edu
								</a>
							</li>
							<li>
								<span className='text-foreground'>Thanusri Aenugula</span>{' '}
								<a href='mailto:thanusriaenugula@tamu.edu' className='text-primary hover:underline'>
									thanusriaenugula@tamu.edu
								</a>
							</li>
							<li>
								<span className='text-foreground'>John McWhirter</span>{' '}
								<a href='mailto:jmcwhirter1608@tamu.edu' className='text-primary hover:underline'>
									jmcwhirter1608@tamu.edu
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Blog post content */}
				<article className='prose prose-lg max-w-none blog-post'>
					<Report />
				</article>
			</main>

			{/* Footer */}
			<footer className='border-t border-border mt-16 py-8'>
				<div className='container mx-auto px-4 max-w-4xl text-center text-sm text-muted-foreground'>
					<p>© {new Date().getFullYear()} John McWhirter.</p>
				</div>
			</footer>

			<style
				dangerouslySetInnerHTML={{
					__html: `
				.blog-post {
					color: hsl(var(--foreground));
				}

				.blog-post h2 {
					font-size: 1.875rem;
					font-weight: 700;
					margin-top: 3rem;
					margin-bottom: 1.25rem;
					color: hsl(var(--foreground));
					font-family: var(--font-heading);
					line-height: 1.3;
				}

				.blog-post h3 {
					font-size: 1.5rem;
					font-weight: 600;
					margin-top: 2rem;
					margin-bottom: 1rem;
					color: hsl(var(--foreground));
					font-family: var(--font-heading);
				}

				.blog-post p {
					margin-bottom: 1.25rem;
					line-height: 1.8;
					color: hsl(var(--foreground));
				}

				.blog-post strong {
					font-weight: 600;
					color: hsl(var(--foreground));
				}

				.blog-post a {
					color: hsl(var(--primary));
					text-decoration: underline;
					text-decoration-color: hsl(var(--primary) / 0.3);
					transition: all 0.2s;
				}

				.blog-post a:hover {
					text-decoration-color: hsl(var(--primary));
				}

				.blog-post ul {
					margin-bottom: 1.25rem;
					padding-left: 1.5rem;
					list-style: disc;
				}

				.blog-post li {
					margin-bottom: 0.5rem;
					line-height: 1.7;
				}

				.blog-post figure {
					margin: 2.5rem 0;
				}

				.blog-post figure img {
					width: 100%;
					height: auto;
					border-radius: 0.5rem;
					border: 1px solid hsl(var(--border));
					box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
				}

				.blog-post .lime-figures-container {
					display: flex;
					flex-wrap: wrap;
					gap: 1.5rem;
					margin: 2.5rem 0;
					justify-content: space-between;
				}

				.blog-post .lime-figures-container figure {
					flex: 1 1 calc(50% - 0.75rem);
					margin: 0;
					min-width: 300px;
				}

				.blog-post .lime-figures-container figure img {
					width: 100%;
				}

				.blog-post figcaption {
					margin-top: 0.75rem;
					text-align: center;
					font-size: 0.875rem;
					color: hsl(var(--muted-foreground));
					font-style: italic;
				}

				.blog-post .metrics-grid {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
					gap: 1.5rem;
					margin: 2rem 0;
				}

				.blog-post .metric-card {
					padding: 1.5rem;
					background: hsl(var(--muted) / 0.3);
					border-radius: 0.5rem;
					border: 1px solid hsl(var(--border));
				}

				.blog-post .metric-card .metric-value {
					font-size: 2rem;
					font-weight: 700;
					color: hsl(var(--primary));
					font-family: var(--font-heading);
				}

				.blog-post .metric-card .metric-label {
					margin-top: 0.5rem;
					font-size: 0.875rem;
					color: hsl(var(--muted-foreground));
				}

				.blog-post blockquote {
					border-left: 4px solid hsl(var(--primary));
					padding-left: 1.5rem;
					margin: 2rem 0;
					font-style: italic;
					color: hsl(var(--muted-foreground));
				}

				.blog-post code {
					background: hsl(var(--muted));
					padding: 0.2rem 0.4rem;
					border-radius: 0.25rem;
					font-size: 0.9em;
					font-family: monospace;
				}

				@media (max-width: 768px) {
					.blog-post h2 {
						font-size: 1.5rem;
					}

					.blog-post h3 {
						font-size: 1.25rem;
					}

					.blog-post .metrics-grid {
						grid-template-columns: 1fr;
					}
				}
			`,
				}}
			/>
		</div>
	);
}
