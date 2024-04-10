import { AboutNavContent, ServicesNavContent } from './desktop/nav-content';
import { IconType } from 'react-icons/lib';
import { CiBoxList, CiHome, CiMail } from 'react-icons/ci';
import { PiQuestionLight } from 'react-icons/pi';

export type Page = {
	icon: IconType;
	label: string;
	href: string;
	type: "link" | "trigger";
	content?: React.JSX.Element;
}
export const pages: Page[] = [
	{ label: "Home", icon: CiHome, href: "/", type: "link" },
	{ label: "Services", icon: CiBoxList, href: "/services", type: "trigger", content: ServicesNavContent },
	{ label: "About", icon: PiQuestionLight, href: "/about", type: "trigger", content: AboutNavContent },
	{ label: "Contact", icon: CiMail, href: "/contact", type: "link", }
]

export const resources = [
	{ label: "988 Suicide and Crisis Lifeline", href: "tel:988" },
	{ label: "Montgomery County PA Mobile Crisis", href: "tel:855-634-4673" },
	{ label: "PA Support and Referral Helpline", href: "tel:855-284-2494", },
	{ label: "PA Elder Abuse Hotline", href: "tel:800-490-8505" },
	{ label: "National Trans Lifeline", href: "tel:877-565-8860" }
]
