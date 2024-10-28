import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins font from Google
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./(frontend)/_components/Header";
import Footer from "./(frontend)/_components/Footer";
import StarsCanvas from "./_components/StarBackground";
import ProgressBarProviders from "./_components/ProgressBarProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Use Poppins from Google Fonts
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins", // Assign a CSS variable for the font
});

export const metadata: Metadata = {
  title: "Linking Insurance Brokers",
  description:
    "Providing peace of mind with tailored insurance solutions for individuals and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`} // Apply Poppins variable here
      >
        <ProgressBarProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <StarsCanvas />
            <ToastContainer />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </ProgressBarProviders>
      </body>
    </html>
  );
}
