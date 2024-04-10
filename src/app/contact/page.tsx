
import React from 'react'
import ContactForm from './_components/form'
import ContactInfo from './_components/contact-info'

export default function Contact() {
    return (
        <main className="relative min-h-[calc(100vh-56px)]">
            <section className="container mx-auto flex min-h-full max-w-[980px] flex-col items-center gap-2 py-6 md:py-8 md:pb-6 lg:py-12 lg:pb-10">
                <h1 className="text-left text-xl font-bold tracking-tighter md:text-3xl md:leading-[1.15]">Get in touch</h1>
                <ContactForm />
                <div className="container absolute bottom-4 left-1/2 w-full max-w-screen-2xl -translate-x-1/2 px-4 md:px-8">
                    <ContactInfo />
                </div>
            </section>
        </main>
    )
}
