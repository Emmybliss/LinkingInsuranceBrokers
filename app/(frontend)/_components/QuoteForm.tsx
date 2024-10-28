"use client";
import React, { useState, useTransition } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { QuoteFormSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { QuoteFormAction } from "@/actions/QuoteFormAction";
import { toast, Bounce } from "react-toastify";
import { LoaderIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { productsData, periodData } from "@/lib/constants"; // Ensure periodData is imported
interface QuoteFormProps {
  setOpen: (open: boolean) => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ setOpen }) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof QuoteFormSchema>>({
    resolver: zodResolver(QuoteFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      product: "",
      cover_period: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof QuoteFormSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      QuoteFormAction(values).then((data) => {
        console.log(values);
        setError(data.error);
        setSuccess(data.success);
        if (data.success) {
          // Show success toast
          toast("Quote Request Sent 👍!", {
            position: "top-right",
            type: "success",
            autoClose: 5000,
            theme: "light",
            transition: Bounce,
          });
          // Reset form fields on success
          form.reset({
            name: "",
            phone: "",
            email: "",
            company: "",
            product: "", // Reset Select field
            cover_period: "", // Reset Select field
            message: "",
          });

          // Close modal
          setOpen(false);
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 px-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Personal/Corporate Name:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your personal or business name"
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
              <FormLabel>Phone number:</FormLabel>
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
              <FormLabel>Email:</FormLabel>
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
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your company"
                  {...field}
                  type="text"
                  disabled={isPending}
                  id="company"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="product"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Interested Policy:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a policy" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {productsData.map((product) => (
                    <SelectItem key={product.title} value={product.title}>
                      <span className="capitalize">{product.title}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cover_period"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Period:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a cover period" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {periodData.map((period) => (
                    <SelectItem key={period.time} value={period.time}>
                      {period.time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message:</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Additional details(specific cover needed)."
                  id="message"
                  className="h-20 w-full border bg-transparent p-4"
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
            {isPending ? <LoaderIcon className="animate-spin" /> : "Submit"}
          </div>
        </button>
      </form>
    </Form>
  );
};

export default QuoteForm;
