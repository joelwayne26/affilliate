import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Joel Affiliates | Health, Pets & Spiritual Products on Digistore24",
  description:
    "Honest reviews and exclusive deals on health & fitness, pet care, and spiritual growth products. All from Digistore24 with commissions up to 90%. Pinterest-optimized.",
  keywords: [
    "affiliate marketing",
    "Digistore24",
    "health supplements reviews",
    "pet care products",
    "spiritual manifestation",
    "Pinterest affiliate marketing",
    "high commission products",
    "PrimeBiome",
    "Kerassentials",
    "Soulmate Sketch",
    "brain training dogs",
    "manifestation products",
    "weight loss supplements",
    "make money online",
  ],
  authors: [{ name: "Joel Ssengendo" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Joel Affiliates | Health, Pets & Spiritual Products",
    description:
      "Honest reviews across health, pets, and spiritual niches. Digistore24 products with up to 90% commissions. Pinterest-optimized.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GHELWJELE2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GHELWJELE2');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased bg-[#fafaf8] text-[#1a2744]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
