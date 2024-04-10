import React from 'react'
import CtaHeader from './_components/cta/cta-header'
import Cta from './_components/cta/cta'
import ServicesContent from './_components/content/services-content'

export default function Services() {
  return (
    <main className="relative min-h-[calc(100vh-56px)]">
      <section className="container mx-auto flex max-w-[980px] flex-col items-center gap-2 py-6 md:py-8 md:pb-6 lg:py-12 lg:pb-10">
        <CtaHeader />
        <Cta />
        <ServicesContent />
      </section>
    </main>
  )
}
