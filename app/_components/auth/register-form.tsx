"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { CardWrapper } from "./card-wrapper";

import { useState, useTransition } from "react";
import { LoaderIcon } from "lucide-react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { Button } from "@/components/ui/button";
import { RegisterAction } from "@/actions/registerAction";
import Swal from "sweetalert2";
import { FaUserPen } from "react-icons/fa6";

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  // 1. Define your form hook.
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof RegisterSchema>) {
    setError("");
    setSuccess("");
    startTransition(() => {
      RegisterAction(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
        if (data.success) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: data.success,
            showConfirmButton: false,
            toast: true,
            timer: 3000,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: data.error,
            showConfirmButton: false,
            toast: true,
            timer: 3000,
          });
        }
      });
    });
  }

  return (
    <CardWrapper
      headerIcon={FaUserPen} // Pass the icon component
      headerTitle="Sign up"
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
      showSocial={true}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name..."
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
                  <FormLabel>Phone Number:</FormLabel>
                  <FormControl>
                    <PhoneInput
                      country={"ng"} // Set default country to Nigeria
                      value={field.value}
                      onChange={(phone) => field.onChange(phone)}
                      disabled={isPending}
                      enableSearch={true}
                      countryCodeEditable={false}
                      inputStyle={{ width: "100%" }}
                      inputProps={{
                        name: field.name,
                        required: true,
                        autoFocus: true,
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your address..."
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email address..."
                      {...field}
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="******"
                      {...field}
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? <LoaderIcon className="animate-spin" /> : "Register"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
