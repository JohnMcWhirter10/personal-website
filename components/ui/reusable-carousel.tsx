'use client';

import type * as React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface ReusableCarouselProps {
	items: React.ReactNode[];
	itemClassName?: string;
	carouselClassName?: string;
}

export function ReusableCarousel({ items, itemClassName, carouselClassName }: ReusableCarouselProps) {
	return (
		<Carousel className={cn('w-full border-y-[1px] py-2', carouselClassName)}>
			<CarouselContent className='items-center'>
				{items.map((item, index) => (
					<CarouselItem key={index} className={cn('sm:basis-1/2 lg:basis-1/3', itemClassName)}>
						{item}
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
