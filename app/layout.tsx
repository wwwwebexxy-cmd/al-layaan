import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Preloader from "../components/Preloader";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AL LAYAAN | Aluminium & Glass Solutions",
  description: "Premium aluminium and glass solutions for homes and businesses, from shop fronts and partitions to doors, windows, kitchens, and maintenance.",
  icons: {
    icon: "/al-layaan-logo.webp",
    shortcut: "/al-layaan-logo.webp",
    apple: "/al-layaan-logo.webp",
  },
  keywords: ["AL LAYAAN", "Aluminium and Glass", "Shop Fronts", "Glass Partitions", "Automatic Glass Doors", "UAE", "Aluminium Kitchens", "Window Maintenance"],
  openGraph: {
    title: "AL LAYAAN | Aluminium & Glass Solutions",
    description: "Premium Aluminium & Glass Solutions for Homes & Businesses.",
    url: "/",
    siteName: "AL LAYAAN Aluminium and Glass",
    images: [
      {
        url: "/al-layaan-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "AL LAYAAN Aluminium and Glass logo",
      }
    ],
    locale: "en_AE",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "geo.region": "AE",
    "geo.placename": "United Arab Emirates",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "AL LAYAAN Aluminium and Glass",
  "description": "Premium aluminium and glass solutions for homes and businesses.",
  "image": `${siteUrl}/al-layaan-logo.jpeg`,
  "@id": siteUrl,
  "url": siteUrl,
  "areaServed": "United Arab Emirates",
  "serviceType": "Aluminium and glass solutions"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Preloader />
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <ScrollToTop />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
