import React from "react";

import Footer from "../(frontend)/_components/Footer";
import Header from "../(frontend)/_components/Header";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AuthLayout;
