import React from "react"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function NavItem({ children, className, title, href }: { children: React.ReactNode, className?: string, title: string, href: string }) {
	return (
		<li className="row-span-1">
			<NavigationMenuLink asChild>
				<Link
					href={href}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	)
}
