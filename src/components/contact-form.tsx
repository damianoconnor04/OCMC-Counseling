"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import React from "react"
import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const emailSchema = z.object({
	name: z.string().min(1, "Please enter your name").max(255, "Please shorten your name"),
	email: z.string().min(1, "Please enter an email address").email("This email address is invalid"),
	message: z.string().min(1, "Please enter a message"),
})

export default function ContactForm() {
	const form = useForm<z.infer<typeof emailSchema>>({
		resolver: zodResolver(emailSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	})

    const [loading, setLoading] = React.useState(false);

	async function onSubmit(values: z.infer<typeof emailSchema>) {
        alert("Sorry, this form is currently disabled. Please email bianca@biancaocmccounseling.com");
	}


	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-3 md:max-w-lg">
				<FormField
                    disabled={loading}
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input required autoComplete="name" placeholder="What should we call you?" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
                    disabled={loading}
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input required autoComplete="email" placeholder="Where can we reach you?" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
                    disabled={loading}
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea required placeholder="How can we help?" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button disabled={loading} className="ml-auto w-full md:w-fit" type="submit">Submit</Button>
			</form>
		</Form>
	)
}

