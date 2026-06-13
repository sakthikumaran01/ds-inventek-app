import "./globals.css";
import { Inter, Orbitron, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ds-inventek-i5u5etfv0-sakthisk.vercel.app';
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "DS Inventek — Robotics & AI Education | World Champion Team",
  description: "India's leading robotics education company founded by World Champions. Providing hands-on STEM robotics courses, school/college lab setups, and interactive experience zones.",
  keywords: "robotics education, artificial intelligence training, STEM robotics school, next-generation AI robotics, school robotics lab setup, CBSE robotics curriculum, World Champion robotics team, robotics Chennai, robotics Pondicherry, Bitva Robotov, Games of the Future champion, STEM India",
  authors: [{ name: "DS Inventek Team" }],
  creator: "DS Inventek",
  publisher: "DS Inventek",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "DS Inventek — Robotics & AI Education | World Champion Team",
    description: "India's leading robotics education company founded by World Champions. Providing hands-on STEM robotics courses, school/college lab setups, and interactive experience zones.",
    url: siteUrl,
    siteName: "DS Inventek",
    locale: "en_US",
    type: "website",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DS Inventek — Robotics Education' }]
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${mono.variable}`}>
      <body>
        <BackgroundOrbs />
        <ScrollReveal />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
        <CustomCursor />
        <SpeedInsights />
      </body>
    </html>
  );
}


