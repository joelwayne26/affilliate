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
  title: "Joel Ssengendo | Digital Marketing Tools & Reviews",
  description:
    "Helping entrepreneurs find the best marketing tools. Honest reviews, comparisons & deals on email, SEO, social media, AI, and design tools for your business.",
  keywords: [
    "digital marketing tools",
    "marketing software reviews",
    "email marketing tools",
    "SEO tools",
    "AI marketing",
    "Canva",
    "Semrush",
    "Shopify",
    "HubSpot",
    "affiliate marketing",
    "SaaS reviews",
    "marketing tool comparisons",
  ],
  authors: [{ name: "Joel Ssengendo" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Joel Ssengendo | Digital Marketing Tools & Reviews",
    description:
      "Honest reviews & comparisons of the best digital marketing tools for entrepreneurs.",
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
