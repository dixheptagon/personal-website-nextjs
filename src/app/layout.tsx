import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import MobileThemeControler from "@/features/navbar/mobile-theme-controler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forentino Haryanto | Software Engineer",
  description: "Your Digital Vision, Perfectly Realized.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark:text-slate-100" bg-white text-gray-800 antialiased dark:bg-slate-950`}
      >
        <ThemeProvider enableSystem defaultTheme="system">
          <ToastContainer />
          <Navbar />
          {children}
          <Footer />
          <MobileThemeControler />
        </ThemeProvider>
      </body>
    </html>
  );
}
