import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children }) => <h1 className='text-3xl font-bold mb-6 text-foreground'>{children}</h1>,
		h2: ({ children }) => <h2 className='text-2xl font-semibold mb-4 text-foreground'>{children}</h2>,
		h3: ({ children }) => <h3 className='text-xl font-semibold mb-3 text-foreground'>{children}</h3>,
		p: ({ children }) => <p className='mb-4 text-muted-foreground leading-relaxed'>{children}</p>,
		ul: ({ children }) => (
			<ul className='list-disc list-inside mb-4 text-muted-foreground space-y-2'>{children}</ul>
		),
		ol: ({ children }) => (
			<ol className='list-decimal list-inside mb-4 text-muted-foreground space-y-2'>{children}</ol>
		),
		li: ({ children }) => <li className='text-muted-foreground'>{children}</li>,
		strong: ({ children }) => <strong className='font-semibold text-foreground'>{children}</strong>,
		em: ({ children }) => <em className='italic text-foreground'>{children}</em>,
		blockquote: ({ children }) => (
			<blockquote className='border-l-4 border-primary pl-4 py-2 mb-4 italic text-muted-foreground bg-muted/20 rounded-r'>
				{children}
			</blockquote>
		),
		code: ({ children }) => (
			<code className='bg-muted px-2 py-1 rounded text-sm font-mono text-foreground'>{children}</code>
		),
		pre: ({ children }) => <pre className='bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm'>{children}</pre>,
		...components,
	};
}
