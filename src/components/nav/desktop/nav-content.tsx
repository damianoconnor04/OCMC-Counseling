import Link from 'next/link';
import {
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import NavItem from './nav-item';
import Logo from '@/components/assets/logo';

export const AboutNavContent = (
	<>
		<Link href="/about" tabIndex={-1}>
			<NavigationMenuTrigger className="focus-visible:yellow-ring px-2 focus-visible:outline-none">
				About
			</NavigationMenuTrigger>
		</Link>
		<NavigationMenuContent>
			<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
				<NavItem href="/about#approach" title="My Approach to Therapy">
					My approach is pragmatic, focused on the here and now, and building toward the future.
				</NavItem>
				<NavItem href="/about#expectations" title="What to Expect in Therapy Sessions">
					As we work together, you will always have some small step in your goal to focus on between sessions; perhaps tracking thoughts and feelings, or trying some new coping skill.
				</NavItem>
				<NavItem href="/about#experience" title="Training &amp; Experience">
					I have a Master’s Degree in Counseling Psychology, and am licensed to practice psychotherapy in Pennsylvania. I practice Humanistic, Solution Focused, and Client-Centered Counseling.
				</NavItem>
			</ul>
		</NavigationMenuContent>
	</>
)

export const ServicesNavContent = (
	<>
		<Link href="/services" tabIndex={-1}>
			<NavigationMenuTrigger className="focus-visible:yellow-ring px-2 focus-visible:outline-none">
				Services
			</NavigationMenuTrigger>
		</Link>
		<NavigationMenuContent>
			<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
				<li className="row-span-3">
					<NavigationMenuLink asChild>
						<Link
							className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
							href="/services"
						>
							<Logo size="small" />
							<div className="mb-1 mt-4 text-lg font-medium">
								OCMC Counseling
							</div>
							<p className="text-sm leading-tight text-muted-foreground">
								Providing therapy by telehealth since 2020
							</p>
						</Link>
					</NavigationMenuLink>
				</li>
				<NavItem href="/services#transitions" title="Life Transitions">
					Have you changed careers, reprioritized your work/life balance, or retired?
				</NavItem>
				<NavItem href="/services#caregivers" title="Care Givers &amp; Recipients">
					Whether you are caring for a loved one or find yourself needing care, the stress of changed roles can be overwhelming.
				</NavItem>
				<NavItem href="/services#depression" title="Depression &amp; Anxiety">
					If your mood is getting in the way of you living your life the way you want to, therapy can help.
				</NavItem>
			</ul>
		</NavigationMenuContent>
	</>
)
