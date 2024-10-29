"use client";
import React, { useState, useTransition } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContactFormAction } from "@/actions/ContactFormAction";
import { toast, Bounce } from "react-toastify";
import { LoaderIcon } from "lucide-react";

import { productsData, periodData } from "@/lib/constants"; // Ensure periodData is imported
interface ContactFormProps {
  setOpen?: (open: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ setOpen }) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const handleClose = () => {
    if (setOpen) {
      setOpen(false);
    }
  };
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ContactFormSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      ContactFormAction(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
        if (data.success) {
          // Show success toast
          toast("Message Sent 👍!", {
            position: "top-right",
            type: "success",
            autoClose: 5000,
            theme: "light",
            transition: Bounce,
          });
          // Reset form fields on success
          form.reset();
          // Close modal
          handleClose();
        } else {
          toast("Submission Failed!", {
            position: "top-right",
            type: "error",
            autoClose: 5000,
            theme: "light",
            transition: Bounce,
          });
        }
      });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  {...field}
                  type="text"
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your phone number"
                  {...field}
                  type="text"
                  disabled={isPending}
                  id="phone"
                />
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
                <Input
                  placeholder="Your email"
                  {...field}
                  type="email"
                  disabled={isPending}
                  id="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="Subject of your message "
                  {...field}
                  type="text"
                  disabled={isPending}
                  id="subject"
                />
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
                <Textarea
                  placeholder="Type your message here."
                  id="message"
                  className="h-40 w-full border bg-transparent p-4"
                  {...field}
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="relative mt-4 w-full p-1 rounded-lg overflow-hidden bg-gradient-to-r from-orange-500 to-blue-500"
        >
          <div className="px-8 py-2 flex justify-center items-center bg-black rounded-md text-white group transition duration-200 hover:bg-transparent">
            {isPending ? <LoaderIcon className="animate-spin" /> : "Send"}
          </div>
        </button>
      </form>
    </Form>
  );
};

export default ContactForm;
