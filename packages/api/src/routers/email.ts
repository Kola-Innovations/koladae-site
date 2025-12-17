import { publicProcedure } from "../index";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const emailRouter = {
  contact: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        email: z.string().email(),
        subject: z.string().min(1),
        message: z.string().min(1),
      })
    )
    .handler(async ({ input }) => {
      const subjectMap: Record<string, string> = {
        general: "General Inquiry",
        booking: "Booking",
        press: "Press",
        collaboration: "Collaboration",
      };

      const { error } = await resend.emails.send({
        from: "KOLADAE Website <fans@koladae.com>",
        to: "management@koladae.com",
        subject: `[${subjectMap[input.subject] || input.subject}] Contact from ${input.name}`,
        replyTo: input.email,
        text: `Name: ${input.name}\nEmail: ${input.email}\nSubject: ${subjectMap[input.subject] || input.subject}\n\nMessage:\n${input.message}`,
      });

      if (error) {
        throw new Error(`Failed to send contact email: ${error.message}`);
      }

      return { success: true };
    }),

  subscribe: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .handler(async ({ input }) => {
      // Check if contact already exists
      const { data: existingContact } = await resend.contacts.get({
        email: input.email,
      });

      if (existingContact) {
        return { success: true, alreadySubscribed: true };
      }

      // Wait 1 second to respect rate limit (2 API calls/second)
      await sleep(1000);

      // Create contact in Resend
      const { error: contactError } = await resend.contacts.create({
        email: input.email,
        unsubscribed: false,
      });

      if (contactError) {
        throw new Error(`Failed to create contact: ${contactError.message}`);
      }

      // Wait 1 second before sending email
      await sleep(1000);

      // Send welcome email with template
      const { error: emailError } = await resend.emails.send({
        from: "KOLADAE <fans@koladae.com>",
        to: input.email,
        // subject: "Welcome to KOLADAE",
        template: {
          id: "daea36fa-d36f-438c-8c6f-a6effe152914",
          variables: { name: "there" },
        },
      });

      if (emailError) {
        throw new Error(`Failed to send email: ${emailError.message}`);
      }

      return { success: true, alreadySubscribed: false };
    }),
};
