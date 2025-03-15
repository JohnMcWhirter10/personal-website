'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
	return (
		<div className='h-screen w-full flex flex-col items-center justify-center p-4'>
			<motion.div
				className='max-w-md w-full space-y-8 text-center'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.7 }}
					className='flex items-center justify-center'
				>
					<div className='relative text-9xl font-bold text-primary'>
						<span className='absolute -inset-1 blur-lg opacity-30'>404</span>
						404
					</div>
				</motion.div>

				<h1 className='text-3xl font-bold mt-6'>Page Not Found</h1>
				<p className='text-lg text-muted-foreground mt-2'>
					Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
				</p>

				<div className='flex items-center justify-center gap-4 mt-8'>
					<Button asChild variant='outline' className='gap-2'>
						<Link href='/'>
							<ArrowLeft size={16} /> Go Back
						</Link>
					</Button>
					<Button asChild className='gap-2'>
						<Link href='/'>
							<Home size={16} /> Home Page
						</Link>
					</Button>
				</div>
			</motion.div>
		</div>
	);
}
