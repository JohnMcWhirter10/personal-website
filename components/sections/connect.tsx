'use client';
import { useEffect, useRef, useState } from 'react';
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { create } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion, useAnimation, useInView } from 'framer-motion';
import { SectionContentProps } from '@/lib/types';

const ContactSchema = z.object({
	name: z.string().trim().min(1, 'Name is required').max(15, 'Max 15 characters'),
	email: z.string().trim().min(1, 'Email is required').email('Invalid email'),
	message: z.string().trim().min(1, 'Message is required').max(200, 'Max 200 characters'),
});

const Connect = ({ content }: SectionContentProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const controls = useAnimation();
	const [formSubmitted, setFormSubmitted] = useState('');
	const form = useForm({
		resolver: zodResolver(ContactSchema),
		defaultValues: { name: '', email: '', message: '' },
	});

	useEffect(() => {
		if (isInView) controls.start('visible');
		else controls.start('hidden');
	}, [isInView, controls]);

	const onSubmit = async (values: { name: string; email: string; message: string }) => {
		try {
			const formData = new FormData();
			formData.append('name', values.name);
			formData.append('email', values.email);
			formData.append('message', values.message);
			await create(formData);
			setFormSubmitted(values.name);
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	};

	return (
		<div ref={ref} className='w-full'>
			<motion.div
				initial='hidden'
				animate={controls}
				variants={{
					hidden: { opacity: 0, y: 30 },
					visible: { opacity: 1, y: 0 },
				}}
				transition={{ duration: 0.8 }}
			>
				<Card>
					<CardHeader>
						<CardDescription>
							{[
								{
									href: 'https://www.linkedin.com/in/johnbreamcwhirter/',
									icon: LinkedinIcon,
								},
								{
									href: 'https://www.instagram.com/itsjohnbrea/',
									icon: InstagramIcon,
								},
								{
									href: 'https://github.com/JohnMcWhirter10',
									icon: GithubIcon,
								},
							].map(({ href, icon: Icon }, idx) => (
								<Button key={idx} asChild variant='outline'>
									<Link href={href} target='_blank'>
										<Icon size={24} />
									</Link>
								</Button>
							))}
						</CardDescription>
					</CardHeader>
					<CardContent>
						{formSubmitted ? (
							<motion.div className='flex items-center justify-center gap-2 text-lg text-green-600'>
								<MailIcon size={28} /> Thank you, {formSubmitted}! I'll be in touch.
							</motion.div>
						) : (
							<Form {...form}>
								<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
									{['name', 'email', 'message'].map((field) => (
										<FormField
											key={field}
											control={form.control}
											name={field as 'name' | 'email' | 'message'}
											render={({ field }) => (
												<FormItem>
													<FormLabel className='text-lg font-medium'>
														{field.name.charAt(0).toUpperCase() + field.name.slice(1)}
													</FormLabel>
													<FormControl>
														{field.name === 'message' ? (
															<Textarea
																{...field}
																rows={4}
																placeholder='Your Message'
																maxLength={200}
															/>
														) : (
															<Input
																{...field}
																placeholder={`Your ${
																	field.name.charAt(0).toUpperCase() +
																	field.name.slice(1)
																}`}
															/>
														)}
													</FormControl>
													<FormMessage className='text-right text-sm text-red-500' />
												</FormItem>
											)}
										/>
									))}
									<Button
										type='submit'
										className='w-full py-2 text-lg font-semibold bg-accent hover:bg-accent/90 text-white '
									>
										Submit
									</Button>
								</form>
							</Form>
						)}
					</CardContent>
				</Card>
			</motion.div>
		</div>
	);
};

export default Connect;
