import { LoginForm } from "@/app/_components/auth/login-form";
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-32 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
