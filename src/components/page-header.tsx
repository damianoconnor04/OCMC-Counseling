import { cn } from '@/lib/utils'
import React from 'react'

type PageHeaderProps = {
	title: string,
	children?: React.ReactNode,
	className?: string,
}
export default function PageHeader({ title, children, className }: PageHeaderProps) {
	return (
		<div className={cn("mb-6 flex w-full items-center justify-between", className)}>
			<h1 className="text-2xl font-bold tracking-tighter md:text-3xl">{title}</h1>
			{children}
		</div>
	)
}
