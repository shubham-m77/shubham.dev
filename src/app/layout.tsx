import type { Metadata } from "next";
import "./globals.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import { Fira_Code, Urbanist } from 'next/font/google';
import { twMerge } from "tailwind-merge";
import { ContactBoxProvider } from "@/context/ContactContext";
import { Toaster } from "react-hot-toast";

const firacode = Fira_Code({ subsets: ["latin"], variable: '--font-serif' });
const urbanistFont = Urbanist({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Shubham M - Full Stack Developer",
  description: "Full Stack Website Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={twMerge(urbanistFont.variable, firacode.variable, "min-h-screen font-sans bg-gradient-to-b from-primary to-gray-900 text-white antialiased")}>
        <ContactBoxProvider>
          <Toaster />
          {children}
        </ContactBoxProvider>
      </body>
    </html>
  );
}
