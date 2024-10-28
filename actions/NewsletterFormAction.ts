"use server";

import * as z from "zod";
import { NewsletterFormSchema } from "@/schemas";
import { sendNewsletterForm } from "@/lib/mail";

export const NewsletterFormAction = async (
  values: z.infer<typeof NewsletterFormSchema>
) => {
  // Validate fields using the schema
  const validatedFields = NewsletterFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email } = validatedFields.data;

  try {
    await sendNewsletterForm(email);
    return { success: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending Newsletter form:", error);
    return { error: "Failed to send message. Please try again later." };
  }
};
