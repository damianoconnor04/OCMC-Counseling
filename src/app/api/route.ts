import { NextResponse } from "next/server";
import * as z from "zod";

const emailSchema = z.object({
	name: z.string().min(1, "Please enter your name").max(255, "Please shorten your name"),
	email: z.string().min(1, "Please enter an email address").email("This email address is invalid"),
	message: z.string().min(1, "Please enter a message"),
})

export async function POST(req: Request) {
	try {
		// validate
		const body = await req.json();
		const { name, email, message } = emailSchema.parse(body);

        console.log(name, email, message)
        return NextResponse.json({ message: "wooooo doggy" }, { status: 200 })
		} catch (error: any) {
		console.error('Error sending email', error);
		return NextResponse.json({ error: true, emailSent: false, message: error.message }, { status: 400 });
	}
}
