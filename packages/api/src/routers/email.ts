import { publicProcedure } from "../index";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const emailRouter = {
	subscribe: publicProcedure
		.input(z.object({ email: z.string().email() }))
		.handler(async ({ input }) => {
			const name = input.email.split("@")[0] || "there";

			// Create contact in Resend
			const { error: contactError } = await resend.contacts.create({
				email: input.email,
				unsubscribed: false,
			});

			if (contactError) {
				// If contact already exists, continue anyway
				if (!contactError.message?.includes("already exists")) {
					throw new Error(`Failed to create contact: ${contactError.message}`);
				}
			}

			// Send welcome email with template
			const { error: emailError } = await resend.emails.send({
				from: "KOLADAE <noreply@koladae.com>",
				to: input.email,
				subject: "Welcome to KOLADAE",
				template: {
					id: "daea36fa-d36f-438c-8c6f-a6effe152914",
					variables: { name },
				},
			});

			if (emailError) {
				throw new Error(`Failed to send email: ${emailError.message}`);
			}

			return { success: true };
		}),
};
