import "./globals.css";
import { Inter, Fraunces } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/layout/ScrollReveal";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import BackToTop from "@/components/layout/BackToTop";
import { SITE_URL } from "@/lib/utils";
import { getOrganizationJsonLd } from "@/lib/structuredData";
import content from "@/data/content.json";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-serif",
  display: "swap",
});

const siteUrl = SITE_URL;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "DS Inventek — Robotics & AI Education | World Champion Team",
  description: "India's leading robotics education company founded by World Champions. Providing hands-on STEM robotics courses, school/college lab setups, and interactive experience zones.",
  keywords: "robotics education, artificial intelligence training, STEM robotics school, next-generation AI robotics, school robotics lab setup, CBSE robotics curriculum, World Champion robotics team, robotics Chennai, robotics Pondicherry, Bitva Robotov, Games of the Future champion, STEM India",
  authors: [{ name: "DS Inventek Team" }],
  creator: "DS Inventek",
  publisher: "DS Inventek",
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
  const organizationJsonLd = getOrganizationJsonLd(content.company);

  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ScrollReveal />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </body >
    </html >
  );
}


