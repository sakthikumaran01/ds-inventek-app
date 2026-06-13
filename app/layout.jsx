import "./globals.css";
import { Inter, Orbitron, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

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

export const metadata = {
  title: "DS Inventek — Robotics & AI Education | World Champion Team",
  description: "India's leading robotics education company founded by World Champions. Providing hands-on STEM robotics courses, school/college lab setups, and interactive experience zones.",
  keywords: "robotics education, artificial intelligence training, STEM robotics school, next-generation AI robotics, school robotics lab setup, CBSE robotics curriculum, World Champion robotics team, robotics Chennai, robotics Pondicherry, Bitva Robotov, Games of the Future champion, STEM India",
  authors: [{ name: "DS Inventek Team" }],
  creator: "DS Inventek",
  publisher: "DS Inventek",
  openGraph: {
    title: "DS Inventek — Robotics & AI Education | World Champion Team",
    description: "India's leading robotics education company founded by World Champions. Providing hands-on STEM robotics courses, school/college lab setups, and interactive experience zones.",
    url: "http://localhost:3002",
    siteName: "DS Inventek",
    locale: "en_US",
    type: "website",
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
      </body>
    </html>
  );
}

