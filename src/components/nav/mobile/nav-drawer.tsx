import React from 'react'
import {
	Drawer,
	DrawerContent,
	DrawerFooter,
	DrawerTrigger,
} from "@/components/ui/drawer"
import { ArrowRightIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { pages } from '../_content';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Search from '../search';


export default function NavDrawer() {
	const [open, setOpen] = React.useState<boolean>(false);

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button variant="outline" size="icon" className="border-none bg-transparent shadow-none">
					<HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem]" />
					<span className="sr-only">Open navigation menu</span>
				</Button>
			</DrawerTrigger>

			<DrawerContent>
				<nav className="mt-4">
					{pages.map((page, idx) => (
						<Button onClick={() => setOpen(false)} asChild variant="outline" key={idx} className={cn("h-14 w-full gap-1 rounded-none border-x-0 border-t-0 shadow-none", idx === 0 ? "border-t" : idx !== pages.length - 1 ? "border-b" : "")}>
							<Link href={page.href} >
								{page.label}
								<ArrowRightIcon className="text-lg" />
							</Link>
						</Button>
					))}
				</nav>

				<DrawerFooter>
					<Search pages={pages} />
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
