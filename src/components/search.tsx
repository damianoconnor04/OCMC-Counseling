"use client";
import React from 'react'
import { CommandEmpty, CommandInput, CommandItem, CommandList, CommandGroup, CommandDialog } from './ui/command';
import { Button } from './ui/button';
import Link from 'next/link';
import { Page, resources } from './nav/_content';
import { EMAIL, PHONE_NUMBER } from '@/lib/constants';
import { CiMail, CiPhone } from 'react-icons/ci';

export default function Search({ pages }: { pages: Page[] }) {
	const [open, setOpen] = React.useState(false)

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen((open) => !open)
			}
		}

		document.addEventListener("keydown", down)
		return () => document.removeEventListener("keydown", down)
	}, [])

	return (
		<>
			<Button onClick={() => setOpen(true)} variant="outline" size="sm" className="relative justify-start text-sm font-normal text-muted-foreground hover:text-foreground md:w-40 lg:w-60">
				Search...
				<kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"><span className="text-xs">⌘</span>K</kbd>
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput className="h-12" placeholder="Search..." />
				<CommandList className="p-3 md:max-h-[300px] max-h-full">
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Pages">
						{pages.map((page, idx) => (
							<CommandItem key={idx} asChild>
								<Link href={page.href} onClick={() => setOpen(false)}>
									{React.createElement(page.icon, { className: "mr-2 h-4 w-4" })}
									<span>{page.label}</span>
								</Link>
							</CommandItem>
						))}
					</CommandGroup>

					<CommandGroup heading="Connect now">
						<CommandItem value="email address contact" asChild>
							<Link href={`mailto:${EMAIL}`}>
								<CiMail className="mr-2 h-4 w-4" />
								{EMAIL}
							</Link>
						</CommandItem>
						<CommandItem value="phone number contact" asChild>
							<Link href={`tel:${PHONE_NUMBER}`}>
								<CiPhone className="mr-2 h-4 w-4" />
								{PHONE_NUMBER}
							</Link>
						</CommandItem>
					</CommandGroup>


					<CommandGroup heading="Resources">
						{resources.map((resource, idx) => (
							<CommandItem key={idx} asChild>
								<Link href={resource.href} onClick={() => setOpen(false)}>
									<span>{resource.label}</span>
								</Link>
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
                <div onClick={() => setOpen(false)} className="grow" />
			</CommandDialog>
		</>
	)
}
