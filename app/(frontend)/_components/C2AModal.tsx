"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TfiWrite } from "react-icons/tfi";

export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-black dark:bg-white dark:text-black text-white flex justify-center group relative overflow-hidden">
            {/* Icon and text that moves to the right on hover */}
            <span className="flex gap-2 group-hover:translate-x-32 transition-transform duration-500 ease-in-out">
              <TfiWrite className="w-5 h-5" />
              Write Us
            </span>

            {/* Emoji that appears from the left on hover */}
            <div className="-translate-x-32 group-hover:translate-x-0 flex items-center justify-center absolute inset-0 transition-transform duration-500 ease-in-out z-20">
              <TfiWrite className="w-5 h-5 text-orange-500" />
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DrawerTitle>Compose Message</DrawerTitle>
            <DrawerDescription>
              Write us a message or comment and we will respond to you as soon
              as possible.
            </DrawerDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="bg-black dark:bg-white dark:text-black text-white flex justify-center group relative overflow-hidden">
          {/* Icon and text that moves to the right on hover */}
          <span className="flex gap-2 group-hover:translate-x-32 transition-transform duration-500 ease-in-out">
            <TfiWrite className="w-5 h-5" />
            Write Us
          </span>

          {/* Emoji that appears from the left on hover */}
          <div className="-translate-x-32 group-hover:translate-x-0 flex items-center justify-center absolute inset-0 transition-transform duration-500 ease-in-out z-20">
            <TfiWrite className="w-5 h-5 text-orange-500" />
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Compose Message</DrawerTitle>
          <DrawerDescription>
            Write us a message or comment and we will respond to you as soon as
            possible.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="username">Full Name:</Label>
        <Input id="name" placeholder="John doe" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="johndoe@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Subject</Label>
        <Input id="subject" placeholder="Subject" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="username">Message/Comment:</Label>
        <Textarea id="m" placeholder="Type your message here." />
      </div>
      <Button type="submit">Send</Button>
    </form>
  );
}
