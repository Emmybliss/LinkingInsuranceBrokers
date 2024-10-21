import { NewVerificationForm } from "@/app/_components/auth/new-verification-form";
import React from "react";

const NewVerificationPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-56 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <NewVerificationForm />
    </div>
  );
};

export default NewVerificationPage;
