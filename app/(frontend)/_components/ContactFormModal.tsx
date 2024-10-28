"use client";
import * as React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
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

import { TfiWrite } from "react-icons/tfi";
import ContactForm from "./ContactForm";

export function ContactFormModal() {
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
        <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DrawerTitle className="text-center">Compose Message</DrawerTitle>
            <DrawerDescription className="text-left">
              Write us a message or comment and we will respond to you as soon
              as possible.
            </DrawerDescription>
          </DialogHeader>

          <ContactForm setOpen={setOpen} />
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
      <DrawerContent className="max-h-[90vh] overflow-y-auto">
        <DrawerHeader>
          <DrawerTitle className="text-center">Compose Message</DrawerTitle>
          <DrawerDescription className="text-left">
            Write us a message or comment and we will respond to you as soon as
            possible.
          </DrawerDescription>
        </DrawerHeader>
        <ContactForm setOpen={setOpen} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
