import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmokeEffect from "@/components/SmokeEffect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oncall IT Support | Managed IT & Cybersecurity Christchurch",
  description: "Reliable IT support services in Christchurch. Specialized in Managed IT, Cybersecurity, Cloud Solutions, and Business Tech Support for local enterprises.",
  keywords: ["IT Support Christchurch", "Managed IT Services NZ", "Cybersecurity Christchurch", "Cloud Computing Christchurch", "Oncall Support"],
  authors: [{ name: "Oncall IT Support" }],
  openGraph: {
    title: "Oncall IT Support | Expert IT Solutions in Christchurch",
    description: "Empowering Christchurch businesses with proactive IT management and security.",
    type: "website",
    locale: "en_NZ",
    url: "https://oncallsupport.co.nz",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <SmokeEffect />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
