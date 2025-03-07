"use client";  // This marks the file as a client component

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ServiceWorker from "../components/ServiceWorker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ServiceWorker /> {/* Register the service worker */}
        {children}
      </body>
    </html>
  );
}
