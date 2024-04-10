"use client"
import React from 'react'
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { cn } from '@/lib/utils';
import Notifications from './notifications';
import Search from './search';
import { pages } from './_content';
import NavDrawer from './mobile/nav-drawer';
import Logo from '../assets/logo';

export default function TopNav() {
	return (
		<header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8">
				<Link aria-label="Home" className="focus-visible:yellow-ring -ml-1 rounded-md p-1 focus-visible:outline-none" href="/">
					<Logo />
				</Link>
				<div className="hidden sm:block">
					<NavigationMenu>
						<NavigationMenuList className="ml-6 flex items-center text-sm lg:gap-2">
							{pages.slice(1).map((page, idx) => (
								<NavigationMenuItem key={idx}>
									{page.content
										? page.content
										: <Link href={page.href} className={cn(navigationMenuTriggerStyle(), "focus-visible:yellow-ring px-2 focus-visible:outline-none")}>{page.label}</Link>
									}
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				<div className="flex flex-1 items-center justify-end gap-2">
					<div className="hidden md:block">
						<Search pages={pages} />
					</div>
					<Notifications />
					<ModeToggle />
					<div className="sm:hidden">
						<NavDrawer />
					</div>
				</div>
			</div>
		</header>
	)
}

