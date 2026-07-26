import AboutPageClient from "@/components/clients/AboutPageClient";
import content from "@/data/content.json";

export const metadata = {
  title: content.meta.about.title,
  description: content.meta.about.description,
  keywords: content.meta.about.keywords,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient content={content} />;
}
