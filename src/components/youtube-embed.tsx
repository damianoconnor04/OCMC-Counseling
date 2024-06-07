import { cn } from "@/lib/utils";
import React from "react";

const YoutubeEmbed = ({ embedId, className }: { embedId: string, className?: string }) => (
	<div className={className}>
		<iframe
			className={cn("mx-auto w-full", className)}
			src={embedId}
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerPolicy="strict-origin-when-cross-origin"
			allowFullScreen
		/>
	</div>
);

export default YoutubeEmbed;
