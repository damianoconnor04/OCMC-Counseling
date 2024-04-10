import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import Blob from '@/components/assets/blob';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="relative h-[calc(100vh-56px)]">
			<section className="container mx-auto flex min-h-full max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">

				<h1 className="text-center text-3xl font-bold tracking-tighter md:text-6xl md:leading-[1.15]">Bianca O&apos;Connor McDermott</h1>
				<span className="max-w-[750px] text-center text-lg text-muted-foreground md:text-2xl">Mental health and aging professional providing psychotherapy by telehealth in Pennsylvania.</span>

				<div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
					<Button asChild>
						<Link href="https://provider.growtherapy.com/book-appointment?id=4054&insuranceType=Cash&ref=grow&state=Pennsylvania&setting=Virtual" target="_blank">
							Book now
						</Link>
					</Button>
					<Button variant="outline" asChild>
						<Link href="/services" aria-label="Services I offer">
							Learn More
						</Link>
					</Button>
				</div>

			</section>

			<Image priority quality={60} src="/noise.webp" alt="background noise" fill aria-hidden className="pointer-events-none object-cover opacity-75" />
			<Blob className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 -translate-x-2/3 opacity-25" />
			<span className="absolute bottom-4 right-4 text-sm text-muted-foreground">&copy; 2024 OCMC Counseling</span>

		</main>

	)
}
