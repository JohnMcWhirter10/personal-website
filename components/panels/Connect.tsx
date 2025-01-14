import { motion, useAnimation, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import {
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
} from 'lucide-react';

import { useForm } from 'react-hook-form';
import Link from 'next/link';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const ContactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, { message: 'Name is Required' })
        .max(15, 'Name must be less than 15 characters'),
    email: z
        .string()
        .trim()
        .min(1, { message: 'Email is required' })
        .email({ message: "Ummm... that's not an email" }),
    message: z
        .string()
        .trim()
        .min(1, { message: 'Message is required' })
        .max(200, { message: 'Message cannot be more than 200 characters' }),
});

const Connect = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();
    const [formSubmitted, setFormSubmitted] = useState('');

    const form = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [isInView, controls]);

    const onSubmit = (values: z.infer<typeof ContactSchema>) => {
        setFormSubmitted(values.name);
    };

    return (
        <div ref={ref} className="flex flex-wrap w-full mt-10">
            <motion.div
                className="text-foreground text-xl w-full leading-8 text-justify"
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
                transition={{
                    duration: 0.8,
                }}
            >
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="font-oswald text-6xl mb-10 text-primary text-left">
                            <motion.h1
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                    },
                                    hidden: {
                                        opacity: 0,
                                        y: -25,
                                    },
                                }}
                                initial={'hidden'}
                                animate={controls}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                }}
                                className="origin-bottom-left"
                            >
                                Connect With Me!
                            </motion.h1>
                        </CardTitle>
                        <CardDescription className="flex gap-8">
                            <Button
                                asChild
                                className="border-foreground border-2 bg-background text-foreground hover:bg-foreground/25"
                            >
                                <Link
                                    target="_blank"
                                    href="https://www.linkedin.com/in/johnbreamcwhirter/"
                                >
                                    <LinkedinIcon />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                className="border-foreground border-2 bg-background text-foreground hover:bg-foreground/25"
                            >
                                <Link
                                    target="_blank"
                                    href="https://www.instagram.com/itsjohnbrea/"
                                >
                                    <InstagramIcon />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                className="border-foreground border-2 bg-background text-foreground hover:bg-foreground/25"
                            >
                                <Link
                                    target="_blank"
                                    href="https://github.com/JohnMcWhirter10"
                                >
                                    <GithubIcon />
                                </Link>
                            </Button>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="font-workSans">
                        <div className="inline-grid w-full">
                            <motion.div
                                initial={'hidden'}
                                className="col-start-1 row-start-1 flex flex-nowrap"
                                animate={formSubmitted ? 'visible' : 'hidden'}
                                variants={{
                                    hidden: { opacity: 0, z: -1 },
                                    visible: { opacity: 1, z: 1 },
                                }}
                                transition={{ duration: 0.8 }}
                            >
                                <MailIcon size={32} className="mx-2" />
                                Thank you for reaching out, {formSubmitted}!
                                I&apos;ll be in touch.{' '}
                            </motion.div>
                            <motion.div
                                initial={'visible'}
                                className="col-start-1 row-start-1 origin-center"
                                exit={'hidden'}
                                animate={formSubmitted ? 'hidden' : 'visible'}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        scale: 0,
                                        height: 0,
                                        z: -1,
                                    },
                                    visible: { opacity: 1, scale: 1, z: 1 },
                                }}
                                transition={{ duration: 0.8 }}
                            >
                                <Form {...form}>
                                    <form
                                        onSubmit={form.handleSubmit(onSubmit)}
                                        className="flex flex-col gap-4"
                                    >
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-semibold text-lg">
                                                        Name
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Your Name"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-right" />
                                                </FormItem>
                                            )}
                                        />
                                        {/* Email Field */}
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-semibold text-lg">
                                                        Email
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Your Email"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage className="text-right" />
                                                </FormItem>
                                            )}
                                        />
                                        {/* Message Field */}
                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => {
                                                const count =
                                                    field.value.length;

                                                return (
                                                    <FormItem>
                                                        <FormLabel className="font-semibold text-lg">
                                                            Message
                                                        </FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                rows={4}
                                                                placeholder="Your Message"
                                                                maxLength={200}
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormDescription
                                                            className={`text-right ${
                                                                count <= 180
                                                                    ? 'text-green-400'
                                                                    : count <
                                                                        200
                                                                      ? 'text-yellow-400'
                                                                      : 'text-destructive'
                                                            }`}
                                                        >
                                                            {count} of 200
                                                        </FormDescription>
                                                        <FormMessage className="text-right" />
                                                    </FormItem>
                                                );
                                            }}
                                        />
                                        <Button
                                            type="submit"
                                            disabled={
                                                !(
                                                    form.formState.errors
                                                        .name === undefined &&
                                                    form.formState.errors
                                                        .email === undefined &&
                                                    form.formState.errors
                                                        .message === undefined
                                                )
                                            }
                                            className="w-1/5 self-end mt-4"
                                        >
                                            Submit
                                        </Button>
                                    </form>
                                </Form>
                            </motion.div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default Connect;
