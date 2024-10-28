import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required!",
  }),
  phone: z.string().min(10, {
    message: "Minimum of 10 digits required!",
  }),
  email: z.string().email({
    message: "Email address is required!",
  }),
  subject: z.string().min(1, {
    message: "Subject is required!",
  }),
  message: z.string().min(1, {
    message: "Message is required!",
  }),
});

export const QuoteFormSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required!",
  }),

  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits long!" }),

  email: z.string().email({ message: "A valid email address is required!" }),

  company: z.string().min(1, {
    message: "Company is required!",
  }),

  product: z.string().min(1, { message: "Policy selection is required!" }),

  cover_period: z.string().min(1, { message: "Cover period is required!" }),

  message: z.string().min(1, { message: "Message is required!" }),
});

export const NewsletterFormSchema = z.object({
  email: z.string().email({
    message: "Email address is required!",
  }),
});
