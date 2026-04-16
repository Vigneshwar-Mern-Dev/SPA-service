import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  metadataBase: new URL("https://spacraneservice.in"),
  title: "SPA Crane Service | Premium Lifting in Erode & Salem",
  description: "Arigarasudhan's SPA Crane Service provides top-tier heavy lifting solutions across Erode and Salem, Tamil Nadu. Reliable mobile and tower cranes.",
  keywords: "SPA Crane Service, Arigarasudhan, Crane Rental Erode, Crane Rental Salem, Heavy Lifting Tamil Nadu, Industrial Lifting Erode",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png"
  },
  openGraph: {
    title: "SPA Crane Service | Premium Lifting in Erode & Salem",
    description: "Arigarasudhan's SPA Crane Service provides top-tier heavy lifting solutions across Erode and Salem.",
    url: "https://spacraneservice.in",
    siteName: "SPA Crane Service",
    images: [
      {
        url: "/images/hero1.webp", // Replace with a hosted URL if absolute is necessary
        width: 1200,
        height: 630,
        alt: "SPA Crane Service In Action",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPA Crane Service | Premium Lifting in Erode & Salem",
    description: "Top-tier heavy lifting solutions across Erode and Salem, Tamil Nadu.",
    images: ["/images/hero1.webp"],
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SPA Crane Service",
    "image": "https://spacraneservice.in/logo.png",
    "telephone": "+919787296480",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Erode",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "areaServed": ["Erode", "Salem"]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${orbitron.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
