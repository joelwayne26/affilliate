import type { Metadata } from "next";
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
  title: "Joel Affiliates | Top Products Across 5 Niches & 4 Affiliate Programs",
  description:
    "Honest reviews and exclusive deals on home & living, health & wellness, money & finance, e-commerce, and digital tools. Products from Amazon, ShareASale, ClickBank, and Shopify — clearly labeled with commission rates.",
  keywords: [
    "affiliate marketing",
    "best products 2026",
    "home gadgets reviews",
    "health supplements reviews",
    "finance tools reviews",
    "Shopify affiliate",
    "Amazon Associates",
    "ShareASale",
    "ClickBank",
    "commission rates",
    "product reviews",
    "side hustle tools",
    "make money online",
    "digital marketing tools",
  ],
  authors: [{ name: "Joel Ssengendo" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Joel Affiliates | Top Products Across 5 Niches",
    description:
      "Honest reviews across home, health, finance, e-commerce, and digital tools. 4 affiliate programs. Real commissions.",
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
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased bg-[#fafaf8] text-[#1a2744]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
