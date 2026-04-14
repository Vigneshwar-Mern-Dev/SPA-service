import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "SPA Crane Service | Premium Lifting in Erode & Salem",
  description: "Arigarasudhan's SPA Crane Service provides top-tier heavy lifting solutions across Erode and Salem, Tamil Nadu. Reliable mobile and tower cranes.",
  keywords: "SPA Crane Service, Arigarasudhan, Crane Rental Erode, Crane Rental Salem, Heavy Lifting Tamil Nadu, Industrial Lifting Erode",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
