import React from 'react'
import { Button } from '@/components/ui/button';
import { CiPhone, CiMail } from 'react-icons/ci'
import Link from 'next/link';
import { EMAIL, PHONE_NUMBER } from '@/components/content';

export default function ContactInfo() {
    return (
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
    )
}
