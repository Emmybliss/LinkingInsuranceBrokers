"use server";

import * as z from "zod";
import { ContactFormSchema } from "@/schemas";
import { sendContactForm } from "@/lib/mail";

export const ContactFormAction = async (
  values: z.infer<typeof ContactFormSchema>
) => {
  // Validate fields using the schema
  const validatedFields = ContactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, phone, email, subject, message } = validatedFields.data;

  try {
    await sendContactForm(email, phone, subject, message, name);
    return { success: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending contact form:", error);
    return { error: "Failed to send message. Please try again later." };
  }
};
