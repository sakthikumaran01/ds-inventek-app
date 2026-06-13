import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "DS Inventek — Robotics Education for the Next Generation",
  description: "India's leading robotics education company. World champion team. Courses, lab setups, and experience zones.",
  keywords: "robotics, education, STEM, engineering, courses, India",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BackgroundOrbs />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}

