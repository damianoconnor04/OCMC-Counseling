import React from 'react'
import { cards } from './cta-cards'
import Link from 'next/link';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function Cta() {
	return (
		<ScrollArea className="container mb-4 px-0 md:mb-8 lg:mb-12">
			<nav className="flex items-center gap-8 pb-2 md:pb-4">
				{cards.map((card, idx) => (
					<Link key={idx} href={card.href} className="max-w-screen group flex h-40 max-h-40 shrink-0 flex-col justify-between overflow-hidden rounded-xl border bg-background p-4 transition-colors duration-200 ease-in-out hover:bg-primary/5 md:w-[40ch] md:max-w-[40ch]">
						{card.content}
					</Link>
				))}
				<ScrollBar orientation="horizontal" />
			</nav>
		</ScrollArea>
	)

}
