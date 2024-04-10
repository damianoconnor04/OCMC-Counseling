"use client";
import React from 'react'
import { IoIosHelpCircleOutline } from 'react-icons/io'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CtaHeader() {
	return (
		<div className="mb-6 flex w-full items-center justify-between">
			<h1 className="text-left text-xl font-bold tracking-tighter md:text-3xl md:leading-[1.15]">Services</h1>
			<TooltipProvider>
				<Tooltip delayDuration={300}>
					<TooltipTrigger asChild>
						<Button variant="ghost" size="icon" className="cursor-default" aria-label="additional service offerings popup">
							<IoIosHelpCircleOutline className="text-2xl" />
						</Button>
					</TooltipTrigger>
					<TooltipContent>
						<p className="max-w-[45ch] text-center">This list is not exhaustive; feel free to <Link href="/contact" className="text-secondary underline underline-offset-2">contact me</Link> to figure out if my skillset is the right fit for you.</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>

	)
}
