"use client";
import React, { useState, useTransition } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewsletterFormSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { toast, Bounce } from "react-toastify";
import { LoaderIcon } from "lucide-react";

import { NewsletterFormAction } from "@/actions/NewsletterFormAction";
import { Button } from "@/components/ui/button";

const NewsletterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof NewsletterFormSchema>>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof NewsletterFormSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      NewsletterFormAction(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
        if (data.success) {
          // Show success toast
          toast("You're Subscribed👍", {
            position: "top-right",
            type: "success",
            autoClose: 5000,
            theme: "light",
            transition: Bounce,
          });
          // Reset form fields on success
          form.reset();
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        // className="md:flex md:flex-row md:justify-center md:items-center"
      >
        <div className="md:flex md:flex-row flex flex-col w-full md:w-auto justify-center items-center gap-1 z-[40]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Your email"
                    {...field}
                    type="email"
                    disabled={isPending}
                    id="email"
                    className="text-black"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="bg-orange-500 w-full md:w-auto dark:text-black hover:bg-white hover:text-orange-500 hover:outline hover:outline-orange-500">
            {isPending ? <LoaderIcon className="animate-spin" /> : "Subscribe"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewsletterForm;
