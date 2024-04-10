import Image from 'next/image'
import React from 'react'
import bianca from '../../../public/bianca.jpeg'
import PsychologyTodayBadge from '@/components/pt-badge'
import { Label } from '@/components/ui/label'
import AboutContent from './_components/about-content'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { PiPottedPlantFill } from 'react-icons/pi'

export default function About() {
    return (
        <main className="relative min-h-[calc(100vh-56px)]">
            <section className="container mx-auto max-w-[980px] items-start py-6 md:py-8 md:pb-6 lg:py-12 lg:pb-10">
                <div className="flex shrink-0 flex-col items-start gap-4">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-left text-xl font-bold tracking-tighter md:text-3xl">About Me</h1>
                        <PsychologyTodayBadge />
                    </div>

                    <div className="flex gap-8">
                        <div className="shrink-0">
                            <Image alt="Image of Bianca O'Connor McDermott" src={bianca} className="w-64 rounded-md border shadow" />
                            <Label className="text-xs text-muted-foreground">An image of Bianca O&apos;Connor McDermott</Label>
                            <div className="flex items-center gap-2">
                                <Link aria-label="Bianca's LinkedIn profile" className="text-muted-foreground transition-colors hover:text-primary" href="https://www.linkedin.com/in/bianca-o-connor-mcdermott-7657576a" target="_blank">
                                    <LinkedInLogoIcon className="h-6 w-6" />
                                </Link>
                                <Link aria-label="Bianca's Grow Therapy profile" className="text-muted-foreground transition-colors hover:text-primary" href="https://growtherapy.com/provider/kc1m44da04vg/bianca-oconnor-mcdermott?state=Pennsylvania" target="_blank">
                                    <PiPottedPlantFill className="h-6 w-6" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <AboutContent />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
