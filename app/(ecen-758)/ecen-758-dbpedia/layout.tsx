import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'ECEN758 DBpedia Classification Project',
	description:
		'Text classification research project comparing DistilBERT transformer model with TF-IDF + SVM baseline on the DBpedia 14-class ontology dataset.',
	keywords: [
		'text classification',
		'natural language processing',
		'DistilBERT',
		'TF-IDF',
		'SVM',
		'machine learning',
		'DBpedia',
		'LIME',
		'transformer models',
	],
};

export default function DBpediaLayout({ children }: { children: React.ReactNode }) {
	return <div className='min-h-screen bg-background text-foreground'>{children}</div>;
}

