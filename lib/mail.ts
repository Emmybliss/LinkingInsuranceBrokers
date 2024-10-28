import ContactFormResponse from "@/emails/ContactFormResponseTemplate";
import TestEmail, {
  NewSubscriberEmail,
} from "@/emails/NewSubscriberEmailTemplate";
import QuoteFormResponse from "@/emails/QuoteFormResponseTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);
const defaultFromEmail = process.env.FROM_EMAIL as string;
const website = "www.linkinginsurancebrokers.com";

// export const sendQuoteForm = async (
//   name: string,
//   email: string,
//   phone: string,
//   company: string,
//   product: string,
//   cover_period: string,
//   message: string,

//   fromEmail = defaultFromEmail // fallback to the default if not provided
// ) => {
//   try {
//     await resend.emails.send({
//       from: fromEmail,
//       to: [email],
//       subject: "Quote Request From Website",
//       react: QuoteFormResponse({
//         name,
//         email,
//         phone,
//         company,
//         product,
//         cover_period,
//         message,
//       }),
//     });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw new Error("Failed to send email. Please try again later.");
//   }
// };

export const sendQuoteForm = async (
  name: string,
  phone: string,
  email: string,
  company: string,
  product: string,
  cover_period: string,
  message: string,

  fromEmail = defaultFromEmail // fallback to the default if not provided
) => {
  try {
    await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Quote Request Confirmation",
      react: QuoteFormResponse({
        name,
        phone,
        email,
        company,
        product,
        cover_period,
        message,
      }),
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email. Please try again later.");
  }
};

export const sendContactForm = async (
  email: string,
  phone: string,
  subject: string,
  message: string,
  name: string,
  fromEmail = defaultFromEmail // fallback to the default if not provided
) => {
  try {
    await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: subject,
      react: ContactFormResponse({ email, name, subject, message, phone }),
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email. Please try again later.");
  }
};

export const sendNewsletterForm = async (
  email: string,
  fromEmail = defaultFromEmail // fallback to the default if not provided
) => {
  try {
    await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Newsletter Subscription from Website",
      react: NewSubscriberEmail({ email }),
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email. Please try again later.");
  }
};
