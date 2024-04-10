
import React from 'react'
import ContactForm from '@/components/contact-form'
import { Button } from '@/components/ui/button';
import { CiPhone, CiMail } from 'react-icons/ci'
import Link from 'next/link';
import { EMAIL, PHONE_NUMBER } from '@/lib/constants';
import PageHeader from '@/components/page-header'

export default function Contact() {
    return (
        <main className="relative min-h-[calc(100vh-56px)]">
            <section className="container mx-auto flex min-h-full max-w-[980px] flex-col items-center gap-2 py-6 md:py-8 md:pb-6 lg:py-12 lg:pb-10">

                <PageHeader title="Get in touch" className="justify-center" />

                <ContactForm />

                <div className="container absolute bottom-4 left-1/2 w-full max-w-screen-2xl -translate-x-1/2 px-4 md:px-8">
                    <div className="grid w-full grid-rows-2 items-center gap-1 rounded-md border bg-muted p-1 text-center md:grid-cols-2 md:grid-rows-1 md:gap-0">
                        <Button asChild variant="secondary" className="group h-fit gap-1 rounded-md px-4 py-1 text-muted-foreground shadow-none hover:bg-background hover:text-primary md:py-0.5">
                            <Link href="tel:267-818-9609">
                                <CiPhone className="text-lg group-hover:animate-wiggle" />
                                <span className="truncate">{PHONE_NUMBER}</span>
                            </Link>
                        </Button>
                        <Button asChild variant="secondary" className="group h-fit gap-1 rounded-md px-4 py-1 text-muted-foreground shadow-none hover:bg-background hover:text-primary md:py-0.5">
                            <Link href="mailto:bianca@biancaocmccounseling.com">
                                <CiMail className="text-lg group-hover:animate-wiggle" />
                                <span className="truncate">{EMAIL}</span>
                            </Link>
                        </Button>
                    </div>
                </div>

            </section>
        </main>
    )
}
