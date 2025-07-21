import type { Metadata } from "next";
import "./globals.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import { Fira_Code, Urbanist, Kanit } from 'next/font/google';
import { twMerge } from "tailwind-merge";
import { ContactBoxProvider } from "@/context/ContactContext";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import { LenisScroll } from "@/components/LenisScroll";

const firacode = Fira_Code({ subsets: ["latin"], variable: '--font-mono' });
const kanit = Kanit({ subsets: ["latin"], variable: '--font-serif', weight: "400" });
const urbanistFont = Urbanist({ subsets: ["latin"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Shubham M | Full Stack Developer",
  description: "A passionate full-stack MERN Developer crafting modern, scalable, and responsive web applications.",
  icons: {
    icon: "/web_logo.svg", // or "/logo.png" or any image path in public/
  },
  keywords: [
    "Shubham Mandal",
    "MERN Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Web Developer Portfolio",
    "MongoDB",
    "Express.js",
    "Node.js",
    "Full Stack Website Developer"
  ],
  authors: [{ name: "Shubham Mandal", url: "https://shubham-devloper.vercel.app" }],
  creator: "Shubham Mandal",
  publisher: "Shubham Mandal",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: "Shubham M | MERN Stack Developer Portfolio",
    description: "Explore modern full-stack web apps, built using MongoDB, Express, React, and Node.js.",
    url: "https://shubham-developer.vercel.app",
    siteName: "Shubham Mandal",
    images: [
      {
        url: "https://shubham-developer.vercel.app/dev_logo.svg",
        width: 1200,
        height: 630,
        alt: "Shubham Mandal Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://shubham-devloper.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <html lang="en" suppressHydrationWarning>
        {/* ✅ Remove saved theme cookie before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            try {
              localStorage.removeItem('theme');
            } catch (e) {}
          `,
          }}
        />
        <body className={twMerge(urbanistFont.variable, firacode.variable, kanit.variable, 'min-h-screen font-sans antialiased bg-gradient-to-b from-secondary to-gray-100 text-white dark:text-white dark:from-gray-900 dark:to-[#0c0c24]')}>
          <ContactBoxProvider>
            <Toaster />
            <LenisScroll>
              {children}
            </LenisScroll>
          </ContactBoxProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
