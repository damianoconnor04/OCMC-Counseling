import React from 'react'
import { services } from '../_content';
import ShareBtn from '@/components/share-btn';
import { Paragraph, ParagraphContent, ParagraphHeader, ParagraphSeparator } from '@/components/paragraph';

export default function ServicesContent() {
	return services.map((service, idx) => (
		<Paragraph key={idx} id={service.id}>
			<ParagraphHeader title={service.title}>
				<ShareBtn content={`/services#${service.id}`} title={service.title} />
			</ParagraphHeader>
			<ParagraphSeparator />
			<ParagraphContent content={service.description} />
		</Paragraph>
	))
}
