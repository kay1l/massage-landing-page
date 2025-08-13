import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Shaisha's Leisure Hub | Massage",
  description: "Relax,Rejuvinate,Restore in your own home.",
  icons: {
    icon: "/images/final.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
       <head>
        {/* Explicit favicon links */}
        <link rel="icon" href="/images/final.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/images/final.png?v=2" />
      </head>
      <body className="font-sans">{children}
      <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
