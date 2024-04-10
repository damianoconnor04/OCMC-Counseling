import React from 'react'
import { IoIosHelpCircleOutline } from 'react-icons/io'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import PageHeader from '@/components/page-header';
import Cta from '@/components/cta';
import { services } from './_content'
import ShareBtn from '@/components/share-btn';
import { Paragraph, ParagraphContent, ParagraphHeader, ParagraphSeparator } from '@/components/paragraph';

export default function Services() {
    return (
        <main className="relative min-h-[calc(100vh-56px)]">
            <section className="container mx-auto flex max-w-[980px] flex-col items-center gap-2 py-6 md:py-8 md:pb-6 lg:py-12 lg:pb-10">

                <PageHeader title="Services">
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
                </PageHeader>

                <Cta />

                {services.map((service, idx) => (
                    <Paragraph key={idx} id={service.id}>
                        <ParagraphHeader title={service.title}>
                            <ShareBtn content={`/services#${service.id}`} title={service.title} />
                        </ParagraphHeader>
                        <ParagraphSeparator />
                        <ParagraphContent content={service.description} />
                    </Paragraph>
                ))}

            </section>
        </main>
    )
}
