import Image from 'next/image'
import React from 'react'
import bianca from '../../../public/bianca.jpeg'
import PsychologyTodayBadge from '@/components/assets/pt-badge'
import { Label } from '@/components/ui/label'
import { items } from './_content'
import { Paragraph, ParagraphContent, ParagraphHeader, ParagraphSeparator } from '@/components/paragraph'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { PiPottedPlantFill } from 'react-icons/pi'
import PageHeader from '@/components/page-header'

export default function About() {
    return (
        <main className="relative min-h-[calc(100vh-56px)]">
            <section className="container mx-auto max-w-[980px] py-6 md:py-8 md:pb-6 lg:py-12 lg:pb-10">
                <PageHeader className="relative" title="About Me">
                    <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2"><PsychologyTodayBadge /></span>
                </PageHeader>

                <div className="flex flex-col gap-8 md:flex-row">
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
                        {items.map((item, idx) => (
                            <Paragraph key={idx} id={item.id}>
                                <ParagraphHeader title={item.title} />
                                <ParagraphSeparator />
                                <ParagraphContent content={item.description} />
                            </Paragraph>
                        ))}
                        <span className="md:hidden"><PsychologyTodayBadge /></span>
                    </div>
                </div>
            </section>
        </main>
    )
}
