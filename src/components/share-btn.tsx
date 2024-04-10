"use client";
import React from 'react'
import { IoLinkOutline } from "react-icons/io5";
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';

const BASE_URL = "https://biancaocmccounseling.com";

export default function ShareBtn({ content, title }: { content: string, title: string }) {
	const toast = useToast();

	function copyToClipboard() {
		navigator.clipboard.writeText(BASE_URL + content)
			.then(() => {
				toast.toast({
					title: "Success",
					description: `Copied share link to ${title}`
				})
			})
			.catch(() => {
				toast.toast({
					title: "Uh oh! Something went wrong",
					action: <ToastAction onClick={() => copyToClipboard()} altText="Try again">Try again</ToastAction>,
				})
			});
	}

	return (
		<TooltipProvider delayDuration={300}>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button onClick={() => copyToClipboard()} variant="ghost" size="icon" className="!bg-transparent text-primary/60" aria-label={`Copy ${title} to clipboard to share`}>
						<IoLinkOutline className="text-2xl" />
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p className="max-w-[45ch] text-center">Share {title.toLowerCase()}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
