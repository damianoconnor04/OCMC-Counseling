import React from 'react'
import Link from 'next/link';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { BsFillDoorOpenFill } from 'react-icons/bs';

export default function Cta() {
	return (
		<ScrollArea className="container mb-4 px-0 md:mb-8 lg:mb-12">
			<nav className="flex items-center gap-4  md:gap-8 pb-2 md:pb-4">
				{cards.map((card, idx) => (
					<Link key={idx} href={card.href} className="max-w-[calc(100vw-100px)] focus-visible:yellow-ring focus-visible:outline-none group flex h-40 max-h-40 shrink-0 flex-col justify-between overflow-hidden rounded-xl border bg-background p-4 transition-colors duration-200 ease-in-out hover:bg-primary/5 md:w-[40ch] md:max-w-[40ch]">
						{card.content}
					</Link>
				))}
				<ScrollBar orientation="horizontal" />
			</nav>
		</ScrollArea>
	)

}

const cards = [
	{
		href: "#transitions",
		content:
			<>
				<div className="relative mb-2 h-14">
					<div className="absolute left-8 top-7 aspect-square w-7 -translate-y-5 rounded-full bg-primary/60 transition duration-200 ease-in-out group-hover:translate-x-3 group-hover:bg-yellow/60" />
					<div className="absolute -left-0.5 top-6 aspect-square w-7 -translate-y-3 rounded-full bg-background transition duration-200 ease-in-out group-hover:translate-x-1 group-hover:bg-yellow/60" />
					<div className="absolute grid aspect-square w-12 place-items-center rounded-full border-[3px] border-background/90 bg-border text-border transition duration-200 ease-in-out group-hover:translate-x-3 group-hover:bg-yellow group-hover:text-background">
						<BsFillDoorOpenFill className="text-xl" />
					</div>
				</div>
				<div className="flex flex-col">
					<span className="font-light text-primary">Life Transitions</span>
					<p className="max-w-[40ch] text-sm font-light text-primary/80"> Have you changed careers, reprioritized your work/life balance, or retired? </p>
				</div>
			</>
	},

	{
		href: "#caregivers",
		content:
			<>
				<div className="group mb-2 flex h-auto w-[2.75rem] flex-wrap gap-1">
					<div className="h-4 w-4 rounded-md bg-primary/60 transition-all duration-200 ease-in-out group-hover:w-6 group-hover:bg-blue/50" />
					<div className="h-4 w-6 rounded-md bg-border transition-all duration-200 ease-in-out group-hover:w-4 group-hover:bg-blue" />
					<div className="h-6 w-2 rounded-md bg-border transition-all duration-200 ease-in-out group-hover:w-8 group-hover:bg-blue" />
					<div className="h-6 w-8 rounded-md bg-primary/60 transition-all duration-200 ease-in-out group-hover:w-2 group-hover:bg-blue/50" />
				</div>
				<div className="flex flex-col">
					<span className="font-light text-primary">Caregivers &amp; Recipients</span>
					<p className="max-w-[40ch] text-sm font-light text-primary/80">Whether you care for a loved one or need care yourself, changing roles can be overwhelming.</p>
				</div>
			</>

	},


	{
		href: "#depression",
		content:
			<>
				<div className="group relative mb-2 flex w-[2.75rem] flex-wrap gap-1">
					<div className="h-9 w-7 rounded-md bg-border" />
				</div>
				<div className="flex flex-col">
					<span className="font-light text-primary">Depression &amp; Anxiety</span>
					<p className="max-w-[40ch] text-sm font-light text-primary/80">If your mood is getting in the way of you living your life the way you want to, therapy can help.</p>
				</div>
			</>
	},


	{
		href: "#education",
		content:
			<>
				<div className="group relative mb-2 flex w-[2.75rem] flex-wrap gap-1">
					<div className="h-9 w-7 rounded-md bg-border" />
				</div>
				<div className="flex flex-col">
					<span className="font-light text-primary">Community Education</span>
					<p className="max-w-[40ch] text-sm font-light text-primary/80">I provide education in brief presentations designed for older adults and their caregivers.</p>
				</div>
			</>
	}
]
