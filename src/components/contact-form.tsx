"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

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
import { Checkbox } from "@/components/ui/checkbox"

const formSchema = z.object({
    name: z.string().min(1, "Please enter your name").max(255, "Please shorten your name"),
    email: z.string().min(1, "Please enter an email address").email("This email address is invalid"),
    message: z.string().min(1, "Please enter a message"),
    newsletter: z.boolean()
})

export default function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
            newsletter: false,
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-3 md:max-w-lg">
                <FormField
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
                <FormField
                    control={form.control}
                    name="newsletter"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-2 space-y-0 py-2">
                            <FormControl>
                                <Checkbox
                                    aria-label="Checkbox to subscribe to Bianca's newsletter"
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    id="newsletter"
                                />
                            </FormControl>
                            <label htmlFor="newsletter" className="text-xs peer-disabled:cursor-not-allowed peer-disabled:opacity-70 md:text-sm md:leading-4">
                                Subscribe to my newsletter
                            </label>
                        </FormItem>
                    )}
                />
                <Button className="ml-auto w-full md:w-fit" type="submit">Submit</Button>
            </form>
        </Form>
    )
}

