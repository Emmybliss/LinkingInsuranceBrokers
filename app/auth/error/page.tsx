import ErrorCard from "@/app/_components/auth/error-card";
import React from "react";

const AuthErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-32 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <ErrorCard />;
    </div>
  );
};

export default AuthErrorPage;
