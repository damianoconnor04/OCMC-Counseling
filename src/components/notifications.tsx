import React from 'react'
import {
	Drawer,
	DrawerContent,
	DrawerTrigger,
} from "@/components/ui/drawer"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
import { PiBell } from 'react-icons/pi'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import YoutubeEmbed from './youtube-embed'

const upcomingEvents = [
	{
		title: "OC87 Recovery",
		description: "I was recently featured in the OC87 Recovery Diaries project. Click here to check it out.",
		embedId: "https://www.youtube-nocookie.com/embed/Xa63-UHfIm0?si=nxaIuR6Ey0LVEHVS",
	}
]

export default function Notifications() {
	const [open, setOpen] = React.useState<boolean>(false);

	return (
		<>
			<div className="hidden md:block">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" size="icon" className="border-none bg-transparent shadow-none">
							<PiBell className="h-[1.2rem] w-[1.2rem]" />
							<span className="sr-only">Notifications and upcoming events</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<Tabs defaultValue="upcoming" className="w-[400px]">
							<TabsList className="grid w-full grid-cols-2">
								<TabsTrigger value="upcoming">Upcoming</TabsTrigger>
								<TabsTrigger value="past">Past</TabsTrigger>
							</TabsList>
							<TabsContent value="upcoming">
								{upcomingEvents.map((event, idx) => (
									<Button key={idx} variant="outline" className="text-wrap h-fit w-full flex-col items-start">
										<div className="flex items-center gap-2">
											<div className="relative h-2.5 w-2.5 animate-pulse rounded-full bg-yellow/50 delay-1000">
												<div className="absolute bottom-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 animate-pulse rounded-full bg-yellow" />
											</div>
											<span className="text-left font-semibold tracking-tight">{event.title}</span>
										</div>
										<span className="text-left text-sm leading-tight text-muted-foreground">{event.description}</span>
										<YoutubeEmbed embedId={event.embedId} className="min-h-60 w-full py-1" />
									</Button>
								))}
							</TabsContent>
						</Tabs>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

			<div className="md:hidden">
				<Drawer open={open} onOpenChange={setOpen}>
					<DrawerTrigger asChild>
						<Button variant="outline" size="icon" className="border-none bg-transparent shadow-none">
							<PiBell className="h-[1.2rem] w-[1.2rem]" />
							<span className="sr-only">Notifications and upcoming events</span>
						</Button>
					</DrawerTrigger>
					<DrawerContent>
						<div className="my-4 space-y-2">
							<span className="px-2 text-xs font-bold text-muted-foreground">Upcoming</span>
							{upcomingEvents.map((event, idx) => (
								<Button key={idx} variant="outline" className="text-wrap h-fit w-full flex-col items-start rounded-none border-x-0">
									<div className="flex items-center gap-2">
										<div className="relative h-2.5 w-2.5 animate-pulse rounded-full bg-yellow/50 delay-1000">
											<div className="absolute bottom-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 animate-pulse rounded-full bg-yellow" />
										</div>
										<span className="text-left font-semibold tracking-tight">{event.title}</span>
									</div>
									<span className="text-left text-sm leading-tight text-muted-foreground">{event.description}</span>
									<YoutubeEmbed embedId={event.embedId} className="w-full py-1" />
								</Button>
							))}
							<span className="px-2 text-xs font-bold text-muted-foreground">Past</span>
							{/* TODO: past notifications */}
						</div>
					</DrawerContent>
				</Drawer>
			</div>
		</>
	)
}

