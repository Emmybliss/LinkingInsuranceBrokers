"use server";

import * as z from "zod";
import { sendQuoteForm } from "@/lib/mail";
import { QuoteFormSchema } from "@/schemas";

export const QuoteFormAction = async (
  values: z.infer<typeof QuoteFormSchema>
) => {
  // Validate fields using the schema
  const validatedFields = QuoteFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, phone, email, company, product, cover_period, message } =
    validatedFields.data;

  try {
    await sendQuoteForm(
      name,
      phone,
      email,
      company,
      product,
      cover_period,
      message
    );
    return { success: "Request sent successfully!" };
  } catch (error) {
    console.error("Error sending Quote form:", error);
    return { error: "Failed to send message. Please try again later." };
  }
};
