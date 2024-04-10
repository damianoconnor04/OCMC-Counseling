import React from 'react'
import { items } from './_content'
import { Paragraph, ParagraphContent, ParagraphHeader, ParagraphSeparator } from '@/components/paragraph'

export default function AboutContent() {
    return items.map((item, idx) => (
        <Paragraph key={idx} id={item.id}>
            <ParagraphHeader title={item.title} />
            <ParagraphSeparator />
            <ParagraphContent content={item.description} />
        </Paragraph>
    ))
}
