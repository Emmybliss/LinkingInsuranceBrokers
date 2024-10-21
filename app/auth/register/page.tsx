import { RegisterForm } from "@/app/_components/auth/register-form";

import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-800 py-40">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
